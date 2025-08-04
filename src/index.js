// Fetching data with query strings

async function fetchDataWithQueryString(postId, userId) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts?postId=${postId}&userId=${userId}`;
    const response = await fetch(url);

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Convert the response to JSON
    const data = await response.json();
    console.log('Fetched data:', data);

    // Process the data (example: log the first post)
    if (data.length > 0) {
      console.log('First post title:', data[0].title);
    } else {
      console.log('No posts found.');
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Call the function to fetch data with query parameters
fetchDataWithQueryString(1, 1);  // Example: Fetch posts with postId=1 and userId=1
