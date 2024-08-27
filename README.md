# Travel Planner App

## Overview
This project is a Travel Planner App that allows users to enter a location and date for their trip and retrieve weather information and images for the location using external APIs.

## Project Structure
- `package.json`: Project dependencies and scripts.
- `webpack.config.js`: Webpack configuration.
- `src/`
    - `server/`
        - `server.js`: Express server setup.
    - `client/`
        - `index.js`: Entry point for the client-side.
        - `html/views/`
            - `index.html`: Main HTML file.
        - `js/`
            - `app.js`: Main JavaScript file.
        - `styles/`
            - `style.scss`: Main stylesheet.

## Dependencies
- Express
- Webpack
- Babel
- Jest
- Node-sass

## Setup
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Start server: `npm run start`
5. Run tests: `npm run test`

## APIs Used
- Geonames
- Weatherbit
- Pixabay

## Features
- Enter location and date for a trip
- Retrieve weather information for the location
- Display an image of the location

## License
This project is licensed under the MIT License.