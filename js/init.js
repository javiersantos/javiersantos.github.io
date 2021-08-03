$(document).ready(function() {

  // Give body a class so the banner will zoom in.
  window.onload = function() {
    document.body.className += ' loaded'
  };

  // Side Navigation
  $('.sidenav').sidenav();

  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });

  $('.tooltipped').tooltip();

  GHRepos.create('.projects a')

});
