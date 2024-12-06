# Community Blog Post - Frontend

## Overview

This is the frontend part of the **Community Blog Post Application**, where users can interact with the blog posts based on their roles. The frontend is built using **React**, **Tailwind CSS**, **Recoil**, and **React Router**, offering a clean, responsive, and dynamic user experience. It communicates with the backend through **Axios** to handle authentication, authorization, and interaction with the blog data.

The application supports three types of user roles: **Member**, **Moderator**, and **Admin**, each with different permissions and access to the features.

#### Demo Link:
You can try the live demo of the application here:

[Demo Link (Frontend)](https://blog-post-frontend-theta.vercel.app/)

[Demo Link (Backend)](https://blogpostbackend-gn6x.onrender.com)

Table of Contents
-----------------

*   [Features](#features)

*   [Technologies Used](#technologies-used)

*   [API Integration](#api-integration)
    
*   [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Setup Instructructions](#setup-instructions)
    - [Test the Setup](#test-the-setup)
    - [Troubleshooting](#troubleshooting)
    
*   [Future Enhancements](#future-enhancement)

## Features

- **Responsive UI** built with **Tailwind CSS** for a modern, mobile-friendly design.
- **Role-Based Access Control (RBAC)**: The UI adapts based on the user's role:
  - **Member**: Can view, create, delete, and report posts.
  - **Moderator**: Has all the member permissions and can manage reported posts and block/unblock users.
  - **Admin**: Has all the moderator permissions and can manage moderators.
- **User Authentication**: Users can log in using **JWT tokens** for authentication. Google OAuth is also implemented for a seamless login experience.
- **Post Management**: Users can view, create, delete, and report posts. Moderators and admins have extra capabilities such as post management and user blocking.
- **State Management with Recoil**: Recoil is used to handle the global state of the application, making it easier to manage the data across components.
- **Routing with React Router**: React Router is used for navigation between pages.

## Technologies Used

- **React**: For building the dynamic user interface and handling user interactions.
- **Tailwind CSS**: For rapid UI design and creating a responsive layout.
- **Recoil**: For state management across the app, handling the global application state.
- **React Router**: For managing routing and navigation.
- **Axios**: For making HTTP requests to the backend API.
- **JWT Authentication**: For secure login and token-based session management.
- **Google OAuth**: For seamless login through Google accounts.


## API Integration
The frontend makes API calls to the backend server using Axios. For authentication, the app communicates with the backend to issue and validate JWT tokens.

- **Member APIs**

    | **HTTP Method** | **API**             | **Description**                                                       |
    |-----------------|-----------------------|-----------------------------------------------------------------------|
    | GET             | `/getuserdata`         | Retrieve the user data.                                               |
    | GET             | `/posts`               | Get all posts, populating the user information (name, image).         |
    | GET             | `/my-posts`            | Get posts created by the logged-in user.                              |
    | POST            | `/new-post`            | Create a new post for the logged-in user.                             |
    | POST            | `/delete-post`         | Delete a post created by the logged-in user.                          |
    | POST            | `/report-post`         | Report a post as inappropriate.                                       |

- **Moderator APIs**

    | **HTTP Method** | **API**               | **Description**                                                                 |
    |-----------------|-------------------------|---------------------------------------------------------------------------------|
    | GET             | `/reported-posts`        | Retrieve all posts that have been reported for violations.                      |
    | POST            | `/unreport-post`         | Unreport a post, marking it as not reported anymore.                            |
    | GET             | `/blocked-users`         | Get a list of all users who have been blocked.                                  |
    | POST            | `/block-user`            | Block a user, changing their role to `blocked`.                                 |
    | POST            | `/unblock-user`          | Unblock a user, reverting their role to `member`.                               |
    | POST            | `/delete-post`           | Delete a post either by the user who created it or by a moderator (or admin).    |


- **Admin APIs**

    | **HTTP Method** | **API**                | **Description**                                                            |
    |-----------------|--------------------------|----------------------------------------------------------------------------|
    | GET             | `/moderators`             | Retrieve a list of all users with the role `moderator`.                    |
    | POST            | `/add-moderator`          | Add a user as a moderator by updating their role to `moderator`.            |
    | POST            | `/remove-moderator`       | Remove a user from the `moderator` role, reverting their role to `member`.  |
    
    
## Installation and Setup

This section outlines the prerequisites and the steps required to set up and run the project locally.

### **Prerequisites**

Before setting up the project, make sure you have the following installed on your system:

- **Node.js** (Recommended version: 16.x or above)
- **npm** (Node package manager)
- **MongoDB** (either locally or MongoDB Atlas for cloud setup)
- **Git** (optional, for cloning repositories)
- **Google Cloud Project** (optional, for OAuth integration)
    - If using Google OAuth, you'll need to set up credentials in the Google Cloud Console.

### **Setup Instructions**

##### Step 1: Backend Setup

1. Clone the backend repository:
    ```bash
    git clone https://github.com/me-Sandeep-65/blogPostBackend.git
    cd blogPostBackend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. **Setup environment variables**:  
    Create a `.env` file in the root directory of the backend project. You may need to add configurations such as database URLs, JWT secret, and other environment-specific details.
    
    Example of `.env` file:
    ```env
    PORT=8000
    MONGO_URI=mongodb://localhost:27017/blogPostDB
    JWT_SECRET=your-secret-key
    ```

4. **Set up CORS**:  
    configure CORS in `app.js` file:
    ```javascript
    app.use(cors({
        origin: ['http://localhost:5173'], // replace with your frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }));
    ```

5. **Run the Backend**:
    Once the environment variables and CORS are set up, run the backend server with:
    ```bash
    npm run dev
    ```

    This will start the server, usually on `http://localhost:8000`.



#### Step 2: Frontend Setup
1. Clone the frontend repository:
    ```bash
    git clone https://github.com/me-Sandeep-65/blogPostFrontend.git
    cd blogPostFrontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory and add the following variables.
    - Copy the contents of the `.env copy` file and paste it in `.env` file.
    - Replace the placeholder values with your actual credentials.
    
4. Start the frontend development server:
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

### Test the Setup
- Open your browser and visit [http://localhost:5173](http://localhost:5173) to ensure the frontend loads properly.
- Check the backend at [http://localhost:8000](http://localhost:8000) to confirm the server is running.

### Troubleshooting:
- **MongoDB not running**: If you are running MongoDB locally, ensure the MongoDB server is running. You can start it using:
    ```bash
    mongod
    ```
- **OAuth Setup**: If you are using Google OAuth, make sure to configure your **Google Cloud Project** correctly and obtain valid OAuth credentials. Follow the official documentation for setting up OAuth in a Node.js application: [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)

## Future Enhancement

While this application provides a basic community blog post system with role-based access control, there are several improvements and new features that can be added in future versions:

- **OAuth Integration for More Providers**: Expand the OAuth integration to include other login providers like Facebook, Twitter, and GitHub.

- **WebSocket for Real-time Notifications**: Enable real-time notifications for users regarding post updates, comments, and admin/moderator actions such as post removals or user block/unblock.

- **Better Post Editing UI**: Enhance the post editor to allow rich text formatting, file attachments (images, videos), and easy post previews.

- **Lazy Loading**: Implement lazy loading for posts, images, and comments to improve performance and reduce initial page load time.