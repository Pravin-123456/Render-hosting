fetch('http://localhost:3000/users')
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json(); // convert response body to JSON
  })
  .then(data => {
    console.log("✅ Users:", data); // handle your API data here
  })
  .catch(error => {
    console.error("❌ Fetch error:", error.message);
  });
