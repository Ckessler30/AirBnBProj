# BearBNB

## BearBNB Overview
BearBNB is a full stack AirBNB clone that specifically focuses on adventure/outdoors style lodging.  Logged in users can browse several hand picked locations with an abundance of outdoorsy style spots that are available for booking.  Logged in users can also choose to list their very own spot for others to enjoy just as easily. 

## BearBNB Architecture 
BearBNB is build with a React/Redux frontend and a Python/Flask backend that is working PostgreSQL as a database.  The querying is done on the backend using SQLAlchemy.

## Frontend Technologies
### React
BearBNB is a React application that utilizes a good bit of front end logic to display dynamic features.

### Redux
BearBNB is quite dependent on Redux state so that the correct information can be utilized at the correct moments.  Redux thunks are constantly making calls to the backend API to retrieve data.

## Backend Technologies

Bearbnb uses a Python/Flask backend with SQLAlchemy and Alembic to work with a PostgreSQL database that holds all my essential information.

### Flask
Flask was my top choice for my backend considering the simplicety and smooth coding in Python. This made it very easy and effecient to set up my backend and get the ball rolling really quickly.

### SQLAlchemy
SQLAlchemy was a vital tool in building all of the database models required for an easy and intuitive experience on the app.  It is also my favorite at the moment in terms of creating models and associations between models, it is a lot simplier than using Sequelize in my opinion.

### PostgreSQL
I chose PostgresSQL as my databse because it is very intuitive and simple to work with and works very well with SQLAlchemy and Alembic to manipulate data.


## Conclusion
I am extremely happy with how Bearbnb turned out after just two weeks of working time.  There are definitley some more features I would like to add in the future so that it can become even more functional than it already is.  I plan to implement more customizable features as well as more personalized features so that each user can get an experience of their own based off of their current location.


