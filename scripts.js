let loadedVideos = 0;
const videosToLoadEachTime = 12;

function loadVideos(startIndex, numberOfVideos) {
  const videosList = document.getElementById('videos-list');

  for (let i = startIndex; i < startIndex + numberOfVideos; i++) {
    const iframe = document.createElement('iframe');
    iframe.width = "550";
    iframe.height = "309.375";
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
  loadedVideos += numberOfVideos;
}

document.addEventListener('DOMContentLoaded', function () {
  loadVideos(loadedVideos, videosToLoadEachTime);
});

window.addEventListener('scroll', function () {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
    loadVideos(loadedVideos, videosToLoadEachTime);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var selector = document.getElementById('video-selector-page');
  var url = window.location.href;

  for (var i = 0; i < selector.options.length; i++) {
    if (selector.options[i].value === 'videos.html' && url.indexOf('videos.html') > -1) {
      selector.options[i].selected = true;
    } else if (selector.options[i].value === 'videos2.html' && url.indexOf('videos2.html') > -1) {
      selector.options[i].selected = true;
    } else if (selector.options[i].value === 'videos3.html' && url.indexOf('videos3.html') > -1) {
      selector.options[i].selected = true;
    }
  }
});

