# Rock Paper Scissors

https://jyfoil.github.io/rock-paper-scissors/

## Project Description

This project is a rock, paper, scissors game that will be played against a computer. The game will end when either the player or computer reaches 5 rounds won. With each round listing who won, a scoreboard that keeps track, and a message declaring the final winner of the game. The conditions in which the player wins or computer wins depends on the following:

- Rock beats Scissors
- Paper beats Rock
- Scissors beats paper
- Same choice results in a draw

## Reflection

One of my early concerns included whether to use function declarations or function expressions. I ended with using function delcarations so I could call use Hoisting.
From there I had some trouble juggling all the different function declarations I had in the file and the abundance of conditionals. Looking back, it would have been ideal to use more function expressions for the functions I only called once.

Using event listeners was fairly simple but I ran into trouble when I had to display a scoreboard that would update each round. The scoreboard would either not update or would not display. Eventually this was solved by putting the text content of the scoreboard into a function and calling it each button press to update it. Overall this was a excellent project to help me understand functions and especially DOM manipulation.
