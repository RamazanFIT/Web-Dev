from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers import CompanySerializer, VacancySerializer
from api.models import Company, Vacancy
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['GET', 'POST'])
def get_companies(request): 
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def get_company(request, id): 
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as error:
        return Response({'error': str(error)}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
@api_view(['GET'])
def get_company_vacancies(request, id):
    if request.method == 'GET':
        needed_company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=needed_company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@csrf_exempt
class VacanciesAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
class VacancyDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        vacancy = self.get_object(id)
        vacancy.delete()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
@api_view(['GET'])
def top_ten_vacancies(request): 
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)