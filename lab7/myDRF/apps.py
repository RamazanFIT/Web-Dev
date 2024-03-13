from django.apps import AppConfig


class MydrfConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'myDRF'

    def ready(self):
        import myDRF.signals