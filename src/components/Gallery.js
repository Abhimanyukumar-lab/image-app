import React, { useState } from 'react';
import axios from 'axios';
//import './App.css'; // Import your CSS file with the grid layout styles.
import './Gallery.css'; // Import the custom CSS file

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=B0sKSV1d_wxcBJqiVRhhuQ-pB9vh4Vvql0Si1G-2eDE`
      );

      setImages(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchImages();
  };

  return (
    <div className="app-container">
      <center>
        <div>
          <h1>Image Gallery</h1>

          <form className="form-group form-inline" onSubmit={handleSearch}>
            <input
              className="form-control mr-2"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search images..."
            />
            <button className="btn btn-success mt-2" type="submit">
              Search
            </button>
          </form>
          <div className="image-grid">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
                style={{ width: '300px', height: '200px', border: '1px solid #ccc' }}
              />
            ))}
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
