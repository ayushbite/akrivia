from django.db import models

# Create your models here.

class Info(models.Model):
   name = models.CharField(max_length=30)
   email=models.CharField(max_length=30)
   phone=models.CharField(max_length=12)
   message=models.CharField(max_length=300)

   def __str__(self):
        return self.name


