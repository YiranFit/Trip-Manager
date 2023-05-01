from django.db import models
from user_app.models import App_user
# Create your models here.

class Trip(models.Model):
    destination = models.CharField(max_length=255, blank=False, null=False)
    start_date = models.DateField(blank=False, null=False)
    end_date = models.DateField(blank=False, null=False)
    notes = models.TextField(blank=True, null=True)
    user = models.ForeignKey(App_user, on_delete=models.CASCADE, related_name='trips')

    def __str__(self):
        return f"{self.destination}"

class Hotel (models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    check_in = models.DateField(blank=False, null=False)
    check_out = models.DateField(blank=False, null=False)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='hotels')
    user = models.ForeignKey(App_user, on_delete=models.CASCADE, related_name='hotels')

    def __str__(self):
        return f"{self.name}"

class Restaurant (models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    address = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='restaurants')
    user = models.ForeignKey(App_user, on_delete=models.CASCADE, related_name='restaurants')

    def __str__(self):
        return f"{self.name}"

class Note (models.Model):
    content = models.TextField(blank=True, null=True)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    user = models.ForeignKey(App_user, on_delete=models.CASCADE, related_name='notes')

    def __str__(self):
        return f"{self.content}"