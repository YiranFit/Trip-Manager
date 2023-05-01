from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Trip,Hotel,Restaurant, Note
from django.core.serializers import serialize
import json

# Create your views here.
@api_view(['POST','GET'])
def trip(request):
    if request.method == 'POST':
        trips = list(Trip.objects.filter(user = request.user).values())
        # print(request.data)
        # print(trips)
        try:
            new_trip = Trip.objects.create(destination=request.data['destination'], start_date=request.data['start_date'], end_date=request.data['end_date'], user=request.user)
            new_trip.save()
            trips = list(Trip.objects.filter(user = request.user).values())
            # print('success')
            return JsonResponse({'trips': trips})
        except Exception as e:
            # print('fail')
            print(e)
            return JsonResponse({'trips': []})
    elif request.method == 'GET':
        try:
            trips = list(Trip.objects.filter(user = request.user).values())
            print(trips)
            return JsonResponse({'trips': trips})
        except Exception as e:
            print(e)
            return JsonResponse({'trips': False})

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


@api_view(['POST','GET'])
def hotel(request,id):
    if request.method == 'POST':
        try:
            name = request.data['name']
            check_in = request.data['check_in']
            check_out = request.data['check_out']
            trip = Trip.objects.get(pk=id)
            new_hotel = Hotel.objects.create(name=name, check_in=check_in,check_out= check_out,user=request.user,trip=trip)
            new_hotel.save()
            hotels = list(Hotel.objects.filter(trip= trip).values())
            # print(hotels)
            
            return JsonResponse({'hotel': True})
        except Exception as e:
            print(e)
            return JsonResponse({'hotel': False})
    elif request.method == 'GET':
        try:
            trip = Trip.objects.get(pk=id)
            hotels = list(Hotel.objects.filter(trip= trip).values())
            # print(hotels)
            return JsonResponse({'hotel': hotels})
        except Exception as e:
            print(False)
            print(e)
            return JsonResponse({'hotel': False})

@api_view(['GET','DELETE'])
def hotel_detail(request,id, hotel_id):
    if request.method == 'GET':
        try:
            hotel = Hotel.objects.get(pk=hotel_id)
            hotel = serialize('json', [hotel])
            hotel = json.loads(hotel)
            # print(hotel)
            return JsonResponse({'hotel': hotel})
        except Exception as e:
            print(e)
            return JsonResponse({'hotel': False})

    elif request.method == 'DELETE':
        try:    
            hotel = Hotel.objects.get(pk=hotel_id)
            hotel.delete()
            # print('success')
            return JsonResponse({'hotel': True})
        except Exception as e:
            # print('fail')
            print(e)
            return JsonResponse({'hotel': False})

@api_view(['POST','GET'])
def restaurants(request,id):
    if request.method == 'POST':
        try:
            name = request.data['name']
            address = request.data['address']
            phone = request.data['phone']
            trip = Trip.objects.get(pk=id)
            new_restaurant = Restaurant.objects.create(name=name, address=address,phone= phone,user=request.user,trip=trip)
            new_restaurant.save()
            restaurants = list(Restaurant.objects.filter(trip= trip).values())
            print(restaurants)
            return JsonResponse({'restaurant': restaurants})
        except Exception as e:
            print(e)
            return JsonResponse({'restaurant': False})
        
    elif request.method == 'GET':
        try:
            trip = Trip.objects.get(pk=id)
            restaurants = list(Restaurant.objects.filter(trip= trip).values())
            # print(restaurants)
            return JsonResponse({'restaurant': restaurants})
        except Exception as e:
            print(False)
            print(e)
            return JsonResponse({'restaurant': False})
    
@api_view(['GET','DELETE'])
def restaurant_detail(request,id, restaurant_id):
    if request.method == 'GET':
        try:
            restaurant = Restaurant.objects.get(pk=restaurant_id)
            restaurant = serialize('json', [restaurant])
            restaurant = json.loads(restaurant)
            # print(restaurant)
            return JsonResponse({'restaurant': restaurant})
        except Exception as e:
            print(e)
            return JsonResponse({'restaurant': False})

    elif request.method == 'DELETE':
        try:    
            restaurant = Restaurant.objects.get(pk=restaurant_id)
            restaurant.delete()
            # print('success')
            return JsonResponse({'restaurant': True})
        except Exception as e:
            # print('fail')
            print(e)
            return JsonResponse({'restaurant': False})

@api_view(['POST','GET'])
def notes(request,id):
    if request.method == 'POST':
        try:
            content = request.data['content']
            trip = Trip.objects.get(pk=id)
            new_note = Note.objects.create(content=content,user=request.user,trip=trip)
            new_note.save()
            notes = list(Note.objects.filter(trip= trip).values())
            # print(notes)
            return JsonResponse({'note': notes})
        except Exception as e:
            print(e)
            return JsonResponse({'note': False})
        
    elif request.method == 'GET':
        try:
            trip = Trip.objects.get(pk=id)
            notes = list(Note.objects.filter(trip= trip).values())
            # print(notes)
            return JsonResponse({'note': notes})
        except Exception as e:
            # print(False)
            print(e)
            return JsonResponse({'note': False})
