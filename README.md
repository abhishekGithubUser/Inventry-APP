# Inventory Management System

This is a simple Inventory Management System built using Node.js, EJS, Express.js, Multer, and other dependencies. The application follows the MVC (Model-View-Controller) architecture for a structured and modular codebase.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user authentication system.
- **Inventory Management**: Add, update, and delete inventory items.
- **Image Upload**: Multer integration for handling image uploads.
- **MVC Architecture**: Well-organized codebase following the MVC design pattern.
- **Express.js Server**: Utilizing Express.js for handling HTTP requests.
- **EJS Templates**: Dynamic HTML templates using EJS for rendering views.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- NPM (Node Package Manager) to install project dependencies.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhishekGithubUser/inventory-app.git

    1. Navigate to the project directory:
        
        cd inventory-app
    
    2. Install dependencies

        npm install

## Usage

1. Start the application
    ```bash
    1. npm start

    2. Open your browser and go to http://localhost:5000.

    3.Explore the features of the Inventory Management System.

## Project Structure

        .
        ├── controllers/
        │   ├── authController.js
        │   ├── inventoryController.js
        │   └── ...other controllers
        ├── models/
        │   ├── user.js
        │   ├── inventoryItem.js
        │   └── ...other models
        ├── public/
        │   ├── css/
        │   ├── js/
        │   └── uploads/
        ├── routes/
        │   ├── authRoutes.js
        │   ├── inventoryRoutes.js
        │   └── ...other routes
        ├── views/
        │   ├── auth/
        │   ├── inventory/
        │   └── ...other views
        ├── index.js
        └── ...other project files
