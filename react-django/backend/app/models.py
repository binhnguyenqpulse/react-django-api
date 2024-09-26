from django.db import models

# Create your models here.
class React (models.Model):
    username = models.CharField(max_length=100, default='default_user')
    firstname = models.CharField (max_length = 30)
    lastname = models.CharField (max_length = 200)
    # email = models.EmailField (unique = True)
    
    