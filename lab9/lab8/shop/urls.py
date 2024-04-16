from django.urls import path, include

from .views import ApiViewSet
urlpatterns = [
    path('Vacancys/', ApiViewSet.as_view({'get': 'get_all_Vacancy'}), name="auth"),
    path('Vacancys/<int:id>/', ApiViewSet.as_view({'get': 'get_Vacancy'}), name="auth"),
    path('Companyies/', ApiViewSet.as_view({'get': 'get_all_companies'}), name="auth"),
    path('Companyies/<int:id>/', ApiViewSet.as_view({'get': 'get_one_Company'}), name="auth"),
    path('Companyies/<int:id>/Vacancys/', ApiViewSet.as_view({'get': 'get_Vacancys'}), name="auth"),
    path('Companyy/add/', ApiViewSet.as_view({'post': 'add_Company'}), name="auth"),
    path('Vacancy/add/', ApiViewSet.as_view({'post': 'add_Vacancy'}), name="auth"),
    path('/api/vacancies/top_ten/', ApiViewSet.as_view({'post': 'gettttt'}), name="auth"),
]

