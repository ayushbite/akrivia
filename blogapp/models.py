from django.db import models
from autoslug import AutoSlugField

# Create your models here.

class Post(models.Model):
    title= models.CharField(max_length=250)
    slug = AutoSlugField(populate_from='title')
    intro = models.TextField()
    body=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-created_at',)    

