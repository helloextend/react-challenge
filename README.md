# Extend React Challenge

This exercise is a bare-bones version of one of our client apps, where we ask candidates to build out a small application. The goal: give both the candidate and the Extend team a chance to interact on a realistic, but limited (shooting for just a few hours), task. We see this as a two-way evaluation for the team and the candidate to decide if it's a good fit.

### Setup

1. If you haven't already, Signup for GitHub and [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. [Create a new repository](https://github.com/new) called `react-challenge` and set it to Private.

3. Clone this repository.

   `git clone git@github.com:helloextend/react-challenge.git`

4. `cd` into the cloned `react-challenge` repo and add your private repository as a remote, so you can push to it.

   `git remote add upstream git@github.com:YOUR_USERNAME/react-challenge.git`

5. Create a new branch off the `react-challenge` repo, where you can make your code changes and open a PR to the `master` branch once you're done.

   `git checkout -b challenge`

6. After you've finished coding the challenge, when you're ready to push your code to your branch, make sure to do `git push upstream challenge`.

Make sure you have Node.js setup and `yarn` installed globally, then start the repo:

```
yarn
yarn start
```

You should now have the app running on http://localhost:8080

Note: If you are receiving errors on startup regarding `node-sass` or `image-webpack-loader`, try running `npm rebuild` and then re-running the application.

This project leverages TSLint to lint your code, and Prettier to format it. You can automatically run these in your IDE by installing the TSLint and Prettier extensions for your IDE.

At any time, you can also run lint via `yarn lint`, and format your code via `yarn format`.

**Before submitting your code, please make sure to lint and format it.**

## Challenge
- Review the mock up available on [Figma](https://www.figma.com/file/GsigoCnExV2jjTBanMZwFr/Dog-Breeds)
**NOTE:** you may need to [sign up for a free Figma account](https://www.figma.com/signup) in order to inspect the styling properties required for the elements, such as paddings, margins, etc.

- Review the [Dog.ceo api `By Breed` endpoint documentation](https://dog.ceo/dog-api/documentation/breed)

- The goal of this challenge is to be able to search for a breed of dogs in a search input and then display up to 10 images of that breed of dog on screen

- You should be able to favorite and unfavorite images of dogs, moving them into and out of the favorites section of the page

- Submit a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) in your repository, with a descriptive message, and no more than a few commits (each with a clear purpose).

- Before the next interview, we will provide PR feedback, to give you a chance to improve your solution before the call

- Feel free to ask questions, as we want to simulate working with the team.

## Tips
- Make sure to add accurate typings!

- Add some tests to verify that your components are working properly
