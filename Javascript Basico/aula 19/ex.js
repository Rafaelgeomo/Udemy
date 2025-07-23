// Main function that encapsulates the entire form scope
function mainScope() {
   // Selects the form by class selector
   const form = document.querySelector(".form");
   // Selects the div where the result will be displayed
   const result = document.querySelector(".result");

   // Array to store the registered person objects
   const people = [];

   // Function that handles the form submit event
   function handleFormSubmit(event) {
      // Prevents the default form behavior (page reload)
      event.preventDefault();

      // Selects the input fields from the form
      const firstName = form.querySelector(".first-name");
      const lastName = form.querySelector(".last-name");
      const weight = form.querySelector(".weight");
      const height = form.querySelector(".height");

      // Adds a new person object to the array, getting the input values
      people.push({
         firstName: firstName.value,
         lastName: lastName.value,
         weight: weight.value,
         height: height.value,
      });

      // Displays the array of people in the console for verification
      console.log(people);

      // Displays the registered data on the screen, concatenating the input values
      result.innerHTML += `My full name is ${firstName.value} ${lastName.value}, my current weight is ${weight.value} Kg and my height is ${height.value}<br>`;

      // Clears the form fields after submission
      firstName.value = "";
      lastName.value = "";
      weight.value = "";
      height.value = "";
   }

   // Adds the submit event to the form, calling the handleFormSubmit function
   form.addEventListener("submit", handleFormSubmit);
}

// Calls the main function to start the script
mainScope();
