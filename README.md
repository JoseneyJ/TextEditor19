# TextEditor19
# 19 Progressive Web Applications (PWA): Text Editor

## Your Task

As you have progressed through this course, you have put together a number of impressive projects that you can show off to potential employers. This project is no exception; in fact, it features some of the most impressive expressions of the concepts you have learned so far.

Your task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To build this text editor, you will start with an existing application and implement methods for getting and storing data to an IndexedDB database. You will use a package called `idb`, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

You will deploy this full-stack application to Heroku using the [Heroku Deployment Guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide).

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## Deployed Application URL 
https://arcane-hamlet-10067.herokuapp.com

## Application Snippets

<img width="835" alt="Screenshot 2023-05-01 at 11 29 04 PM" src="https://user-images.githubusercontent.com/119374215/235573566-109ba395-407e-491f-96bc-25f962874164.png">

Registered service worker:

<img width="1435" alt="Screenshot 2023-05-01 at 11 44 06 PM" src="https://user-images.githubusercontent.com/119374215/235575009-5bccc8f7-dca6-477e-8f07-d8e9cfeb0523.png">


Cache Storage:

<img width="1435" alt="Screenshot 2023-05-01 at 11 46 29 PM" src="https://user-images.githubusercontent.com/119374215/235575256-a83ceb4c-3129-4eb9-a82c-37a9732b8579.png">


Manifest File:

<img width="1435" alt="Screenshot 2023-05-01 at 11 48 31 PM" src="https://user-images.githubusercontent.com/119374215/235575428-05e38c2a-8c6f-414e-b6e0-6cca7ff33bf7.png">


IndexedDB:

<img width="1435" alt="Screenshot 2023-05-01 at 11 49 39 PM" src="https://user-images.githubusercontent.com/119374215/235575543-03505c29-2b8c-4931-ae2d-2001f3704a41.png">


