from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import App_user
from django.core.serializers import serialize
import json


# Create your views here.
@api_view(['POST'])
def signup(request):
    print(request.data)
    email = request.data['email']
    name = request.data['name']
    password = request.data['password']
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    try: 
        user = App_user.objects.create_user(username= email, email=email, name=name, password=password, is_superuser=super_user, is_staff=staff)
        user.save()
        return JsonResponse({'success': True})
    except Exception as e:
        print(e)
        return JsonResponse({'success': False})

@api_view(['POST'])
def user_login(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)

    if user is not None and user.is_active:
        try:
            login(request._request, user)
            print(user)
            return JsonResponse({'login': True})
        except Exception as e:
            print(e)
            return JsonResponse({'login': False})
    return JsonResponse({'login': False})

@api_view(['GET'])
def curruser(request):
    if request.user.is_authenticated:
        user_info = serialize('json', [request.user], fields = ['name', 'email'])
        user_info_readbale = json.loads(user_info)
        return JsonResponse({'user':user_info_readbale[0]['fields']})
    else:
        return JsonResponse({'user': None})
    
@api_view(['POST'])
def user_logout(request):
    try:
        logout(request)
        return JsonResponse({'logout': True})
    except Exception as e:
        print(e)
        return JsonResponse({'logout': False})

def send_the_index(request):
    the_index = open('static/index.html')
    return HttpResponse(the_index)