from django.contrib import admin
from django.urls import path,include
from .views import index,view

urlpatterns = [
    path('',index),
    path('view/',view)
]