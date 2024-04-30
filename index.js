document.addEventListener('DOMContentLoaded', function() {
    loadLatestVideos(3);
  });
  
  function loadLatestVideos(numberOfVideos) {
    const videosList = document.getElementById('video-gallery');
    for (let i = 0; i < numberOfVideos; i++) {
        const iframe = document.createElement('iframe');
        iframe.width = "420";
        iframe.height = "236.25";
        iframe.style.margin = "10px";
        iframe.style.transition = "transform 0.5s";
        iframe.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"; 
        iframe.onmouseover = () => iframe.style.transform = "scale(1.05) perspective(1px)";
        iframe.onmouseout = () => iframe.style.transform = "scale(1) perspective(1px)";
        iframe.src = `https://www.youtube.com/embed/?listType=playlist&list=PLFAnX2pKCwlHc9lm4Is4tE6zeaX9opZNw&index=${i + 1}`;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        videosList.appendChild(iframe);
    }
  }