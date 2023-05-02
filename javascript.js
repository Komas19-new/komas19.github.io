var copyAlert;
var moveAlert;
var comingsoonAlert;

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event fired");
  copyAlert = document.getElementById("copyalert");
  console.log("copyAlert:", copyAlert);
  moveAlert = document.getElementById("movealert");
  console.log("moveAlert:", moveAlert);
  comingsoonAlert = document.getElementById("comingsoonalert")
  console.log("comingsoonAlert:", comingsoonAlert);
})

  function copyBtn() { // For blog posts 
     // Select the entire blog post
      const blogPost = document.querySelector('.post');
      console.log("Getting blog post");
      const range = document.createRange();
      range.selectNode(blogPost);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      console.log("copy");
  
      // Copy the selected text to the clipboard
      navigator.clipboard.writeText(window.getSelection().toString());
      console.log("clipboard");
  
      // Deselect the text
      window.getSelection().removeAllRanges();
      console.log("deselect");

      // Show the copy alert
      copyAlert.style.opacity = 1;
      console.log("opacity 1");
      copyAlert.style.visibility = "visible";
      console.log("visible");
      setTimeout(function() {
        copyAlert.style.opacity = 0;
        console.log("opacity 0");
        copyAlert.style.transition = "opacity 1s ease-out";
        console.log("transition");
        setTimeout(function() {
          copyAlert.style.visibility = "hidden";
          console.log("gone....");
          copyAlert.style.transition = "none";
        }, 1000);
      }, 5000);
      console.log("we're done");
    }

    function moveBtns() { // For blog posts moving
       moveAlert.style.opacity = 1;
       console.log("opacity 1");
       moveAlert.style.visibility = "visible";
       console.log("visible");
       setTimeout(function() {
         moveAlert.style.opacity = 0;
         console.log("opacity 0");
         moveAlert.style.transition = "opacity 1s ease-out";
         console.log("transition");
         setTimeout(function() {
           moveAlert.style.visibility = "hidden";
           console.log("gone....");
           moveAlert.style.transition = "none";
         }, 1000);
       }, 5000);
       console.log("we're done");
     }

     function comingSoonAlertt() { // For coming soon games
      comingsoonAlert.style.opacity = 1;
      console.log("opacity 1");
      comingsoonAlert.style.visibility = "visible";
      console.log("visible");
      setTimeout(function() {
        comingsoonAlert.style.opacity = 0;
        console.log("opacity 0");
        comingsoonAlert.style.transition = "opacity 1s ease-out";
        console.log("transition");
        setTimeout(function() {
          comingsoonAlert.style.visibility = "hidden";
          console.log("gone....");
          comingsoonAlert.style.transition = "none";
        }, 1000);
      }, 5000);
      console.log("we're done");
    }

  function responsiveTopNav() { // For the Top Bar
      var x = document.getElementById("NavTop");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }