# Movie Discovery App

A React-based movie discovery platform that fetches and displays popular movies using The Movie Database (TMDB) API.

## 🎯 Project Overview

This is a learning project built to understand React fundamentals, API integration, and modern JavaScript development practices. The application allows users to browse popular movies with detailed information.

## ✨ Features

- 🎬 Display popular movies from TMDB API
- 🖼️ Movie posters with fallback images
- ⏳ Loading states for better user experience  
- ❌ Error handling for API failures
- 📱 Responsive design for mobile and desktop
- 🔄 Dynamic data rendering with React components

## 🛠️ Technologies Used

- **Frontend**: React.js, JavaScript ES6+
- **API**: The Movie Database (TMDB) REST API
- **Build Tool**: Vite
- **Styling**: CSS3
- **Development**: Modern JavaScript features (async/await, destructuring, template literals)

## 🏗️ Project Structure

```
src/
├── App.jsx                 # Main application component
├── components/
│   ├── MovieCard.jsx       # Individual movie display component
│   ├── Search.jsx          # Search functionality (in progress)
│   └── Spinner.jsx         # Loading indicator component
└── styles/                 # CSS styling files
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- TMDB API key (free registration at themoviedb.org)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/movie-discovery-app.git
cd movie-discovery-app
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
# Create .env file in root directory
VITE_TMDB_API_KEY=your_api_key_here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📚 What I Learned

### React Concepts
- ✅ Functional components and JSX
- ✅ State management with useState
- ✅ Side effects with useEffect  
- ✅ Props and component communication
- ✅ Conditional rendering
- ✅ List rendering with map()

### JavaScript Skills
- ✅ Async/await for API calls
- ✅ Object and array destructuring
- ✅ Template literals for dynamic strings
- ✅ Error handling with try/catch
- ✅ ES6+ features and modern syntax

### API Integration
- ✅ RESTful API consumption
- ✅ HTTP requests with fetch()
- ✅ Environment variable configuration
- ✅ JSON data parsing and manipulation
- ✅ Error handling for network requests

## 🔄 Current Status & Future Enhancements

### Completed ✅
- [x] Basic movie fetching and display
- [x] Component-based architecture
- [x] Loading states and error handling
- [x] Responsive movie cards
- [x] Image fallback handling

### In Progress 🚧
- [ ] Search functionality implementation
- [ ] Movie filtering options
- [ ] Detailed movie view modal

### Planned Features 📋
- [ ] User favorites/watchlist
- [ ] Pagination for large datasets
- [ ] Movie genres filtering
- [ ] Deployment to production

## 🤝 Learning Approach

This project was built following React tutorials and documentation to gain hands-on experience with:
- Modern React development patterns
- API integration best practices
- Component-based architecture
- State management techniques

## 📧 Contact

Feel free to reach out if you have any questions about this project or want to discuss React development!

## 📄 License

This project is for educational purposes and personal portfolio demonstration.

---

⭐ Star this repository if you found it helpful for learning React!
