# eHacks 2024 Website

This is the website for SIUE's eHacks Hackathon.

## How to Setup Environment

### Note Before Starting
This Repository has a dev container setup in case you do not want to install npm and firebase cli on your host machine. However, webpack has issues recognizing changes and recompiling the components automatically when the repository is stored on a Windows filesystem. You can alleviate this by storing it inside of a WSL filesystem or using linux as your host. The container has not been tested on Mac.

If you would like to setup without using the dev container, you can install npm locally and download all dependencies using "npm install" and then use "npm start" to start the development server.

### How to Setup Dev Container
Make sure you have the Dev Containers extension for VS Code and Docker (Desktop) installed on your local machine. Clone this repo and open it in VS Code. Use the command pallet to find "Dev Containers: Rebuild and Reopen in Container" and run it. This should take care of setting up a docker container, connecting you to it, and installing all of the dependencies. Now to start up a development server, just run "npm start" from a terminal inside VS Code.
