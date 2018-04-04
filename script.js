//input variables
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $searchInput = $('.search-input')
//button variables
var $saveInputButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upVoteButton = $('.up-vote');
var $downVoteButton = $('.down-vote');
var $ideaList = $('.idea-list')
// var ideaCounter = 0;
//event listeners 
$saveInputButton.on('click', addIdeaToList);
//idea array
var $ideas = [];;
var work = $ideas.val;




//this function not working//
$(this).on('load', function() {
    fromLocalStorage();
    // console.log(parsedObject)
    // $("ol").prepend(parsedObject.toHtml());
});



$('ol').on('click', 'li article .up-vote', function() {
    if ($(this).closest('article').hasClass('article')) {
        $(this).closest('.quality').text('article')
        $('.quality').text('Quality: Plausible');
        $(this).closest('article').attr('class', 'article-plausible')
    } else {
        ($(this).closest('article').hasClass('article-plausible'))
        $('.quality').text('Quality: Genius');
        $(this).closest('article').attr('class', 'article-genius');
    }
});

$('ol').on('click', 'li article .down-vote', function() {
    if ($(this).closest('article').hasClass('article-genius')) {
        $('.quality').text('Quality: Plausible');
        $(this).closest('article').attr('class', 'article-plausible')
    } else {
        ($(this).closest('article').hasClass('article-plausible'))
        $('.quality').text('Quality: swill');
        $(this).closest('article').attr('class', 'article');
    }
});

$('ol').on('click', 'li article .delete-button', function() {
    $(this).closest('article').remove()
});


//functions
function clearForm() {
    $titleInput.val('');
    $bodyInput.val('');
};

function Idea(title, body, id) {
    this.title = title,
        this.body = body,
        this.id = id
        this.quality = 'swill' || 'plausible' || 'geni'
};

function addIdeaToList(e) {
    e.preventDefault();
    // ideaCounter++
    var newIdea = new Idea($titleInput.val(), $bodyInput.val(), $.now())
    $ideas.push(new Idea($titleInput.val(), $bodyInput.val(), $.now()))
    $("ol").prepend(newIdea.toHtml());
    toLocalStorage($ideas);
    clearForm();
};

function toLocalStorage() {
    var objectToStore = $ideas;
    var stringifiedObject = JSON.stringify(objectToStore);
    console.log(stringifiedObject);
    localStorage.setItem("newIdea", stringifiedObject);
};

function fromLocalStorage() {
    var retrievedObject = localStorage.getItem('newIdea');
    var parsedObject = JSON.parse(retrievedObject);
    return parsedObject;
};

Idea.prototype.toHtml = function() {
    return (`
    <li id="${this.id}" class="${this.id}">
        <article class="article">
          <button class='delete-button'></button>
          <h1 class="title" contenteditable="true">${this.title}</h1>
          <p class="body" contenteditable="true">${this.body}</p>
          <button id="up" class="up-vote swill"></button>
          <button id="down" class="down-vote swill"></button>
          <p class="quality"><span class="quality-serif">quality:</span> swill</p>
        </article>
      </li>
    `);
};