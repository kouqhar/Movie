# Movie List Application

A ReactJS application that allows users to search, add, and view movie details. This application features a user-friendly interface with a search bar, auto-suggest functionality, and the ability to manage a list of movies fetched from a public API. The application utilizes the Context API for state management and React Router for navigation.

## Features

1. **Search Input and "Add New" Button**:
   - Search for movies with a functional input field.
   - Auto-suggest functionality for search queries.
   - Display the last 10 search keywords.
   - Search queries update the browser history.
   - "Add New" button opens a popup form to add a new movie.

2. **Movie List Management**:
   - Fetch and display a list of movies from a chosen free API.
   - Implement pagination to handle large datasets (100 to 1000 movies).
   - Show a custom loading indicator while fetching data.
   - Error handling for various error states.

3. **Movie Details View**:
   - Click on a movie to navigate to a detailed view of the selected movie using React Router.

4. **Filtering Options**:
   - Provide options to filter the movie list by category, genre, etc.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Context API**: For state management.
- **Axios**: For making HTTP requests.
- **SCSS**: For styling the application.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie.git
   cd movie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Use the search bar at the top to find movies.
- Click on the "Add New" button to add a new movie.
- Click on any movie in the list to view its details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. 

## Acknowledgments

- Thanks to the creators of the public movie API used for fetching movie data.
- Inspired by various open-source projects and tutorials.


### Instructions to Customize

- Replace `yourusername` in the clone URL with your actual GitHub username.
- If you have a specific license, update the license section accordingly.
- Modify any sections as necessary to better fit your project specifics or additional features you may want to highlight.