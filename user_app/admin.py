from django.contrib import admin
from trip_app.models import Trip, Hotel, Restaurant, Note
from .models import App_user
# Register your models here.

admin.site.register([Trip, App_user, Hotel, Restaurant, Note])