from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("home/", views.home, name="home_page"),
    path("loading/", views.loading, name="loading"),
    path("login/", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("universities/", views.universities, name="universities"),
    path("chatbot/", views.chatbot, name="chatbot"),
    path("galerie/", views.galerie, name="galerie"),
]