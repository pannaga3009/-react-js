from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

#Registers the CustomUser model with the admin site, using the UserAdmin class to handle its admin interface.
admin.site.register(CustomUser, UserAdmin)


