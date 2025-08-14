# Simple CRUD

A simple CRUD app sandbox for learning CRUD basics

## Description

This project was made to just learn CRUD basics. Including best practices, file structure, server aspects, and client aspects

## Server

The server was written in JS using express and cors, hosted with NodeJS. Express simplifies API and CORS handles security for clients acessing API. Connection to the database was made using Mongoose. Mongoose simplifies communication with mongoDB database and collections.

The file structure follows best practices. Under the server folder will contain the .env and .gitignore and you place the database URI in there. The server.js file will contain the server logic, and db.js file will contain the db connection logic.  
The server.js file specifies a special Note Router that starts on /notes and uses the notesRoutes.js file. the noteRoutes.js file just contains the routes ie. the "link" and what HTTP request to make at that link or route. The actual method being called will come from the noteController.js. In noteController.js it contains the logic and method being called at that route ie. the http request. The functions are all asyncronous and handled in try, catch to avoid the server crashing on an error. A special schema also needs to be created using Mongoose to specify what the "Note" model looks like, what data it will contain etc. The controller uses the mongoose Note schema to call the database to get the items. 

```
Server File Structure:

├─ Server/
 │   ├─ .env
 │   ├─ .gitignore
 │   ├─ server.js
 │   ├─ db.js
 │   ├─ package.json
 ├─ routes/
 │   └─ noteRoutes.tsx
 ├─ models/
 │   └─ Note.ts
 ├─ controllers/
 │   └─ noteController.ts
```
## Authors

[Bryan Hu](https://www.linkedin.com/in/hu-bryan)

## Getting Started

### Dependencies
* Tailwind
* Vite
* Axios
* Mongoose
* CORS
* NextJS
* Express

### Installing

* Clone repo

### Executing program

```
cd server
npm run dev
cd client
npm run dev
```



## Acknowledgments

Inspiration, code snippets, etc.
