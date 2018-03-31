$(document).ready(function() {

  // Give body a class so the banner will zoom in.
  window.onload = function() {
    document.body.className += ' loaded'
  };

  // Side Navigation
  $(".button-collapse").sideNav({
    closeOnClick: true
  });

  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });

  GHRepos.create('.projects a')

});
