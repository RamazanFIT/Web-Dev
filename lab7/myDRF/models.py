from django.db import models


class SomeTransport(models.Model):
    sender = models.TextField()
    receiver = models.CharField(max_length=200)
    
    def __str__(self) -> str:
        return f'{self.sender} + {self.receiver}'

class GetImage(models.Model):

    text = models.CharField(max_length=200)
    images = models.ImageField()
    
    def __str__(self) -> str:
        return f'{self.text} some text to tell'


class Album(models.Model):
    title = models.TextField()
