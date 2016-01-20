# Flux-Boilerplate

> An application architecture for React utilizing a unidirectional data flow

##Installing
First clone this repo to your local machine:

    git clone https://github.com/TomasAnderson/Flux-Boilerplate.git

Install dependencies, run:

    npm install

To build the project, run this command:

    npm start
    
This will perform an initial build and start a watcher process that will update bundle.js (auto-generated file) . This watcher is based on Browserify and Watchify. It transforms React's JSX syntax into standard JavaScript with [Reactify](https://github.com/andreypopp/reactify).

After debugging, run command:

	npm build

This will build bundle.js for you.

To run this app, simply open the index.html file in a brownser.   
