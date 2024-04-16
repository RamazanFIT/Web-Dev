from .models import Company, Vacancy
from rest_framework import serializers

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        address = validated_data.get('address', instance.address)

        instance.save()
        return instance
    
class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta: 
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')