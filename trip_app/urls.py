from django.urls import path
from . import views

urlpatterns = [
    path('', views.trip, name='trip'),
    path('<int:id>/', views.trip_detail, name='trip_dewtail')
]