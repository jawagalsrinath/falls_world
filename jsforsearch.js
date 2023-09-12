document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have an array called 'items' containing your list of items
    const items = ["Kovai Kutralam Falls in Coimbatore",
                    "Law's Falls in Coimbatore",
                    "Monkey Falls in Coimbatore",
                    "Siruvani Falls in Coimbatore",
                    "Hogenakkal Falls in Dharmapuri",
                    "Bear Shola Falls in Dindigul",
                    "Silver Cascade Falls in Dindigul",
                    "Thalaiyar Falls in Dindigul",
                    "odiveri Falls in Erode",
                    "Thirparappu Falls in Kanniyakumari",
                    "Avalanche Falls in Nilgiris",
                    "Catherine Falls in Nilgiris",
                    "Katary Falls in Nilgiris",
                    "Pykara Falls in Nilgiris",
                    "Kiliyur Falls in Salem",
                    "kumbakkarai Falls in Theni",
                    "Meghamalai Falls in Theni",
                    "Suruli Falls in Theni",
                    "Agasthiyar Falls in Thirunelveli",
                    "Courtallam Falls (kutralam Falls) in Thirunelveli",
                    "Manimuthar Falls in Thirunelveli",
                    "Paana Theertham Falls in Thirunelveli",
                    "Ubbalamadugu Falls in Thiruvallur",
                    "Javadhu Hills Falls in Tiruvannamalai",
                    "Puliyancholai Falls in Tiruchirappalli",
                    "Amirthi Falls in Vellore"];
  
    // Get references to the search form and results container
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
  
    // Event listener for the search form submission
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the user's search query
      const query = searchInput.value.toLowerCase();
  
      // Perform the search
      const results = items.filter(item => item.toLowerCase().includes(query));
  
      // Display the search results
      displayResults(results);
    });
  
    // Function to display the search results
    function displayResults(results) {
      // Clear previous results
      searchResults.innerHTML = '';
  
      if (results.length === 0) {
        searchResults.textContent = 'Sorry! No falls found with the searched falls name. Try to search next falls';
      } else {
        results.forEach(result => {
          const itemElement = document.createElement('div');
          itemElement.textContent = result;
          searchResults.appendChild(itemElement);
        });
      }
    }
  });
  
