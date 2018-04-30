
$('.save-button').on('click', addIdeaToList);
$('ol').on('click', 'li article .delete-button', deleteIdea) 
$('ol').on('click', 'li article .up-vote', upQuality)
$('ol').on('click', 'li article .down-vote', downQuality) 
$('.search-input').on('keyup', searchIdeas)


function searchIdeas() {
  let searchInput = $('.search-input').val().toLowerCase();
  $('article').filter(function () {
    $(this).toggle($(this).text().indexOf(searchInput)> -1);
  })
}

function upQuality() {
  let quality = ['swill', 'plausible', 'genius']
  let thisIdea = getIdeaFromStorage(localStorage.key('id'));
  let q = quality.indexOf(thisIdea.quality);
  if (q < 2) {
    thisIdea.quality = quality[q + 1];
    $(this).closest('article').children('p.quality').children('span.q').text(thisIdea.quality)
    toLocalStorage(thisIdea)
  }
}

function downQuality() {
  let quality = ['swill', 'plausible', 'genius']
  let thisIdea = getIdeaFromStorage(localStorage.key('id'));
  let fuck = this.closest('article')
  let q = quality.indexOf(thisIdea.quality);
  if (q > 0) {
    thisIdea.quality = quality[q - 1];
    $(this).closest('article').children('p.quality').children('span.q').text(thisIdea.quality)
    toLocalStorage(thisIdea);  
  }
}

function deleteIdea() {
  $(this).closest('article').remove();
  localStorage.removeItem(localStorage.key('id'));
}

$(this).on('load', function() {
  fromLocalStorage()
});

function fromLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let idea = getIdeaFromStorage(localStorage.key(i));
    toHtml(idea)
  }
}

function getIdeaFromStorage(id) {
  let retrievedObject = localStorage.getItem(id);
  let idea = JSON.parse(retrievedObject);
  return idea;
}

function clearForm() {
  $('.title-input').val('');
  $('.body-input').val('');
};

function Idea(title, body, id, quality) {
  this.title = title,
  this.body = body,
  this.id = id,
  this.quality = 'swill'
};

function addIdeaToList(e) {
  e.preventDefault();
  let $titleInput = $('.title-input');
  let $bodyInput = $('.body-input');
  let newIdea = new Idea($titleInput.val(), $bodyInput.val(), $.now())
  toHtml(newIdea);
  toLocalStorage(newIdea);
  clearForm();
};

function toLocalStorage(newIdea) {
  let stringifiedObject = JSON.stringify(newIdea);
  localStorage.setItem(newIdea.id, stringifiedObject);
};

function toHtml(newIdea) {
  $("ol").prepend(`
    <li id="${newIdea.id}">
    <article class="article">
    <button class='delete-button'></button>
    <h1 class="title" contenteditable="true">${newIdea.title}</h1>
    <p class="body" contenteditable="true">${newIdea.body}</p>
    <button id="up" class="up-vote swill"></button>
    <button id="down" class="down-vote swill"></button>
    <p class="quality"><span class="quality-serif">quality:</span> <span class="q">${newIdea.quality}</span></p>
    </article>
    </li>`);
};