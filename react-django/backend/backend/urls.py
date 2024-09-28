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
from app.models import React
from app.serializer import *

class ReactItemView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        name = self.request.query_params.get('name')
        if name:
            queryset = queryset.filter(employee=name)
        return queryset

class TeamItemView(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamNameSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        name = self.request.query_params.get('team_name')  # Filter by department name
        if name:
            queryset = queryset.filter(name__icontains=name)  # Case-insensitive partial match
        return queryset

class UserAccountView(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        name = self.request.query_params.get('username')  # Filter by department name
        if name:
            queryset = queryset.filter(name__icontains=name)  # Case-insensitive partial match
        return queryset
    
    
# Define urlpatterns to include your view
urlpatterns = [
    path('react-items/', ReactItemView.as_view(), name='react-item-list'),
    path('team-names/', TeamItemView.as_view(), name='team-names-list'),
    path('user-accounts/', UserAccountView.as_view(), name='useaccount-list')
]