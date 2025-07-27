# Real-Estate

This is a full-stack real estate application designed to streamline the process of buying, selling, and renting properties. Built with a modern technology stack, it provides a seamless and intuitive experience for users to browse listings, manage their profiles, and interact with property information.

Features
User Authentication & Authorization:

Secure user registration with password hashing.

User login with JSON Web Tokens (JWT) for session management and httpOnly cookies for security.

Protected routes ensuring only authenticated users can access sensitive profile and post management features.

Profile management allowing users to update their personal information and avatar.

User logout functionality.

Property Listings:

Browse a wide range of property listings with advanced filtering options (city, type, property, price range, bedrooms).

Detailed single property pages showcasing images, address, price, and comprehensive property details (description, utilities, pet policy, income policy, size, nearby schools, bus stops, and restaurants).

Ability for authenticated users to create new property listings with rich text descriptions and multiple images.

Users can manage and delete their own property listings.

Saved Posts:

Users can save properties to their personalized list for future reference.

View all saved properties on the user's profile page.

Technology Stack
Frontend:

React: A JavaScript library for building user interfaces.

React Router DOM: For declarative routing within the single-page application.

Axios: A promise-based HTTP client for making API requests.

Sass (SCSS): CSS preprocessor for writing maintainable and scalable stylesheets.

DOMPurify: To sanitize HTML content and prevent XSS attacks.

Backend:

Node.js: JavaScript runtime environment.

Express.js: A fast, unopinionated, minimalist web framework for Node.js.

Prisma ORM: A next-generation ORM for Node.js used for database interactions.

bcrypt.js: For hashing and salting passwords to ensure security.

jsonwebtoken: For creating and verifying JWTs for authentication.

cookie-parser: Middleware for parsing cookies attached to the client request.

CORS: Middleware to enable Cross-Origin Resource Sharing.
