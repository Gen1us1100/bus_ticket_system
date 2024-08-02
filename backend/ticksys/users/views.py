from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import CustomUserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import CustomUser
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['POST'])
def signup(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = CustomUser.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token" : token.key,"user" : serializer.data})
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    queryset = _get_queryset(CustomUser)
    try:
        user = queryset.get(username=request.data['username'])
    except queryset.model.DoesNotExist:
        return Response({"detail": "Not found."},status=status.HTTP_404_NOT_FOUND)
    # user = get_object_or_404(CustomUser,username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"detail": "Not found."},status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = CustomUserSerializer(instance=user)
    return Response({"token" : token.key,"user" : serializer.data})

@api_view(['GET'])
def verify_token(request):
    return Response({})

def _get_queryset(klass):
    """
    Return a QuerySet or a Manager.
    Duck typing in action: any class with a `get()` method (for
    get_object_or_404) or a `filter()` method (for get_list_or_404) might do
    the job.
    """
    # If it is a model class or anything else with ._default_manager
    if hasattr(klass, "_default_manager"):
        return klass._default_manager.all()
    return klass