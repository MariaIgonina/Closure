# Closure

Closure is a comprehensive application that combines a verified user database, a smart calculator, and a dashboard creator into one powerful tool. It was specifically designed for petroleum geologists who often encounter challenges in estimating oil and gas reserves. This task is typically repetitive and time-consuming despite its simplicity. Professionals in this field need to select data for statistical analysis, perform calculations using specialized software, and present the results.

Closure simplifies the process by aggregating all the necessary statistics about oil targets. By specifying the area and formation, you can simply enter the range of squares, and the program generates a visually appealing dashboard that can be saved in PDF format.

## Demo

Watch the video review of Closure on YouTube: 

[![Video Review](https://img.youtube.com/vi/pxMOGl9xbes/0.jpg)](https://www.youtube.com/watch?v=pxMOGl9xbes)

## Prerequisites

Before getting started, ensure that you have Node.js installed on your computer. Closure runs on Node.js v16. If you have a newer version installed, follow these steps in your terminal:

1. Install Node.js v16: `nvm install 16`
2. Use Node.js v16: `nvm use 16`

## Backend Setup

The backend of Closure is built with JavaScript using Express.js. To start the server, navigate to the "server" folder and run the following commands in your terminal:

1. Install dependencies: `npm install`
2. Run the server: `nodemon server.js`

## Database Configuration

Closure utilizes PostgreSQL as the database. If you don't have a PostgreSQL profile, create one. Then, create a new database and an `.env` file in the root directory with the following keys:

- `DB_NAME`: "my_database"
- `DB_USER`: "my_name"
- `DB_PASSWORD`: "my_password"
- `DB_HOST`: "localhost"

Make sure to replace the values with your actual database and API key information.

## Frontend Setup

The frontend of Closure is developed with React.js. To start the frontend, navigate to the "closure" folder and follow these steps:

1. Install dependencies: `npm install`
2. Obtain your Google Maps API key by visiting [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/cloud-setup). Create a new `.env` file and add your key as follows:

- `GOOGLE_MAP_KEY`: your_key


3. Start the React app: `npm start`

## Calculation Service

The calculation service in Closure is created with Python using the NumPy library. Before working with it, ensure that you have Python 3 installed on your computer. Then, navigate to the "service" folder and run the following commands:

1. Install NumPy: `pip install numpy`
2. Start the service: `python3 calc-service.py`

Feel free to explore and utilize the features of Closure for efficient oil and gas reserves estimation.