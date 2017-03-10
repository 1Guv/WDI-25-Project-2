#**Supercar Swap Club**

######GA WDI-25 London - Project 2:

This website takes the car rental theme but with an added twist. The idea is that super car owners in London may want to drive other supercars. This evolved into a supercar swap club, where paid members would be able to contact each other and arrange to swap supercars in London. I kept the locality to London, as I didnt think that a supercar car swap would work if the distance was too great.

This version concentrates on London, but this could easily be replicated to other cities so members would have access to local supercars in their area. 

At the moment you can only search for supercars once you are a fully paid member. The membership fee will be high to deter non supercar owners.

(Currently I have omitted the payment option and any other security checks for this project)

[Check it out here - Supercar Swap Club](https://fast-atoll-53678.herokuapp.com/)

The app is also fully responsive and ongoing project.

Supercar Car Swap - mobile app screen shot

![Supercar Car Swap](https://github.com/1Guv/WDI-25-Project-2/blob/master/src/assets/images/Screen%20Shot%202017-03-09%20at%2023.01.26.png?raw=true "Supercar Car Swap homepage screen shot")


Supercar Car Swap Homepage:

![Supercar Car Swap](https://github.com/1Guv/WDI-25-Project-2/blob/master/src/assets/images/Screen-Shot-1.png?raw=true "Supercar Car Swap homepage screen shot")

Map of current super cars in London:

![Supercar Car Swap](https://github.com/1Guv/WDI-25-Project-2/blob/master/src/assets/images/screen-shot-3-new.jpg?raw=true "Supercar Car Swap map")

##Approach / How it works:

* When you enter the website you will need to register to get full access or read about how it works.
* Once registered you can add your supercar to the list and view it on the map.
* The map will show the supercar badge (currently set to the Ferrari badge) as a marker on the map.
* You can click on a user marker and then link to members profile, where you can contact them using the contact details displayed.

##The build:

* The project was to build a full restfull app using an API
* Used Node, Express, Ajax, JSON, JS, MongoDB, HTML 5, CSS and jQuery were used to create the website.
* Used Google Map API to show supercars on the map in London.
* Used Trello for my project board:

![Trello](https://github.com/1Guv/WDI-25-Project-2/blob/master/src/assets/images/Trello-Project-2.png?raw=true "Trello")

* Used Balsamiq for my wireframing:

![Balsamiq](https://github.com/1Guv/WDI-25-Project-2/blob/master/src/assets/images/Balsamiq-Project-2.png?raw=true "Trello")


##Problems & Challenges:


The main challenge that I encountered was creatng the restful routes and organising my schema so it met the objectives of the project. I might need to revisit this when I add the extra functionality listed below.

The main blocker was time, so many things needed attention I used Trello to document the most impirtant tasks for MVP knowing that I could add the extra functionality later on.

##If I had more time I would:

- To edit and delete your supercar
- To provide a list of car badges that could be used as a marker on the Google map
- Add google map to each profile so they can confirm correct location
- Add Paypal membership button to register
- Think of otherways to omitt non supercar owners
- Maybe add links to short term car insurance firms so its easier for users to get insured on each others car
- Add car authentication by inputting the inidvidual registration
- Add a car gallery for each member
- Add another API to auto populate more information about each vehicle
- Add Google, Facebook and GitHub logins
- Add secure routes
- Add customised Google map
