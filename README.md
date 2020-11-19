# Take-Home Challenge

## Prompt #1

> We ask you to build a React application using the mocks provided, time-boxed to four hours. You can use Create React App as a starter. State should persist between VIEW and EDIT mode (but not needed for page refresh).

### Set up instructions

- Pull down repository

- Run `npm install` or `yarn`

- Run `npm start` or `yarn start`

- Proceed to localhost:3000/

### Notes

Had some time to flesh this out a little and tackled some extra tasks and was asked to explain why:

**Mobile-Friendly View** - It's 2020! If it doesn't work on a phone, what are you doing?

**Jazz it up** - I didn't go crazy with any of this, but I brought in the Material UI library for some components and styles. I also used a handful of custome styled components 💅

## Prompt #2

> If you were asked to make the application you built into a production deployable version, what would you do? Please include this written answer as part of your README.

I would start with a lot of questions:

- **Data** - What sort of database will be using and how are we communicating with the back end?

- **Scalability** - How big is this going to be? How many users are we expecting and what sort of traffic should we plan for?

- **Deployment** - Where is this going to live in relation with the rest of the project and how does the CI/CD process work? Can it handle running the compiling/build process on it's own or will it need code already built and minified?

If I was to go with my gut:

I would use a simple NoSQL soltution like Mongo or Firebase, bring in Axios to handle the moving of data, and ideally have it hosted somewhere that can built and deploy on merge to master after the magnificent test suite that I totally would have built had passed.
