# DreamState Real Estate Website

## Overview

DreamState is a real estate website that allows users to browse listings, create their own listings, and connect with landlords. It provides features such as manual sign-in/sign-up, OAuth with Google, user profile management, and advanced search functionality.

## Features

1. **Authentication**
   - Manual sign-in/sign-up
   - Sign-in using email through Google OAuth

2. **Homepage Listings**
   - Multiple listings displayed with tags (e.g., offers, on sale, rent)

3. **User Profile Management**
   - Update profile information (username, password)
   - Upload profile image

4. **Listing Creation**
   - Users can create site listings with:
     - Name
     - Description
     - Address
     - Tags (e.g., sale, rent, parking availability, furnished)
     - Discount price for offers
     - Upload site images

5. **Advanced Search**
   - Users can search listings using multiple filters

6. **Contact Landlord**
   - Users can contact the landlord of a site listing by:
     - Clicking on the contact button
     - Typing a message
     - Redirecting to send an email

## Tech Stacks

- **Frontend**:
  - React.js
  - Tailwind CSS
  - Axios (for HTTP requests)
  - React Router (for routing)
  - Google OAuth API (for authentication)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (for MongoDB object modeling)
  - Nodemailer (for sending emails)

- **Authentication**:
  - Passport.js (for local authentication)
  - Passport-Google-OAuth20 (for Google OAuth)

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the frontend and backend servers using `npm start`.
4. Access the application at `http://localhost:3000`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
