from django.shortcuts import render
from rest_framework.views import APIview
from rest_framework.response import Response
from .models import *
from .serializer import *


# Get the views ... seems like the functions?
class ReactView (APIview):
    def get(self, request): 
        output = [{"employee": output.employee,
                   "department": output.department}
                   for output in React.objects.all ()]
        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer (data = request.data)
        # If serializer is valid then return response with data
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response (serializer.data)
        
class EmployeeView (APIview):
    def get(self, request): 
        output = [{"team_name": output.team_name}
                   for output in Team.objects.all ()]
        return Response(output)
    
    def post(self, request):
        serializer = TeamNameSerializer(data = request.data)
        # If serializer is valid then return response with data
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response (serializer.data)
        
class UserAccountView (APIview):
    def get(self, request): 
        output = [{"username": output.username,
                   "password": output.password,
                   "first_name": output.first_name,
                   "last_name": output.last_name,
                   "email": output.email,
                   "project_manager": output.project_manager,
                   "login_time": output.login_time}
                  for output in UserAccount.objects.all ()]
        return Response(output)
    
    def post(self, request):
        serializer = UserAccountSerializer(data = request.data)
        # If serializer is valid then return response with data
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response (serializer.data)
    
