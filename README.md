# React Lego

## Story

You've always wondered how awesome would it be to work as an influencer.

But it's not that easy as you think.
You need to know all the trends and you need to follow which platforms are the most popular according to your followers.

You are a frontend free-lancer who got an offer from an influencer who wants a website where he can see all the information that he needs to know about the platforms he uses.

You asked your friend to make the backend part of the job and you undertook the frontend part.
You got a sample JSON format from your friend about the objects that you need to present in the page.

## What are you going to learn?

- Creating reusable React components
- Conditional rendering
- Passing data between components

## Tasks

1. Extract the code which displays `Social Media Dashboard` and `Total followers: 33` in a different component.
    - In the `App.js` file the html tag `<div className="header">` is replaced by a react component with the name `<Header>`
    - In the `App.js` file the `<Header>` component has a parameter with the name `users` which receives all the users
    - The `Header` component shows the sum of all the followers belonging to all the users (`30294` when you open the page for the first time)

2. Extract the `<section className="platform">` in a different component
    - In the `App.js` file the html tag `<section className="platform">` is replaced by a react component with the name `<Card>`
    - In the `App.js` file the `<Card>` component has a parameter with the name `user` which receives a user object and a parameter with the name `icon` which receives the value from `data.icon`

3. Display all the users from the `data` variable in a separate card
    - When loading the page for the first time 4 cards are displayed
    - For the users which have more then 9999 followers the last 3 digits are replaced with `k` (the 3rd card displays `11k` followers)
    - When the `difference` property of a user is negative only the `▼` is displayed and the difference value is displayed without the minus sign (`▼ 144` for the 4th card)
    - When the `difference` property of a user is positive only the `▲` is displayed and the difference (`▲ 12` for the 1st card)
    - When the `difference` property of a user is positive the 3rd row inside the card is of `green` color
    - When the `difference` property of a user is negative the 3rd row inside the card is of `red` color

4. Implement the event handlers for the buttons with `+` and `-` label to increase/decrease the total followers
    - When clicking the button with the label `+` from the `1st card` the displayed followers changes from `9999` to `10k`
    - When clicking the button with the label `-` from the `2nd card` the displayed followers changes from `1044` to `1043`
    - When clicking the button with the label `+` from the `3rd card` the `Total followers: ` from the `Header` component changes from `30294` to `30295`

5. Implement the code inside the `AddNewCard` component so that when a user presses the `Create New Card` button a new card is added
    - When the user types `megatron` in the first input, `2` in the second input, `-1` in the third input and presses the button with the label `Create New Card` a 5th card is added and the `Total followers:` inside the `Header` component increases from `30294` to `30296`
    - After a new card is created the values from input boxes are cleared
    - If the 2nd or 3rd input content is not a number or the 1st input is empty when pressing the `Add New Card` button a new card is NOT added but the values from the inputs are still cleared

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`

## Background materials

- <i class="far fa-exclamation"></i> [Functional Components](https://www.robinwieruch.de/react-function-component#react-stateless-function-component)
- <i class="far fa-exclamation"></i> [React Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- <i class="far fa-book-open"></i> [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- <i class="far fa-book-open"></i> [Display lists in React](https://scotch.io/starters/react/handling-lists-in-react-jsx)
- <i class="far fa-book-open"></i> [Debugging a React project](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)
