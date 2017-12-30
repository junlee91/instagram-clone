# Development Note

### 12/18/2017 

## Development Tools 
- Visual Studio Code
- Yarn
- Python 3.6
- Pip
- Pipenv
- Postgres
- Django 1.11

## Django 
- [Overview](https://www.djangoproject.com/start/overview/)
- Framework 
- Not a programming language
- Very fast for developers 
- Secure
- Handy
- Used by (Instagram, Pinterest, Spotify, NASA)

## [Framework vs Library](https://www.programcreek.com/2011/09/what-is-the-difference-between-a-java-library-and-a-framework/)  
- A library is a tool
- A framework is a way of life
- A library is just functions you can call
- A framework calls your code
- You call the library
- The framework calls you 

## Django comes with
- ORM (talk to the database)
- Admin Panel
- User Authentication
- URL Dispatcher
- Template Engine 

## Virtual Environments
- Imagine a bubble
- What happens in the bubble stays in the bubble
- You can have as many bubbles as you want

## Why Virtual Environment? 
- Because global dependencies are not okay
- Many times you will need different dependency versions

## How?
- Virtualenv
- Virtualenvwrapper
- Pipenv

## Creating a Virtual Environment 
```sh
pipenv --three 	        // create a bubble with python version 3
pipenv install django   // install django package in this bubble 
pipenv shell            // go into a bubble 
exit 	                // exit bubble  
```
## Parts of Django
Settings, Urls, and Apps

### Settings
- Change the default behavior of Django
- Install more modules 
- Remove default ones
- Django will look at this file whenever it starts
### Urls
- The Django project is gonna be open to the internet
- URLS are how you talk to the Django project and make him do things
- When Django matches an URL it will execute a view function.

### Apps
- Apps are what the applications is made of
- Apps have a defined scope and they responsibilities are very precise
- A Django project can have as many apps as you want

## Creating Django Project
- Production-ready-size
- [Cookiecutter Django](https://github.com/pydanny/cookiecutter-django)

```sh
pipenv install cookiecutter
pipenv shell
cookiecutter https://github.com/pydanny/cookiecutter-django
```

## Installing the requirements
```sh
pipenv --three
pipenv shell
pipenv install -r requirements/local.tx
```

### 12/21/2017

## Production Settings and Local Settings
- Production Settings:
Settings that are gonna be loaded on the live server

- Local Settings:
Settings that are gonna be loaded on the local server


## Creating database with Postgres
CREATE DATABASE databasename;

## Migrating
- A migration is a process to change the shape of the database models
- When we add, remove or update DB columns we have to migrate

```sh
python manage.py makemigrations
python manage.py migrate
```

- [Django Model Field](https://docs.djangoproject.com/en/1.11/ref/models/fields/) 
- [Django Model Documentation](https://docs.djangoproject.com/en/1.11/topics/db/models/) 


## [Abstract base classes](https://docs.djangoproject.com/en/1.11/topics/db/models/#abstract-base-classes)
- Abstract base classes are useful when you want to put some common information into a number of other models. 


## Model Relationships
- Django _set
Automatically groups all the related objects into a property
To call the objects related to the owner all we have to do is call ‘modelName_set’

- Define many-to-many relationship
```sh
followers = models.ManyToManyField(‘self’)
following = models.ManyToManyField(‘self’)
```

## [RESTful API Designing guidelines](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9 )

## [Django Rest Framework](http://www.django-rest-framework.org/)
```sh
pipenv install djangorestframework
```
- Serializer converts Python Object to JSON (and other way around)
- Bridge between Python and JavaScript


## [Django Rest Framework APIView](http://www.django-rest-framework.org/api-guide/views/)


### 12/22/2017

## Django URL Dispatcher
- [Let Django know the requested urls](https://docs.djangoproject.com/en/1.11/topics/http/urls/)
```sh
url(r'^images/', include('sodagram.images.urls', namespace='images')) 
```

## Nested Relationships Serializers
- [Instead of getting the foreign key, get Serializer for image](http://www.django-rest-framework.org/api-guide/relations/#nested-relationships)
```sh
image = ImageSerializer()
```

## Hidden Model Fields in Django
- [Related Objects Reference](https://docs.djangoproject.com/en/1.11/ref/models/relations/)
- [What is `related_name` used for in Django?](https://stackoverflow.com/questions/2642613/what-is-related-name-used-for-in-django/2642645#2642645)

## The Request Object in Django
- Django uses request and response objects to pass state through the system.
- When a page is requested, Django creates an HttpRequest object that contains metadata about the request.
- Then Django loads the appropriate view, passing the HttpRequest as the first argument to the view function. 
- Each view is responsible for returning an HttpResponse object.
- Mostly used attributes (POST, USER)
- [Request and Response Objects](https://docs.djangoproject.com/en/1.11/ref/request-response/)
- [Request Attributes set by Middleware (user)](https://docs.djangoproject.com/en/1.11/ref/request-response/#attributes-set-by-middleware)
- [Django Middleware Documentation](https://docs.djangoproject.com/en/1.11/topics/http/middleware/)
- [Understanding Django Middlewares](http://agiliq.com/blog/2015/07/understanding-django-middlewares/)

## Making Queries
- [Making Queries on Django](https://docs.djangoproject.com/en/1.11/topics/db/queries/)
- [QuerySet Reference](https://docs.djangoproject.com/en/1.11/ref/models/querysets/)

## Capturing arguments on Django URL's
```sh
regex=r'(?P<image_id>[0-9]+)/like/'
```
- [Testing Regular Expression](https://regex101.com/)

### 12/23/17

## [Limiting QuerySets](https://docs.djangoproject.com/en/1.11/topics/db/queries/#limiting-querysets) 
```sh
>>> Entry.objects.all()[:5]         // returns first five objects
``` 
## Getting User Profile
- Fields to be shown when clicking profile
- username
- name
- bio
- website
- post count
- followers count
- following count
- images
- Define UserProfileImageSerializer in images.serializers
```sh
class UserProfileImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields =(
            'id',
            'file',
            'comment_count',
            'like_count'
        )
```
- Import UserProfileImageSerializer from images.serializers to user.serializer
```sh
from sodagram.images import serializers as images_serializers

// and get images of this profile

images = images_serializers.UserProfileImageSerializer(many=True)
```    
            
### 12/24/17

## Hashtag
- [django-taggit](https://github.com/alex/django-taggit)
- [Django Taggit Documentation](https://django-taggit.readthedocs.io/en/latest/)
```sh
pipenv install django-taggit
python manage.py migrate
```
- [Django Taggit Rest Serializer](https://github.com/glemmaPaul/django-taggit-serializer)
```sh
pipenv install django-taggit-serializer
```


### 12/28/17

## Change password
- [Check password documentation](https://docs.djangoproject.com/en/1.11/ref/contrib/auth/#django.contrib.auth.models.User.check_password)
- ``check_password(raw_password)``
- ``set_password(raw_password)``

## JWT Token (JSON Web Token)
- [Introduction to Json Web Tokens](https://jwt.io/introduction/)
- [REST framework JWT Auth](http://getblimp.github.io/django-rest-framework-jwt/)
- ``pipenv install djangorestframework-jwt``
- Protection for our API
```sh
// include into base.py
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}
```
```sh
// include into urls.py
from rest_framework_jwt.views import obtain_jwt_token
#...

urlpatterns = [
    '',
    # ...

    url(r'^api-token-auth/', obtain_jwt_token),
]
```

## [Postman](https://www.getpostman.com/)
- API call using JSON Web Token


### 12/29/17

## Login : Signup 
- [Django Rest Auth on Github](https://github.com/Tivix/django-rest-auth)
- [Django Rest Auth Documentation](http://django-rest-auth.readthedocs.io/en/latest/)

## Login with Facebook
- [Django-allauth](http://django-allauth.readthedocs.io/en/latest/installation.html)