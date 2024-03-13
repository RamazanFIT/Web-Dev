from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import AlbumApiView, SomeTransportApiView, calc, calc2, get_hi, hello_world, IndexView

router = routers.DefaultRouter()

router.register(r'cat', SomeTransportApiView)
router.register(r'album', AlbumApiView)

urlpatterns = [
    path('', include(router.urls)),
    path('say_hello/', get_hi, name="say_hi"),
    path('hello_world/', hello_world, name='hello_world'),
    path('calc/<int:a>/<int:b>/', calc, name='calc'),
    path('calc2', calc2, name='calc2'),
    path('someImages/', IndexView.as_view(), name='IndexView')
]
