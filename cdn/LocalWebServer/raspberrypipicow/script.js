document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      // If the checkbox is checked, update the URL to "/lighton"
      window.history.replaceState({}, '', '/lighton');
    } else {
      // If the checkbox is not checked, update the URL to "/lightoff"
      window.history.replaceState({}, '', '/lightoff');
    }
  });
});
