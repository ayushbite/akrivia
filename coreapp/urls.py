from django.contrib import admin
from django.urls import path,include
from .views import index,view,about

urlpatterns = [
    path('',index,name="home"),
    path('about/',about,name="about"),
    path('view/',view)
]