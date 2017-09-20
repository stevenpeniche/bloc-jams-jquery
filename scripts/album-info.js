$(document).ready(function() {
  $('#album-info').text(album.title);
  $('#album-cover-art').attr('src', album.albumArtUrl);
});
