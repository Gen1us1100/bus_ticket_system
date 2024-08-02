from django.db import models
from django.contrib.auth.models import AbstractUser 
# Create your models here.

class CustomUser(AbstractUser):
    uid = models.IntegerField(primary_key=True,db_index=True)
    studIdLink = models.TextField()
    pfpLink = models.TextField()
    balance = models.IntegerField(default=0)
       
class Passes(models.Model):
    uid=models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    PassID=models.IntegerField()
    Price=models.IntegerField()
    expiry=models.DateTimeField()
    QRImage=models.TextField()

class Tickets(models.Model):
    uid=models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    TicketID=models.IntegerField()
    SourceStop=models.TextField()
    DestinationStop=models.TextField()
    Price=models.IntegerField()
    expiry=models.DateTimeField()
    QRImage=models.TextField()
    

