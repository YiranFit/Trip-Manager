from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class App_user(AbstractUser):
    email = models.EmailField(blank=False, unique=True, null=False)
    name = models.CharField(max_length=50, blank=False, null=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} | {self.email}"