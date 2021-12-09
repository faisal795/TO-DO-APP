
'use strict';

showAllNotes();

let addToDo = document.querySelector('#addToDo');
addToDo.addEventListener('click', function (elmnt) {
    let myToDo = document.querySelector('#myToDo');

    let notes = sessionStorage.getItem('notes');
    let notesArry = [];
    (notes === null) ?  notesArry = [] : notesArry = JSON.parse(notes);

    notesArry.push(myToDo.value);
    sessionStorage.setItem('notes', JSON.stringify(notesArry));
    myToDo.value = '';
    showAllNotes();
});
function showAllNotes() {
    let notes = sessionStorage.getItem('notes');
    let notesArry = [];
    (notes === null) ?  notesArry = [] : notesArry = JSON.parse(notes);
    let showHTML = '';
    notesArry.forEach(function (elmnt, index) {
        showHTML = showHTML + `<div class="note">
        <p> ${elmnt}</p>
        <button id="${index}" onclick="deleteNote(this.id)">Delete</button>
    </div>`;
    });
    let NotesDiv = document.querySelector('#NotesDiv');
    (notesArry.length != 0) ? NotesDiv.innerHTML = showHTML : NotesDiv.innerHTML = '<h2>Add Notes!</h2>';
}
function deleteNote(index) {
    let notes = sessionStorage.getItem('notes');
    let notesArry = [];
    (notes === null) ?  notesArry = [] : notesArry = JSON.parse(notes);
    notesArry.splice(index, 1);
    sessionStorage.setItem('notes', JSON.stringify(notesArry));
    showAllNotes();
}

document.querySelector('#clear').addEventListener('click', function () {
   
    sessionStorage.clear();
    showAllNotes();

})