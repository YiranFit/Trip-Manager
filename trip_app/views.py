from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Trip
from django.core.serializers import serialize
import json

# Create your views here.
@api_view(['POST','GET'])
def trip(request):
    if request.method == 'POST':
        trips = list(Trip.objects.filter(user=request.user).values())
        print(request.data)
        # print(trips)
        try:
            new_trip = Trip.objects.create(destination=request.data['destination'], start_date=request.data['start_date'], end_date=request.data['end_date'], user=request.user)
            new_trip.save()
            trips = list(Trip.objects.filter(user=request.user).values())
            # print('success')
            return JsonResponse({'trips': trips})
        except Exception as e:
            # print('fail')
            print(e)
            return JsonResponse({'trips': []})
    elif request.method == 'GET':
        try:
            trips = list(Trip.objects.filter(user=request.user).values())
            return JsonResponse({'trips': trips})
        except Exception as e:
            print(e)
            return JsonResponse({'trips': False})
    
    # elif request.method == 'DELETE':
    #     try:
    #         print(request.data)
    #         trip = Trip.objects.get(destination=request.data['destination'])
    #         trip.delete()
    #         trips = list(Trip.objects.filter(user=request.user).values())
    #         return JsonResponse({'trips': trips})
    #     except Exception as e:
    #         print('fail')
    #         print(e)
    #         return JsonResponse({'trips': False})

@api_view(['GET','DELETE'])
def trip_detail(request,id):
    if request.method == 'GET':
        try:
            trip = Trip.objects.get(pk=id)
            trip = serialize('json', [trip])
            trip = json.loads(trip)
            # print(trip)
            return JsonResponse({'trip': trip})
        except Exception as e:
            print(e)
            return JsonResponse({'trip': False})

    elif request.method == 'DELETE':
        try:    
            trip = Trip.objects.get(pk=id)
            trip.delete()
            print('success')
            return JsonResponse({'trip': True})
        except Exception as e:
            print('fail')
            print(e)
            return JsonResponse({'trip': False})