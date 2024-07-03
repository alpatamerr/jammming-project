# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Jammming

Jammming is a web application built using React that allows users to search the Deezer music library, create custom playlists, and save them to their personal Deezer account. This project showcases the use of React components, state management, and API requests.

## Table of Contents

- [Project Purpose](#project-purpose)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Future Work](#future-work)
- [Credits](#credits)

## Project Purpose

The purpose of this project is to provide users with a seamless way to search for music, create playlists, and save them using the Deezer API. This application demonstrates practical usage of React for building dynamic web applications and interacting with external APIs.

## Technologies Used

- **HTML**: Markup language for structuring the web application.
- **CSS**: Styling language used to make the application visually appealing and responsive.
- **JavaScript**: Programming language used for logic and interactivity.
- **React**: JavaScript library for building user interfaces.
- **Deezer API**: External API used to search for music and retrieve track information.
- **RapidAPI**: Platform to connect to Deezer API securely.

## Features

- **Search for Songs**: Users can search for songs by entering a song title, artist's name, or album name.
- **View Search Results**: Displays information about each song, including title, artist, and album.
- **Create Custom Playlists**: Users can add songs from search results to their custom playlists.
- **Remove Songs**: Users can remove songs from their playlists.
- **Rename Playlists**: Users can rename their playlists.
- **Save to Deezer**: Users can save their created playlists to their Deezer account.

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/alpatamerr/jammming.git
    cd jammming
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Create a .env File**:
    - In the root directory of your project, create a `.env` file.
    - Add your RapidAPI key for Deezer:
      ```
      REACT_APP_RAPIDAPI_KEY=dc0f3fc9a3msha2df081ae7aef40p12a299jsn96b8f5c647b4
      ```

4. **Run the Application**:
    ```bash
    npm start
    ```

5. **View in Browser**:
    - Open your browser and navigate to `http://localhost:3000`.

## Future Work

- **User Authentication**: Implement OAuth authentication for Deezer to allow users to save playlists directly to their Deezer account.
- **Improved UI/UX**: Enhance the design and user experience with more advanced CSS or libraries like Material-UI.
- **Error Handling**: Improve error handling to provide users with feedback on failed API requests.
- **Testing**: Add unit tests and integration tests to ensure the application works as expected.

## Credits

This project was developed as a part of a learning exercise. Special thanks to the developers of the technologies and APIs used in this project.

- [React](https://reactjs.org/)
- [Deezer API](https://rapidapi.com/deezerdevs/api/deezer-1)
- [RapidAPI](https://rapidapi.com/)

---

Happy coding!