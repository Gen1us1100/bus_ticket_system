
from django.contrib import admin
from django.urls import path,re_path
from ticksys.users import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('signup',views.signup),
    re_path('login',views.login),
    re_path('verify_token',views.verify_token)
]
