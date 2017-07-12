/* slideshow1 */
$("#slideshow1 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
}, 3000);

/* slideshow2 */
$("#slideshow2 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
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
