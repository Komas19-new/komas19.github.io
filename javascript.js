document.addEventListener("DOMContentLoaded", function() {
  var copyAlert = document.getElementById("copyalert");

  function copyBtn() { // For blog posts 
     // Select the entire blog post
      const blogPost = document.querySelector('.post');
      const range = document.createRange();
      range.selectNode(blogPost);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  
      // Copy the selected text to the clipboard
      navigator.clipboard.writeText(window.getSelection().toString());
  
      // Deselect the text
      window.getSelection().removeAllRanges();

      // Show the copy alert
      copyAlert.style.opacity = 1;
      copyAlert.style.visibility = "visible";
      setTimeout(function() {
        copyAlert.style.opacity = 0;
        copyAlert.style.visibility = "hidden";
      }, 500);
    }

  function responsiveTopNav() { // For the Top Bar
      var x = document.getElementById("NavTop");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  })