"""Module for api endpoints"""
import os
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from google import genai
from .serializers import UserSerializer, PromptSerializer

aiClient = genai.Client(api_key=os.environ.get("AI_KEY"))

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class PromptView(APIView):
    serializer_class = PromptSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        print(request.data)

        response = aiClient.models.generate_content(model="gemini-2.0-flash", contents="Explain how AI works in a few words")

        return Response({"message": response.text}, status=status.HTTP_200_OK)
