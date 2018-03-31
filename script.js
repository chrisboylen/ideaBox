//input variables
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $searchInput =$('.search-input')
//button variables
var $saveInputButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upVoteButton = $('.up-vote');
var $downVoteButton = $('.down-vote');

// var $quality = $('')
var ideaCounter = 0;
//event listeners 
$titleInput.on('keyup', function() {
  toggleSubmitButton();
});

$bodyInput.on('keyup', function() {
  toggleSubmitButton();
});
  
$saveInputButton.on('click', function() {
  addIdeaToList();
  clearInputFields();
});


// $('ul').on('click', '.idea article .up-vote', function() {
//   if ($(this).hasClass('swill')) {
//   $(this).removeClass('swill');
//   $(this).addClass('plausible')
//   $('.quality').text('Quality: Plausible');
//   } else {
//          ($(this).hasClass('plausible')) 
//          $(this).removeClass('plausible');
//          $(this).addClass('genius')
//          $('.quality').text('Quality: Genius');
//   } 
// });

// $('ul').on('click', '.idea article .down-vote', function() {
//   if ($(this).hasClass('genius')) {
//   $(this).closest('genius').removeClass();
//   $(this).closest('plausible').remove();
//   $('.quality').closest('Quality: Plausible').text();
//   } else {
//          ($(this).hasClass('plausible')) 
//          $(this).removeClass('plausible');
//          $(this).addClass('swill')
//          $('.quality').text('Quality: swill');
//   } 
// });

//functions
function toggleSubmitButton () {
  if ($titleInput.val() === ('') && $bodyInput.val() ===('')) {
    saveInputButton.attr('disabled', true);
  } else if ($titleInput.val() !== ('') && $bodyInput.val() !==('')) {
    saveInputButton.attr('disabled', false);
  } 
};


function clearInputFields() {
  $titleInput.val('');
  $bodyInput.val('');
  $saveInputButton.attr('disabled', true);
};

function Idea(title, body, id, quality) {
  this.title = title,
  this.body = body,
  this.id = id,
  this.quality = quality || ('swill');
};

function addIdeaToList(e) {
// e.preventDefault();
ideaCounter++
var newIdea = new Idea($titleInput.val(), $bodyInput.val()  , ideaCounter)
console.log(ideaCounter);
console.log(newIdea);
$("ul").append(newIdea.toHtml());
};

Idea.prototype.toHtml = function(){
 return (`
    <li id="${this.id}" class="idea">
        <article>
          <h1 class="title">${this.title}</h1>
          <button class='delete-button' aria-label='Delete Button'>X</button>
          <p class="body">${this.body}</p>
          <button class="up-vote swill" aria-label='Up Vote Button'>U</button>
          <button class="down-vote swill" aria-label='Down Vote Button'>D</button>
          <h4 class="quality">Quality:<span class="change-quality">${this.quality}</span> </h4>
        </article>
      </li>
    `);
};

Idea.prototype.upVoteButton = function() {
  var quality = this.quality;
  if (quality === 'swill') {
    this.quality = 'plausible';
  } else if (quality === 'plausible') {
    this.quality = 'genius';
  }
};

Idea.prototype.downVoteButton = function() {
  var quality = this.quality;
  if (quality === 'genius') {
    this.quality = 'plausible';
  } else if (quality === 'plausible') {
    this.quality = 'swill';
  }
};

// $("ul").append(`<li id="${ideaCounter}" class="idea">
//         <article>
//           <h1 class="title">${$titleInput.val()}</h1>
//           <button class='delete-button'>X</button>
//           <p class="body">${$bodyInput.val()}</p>
//           <button class="up-vote swill">U</button>
//           <button class="down-vote swill">D</button>
//           <p class="quality">Quality: swill</p>
//         </article>
//       </li>`)



// Data Model
// title and body are free-form strings.
// quality .upshould be one of the follow: “genius”, “plausible”, and “swill.”
// By default, the idea’s “quality” should default to the lowest setting (i.e. “swill”).
