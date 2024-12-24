document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('share-btn');
    const shareTooltip = document.getElementById('share-tooltip');
  
    shareButton.addEventListener('click', function(event) {
      event.preventDefault();
      shareTooltip.classList.toggle('active');
    });
  });