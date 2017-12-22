# Development Note

### 12/18/2017 

## Development Tools 
- Visual Studio Code
- XCode
- Android Studio
- Genymotion
- Expo XDE
- Expo Client 
- Nodejs
- NPM
- Yarn
- Python 3.6
- Pip
- Pipenv
- Postgres

## Django 
- LINK: https://www.djangoproject.com/start/overview/
- Framework 
- Not a programming language
- Very fast for developers 
- Secure
- Handy
- Used by (Instagram, Pinterest, Spority, NASA)

## Framework vs Library  
- LINK: https://www.programcreek.com/2011/09/what-is-the-difference-between-a-java-library-and-a-framework/
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
- Cookiecutter Django (https://github.com/pydanny/cookiecutter-django)

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

- Django Model Field: https://docs.djangoproject.com/en/1.11/ref/models/fields/ 
- Django Model Documentation: https://docs.djangoproject.com/en/1.11/topics/db/models/ 


## Abstract base classes
- Abstract base classes are useful when you want to put some common information into a number of other models.
- https://docs.djangoproject.com/en/1.11/topics/db/models/#abstract-base-classes 


## Model Relationships
- Django _set
Automatically groups all the related objects into a property
To call the objects related to the owner all we have to do is call ‘modelName_set’

- Define many-to-many relationship
```sh
followers = models.ManyToManyField(‘self’)
following = models.ManyToManyField(‘self’)
```

## RESTful API Designing guidelines
- https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9 

## Django Rest Framework
- http://www.django-rest-framework.org/
```sh
pipenv install djangorestframework
```
- Serializer converts Python Object to JSON (and other way around)
- Bridge between Python and JavaScript


## Django Rest Framework APIView
- http://www.django-rest-framework.org/api-guide/views/


### 12/22/2017

## Django URL Dispatcher
- Let Django know the requested urls
```sh
url(r'^images/', include('sodagram.images.urls', namespace='images')) 
```
- https://docs.djangoproject.com/en/1.11/topics/http/urls/

## Nested Relationships Serializers
- Instead of getting the foreign key, get Serializer for image
```sh
image = ImageSerializer()
```
- http://www.django-rest-framework.org/api-guide/relations/#nested-relationships

