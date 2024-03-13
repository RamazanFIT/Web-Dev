from rest_framework import serializers
from .models import *


class SomeTransportSerializator(serializers.ModelSerializer):
    class Meta:
        model = SomeTransport
        fields = '__all__'



class AlbumSerializator(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'


