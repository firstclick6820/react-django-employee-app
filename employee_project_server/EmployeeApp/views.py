
# Import Django Components
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Import A Django Module for saving images to the media directory
from django.core.files.storage import default_storage

# import from rest framework
from rest_framework.parsers import JSONParser



# Import Custom Models
from .models import Employee, Departement



# Import Custom Serializers
from .serializers import EmployeeSerializer, DepartementSerializer




# Create API Views for Departement Model
@csrf_exempt
def departmentAPI(request, id=0):
    
    
    # Check if the request is GET then return all the departments in JSON Format.
    if request.method == 'GET':
        departments = Departement.objects.all()
        departments_serializer = DepartementSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)
    
        
        
    # check if the request method is POST then Add a record to the depratments table in the database
    elif request.method == "POST":
        department_data = JSONParser().parse(request)
        department_serializer = DepartementSerializer(data=department_data)
        
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Added successfully.', safe=False)
        return JsonResponse('Falid to Add.', safe=False)
            
            
    
    # Check if the request method is PUT then update the specific department in the database
    elif request.method == 'PUT':
        
        department_data = JSONParser().parse(request)
        department = Departement.objects.get(DepartmentID = department_data['DepartmentID'])
        department_serializer = DepartementSerializer(department, data=department_data)
        
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Updated successfully!', safe=False)
        return JsonResponse('Falid to Update!', safe=False)
    
    
    elif request.method == 'DELETE':
        department= Departement.objects.get(DepartmentID=id)
        department.delete()
        return JsonResponse('Deleted successfully!', safe=False)
    
    
    
    
# Getting a single Department Record
@csrf_exempt
def singleDeparmentAPI(request, id):
    
    if request.method == "GET":
        department = Departement.objects.get(DepartmentID = id)
        department_serializer = DepartementSerializer(department, many=False)
        return JsonResponse(department_serializer.data, safe=False)
    
            
        
    
    
# Employee API
@csrf_exempt
def employeeAPI(request, id=0):
    
    
    # Check if the request method  is a GET method then return all the employees record from the database
    if request.method == "GET":
        employees = Employee.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)
    
    # Check if the request method is a POST method then add the record to the database.
    elif request.method == "POST":
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data = employee_data)
        
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse('Record Added successfully!', safe=False)
        return JsonResponse('Falid to add the Record!', safe=False)
    
    
    # check if the request method is a PUT method then update the exsitance record in the Database.
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee= Employee.objects.get( EmployeeID = employee_data['EmployeeID'])
        employee_serializer = EmployeeSerializer(employee, data = employee_data)
        
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse('Record is upated Successfully.', safe=False)
        return JsonResponse('Falid to update the record!', safe=True)
    
    
    
    # Check if the request method is a DELETE then delete the existance record in the database
    
    elif request.method == 'DELETE':
        employee = Employee.objects.get(EmployeeID = id)
        employee.delete()
        return JsonResponse("Record is deleted successfully.!", safe=False)
        
    
    
    
# Single Employee Record
@csrf_exempt
def singleEmployeeAPI(request, id):
    employee = Employee.objects.get(EmployeeID = id)
    employee_serailizer = EmployeeSerializer(employee, many=False)
    return JsonResponse(employee_serailizer.data, safe=False)




# Image Uploading API
@csrf_exempt
def save_Image(request):
    file = request.FILES['myFile']
    file_name = default_storage.save(file.name, file)
    
    return JsonResponse(file_name, safe=False)

