# Know Your Gov

**Check it out!** - https://knowyourgov.brandonelhaj.now.sh
**Know Your Gov Backend Repo** - https://github.com/bduo/knowyourgov-backend

![Know Your Gov App Screenshot](/src/images/knowyourgov_home.png "Know Your Gov")

## Summary

Know Your Gov provides users with their elected representatives information at the state and federal level. The application retrieves their representatives data through their physical address. The user can choose to do a one time search or register their address with the app to load their representatives information. The content is provided by Google's Civic Info Api and gives the user a way to contact their elected representative by phone, website, and email. Know Your Gov is an excellent a way of finding out who represents you and to hold them accountable!

## Features 
- Find out your representatives information at the state and federal levels
- Register for an account to save your representatives information for future reference

## APIs Used
- Google Civic Info API
- knowyourgov (backend API)

## Stack Used
- React.js
- CSS
- Node.js
- Express
- PostgreSQL

# API Documentation

**Starting Know Your Gov**

- `npm start`

**Testing Know Your Gov**

- `npm test`

## Know Your Gov API

**Login Authentication**

- `POST /authorization/login`

**Post user to database**

- `POST /users`

**Get user profile from database**

- `GET /users/:user_id`

## Google Civic Info API

- API Documentation - https://developers.google.com/civic-information/docs/v2/

## Allowed HTTPs Requests

- `POST` Add a user to the database or login to the app

- `GET` Retrieve a user from the database 

## HTTP Responses

- `200 OK` - Successful login response or successful get user request

- `201 Created` - The request was successful and the user is created

- `204 No Content` - The request was successful, but no content was returned

- `400 Bad Request` - The request was not understood or missing required parameters

- `401 Unauthorized` - Authentication failed or user did not have correct login permissions

- `404 Not Found` - Resource was not found

![Know Your Gov App Reps Screenshot](/src/images/knowyourgov_reps.png "Know Your Gov Reps")



