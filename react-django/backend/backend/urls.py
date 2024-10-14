"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from rest_framework import generics
from app.models import *
from app.serializer import *

class ReactItemView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        firstname = self.request.query_params.get('firstname')
        lastname = self.request.query_params.get('lastname')
        username = self.request.query_params.get('username')
        if firstname:
            queryset = queryset.filter(firstname = firstname)
        if lastname:
            queryset = queryset.filter(lastname=lastname)
        if username:
            queryset = queryset.filter(username=username)
        return queryset


class UserAccountView(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        name = self.request.query_params.get('username')
        if name:
            queryset = queryset.filter(name__icontains=name)  # Case-insensitive partial match
        return queryset


# Define urlpatterns to include your view
urlpatterns = [
    path('react-items/', ReactItemView.as_view(), name='react-item-list'),
    path('user-accounts/', UserAccountView.as_view(), name='useraccount-list'),
    path('user-login/', UserAccountView.as_view(), name='Login'),
]