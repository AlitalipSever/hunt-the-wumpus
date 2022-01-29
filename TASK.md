Here's the next step in our hiring process. Below are three programming problems. Please read all three descriptions thoroughly then create a program to solve **ONE of the problems**. If you submit more than one solution, we will review only one.

We are seeking evidence of clean, simple, tested code, with good domain design and OOP or functional skills. We would like to see that your code has been developed using TDD (desirable) and expect a good level of knowledge of the chosen language.

---
## Note:

For the solution, we request that you use either Java, Kotlin, Scala, JavaScript, Typescript, Python, Rust or Clojure.  
We need to be able to build and run your code ourselves.  
You should provide sufficient evidence that your solution is complete by indicating that it works correctly against the supplied test data.  
Please use the URL in the email to submit your assignment.  
We encourage candidates to include the code revision history in their submission to show their commits.  

---

## Rules:
Do not use any external libraries to solve this problem, but you may use external libraries or tools for building or testing purposes. Specifically, you may and are encouraged to use unit-testing libraries and build tools available for your chosen language (e.g., JUnit, ScalaTest, Jest, ts-node etc.)

Please do not put any build result into the repository. The .gitignore file should block out most such files already.

Please include a brief explanation of your design and assumptions, along with your code, as well as detailed instructions to run your application.

To assist us carrying out an unbiased review, please do not include your full name in the source code or Readme file.

We assess a number of things including the design aspect of your solution and your object oriented or functional programming skills. While these are small problems, we expect you to submit what you believe is production-quality code; code that you’d be able to run, maintain, and evolve. You don’t need to gold plate your solution. We ask that you strive for simplicity, instead of an over–sophisticated solution

To assist with speeding up the recruitment process, we would appreciate if you could return this technical assignment to us within __seven days__, from the date that you receive these instructions.

---

# Problem 1: The 24 Game
The [24 Game](https://en.wikipedia.org/wiki/24_Game) tests one's mental arithmetic.

## Task
Write a program that randomly chooses and displays four digits, each from 1 ──► 9 (inclusive) with repetitions allowed.

The program should prompt for the player to enter an arithmetic expression using just those, and all of those four digits, used exactly once each. The program should check then evaluate the expression.

The goal is for the player to enter an expression that (numerically) evaluates to 24.

Only the following operators/functions are allowed: multiplication, division, addition, subtraction  
Division should use floating point or rational arithmetic, etc, to preserve remainders.  
Brackets are allowed, if using an infix expression evaluator.  
Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).  
The order of the digits when given does not have to be preserved.

## Notes
The type of expression evaluator used is not mandated. An RPN evaluator is equally acceptable for example. Please write a parser and do not use `eval()`. The task is not for the program to generate the expression, or test whether an expression is even possible.

## Examples
> solve: 1 2 3 4  
> (4 * 3 * 2) + 1  
> no, this is 25  

> solve: 1 2 3 4  
> 4 * 3 * (1 + 1)  
> sorry, this is not a valid expression

> solve: 1 2 1 1  
> 12 * (1 + 1)  
> sorry, this is not a valid expression

> solve: 1 1 1 1  
> (1 + 1 + 1 + 1)!  
> sorry, this is not a valid expression

> solve: 8 4 7 4  
> (7 - (8 / 8)) * 4  
> yes, this is indeed 24

# Problem 2: Sales Tax
Write an app to calculate the tax of shopping carts

## Task

You get this information from your product owner:  
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions. When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid.  The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

You also get the following input/output pairs:

shopping-cart1.txt
> 1 book at 12.49  
> 1 music CD at 14.99  
> 1 chocolate bar at 0.85

receipt1.txt
> 1 book: 12.49  
> 1 music CD: 16.49  
> 1 chocolate bar: 0.85  
> Sales Taxes: 1.50  
> Total: 29.83

shopping-cart2.txt
> 1 imported box of chocolates at 10.00  
> 1 imported bottle of perfume at 47.50

receipt2.txt
> 1 imported box of chocolates: 10.50  
> 1 imported bottle of perfume: 54.65  
> Sales Taxes: 7.65  
> Total: 65.15

shopping-cart.txt
> 1 imported bottle of perfume at 27.99  
> 1 bottle of perfume at 18.99  
> 1 packet of headache pills at 9.75  
> 3 box of imported chocolates at 11.25

receipt3.txt
> 1 imported bottle of perfume: 32.19  
> 1 bottle of perfume: 20.89  
> 1 packet of headache pills: 9.75  
> 3 imported box of chocolates: 35.45  
> Sales Taxes: 7.80  
> Total: 98.28

# Problem 3: Hunt The Wumpus
Create a simple implementation of the classic textual game [Hunt The Wumpus](https://en.wikipedia.org/wiki/Hunt_the_Wumpus).

## Task

The game is set in a cave that consists of a 20 room labyrinth. Each room is connected to 3 other rooms (the cave is modeled after the vertices of a dodecahedron). The objective of the player is to find and kill the horrendous beast Wumpus that lurks in the cave.

The player has 5 arrows. If they run out of arrows before killing the Wumpus, the player loses the game.

In the cave there are:

One Wumpus  
Two giant bats  
Two bottomless pits  

If the player enters a room with the Wumpus, he is eaten by it and the game is lost.  
If the player enters a room with a bottomless pit, he falls into it and the game is lost.  
If the player enters a room with a giant bat, the bat takes him and transports him into a random empty room.  

Each turn the player can either walk into an adjacent room or shoot into an adjacent room.

Whenever the player enters a room, he "senses" what happens in adjacent rooms. The messages are:

Nearby Wumpus: "You smell something terrible nearby."
Nearby bat: "You hear a rustling."
Nearby pit: "You feel a cold wind blowing from a nearby cavern."

The player wins the game if he shoots in the room with the wumpus. If he shoots into another room, the Wumpus has a 75% of chance of waking up and moving into an adjacent room: if this is the room with the player, he eats him up and the game is lost.
