from django.urls import path


# import custom methods from .views file
from .views import departmentAPI,singleDeparmentAPI, employeeAPI, singleEmployeeAPI, save_Image

# add Static File to the url to access the file name from the static
from django.conf.urls.static import static
from django.conf import settings

# Routes
urlpatterns = [
    path('departments/<int:id>/details/',singleDeparmentAPI, name='singleApiDetails' ),
    path('departments/', departmentAPI, name="departmentAPI"),
    path('departments/<int:id>/', departmentAPI, name="departmentAPI_Delete"),
    path('employees/<int:id>/details/', singleEmployeeAPI, name="singleEmployeeAPI"),
    path('employees/', employeeAPI, name="employeeAPI"), 
    path('employees/<int:id>/', employeeAPI, name="employeeAPI_Delete"),
    
    # Add a path to add upload the image
    path('employees/saveFile/', save_Image, name="upload_image")
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
