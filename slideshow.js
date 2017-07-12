/* slideshow1 */
$("#Mslideshow > div:gt(0)").hide();

setInterval(function() {
  $('#Mslideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#Mslideshow');
}, 3000);

/* slideshow2 */
$("#Wslideshow > div:gt(0)").hide();

setInterval(function() {
  $('#Wslideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#Wslideshow');
}, 3000);

/* slideshow3 */
$("#slideshow3 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow3 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow3');
}, 3000);

/* slideshow4 */
$("#slideshow4 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow4 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow4');
}, 3000);
