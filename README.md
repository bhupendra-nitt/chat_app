# chat_app
## Running this app 
 #### with docker-  `docker-compose up`
 #### withour docker- `yarn install && yarn run dev` or `npm install && npm run dev`
 
## Steps taken in building this application
1. This project was started from the scratch and no boilerplates were used
2. Socket.io was mocked, following the docs given on the site. https://socket.io/get-started/chat/
2. First a project was initialized and an express server was added
3. Server was able to handle request to render views.
4. `Pug` template engine was added to render react application
5. `npm` packages related to react were added.
6. A simple react page was created which was render using template engine.
7. Then webpack was added for running and optimizing build.
8. Once app was up with react and webpack, focus was on building a simple application which 
  can do basic chatting operation.
9. One `class` component was created and few other functional components were created. 
10. There were basically two parts, contact list and chat window.
11. From contact list we would be able to select any friend and chat with him and see history 
  of the same session. 
12. Because of time constraint all chats are being stored in localStorage and being 
  removed on page unload.
  
  
## How to access app
  1. After running app with or without docker, go to http:localhost:3000/?user_id=1
  2. `user_id` is a id given to current user who can chat with all remaining people 
    in list
  3. You can run this app in two browser and with http:localhost:3000/?user_id=1 & 
    http:localhost:3000/?user_id=2 and can see interaction between two people.
  4. There is default list of 10 people as of now in this application which can 
    be interact among themselves.
    
  #### This is a very quick attemp to build a chat application using React, Express and Socket.io.
  #### Due to time constraints could not add proper styles.
