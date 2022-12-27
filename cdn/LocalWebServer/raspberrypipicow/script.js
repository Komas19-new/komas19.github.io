const checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    // If the checkbox is checked, redirect to "/lighton?"
    window.location.href = '/lighton?';
  } else {
    // If the checkbox is not checked, redirect to "/lightoff?"
    window.location.href = '/lightoff?';
  }
});
