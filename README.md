# Would You Rather App

The App is basically a game that the user has to logIn or signUp to start it. 
The player can answer a question, ask question, view answered questions and leaderboard.
This is the first version of the App that was developed from scratch using React and React-Router-Dom.#
At this first stage we are not using any state management as Redux or Context.

The idea is to develop an app that really need state management without it. Then we will apply it to really
fell the advantages of using the state management.

The app enclosed an appbar and different views as:

  - **LogIn/SignUp**
    * Select a user to start playing (logIn)
    * Add a new user (signUp)

  - **Questions**
    * Unanswered questions
    * Answered questions
    
  - **New Questions**
    * You can add a new question
    
  - **Leaderboard**
    * You see the board of players and their respective points

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

To simplify the process I used a backend server. The provided file [`_DATA.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend:
, , , _saveQuestion
* [`_getUsers`](#getUsers)
* [`_getQuestions`](#getQuestions)
* [`_saveQuestionAnswer`](#saveQuestionAnswer)
* [`_saveQuestion`](#saveQuestion)

### `getUsers`

Method Signature:

```js
_getUsers()
```

* Returns a Promise which resolves to a JSON object containing a collection of users.
* This collection represents all the users that play this game.

### `getQuestions`

Method Signature:

```js
_getQuestions()
```

* Returns a Promise which resolves to a JSON object containing a collection of questions.
* This collection represents all the questions posted by all the users.

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
* answer: `answer answered by the user: in this case he choose only between two options.`

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
* answer: `answer answered by the user: in this case he choose only between two options.`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

#### Note about React

The app was created used npx create-react-app! I started from scratch. However, I am using
the Udacity _Book.js as a backend server. The API was extended by me to be able to add a new user.

### More Information

This project has the main objective to practice and show my knowledge in React and React-Dom-Router4!
--For any extra information, please, feel free to contact me.

### Contributions

The project was done completely by me starting from scratch. However, if you want to contribute, please, do not hesitate to contact me!
