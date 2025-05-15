from django.urls import path
from . import views

urlpatterns = [
    path("test/", views.PromptView.as_view(), name="test-view"),
]