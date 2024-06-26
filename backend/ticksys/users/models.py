from django.db import models
from django.contrib.auth.models import AbstractUser 
# Create your models here.

class CustomUser(AbstractUser):
    uid = models.IntegerField(primary_key=True,db_index=True)
    studIdLink = models.TextField()
    pfpLink = models.TextField()
    balance = models.IntegerField(default=0)

