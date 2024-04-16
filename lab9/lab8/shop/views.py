from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Vacancy, Company
from .serializers import *
from drf_yasg.utils import swagger_auto_schema


class ApiViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    # serializer_class = CompanySerializer

    def get_all_companies(cls, request):
        
        try:
            categories = Company.objects.all()
        
            serializer = CompanySerializer(instance=categories, many=True)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")
    
    def get_one_Company(cls, request, id : int):
        
        try:
            company = Company.objects.get(pk=id)
            
            serializer = CompanySerializer(instance=company)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")

    def get_Vacancys(cls, request, id : int):
        
        
        try:
            Vacancys = Vacancy.objects.filter(company=id)
            
            serializer = VacancySerializer(instance=Vacancys, many=True)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")

    
    def get_Vacancy(cls, request, id : int):
        
     
        try:
            vacancy = Vacancy.objects.get(pk=id)
        
            serializer = VacancySerializer(instance=vacancy, many=False)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")

        
    def get_all_Vacancy(cls, request):
        try:
            Vacancys = Vacancy.objects.all()
            
            serializer = VacancySerializer(instance=Vacancys, many=True)

            return Response(data=serializer.data)
        except:
            return Response(data="not found")

    @swagger_auto_schema(operation_summary="add Company", request_body=CompanySerializer)
    def add_Company(cls, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response({"detail" : serializer.errors})
        return Response(data=serializer.data)
    @swagger_auto_schema(operation_summary="add Vacancy", request_body=VacancySerializer)
    def add_Vacancy(cls, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response({"detail" : serializer.errors})
        return Response(data=serializer.data)
    
    def gettttt(cls, request):
        vac = Vacancy.objects.order_by('-salary').all()[:10]
        serializer = VacancySerializer(instance=vac, many=True)
        
        return Response(serializer.data)