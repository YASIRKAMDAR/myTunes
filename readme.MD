# Project Title

myTunes frontend app

## Github Path
https://github.com/YASIRKAMDAR/myTunes

## Hiroku app link: 
https://sleepy-coast-25326.herokuapp.com

### Application details
The application is created using react/redux client side and nodeJS express server side for the api calls to itunes API.

### Assignment status
Assignment task breakup status is as follows:
- Implement a small front end application that uses the iTunes API. => Done
- The application should allow a user to search for artists and get a list of the albums associated with that artist. => Done
- The user should be able to see the artwork for each album, as well as basic information about it. => Done
- They should be able to add an album to a list of favourites. => in progress
- For albums that are already on the list, the user should be able to remove the album from that list. => TBD
- The user should be able to ﬁlter the list of favourites by artist. For example, if the favourites list contains two albums by Michael Jackson, and three albums by Janet Jackson, the user should be able to show only the albums by Michael Jackson. => TBD
- The application should be usable regardless of screen size.  => Done using  Reactstrap (Bootstrap 4)

## Setup 
1) Clone the application source code
2) Go to root folder for server app setup
3) install dependencies
` npm install `
4) Go to client folder within server folder for react client app setup
` cd client `
5) install dependencies
` npm install `

## Run dev application
1) Open a command console
2) Go to root folder for start server app
3) run server app
` npm start `
4) Open another command console to run client parallely
4) Go to client folder within server folder to run react client app 
` cd client `
5) run client app
` npm start `
6) Use the url following url to run the application
` http://localhost:3000/ `

## design and implementation decisions 
The application stack used is as fillows

1) NodeJs Express Backend for API Gateway and integration
2) React application frontend (Creat react app) [Webpack, es6]
3) Bootstrap 4 using reactstrap package for responsive UI
4) local storage to manage user favourites. Local storage allows the application to run without a datastore but limits the user to have the data specific to a device and browser used.
  


