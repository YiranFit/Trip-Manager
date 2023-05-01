from django.urls import path
from . import views

urlpatterns = [
    path('', views.trip, name='trip'),
    path('<int:id>/', views.trip_detail, name='trip_dewtail'),
    path('<int:id>/hotel/', views.hotel, name='hotel'),
    path('<int:id>/hotel/<int:hotel_id>/', views.hotel_detail, name='hotel_detail'),
    path('<int:id>/restaurant/', views.restaurants, name='restaurant'),
    path('<int:id>/restaurant/<int:restaurant_id>/', views.restaurant_detail, name='restaurant_detail'),
    path('<int:id>/note/', views.notes, name='notes'),
]