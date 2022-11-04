from django.urls import path

from posts.views import HomeView, PostDelete, PostDetail, PostEdit, PostCreate, PostList, PostApiDetail
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('home/', HomeView.as_view(), name="Home"),
    path('post/<int:pk>', PostDetail.as_view(), name="Detail"),
    path('post_edit/<int:pk>', PostEdit.as_view(), name="Update"),
    path('post_delete/<int:pk>', PostDelete.as_view(), name="Delete"),
    path('post_create/', PostCreate.as_view(), name="Create"),
    path('', TemplateView.as_view(template_name='index.html')),
    path('post_api_list/', PostList.as_view(), name="Listing"),
    path('post_api_detail/<str:pk>/', views.PostApiDetail, name="Api_detail"),
    path('post_api_create/', views.PostApiCreate, name="Api_create"),
    path('post_api_update/<str:pk>/', views.PostApiUpdate, name="Api_update"),
    path('post_api_delete/<str:pk>/', views.PostApiDelete, name="Api_delete"),


]
