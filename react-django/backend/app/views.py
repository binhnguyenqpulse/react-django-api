from django.shortcuts import render
from rest_framework.views import APIview
from rest_framework.response import Response
from .models import *
from .serializer import *


# Get the views ... seems like the functions?
class ReactView (APIview):
    def get(self, request): 
        output = [{"username": output.employee,
                   "firstname": output.firstname,
                   "lastname": output.lastname}
                   for output in React.objects.all ()]
        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer (data = request.data)
        # If serializer is valid then return response with data
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response (serializer.data)


class UserAccountView(APIview):
    def get(self, request):
        output = [{"username": output.username,
                   "password": output.password,
                   "first_name": output.first_name,
                   "last_name": output.last_name,
                   "email": output.email,
                   "project_manager": output.project_manager,
                   }
                  for output in UserAccount.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = UserAccountSerializer(data=request.data)
        # If serializer is valid then return response with data
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
