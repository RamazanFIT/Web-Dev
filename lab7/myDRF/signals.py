from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.mail import send_mail

from .models import GetImage

@receiver(post_save, sender=GetImage)
def new_transport(instance : GetImage, created, **kwargs):
    if created:
        # print("hello worldyftguhjkmllijuhygftgcgv")

        subject = f'Subject of the Email: {instance.text}'
        message = 'Body of the Email'
        from_email = 'syrlybai056@gmail.com'
        recipient_list = ['recipient@example.com']

        send_mail(subject, message, from_email, recipient_list)