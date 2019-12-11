<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
jQuery.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll load', function() {
$('iframe').each(function() {
  if ($(this).isInViewport()) {
      this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  } else {
      this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }
});
});
</script>
