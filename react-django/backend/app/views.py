from django.shortcuts import render
from rest_framework.views import APIview
from rest_framework.response import Response
from .models import *
from .serializer *


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