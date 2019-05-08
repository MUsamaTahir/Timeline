#Project Title
Simple Angular Application

#Project Detail
It is a simple app built on Webpack and Kraken.js, The technologies used in this project are Angular, Node, Express, Kraken and Database in Postgre Sql used and accessed with the help of sequelize orm. It is a simple application having functionality of User signup and signin with JWT authentication. It is a timeline app which help users to maintain their timeline which can be edited and deleted according to the requirement.

#Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#Pre-requisites
Before running this project on your machine you have to install the following things

-> Node.js
-> Yo-masker
-> Webpack

#Installation
It's not something to be worried about, as we will not be installing each and everything individually. For our ease, we will be using a yeoman generator for this purpose, named "generator-maskers".

Steps :
These are the steps which we followed when we started building this project.

1- First install Yeoman
npm install -g yo

2- Then Install this generator
npm install -g generator-maskers

By running this command you will get a proper file structure in your folder.

3- Now go to your package.json and downgrade the version of core-js from the current version to 2.5.7.
You have to simply replace the version with 2.5.7 and run the command 'npm install'.

4- Now you are good to go and start building this project.

#Important Commands
1- npm run build (to run the build script from package.json)

2- npm run server-start (to run the server-side / API of the project)

3- npm run client-start (to run the client-side / Front-end of the project)

4- npm run dev-start (it runs project as a whole, which means both client-side and server-side)

#Built-With

-> [Generator Masker](https://www.npmjs.com/package/generator-maskers) -A Yeoman Generator
-> [Webpack](https://webpack.js.org/) - JS app bundler 