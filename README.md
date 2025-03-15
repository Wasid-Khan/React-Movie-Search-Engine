# React-Movie-Search-Engine
This repository contains a fully functional React-based Movie Search Engine application designed to demonstrate key concepts and features of React. The project connects to a publicly available movie API, allowing users to search for movies, view popular titles, and manage favorite lists. It serves as a practical learning resource for developers looking to gain hands-on experience with React while building real-world applications.

### Features:
- **API Integration**: Fetches movie data from a public API to display popular movies and search results dynamically.
- **Search Functionality**: Enables users to search for movies by title, displaying relevant results in real-time.
- **Favorites Management**: Allows users to add movies to a favorites list and remove them as needed.
- **Interactive UI**: Includes hover effects and clickable buttons for user interaction, such as favoriting movies.
- **React Components**: Demonstrates modular design principles by breaking the application into reusable components.
- **State Management**: Implements state management within components for dynamic behavior (e.g., toggling favorites).
- **Routing**: Includes navigation between pages (e.g., Home and Favorites) using React Router.

### Learning Objectives:
This project is ideal for developers with some JavaScript experience who want to:
1. Understand the basics of React, including JSX syntax and component-based architecture.
2. Learn how to fetch and display data from external APIs in React applications.
3. Explore state management and dynamic UI updates in React.
4. Gain exposure to modern development tools like Node.js, npm, and Vite.

### Technologies Used:
- **Frontend Framework**: React (JavaScript)
- **Build Tool**: Vite
- **Styling**: CSS (with prebuilt templates for effects)
- **API**: Public Movie Database API
- **Code Editor**: Visual Studio Code (recommended)

### Installation Instructions:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-movie-search-engine.git
   ```
2. Navigate into the project folder:
   ```bash
   cd react-movie-search-engine
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:3000` to view the application.

### Folder Structure:
- `src/`: Contains all source files, including components, pages, and styles.
  - `components/`: Reusable UI components such as MovieCard and Navbar.
  - `pages/`: Application pages like Home and Favorites.
  - `styles/`: CSS files for styling the application.
- `public/`: Static assets like images or icons.
- `package.json`: Dependency management file.
