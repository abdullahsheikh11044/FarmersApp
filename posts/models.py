from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField(max_length=255)
    post_date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='images/',blank=True, null=True)

