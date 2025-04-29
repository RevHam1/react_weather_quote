import axios from "axios";

// Unsplash Access Key
const ACCESS_KEY = "YOUR_ACCESS_KEY";

// Array of topics/categories
const categories = [
  "city",
  "mountains",
  "lakes",
  "oceans",
  "sky",
  "fields",
  "highways",
  "roads",
];

// Fetch a random image
export const fetchRandomImage = async () => {
  try {
    // Pick a random category
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];

    // Search Unsplash for images in the selected category
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${randomCategory}&client_id=${ACCESS_KEY}`
    );

    // Pick a random image from the results
    const images = response.data.results;
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return randomImage.urls.full; // Return the URL of the full image
  } catch (error) {
    console.error("Error fetching image:", error);
    return null; // Handle errors gracefully
  }
};
