# PROJECTMERN

A modern full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js).

## Overview

This project is a comprehensive MERN stack application featuring a responsive React frontend and a robust Node.js/Express backend API. It demonstrates best practices in full-stack development with TypeScript support, modular architecture, and scalable design patterns.

## Tech Stack

### Frontend (Client)
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Static type checking for JavaScript
- **CSS** - Styling and responsive design

### Backend (Server)
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **TypeScript** - Type-safe backend development

## Project Structure

```
PROJECTMERN/
├── client/              # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
├── server/              # Express backend API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── package.json
└── README.md
```

## Features

- Full-stack JavaScript/TypeScript development
- RESTful API architecture
- Modular component-based frontend
- Responsive and modern UI
- Scalable backend structure
- Environment configuration support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/anuragbhattarai31/PROJECTMERN.git
cd PROJECTMERN
```

2. **Install backend dependencies**

```bash
cd server
npm install
```

3. **Install frontend dependencies**

```bash
cd ../client
npm install
```

### Running the Application

**Backend:**

```bash
cd server
npm start
```

The backend server will run on `http://localhost:5000` (or your configured port)

**Frontend:**

```bash
cd client
npm start
```

The frontend will open at `http://localhost:3000`

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

## API Documentation

The backend provides RESTful API endpoints. Detailed API documentation can be found in the `server` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

**Anurag Bhattarai** - [@anuragbhattarai31](https://github.com/anuragbhattarai31)

## Contact

For questions or inquiries, please reach out through GitHub or check out the social links in the profile.

---

**Last Updated:** December 2025
