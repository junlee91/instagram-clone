from rest_framework import serializers
from . import models
from sodagram.images import serializers as images_serializers

class UserProfileSerializer(serializers.ModelSerializer):

    images = images_serializers.UserProfileImageSerializer(many=True)

    class Meta:
        model = models.User
        fields = (
            'username',
            'name',
            'bio',
            'website',
            'post_count',
            'follwers_count',
            'following_count',
            'images'
        )

class ListUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name'
        )