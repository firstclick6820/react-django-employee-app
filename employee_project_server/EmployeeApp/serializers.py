from rest_framework import serializers


from .models import Departement, Employee

# Department Serialzer 
class DepartementSerializer(serializers.ModelSerializer):
    
    
    class Meta:
        model = Departement
        fields = ('DepartmentID', 'DepartmentName')
        
        
        
# Employee Serializer 
class EmployeeSerializer(serializers.ModelSerializer):
    
    
    class Meta:
        model = Employee
        fields = (  
                    'EmployeeID', 
                    'EmployeeName', 
                    'DepartementName', 
                    'DateOfJoining', 
                    'EmployeeImage'
                    )
        
        