from django.urls import path

from .views import TestRunRequestAPIView, TestRunRequestItemAPIView, AssetsAPIView, TestFilePathAPIView

urlpatterns = [
    path('assets', AssetsAPIView.as_view(), name='assets'),
    path('test-run', TestRunRequestAPIView.as_view(), name='test_run_req'),
    path('test-run/<pk>', TestRunRequestItemAPIView.as_view(), name='test_run_req_item'),
    path('test-file', TestFilePathAPIView.as_view(), name='test_file_path'),
]
