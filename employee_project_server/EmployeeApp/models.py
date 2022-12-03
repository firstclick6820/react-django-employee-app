from django.db import models



# Departement Model
class Departement(models.Model):
    DepartmentID = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)
    
    
    def __str__(self):
        return self.DepartmentName
    
    
    
# Employee Model
class Employee(models.Model):
    EmployeeID = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    DepartementName = models.ForeignKey(Departement, on_delete=models.CASCADE)
    DateOfJoining = models.DateField()
    EmployeeImage = models.CharField(max_length=100)
    
    
    def __str__(self):
        return self.EmployeeName
    