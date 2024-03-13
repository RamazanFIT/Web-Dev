from . import views
from django.urls import include, path



urlpatterns = [
    path("", views.index, name="index"),
    path("<int:question_id>/", views.detail, name="")
]
