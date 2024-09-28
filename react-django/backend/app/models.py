from django.db import models

# Create your models here.
class React (models.Model):
    username = models.CharField(max_length=100, default='default_user')
    firstname = models.CharField (max_length = 30)
    lastname = models.CharField (max_length = 200)
    # email = models.EmailField (unique = True)

class UserAccount(models.Model):
    username = models.CharField(max_length=45, primary_key=True)
    password = models.CharField(max_length=45)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    project_manager = models.BooleanField(default=False)