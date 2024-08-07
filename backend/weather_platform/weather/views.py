from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import Weather
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def add_weather(request):
    """
    Add the weather to the database
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body) #Converting json string to python dict
            #getting the values of python dict to a literal
            city = data.get('city')
            description = data.get('description')
            humidity = data.get('humidity')

            #Creating an object "weather" for class/model "Weather"
            weather = Weather(city=city, description= description, humidity=humidity)
            print(weather.city, weather.description, weather.humidity)
            weather.save()
    
            return JsonResponse({'status': 'success',  'message': 'succesfully added'})
        except KeyError as e:
            return JsonResponse({'status': 'fail', 'message': f'Missing Key is {str(e)}'})
        except Exception as e:
            return JsonResponse({'status': 'fail', 'message': f'Exception is {str(e)}'})
    return HttpResponse(status=405)

@csrf_exempt
def get_weather(request):
    weather_data = list(Weather.objects.values())
    #JsonResponse(weather_data, safe=False) tells Django that 
    #it's safe to convert weather_data (a list) to JSON, even though it's not a dictionary.
    return JsonResponse(weather_data, safe=False)






