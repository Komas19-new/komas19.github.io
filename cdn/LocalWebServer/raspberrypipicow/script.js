document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      // If the checkbox is checked, update the URL to "/lighton" and refresh the page
      window.history.replaceState({}, '', '/lighton');
      window.location.reload();
    } else {
      // If the checkbox is not checked, update the URL to "/lightoff" and refresh the page
      window.history.replaceState({}, '', '/lightoff');
      window.location.reload();
    }
  });
});
