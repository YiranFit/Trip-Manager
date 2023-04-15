from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.user_login, name='login'),
    path('curruser/', views.curruser, name='curruser'),
    path('logout/', views.user_logout, name='logout'),
    path('', views.send_the_index),
]