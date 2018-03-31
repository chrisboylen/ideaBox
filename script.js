//input variables
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $searchInput =$('.search-input')
//button variables
var $saveInputButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upVoteButton = $('.up-vote');
var $downVoteButton = $('.down-vote');

var $quality = $('')
var ideaCounter = 0;
//event listeners 
$saveInputButton.on('click', addIdeaToList);

function addIdeaToList(e) {
  e.preventDefault();
ideaCounter++;
function Idea(title, body, id) {
  this.title = title,
  this.body = body,
  this.id = id
  // this.quality =
}

console.log(ideaCounter);
var coolstuff = new Idea($titleInput.val(), $bodyInput.val()  , ideaCounter)
console.log(coolstuff);
}

$('ul').on('click', '.idea article .up-vote', function() {
  if ($(this).hasClass('swill')) {
  $(this).toggleClass('plausible');
  $('.quality').text('Quality: Plausible');
  } else {
         ($(this).hasClass('plausible')) 
         $(this).toggleClass('genius');
         $('.quality').text('Quality: Genius');
  } 
});

// $('ul').on('click', '.idea article .down-vote', function() {
//   if ((this).className === 'down-vote') {
//   $(this).toggleClass('plausible');
//   $('.quality').text('Quality: Plausible');
  
//   } else {
//   $(this).toggleClass('swill');
//   $('.quality').text('Quality: swill');
//     }
// })




// Data Model
// An Idea has an id, title, a body, and a quality.
// The id should be a unique identifier.
// title and body are free-form strings.
// quality .upshould be one of the follow: “genius”, “plausible”, and “swill.”
// By default, the idea’s “quality” should default to the lowest setting (i.e. “swill”).
