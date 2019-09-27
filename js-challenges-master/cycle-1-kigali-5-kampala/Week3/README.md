## week three

### Challenge one of week three

#### Blog Post
One of the most important areas in computing and software engineering is Algorithms and data structures. As programmers, we use these concepts in our day to day work.

Write a blog post sharing your understanding of algorithms and scenarios where you have used data structures or would use data structures. (assume you have both technical and non-technical readers.)

#### Sorting 
Given an array containing numbers and one character strings, write a function that takes the array and returns an object with property names evens, odds, and chars. The value for evens is an array of sorted even numbers and odds is an array of sorted odd numbers and chars is an array of sorted character strings.

```
For example:
arraySort([2,0,6,5,1,7,’z’,’a’])
# returns {'evens': [0, 2, 6], 'odds': [1, 5, 7], chars:['a', 'z]}
```
In the arraysort folder there are two files arraysort.js and arraysort.test.js, arraysort.test.js includes minimal tests for the challenge, implement `arraySort()` in arraysort.js to pass all the tests. Feel free to write more tests in arraysort.test.js

Create a new repository for the solution and copy over the challenge files to the new repository. You are expected to use version control and share a link to the remote repository with your Learning facilitator for review.

##### How to run the tests
Navigate to arraysort folder in the terminal(command prompt) and run the following commands
1. `yarn install`
2. `yarn test`

### Extra challenge
Write a javascript program/function to find missing numbers from an array. Follow a Test Driven Development approach while completing this challenge.

```
Input: [1, 2, 3, 5, 6, 7, 9]
Output: [4, 8]
```

### Challenge two of week three

#### Final blog Post
It has been a whole two weeks of learning new programming concepts using the javascript programming language.

Write a blog post about the javascript programming language and a thing or two that stand out for you about javascript. The blog post does not necessarily need to be technical but it can be technical if you wish.

For example it can be a short tutorial on a concept you have learnt or how you solved one of the programming challenges this week.

#### Object Oriented Programming(OOP)

##### Bank account
A bank account can be accessed in multiple ways. Clients can make
deposits and withdrawals using the internet, mobile phones, etc. Shops
can charge against the account.

It should be possible to close an account; operations against a closed
account must fail.

Copy the bank account folder to your solution repository, in there, there is account.js which contains the `BankAccount` class with skeleton methods. Implement the skeleton methods to the best of your imagination. Also add some tests account.test.js. As you accomplish this rely on your team and Learning facilitator to understand the challenge before you start writing the code.

##### Next steps
This challenge introduces you to classes and methods, which is just the beginning of OOP. Go ahead review and practice other OOP concepts, including but not limited to Inheritance, Polymorphism, Encapsulation and Overloading
