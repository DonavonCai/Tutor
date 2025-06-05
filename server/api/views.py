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

        # response = aiClient.models.generate_content(model="gemini-2.0-flash", contents="Explain how AI works in a few words")
        test_plan = {
            "title": "The Building Blocks of Music",
            "sections": [
                "What is Music Theory?",
                "The Staff and Clefs",
                "Pitch and Notes",
                "Rhythm: Notes and Rests",
                "Measures and Time Signatures",
            ],
        }

        test_plan_2 = {
            "title": "Blah blah lesson 2",
            "sections": [
                "What is Music Theory?",
                "The Staff and Clefs",
                "Pitch and Notes",
                "Rhythm: Notes and Rests",
                "Measures and Time Signatures",
            ],
        }

        test_plan_3 = {
            **test_plan_2,
            "title": "Lesson 3",
        }

        test_plan_4 = {
            **test_plan_2,
            "title": "Lesson 4",
        }

        test_plan_5 = {
            **test_plan_2,
            "title": "Lesson 5",
        }

        test_plan_6 = {
            "title": "Lesson 6",
            **test_plan_2,
        }

        test_plan_7 = {
            "title": "Lesson 7",
            **test_plan_2,
        }

        response = {
            "plans": [
                test_plan,
                test_plan_2,
                test_plan_3,
                test_plan_4,
                test_plan_5,
                test_plan_6,
                test_plan_7,
            ]
        }

        return Response(response, status=status.HTTP_200_OK)
