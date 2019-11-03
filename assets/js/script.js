//Footnotes
var slicedFootnote;
$('.footnote').mouseover(function() {
  $(this).parent('sup').addClass('tooltip');
  var href = $(this).attr('href');
  var id = "#" + href.substring(1);
  var escapeId = id.replace(":", "\\:");
  var footnote = $(escapeId).html();
  var parsedFootnote = removeElements(footnote, "a");
  var fixSpaces = parsedFootnote.replace(/\s\s+/g, ' ');
  slicedFootnote = fixSpaces.slice(4, -11);
  console.log(slicedFootnote);

  // Generate tooltip
  var tooltip = $( document.createElement('span') );
  tooltip.addClass('tooltiptext').html(slicedFootnote);

  tooltip.insertAfter( this );
  // $( this ).parent().after(tooltip);
});

var removeElements = function(text, selector) {
    var wrapped = $("<div>" + text + "</div>");
    wrapped.find(selector).remove();
    return wrapped.html();
}

//Fix images
$(document).ready(function(){
    $('p').has('img').css('margin-bottom','4rem');
})

// Bulma hamburger menu
$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
