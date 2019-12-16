# Would You Rather App

Would You Rather is a game of preferences that the user answer a preference question deciding between
two options.
The player can answer a question, ask question, view answered questions preferences and check the leaderboard.
This is the first version of the App that was developed from scratch using React and React-Router-Dom.
At this first stage we are not using any state management as Redux or Context.

The idea is to develop an app that need state management without it. Sounds crazy, but this is the best
way to learn. After that, we will implement the same app using a state management.

The app enclosed an appbar and different views as:

  - **LogIn/SignUp**
    * LogIn: Select a user to start playing 
    * SignUp: Add a new user

  - **Questions**
    * See: Unanswered questions
    * See: Answered questions
    
  - **New Questions**
    * You can add a new question
    
  - **Leaderboard**
    * You check the board of players and their respective points

## How to start the App?

 To use the app, please, click in the link below:
 https://mkortmann.github.io/wouldyourather/

 To install the App, please, follow the instructions at Installation section.

## Installation

1. First you have to create a directory in the desire location
2. git clone `ADD HERE GITHUB PROJECT LINK`
3. install all project dependencies with `npm install`
4. start the development server with `npm start`

## Backend Server

To simplify the process I used a backend server. The provided file [`_DATA.js`] by Udacity contains the methods used to perform necessary operations on the backend:

* [`_getUsers`](#getUsers)
* [`_getQuestions`](#getQuestions)
* [`_saveQuestionAnswer`](#saveQuestionAnswer)
* [`_saveQuestion`](#saveQuestion)
* [`_addUser`](#addUser)

### `getUsers`

Method Signature:

```js
_getUsers()
```

* Returns a Promise which resolves to a JSON object containing a collection of users
* This collection represents all the users that play this game

### `getQuestions`

Method Signature:

```js
_getQuestions()
```

* Returns a Promise which resolves to a JSON object containing a collection of questions
* This collection represents all the questions posted by all the users

### `saveQuestionAnswer`

Method Signature:

```js
_saveQuestionAnswer ({  authedUser: authedUser,
                        qid: qid,
                        answer: answer} );
```

* save a question answer
* authedUser: `User name that are posting this question`
* qid: `each question has an id was generated automatically by _DATA.js`
* answer: `answer answered by the user: in this case he choose only between two options`

### `saveQuestion`

Method Signature:

```js
_saveQuestion ({optionOneText, optionTwoText, author});

```

* add a new question 
* author: `User name that are posting a new question`
* optionOneText: `the first option of the question`
* optionTwoText: `the second option of the question`

### `addUser`

Method Signature:

```js
_addUser(fullName)
```

* Add a new user
* This collection represents all the users that play this game.


#### Note about React

The app was created used npx create-react-app! I started from scratch. However, I am using
the Udacity the file [`_DATA.js`] as a backend server. The API was extended by me to be able to add a new user.

### More Information

This project has the main objective to practice and show my knowledge in React and React-Dom-Router!
--For any extra information, please, feel free to contact me.

### Contributions

The project was done completely by me starting from scratch. However, if you want to contribute, please, do not hesitate to contact me!
