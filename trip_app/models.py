from django.db import models
from user_app.models import App_user
# Create your models here.

class Trip(models.Model):
    destination = models.CharField(max_length=255, blank=False, null=False)
    start_date = models.DateField(blank=False, null=False)
    end_date = models.DateField(blank=False, null=False)
    notes = models.TextField(blank=True, null=True)
    # if_finished = models.BooleanField(default=False)
    user = models.ForeignKey(App_user, on_delete=models.CASCADE, related_name='trips')

    def __str__(self):
        return f"{self.destination}"
