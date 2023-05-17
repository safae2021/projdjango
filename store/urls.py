from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name="home"),
    path('store/', views.store,name="store"),
    path('customercare/', views.customercare,name="customercare"),
    path('contacts/', views.contacts,name="contacts"),
    path('shoppingbag/', views.shoppingbag,name="shoppingbag"),
    path('favorites/', views.favorites,name="favorites"),

]

