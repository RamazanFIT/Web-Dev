from audioop import reverse
from django.db import models

class Question(models.Model):

    question_test = models.CharField(max_length=200)
    pub_date = models.DateTimeField()


    def __str__(self):
        return self.question_test

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})


class Choice(models.Model):

    question = models.ForeignKey("Question", on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField()

    def __str__(self):
        return self.choice_text

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})
