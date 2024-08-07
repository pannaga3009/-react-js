from django.urls import path
from .views import add_weather, get_weather

urlpatterns = [
    path('add/', add_weather, name='add_weather'),
    path('get/', get_weather, name='get_weather' ),
]