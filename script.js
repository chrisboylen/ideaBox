//input variables
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $searchInput =$('.search-input')
//button variables
var $saveInputButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upVoteButton = $('.up-vote');
var $downVoteButton = $('.down-vote');
var $ideaList = $('.idea-list')
var ideaCounter = 0;
//event listeners 
$saveInputButton.on('click', addIdeaToList);


$('ol').on('click', 'li article .up-vote', function(){
if ($(this).closest('article').hasClass('article')) {
$('.quality').text('Quality: Plausible');
$(this).closest('article').attr('class', 'article-plausible')
} else { ($(this).closest('article').hasClass('article-plausible')) 
$('.quality').text('Quality: Genius');
$(this).closest('article').attr('class', 'article-genius');
}
});

//functions
function clearForm(){
  $titleInput.val('');
  $bodyInput.val('');
}

function Idea(title, body, id) {
  this.title = title,
  this.body = body,
  this.id = id
}

function addIdeaToList(e) {
  ideaCounter++
  var newIdea = new Idea($titleInput.val(), $bodyInput.val(), ideaCounter)
  e.preventDefault();
  $("ol").prepend(newIdea.toHtml());
  clearForm();
  console.log(newIdea)
}

Idea.prototype.toHtml = function(){
 return (`
    <li id="${this.id}" class="${this.id}">
        <article class="article">
          <button class='delete-button'></button>
          <h1 class="title">${this.title}</h1>
          <p class="body">${this.body}</p>
          <button id="up" class="up-vote swill"></button>
          <button id="down" class="down-vote swill"></button>
          <p class="quality"><span class="quality-serif">quality:</span> swill</p>
        </article>
      </li>
    `);
};

// $('ol').on('click', 'li article .up-vote', function() {
//   if ($(this).closest('article').hasClass('article')); {
//       $(this).closest('article').attr('class', 'article-plausible');
//     } else if ($(this).closest('article').hasClass('article-plausible')); {
//       $(this).closest('article').attr('class', 'article-plausible');
//     } else {
//       $(this).closest('article').attr('class', 'article-genius');
//     }
//   });
    

