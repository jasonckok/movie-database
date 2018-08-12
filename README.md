# Movie Database

A Spring based Maven application that provides RESTful web services as the backend.
This is an ongoing project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Note that there are two branches; ```dev``` and ```master```. The default branch is ```dev```.

```dev``` branch is specifically used for development and testing. Some features may branch off from here.
```master``` branch is stable/final release production.

### Installing

Clone the project

```
$ git clone https://github.com/jasonckok/movie-database.git
```

Open the project in your favorite editor (Netbeans, Eclipse, IntelliJ IDEA, etc) and run it. Note that it may take some time for maven to download the necessary ```jar``` files.

## REST API

A list of REST API endpoints available.

### GET

To get the full list
```
localhost:8080/movies
```
To get a specific movie using ```id```
```
localhost:8080/movies/{id}
```
where ```{id}``` is the id and the format is
```
{
    "id": "1",
    "name": "Avengers: Infinity Wars",
    "year": "2018"
}
```

### POST
To post a movie
```
localhost:8080/movies/
```
where the ``JSON`` format is
```
{
    "id": "value",
    "name": "String",
    "year": "YYYY"
}
```

## Built With

* [Spring Boot](https://spring.io/) - Application Framework
* [Maven](https://maven.apache.org/) - Dependency Management

## Tools Used

* [Eclipse](https://www.eclipse.org/) - IDE
* [SourceTree](https://www.sourcetreeapp.com/) - Git GUI
* [Postman](https://www.getpostman.com/) - API Development and Testing

## Author

* **Jason Kok** - *Backend* - [github.com/jasonckok](https://github.com/jasonckok)
