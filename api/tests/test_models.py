from django.core.cache import cache
from django.test import TestCase
from redis.exceptions import LockError

from api.models import TestFilePath, TestEnvironment, TestRunRequest


class TestTTestFilePath(TestCase):

    def setUp(self) -> None:
        self.path = TestFilePath.objects.create(path='test')

    def test__str__(self):
        self.assertEqual('test', str(self.path))


class TestTestEnvironment(TestCase):

    def setUp(self) -> None:
        self.env = TestEnvironment.objects.create(name='test_env')
        if self.env.is_busy():
            cache.delete(self.env.name)

    def test__str__(self):
        self.assertEqual('test_env', str(self.env))

    def test_is_busy_idle(self):
        self.assertFalse(self.env.is_busy())

    def test_is_busy_busy(self):
        self.env.lock()
        self.assertTrue(self.env.is_busy())
        self.env.unlock()

    def test_is_idle_idle(self):
        self.assertTrue(self.env.is_idle())

    def test_lock_busy(self):
        self.assertTrue(self.env.lock())
        self.assertFalse(self.env.lock())
        self.env.unlock()

    def test_unlock_idle(self):
        with self.assertRaises(LockError):
            self.env.unlock()


class TestTestRunRequest(TestCase):

    def setUp(self) -> None:
        self.env = TestEnvironment.objects.create(name='my_env')
        self.test_run_req = TestRunRequest.objects.create(requested_by='Ramadan', env=self.env)
        self.path1 = TestFilePath.objects.create(path='path1')
        self.path2 = TestFilePath.objects.create(path='path2')

    def test_get_command_no_path(self):
        self.assertEqual(
            ['pytest', '-v'],
            self.test_run_req.get_command()
        )

    def test_get_command_one_path(self):
        self.test_run_req.path.add(self.path1)
        self.assertEqual(
            ['pytest', '-v', 'path1'],
            self.test_run_req.get_command()
        )

    def test_get_command_multiple_paths(self):
        self.test_run_req.path.add(self.path1)
        self.test_run_req.path.add(self.path2)
        self.assertEqual(
            ['pytest', '-v', 'path1', 'path2'],
            self.test_run_req.get_command()
        )

    def test_mark_as_running(self):
        self.test_run_req.mark_as_running()
        self.assertEqual(TestRunRequest.StatusChoices.RUNNING.name, self.test_run_req.status)

    def test_mark_as_success(self):
        self.test_run_req.mark_as_success()
        self.assertEqual(TestRunRequest.StatusChoices.SUCCESS.name, self.test_run_req.status)

    def test_mark_as_failed(self):
        self.test_run_req.mark_as_failed()
        self.assertEqual(TestRunRequest.StatusChoices.FAILED.name, self.test_run_req.status)

    def test_mark_as_retrying(self):
        self.test_run_req.mark_as_retrying()
        self.assertEqual(TestRunRequest.StatusChoices.RETRYING.name, self.test_run_req.status)

    def test_mark_as_failed_to_start(self):
        self.test_run_req.mark_as_failed_to_start()
        self.assertEqual(TestRunRequest.StatusChoices.FAILED_TO_START.name, self.test_run_req.status)

    def test_save_logs_empty(self):
        self.test_run_req.save_logs('')
        self.assertEqual('', self.test_run_req.logs)

    def test_save_logs_not_empty(self):
        self.test_run_req.save_logs('logs')
        self.assertEqual('\nlogs', self.test_run_req.logs)
