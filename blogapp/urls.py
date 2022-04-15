from django.contrib import admin
from django.urls import path,include
from .views import blogindex,detail

urlpatterns = [
    path('',blogindex,name="blogindex"),
    path('<slug:slug>/',detail,name="postdetail")
]