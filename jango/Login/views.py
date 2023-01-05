from django.shortcuts import render

# Create your views here.

def login(req):
    return render(req,'login.html')


def home(req):
    return render(req,'home.html')


def signup(req):
    return render(req,'signup.html')
