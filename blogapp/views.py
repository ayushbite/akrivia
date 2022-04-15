from multiprocessing import context
from django.shortcuts import render
from .models import Post

# Create your views here.


def blogindex(request):
    posts= Post.objects.all()
    context={
        "posts":posts
    }
    return render(request,'blog/index.html',context)


def detail(request,slug):
    post= get_object_or_404(Post,slug=slug)

    context={
        "post":post
    }

    return render(request,'blog/detail.html',context)
