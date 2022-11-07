from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.generic import ListView, DetailView, UpdateView, DeleteView, CreateView
from django.urls import reverse_lazy
from .models import Post
from .serializers import PostSerializer
from rest_framework.generics import ListAPIView


class PostList(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


@api_view(['GET'])
def PostApiDetail(request, pk):
    posts = Post.objects.get(id=pk)
    serializer = PostSerializer(posts, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def PostApiCreate(request):
    # file = ...
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        print('error', serializer.errors)
        print('data', serializer.errors)
        return Response(serializer.errors)


@api_view(['POST'])
def PostApiUpdate(request, pk):
    posts = Post.objects.get(id=pk)
    serializer = PostSerializer(instance=posts, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def PostApiDelete(request, pk):
    posts = Post.objects.get(id=pk)
    posts.delete()
    return Response("Post successfully deleted")


class HomeView(ListView):
    model = Post
    template_name = 'home.html'
    ordering = ['-id']


class PostDetail(DetailView):
    model = Post
    template_name = 'post_detail.html'


class PostEdit(UpdateView):
    model = Post
    template_name = 'post_edit.html'
    fields = ['title', 'body', 'image']
    success_url = reverse_lazy('Home')


class PostDelete(DeleteView):
    model = Post
    template_name = 'post_delete.html'
    success_url = reverse_lazy('Home')


class PostCreate(CreateView):
    model = Post
    template_name = 'add_post.html'
    fields = ['title', 'body', 'image']
    success_url = reverse_lazy('Home')
