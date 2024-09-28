#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Sep 23 23:28:05 2024

@author: binhnguyen
"""

from rest_framework import serializers
from .models import * 

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['username', 'firstname', 'lastname']
        # This has to match the values in models.py

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['username', 'password', 'first_name', 'last_name', 'email', 'project_manager']
