# Live Writing Box

Live Writing Box is a lightweight web app for writing in a clean, focused text area. It includes a simple Node.js server and real-time text syncing support through Socket.IO.

## Features

- Clean and minimal writing interface
- Real-time text update support
- Responsive layout for desktop and mobile
- Simple project structure

## Requirements

- Node.js
- npm

## Installation

Use this command to install all project dependencies:

```bash
npm install
```

## Run Locally

```bash
node app.js
```

Open the app in your browser:

```bash
http://localhost:3000/
```

## Dependencies

- `express` - used to create the server and load the website files
- `socket.io` - used for live communication between users and the server
- `sockjs` - included as an extra real-time package in the project

These packages are needed so the app can run properly and support live writing.

## Project Structure

- `app.js` - Express server and Socket.IO setup
- `index.html` - main page markup
- `style.css` - styling for the writing box

## Deployment Note

This project works best on a Node.js hosting platform such as Render, Railway, or a VPS. Vercel is not ideal for the current Socket.IO setup unless the app is restructured.
