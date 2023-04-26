from django.contrib import admin
from trip_app.models import Trip
from .models import App_user
# Register your models here.

admin.site.register([Trip, App_user])