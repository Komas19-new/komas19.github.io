function copyButton() { // For blog posts 
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
  }

function responsiveTopNav() { // For the Top Bar
    var x = document.getElementById("NavTop");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  