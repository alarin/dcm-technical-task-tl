import os

from django.conf import settings
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import TestRunRequest, TestFilePath
from api.serializers import TestRunRequestSerializer, TestRunRequestItemSerializer, TestFilePathUploadSerializer
from api.tasks import execute_test_run_request
from api.usecases import get_assets


class TestRunRequestAPIView(ListCreateAPIView):
    serializer_class = TestRunRequestSerializer
    queryset = TestRunRequest.objects.all().order_by('-created_at')

    def perform_create(self, serializer):
        instance = serializer.save()
        execute_test_run_request.delay(instance.id)


class TestRunRequestItemAPIView(RetrieveAPIView):
    serializer_class = TestRunRequestItemSerializer
    queryset = TestRunRequest.objects.all()
    lookup_field = 'pk'


class AssetsAPIView(APIView):

    def get(self, request):
        return Response(status=status.HTTP_200_OK, data=get_assets())


class TestFilePathAPIView(CreateAPIView):
    serializer_class = TestFilePathUploadSerializer

    def perform_create(self, serializer):
        #FIXME py files only
        relative_path = os.path.join(
            serializer.validated_data['upload_dir'], serializer.validated_data['test_file'].name)
        absolute_path = os.path.join(settings.BASE_DIR, relative_path)

        #FIXME create validator for normal error response
        if os.path.exists(absolute_path):
            raise RuntimeError(f'File already exists {absolute_path}')
        with open(absolute_path, 'wb') as file:
            file.write(serializer.validated_data['test_file'].read())

        TestFilePath.objects.create(path=relative_path)
