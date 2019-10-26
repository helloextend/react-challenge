# Extend React Challenge

This is bare-bones version of own of our client apps, where we ask candidates to build out a small application. The goal: give both the candidate and the Extend team a chance to interact on a realistic, but limited (shooting for just a few hours), task. We see this as a two-way evaluation, for the team and the candidate to decide if its a good fit.

### Setup
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
- Add tests for any components that you add. Especially focusing on testing any logic or functionlity that has been introduced
- If anything is unclear, please ask :)

### Notes
- All the assets (colors and logos) needed to complete the challenge are available in the `/assets` folder

## Extenstion Tasks
You want to take this further or have extra time?  Awesome, here are some possible extension tasks:
1. Add a section below the search bar that keeps track of what has previously been searched
2. Clicking on one of those previous searches invokes a new search of that breed
3. Visually distinguish between previous searches that were successful (200) and unsuccessful (404)
4. Display a running total of the number of times each search was run. ie. `Hound x 2`, `no good search x 4`
5. Refactor your stage management to use Redux Sagas
6. Refactor the CSS to include a mobile and desktop version

### Really Important
This is a great opportunity for us to get to work together on a task that is similar to what you might experience with Extend. If something is unclear or you need a hand, please ask any member of our dev team.  We want to simulate as close as possible what it would be like working together. 