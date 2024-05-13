# Interview Repository - React Application

This repository contains two main parts: a React application located in the `root` folder, and an API in the `api` folder. Below you'll find instructions on how to set up and run each part, as well as details on the structure and objectives of the React application.

## Setup

### Running the API

Navigate to the /api folder:

```
cd api
yarn install
yarn start
```

The API will run on `localhost:3001`. Once started, you do not need to make any further changes to the API code.

### Running the APP

```
// in root folder
yarn install
yarn start
```

The application will run on `localhost:3000`.

## Application Structure

The main application is built using React, with pre-installed libraries that are commonly used in our projects:

- react-query
- react-hook-form
- yup
- styled-components
- typescript

## Development Objective

Your task is to demonstrate proficiency in using styled-components to style components within the React application. Style any component you want but we recommend Input component

### Form and Validation

Create a form that includes:

- A text input (name="textField")
- A radio group (name="radioField")
- A checkbox (name="checkboxField")

#### Validation Rules

Use yup for form validation with the following schema:

- textField is required string with minimum of 4 characters
- checkboxField is required
- radioField one of the options must be selected

### API Interaction

Submit the form data to the API endpoint /api/submit-form using react-query. The endpoint URL is configured in your .env file.

### Handling Responses and User Experience

Display the response from the API upon form submission, which can either be an error message or a success message. Ensure you handle the user experience gracefully during loading and after the response is received.

### Conclusion

This setup is designed to evaluate your ability to integrate and use various technologies typical in our projects. Ensure you read through the instructions carefully and feel free to enhance the user experience and application functionality.
