from django.shortcuts import render
from rest_framework.views import APIview
from rest_framework.response import Response
from .models import *
from .serializer import *

from django.db.models import Q, F
# Create your views here.
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate

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
        


class Login(APIview):
    def post(self, request):
        output = [{"username": output.username,
                   "password": output.password}
                  for output in UserAccount.objects.all()]
        return Response(output)

    
'''

def Login(request):
    flag = 0
    if (request.method == 'POST'):
#       form = AuthenticationForm()
        Uname = request.POST['username']
        Pword = request.POST['password']
         
        serializer = UserAccountSerializer(data=request.data)
        if ((UserAccount.objects.filter(Q(UserName=Uname) & Q(Password=Pword)).exists())):
            
                request.session['user'] = Uname
                flag = 1
                return Response(serializer.data)
'''