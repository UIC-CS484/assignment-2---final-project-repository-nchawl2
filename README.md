# CS 484: Final Project

## Project Title: FootWiz

[FootWiz Webpage](https://cs484-footwiz.herokuapp.com/)

FootWiz is a comprehensive dashboard containing all the latest information and statistics from the top 5 leagues in Europe - Premier League, La Liga, Bundesliga, Serie A, and Ligue 1. Users have the ability to lookup the standings for each league for the past ten seasons, as well as check the live scores from over 880+ football leagues worldwide, in addition to providing the ability to interact with data about match events, lineups, statistics, and so on.

## <br> Motivation
As someone who loves the sport, I wanted to create a project that focuses on creating an interactive dashboard with all the information about the leagues and teams I would like as a user. My main aim is to provide information in a concise manner, but also allow the user to dive in and get more detailed information if they would like.

## <br>  Entity Relationship Diagram
![ERD Diagram](https://github.com/UIC-CS484/assignment-2---final-project-repository-nchawl2/blob/master/extras/ERD.png)

## <br>  Front-End Data Manipulation
In this project, the front-end charts and visualizations are implemented through the pre-existing widgets provided by the API that is used in the project. The widgets are used to visualize league tables and will be used to display additional information requested by the user in the future.

## <br>  RESTFul API
The API used in this project is [API-Football](https://www.api-football.com/). The documentation to the API provides multiple end-point use cases, as well as pre-existing widgets that are implemented in the web application. An API request is made once a user selects an input, after which the data is displayed using the widgets that implement charts.

#### Retrieving team standings for a given league and season
![api_1](https://github.com/UIC-CS484/assignment-2---final-project-repository-nchawl2/blob/master/extras/API_1.png)

#### Retrieving all the live match scores from leagues around the world
![api_2](https://github.com/UIC-CS484/assignment-2---final-project-repository-nchawl2/blob/master/extras/API_2.png)

## <br>  Testing
Unit tests will be written to validate user inputs as well as check internal logic of the application. The current unit test checks the passwords to make sure strong passwords are enforced. Future tests will focus on evaluating each data layer. 

## <br>  Development Strategy
Early on, I decided to use an agile development strategy to create my web application as I felt it was the best approach to working individually on the project.

## <br>  Development Tools
Visual Studio Code, Repl.it , Chrome DevTools, GitHub

## <br>  Website
[FootWiz Webpage](https://uic-cs484.github.io/assignment-1---team-project-proposal-nchawl2/proposal.html)

## <br>  Developer
Neil Chawla  
NetID: nchawl2  
Team 20  
CS 484, Fall '21