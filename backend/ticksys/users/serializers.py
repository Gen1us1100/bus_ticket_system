from rest_framework import serializers
from ticksys.users.models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = CustomUser
        fields = ['uid','username','password','email']