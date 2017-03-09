#**Supercar Swap Club**

######GA WDI-25 London - Project 2:

This website takes the car rental theme but with an added twist. The idea is that super car owners in London may want to drive other supercars. This evolved into a supercar swap club, where paid members would be able to contact each other and arrange to swap supercars in London. I kept the locality to London, as I didnt think that a supercar car swap would work if the distance was too great.

This version concentrates on London, but this could easily be replicated to other cities so members would have access to local supercars in there area. 

At the moment you can only search for supercars once you are a fully paid member. The membership fee will be high to deter non supercar owners.

(Currently I have omitted the payment option and any other secuirty checks for this project)

[Check it out here](https://fast-atoll-53678.herokuapp.com/)

The game is not fully responsive at this time as this is an ongoing project.

![Animal Conundrum - Mobile screen shot 1](https://github.com/1Guv/project-1/blob/master/images/AC-mobile-1-small.jpeg?raw=true "Animal Word Conundrum - Mobile screen shot")

Home page screen shot below:

![Animal Conundrum](https://github.com/1Guv/project-1/blob/master/images/Animal-Conundrum-1%20.png?raw=true "Animal Word Conundrum - screen shot")

##Rules:

* You have 20 seconds to guess the word displayed.
* You will get 10 points for every word guessed correctly.
* You will also get 5 seconds added to the timer for every correctly guesed word (yes you can go forever if you are good enough or remember all the words).

![Animal Conundrum](https://github.com/1Guv/project-1/blob/master/images/Animal-Conundrum-2.png?raw=true "Animal Word Conundrum - screen shot")

##Approach / How it works:

* Choose a difficulty level and then click PLAY to go to the game.
* Click on the START button and a random jumbled up word will appear.
* You will be playing against the timer which will countdown from 20 seconds.
* If a guess is correct, the letter will turn green, and flip the word and then blank the input box ready for you to guess the next word.
* To signify a correctly guessed word you will hear a shoryuken!
* You will also get a complimentary 5 seconds added to the timer and 10 points for every word guessed correctly until the timer runs out.
* If the word is not guessed correctly then the input text will turn red and sound a buzzer for you to guess again.
* As of yet there are no clues for the more difficult words.
* The game is over when the timer reaches 0.

##The build:

* HTML 5, CSS and jQuery were used to create this game.
* Animation was created using the Animate.css stylesheet.
* The web font 'Lobster 2' has been used to style the text.

##Problems & Challenges:

The main challenge that I encountered was creatng and organising the sliding screens so the right screen activated and slid in or out depending on the current screen the user was viewing. I also made sure that the screen size was dynamically adjusted for the users viewing experience.

I spent a lot of time thinking about where to position the various elements so not to clutter the screen and to make it as simple as possible as well as intuitive.

The game logic was developed quickly after the whole page was setup and styled accordingly. The game engine was then tweaked even further to provide the visual confirmation of the correct and incorrect answers and then I added extra functionality as I continued developing the game. Further testing revealed more bugs which were quickly fixed.

##If I had more time I would:

Some of the words can be quite difficult to guess so if the word was not guessed correctly I would display the word after the timer had ran out.

In the future I would also like to connect the game to a database and provide a dynamic high score screen, this has been created and ready to use once I have gathered the relevant database knowledge.

In the next iteration I would also develop more themes and change the background images and words dynamically depending on the theme chosen.

This would lead to a dynamic points system with an increase in time added to the timer depending on the difficulty chosen by the user.

For visual perfection I would slide the reset and score displays onto the screen inkeeping with the current visual user experience.

The IMPOSSIBLE mode refers to animals that I have never heard of, so I would maybe add some hints or clues that slide in and out to help the user.

