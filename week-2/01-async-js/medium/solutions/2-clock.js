// Using `week-2/01-async-js/easy/solutions/1-counter.js` ` or `week-2/01-async-js/easy/solutions/2-counter.js` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

async function clock() {
    // Function to display the current time in both 24-hour and 12-hour formats
    const displayTime = () => {
      const now = new Date();
      const time24hr = now.toLocaleTimeString('en-US', { hour12: false }); // 24-hour format
      const time12hr = now.toLocaleTimeString('en-US', { hour12: true }); // 12-hour format
      console.clear(); // Clear the console for a clean display
      console.log(`24-Hour Format: ${time24hr}`);
      console.log(`12-Hour Format: ${time12hr}`);
    };
  
    // Use setInterval in combination with a Promise for continuous update
    await new Promise(() => {
      setInterval(displayTime, 1000);
    });
  }
  
  // Call the clock function
  clock();