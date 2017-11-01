// This function allows the show/hide button to toggle the option buttons between visible/not visible
function toggleButtons() {
  if (document.getElementById("options").style.display == 'inline'){
      hideOptions();
      document.getElementById("toggle").innerHTML = "Show Options";
    } else {
      displayOptions("Go to Basement", "Go to Park");
      document.getElementById("toggle").innerHTML = "Hide Options";
      document.getElementById("testMessage").innerHTML = "";
    }
}

// Displays a brief message when an option button is clicked
function optionButtonClicked() {
  console.log("click");
  document.getElementById("testMessage").innerHTML = "A button was clicked";
  window.setTimeout(hideMessage, 500); // Shows button clicked message for half a second
  }

// Hides the button clicked message after half a second
  function hideMessage() {
    document.getElementById("testMessage").innerHTML = "";
  }
