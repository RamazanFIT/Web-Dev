from django.views.generic import ListView
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from django.conf.urls.static import static
from django.conf import settings
# api

class SomeTransportApiView(viewsets.ModelViewSet):
    queryset = SomeTransport.objects.all()
    serializer_class = SomeTransportSerializator
    http_method_names = ['get', 'delete', 'post', 'put']
    
    
    
class AlbumApiView(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializator
    http_method_names = ['get', 'delete', 'update', 'post', 'put']
    
    
def get_hi(request):
    # koko = settings.ONLYUPPER
    # print(koko)
    return render(request, 'hello.html')

def hello_world(request : HttpRequest):
    return HttpResponse("Hello world")


def calc(request, a : int, b : int):
    return HttpResponse(a + b)


def calc2(request : HttpRequest):
    a = request.GET['a']
    # print(type(request.GET), request.GET)
    b = request.GET['b']
    return HttpResponse(a + b)


class IndexView(ListView):
    template_name = 'hello.html'
    model = GetImage
    ordering= ('-id')
    
    
