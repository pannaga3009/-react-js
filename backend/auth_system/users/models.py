from django.db import models
#Create a new model that inherits from AbstractUser 
# The former is a full user model, while the latter is for more customized implementations.
from django.contrib.auth.models import AbstractUser

#Update users/admin.py to register the custom user model:
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email

