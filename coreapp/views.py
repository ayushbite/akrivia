
from django.shortcuts import render
from .models import Info

# Create your views here.
def index(request):
    if request.method == "POST":
          name = request.POST["name"]
          email = request.POST["email"]
          phone = request.POST["phone"]
          message = request.POST["message"]
          Info.objects.create(name=name,email=email,phone=phone,message=message)
          print(Info.objects.all())

    return render(request,'index.html')

def view(request):
    # if request.method == "POST":
    #     info = request.POST["pass"]
    #     context={
    #         'pass':info
    #     }
    #     return render(request,'view.html',context)

    data = Info.objects.all()
    context={
        'data': data
    }
    return render(request,'view.html',context)    