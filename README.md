# Extend React Challenge

This is bare-bones version of one of our client apps, where we ask candidates to build out a small application. The goal: give both the candidate and the Extend team a chance to interact on a realistic, but limited (shooting for just a few hours), task. We see this as a two-way evaluation, for the team and the candidate to decide if its a good fit.

### Setup
Copy this repository to your own private repository on GitHub
```
git clone https://github.com/helloextend/react-challenge.git
cd react-challenge
yarn
yarn start
 ```
 You should now have the app running on http://localhost:8080

## Challenge
- Review the mock up available on [Figma](https://www.figma.com/file/GsigoCnExV2jjTBanMZwFr/Dog-Breeds) (you will need to sign up for a free figma account to be able to inspect all the elements for paddings/margins etc)

- Review the [Dog.ceo api documentation](https://dog.ceo/dog-api/)

- The goal of this challenge is to be able to search for a breed of dogs in a search input and then display up to 10 images of that breed of dog on screen

- You should be able to favorite and unfavorite images of dogs, moving them into and out of the favorites section of the page

- Add typings for any functions or Objects that are being used in the application

- Add tests for any components you write For testing, focus on validating any logic or functionlity that has been introduced in the component

- Submit a PR in your repository, with a descriptive message, and no more than a few commits (each with a clear purpose)

- In your private repository, add `funador` as a collaborator, and send an email to `jesse@extend.com` with a link to your repository

- Before the next interview, we will provide PR feedback, to give you a chance to improve your solution before the call

- Feel free to ask questions, as we want to simulate working with the team


## Extended Tasks
You want to take this further or have extra time?  Awesome, choose any of these extension tasks that interest you:
- Add a section below the search bar that keeps track of what has previously been searched

- Clicking on one of those previous searches invokes a new search of that breed

- Visually distinguish between previous searches that were successful (200) and unsuccessful (404)

- Display a running total of the number of times each search was run. ie. `Hound x 2`, `no good search x 4`

- Refactor your state management to use [Redux Sagas](https://redux-saga.js.org/) and selectors

- Add a `production` webpack config that bundles and minifies the code

- Deploy a minified version to Netlify 
