// This javascript to make notes site
var input = document.getElementById("pin"); // Notes input in index.html
var submit = document.getElementById("sub"); // Submit button in index.html
var notes_place = document.getElementById("notess"); // The output to show notes
var notes = JSON.parse(localStorage.getItem("notes")) || []; // store notes in local storage (on computer)
var removeBtn = document.getElementById("rem")
var index = 1;

function Update_Notes() {
    notes.forEach((note, index) => {
        let exists = Array.from(notes_place.children).some(
            p => p.innerText === index.toString() + "." + " " + note
        );
        if (!exists) {
            var p = document.createElement('p');
            p.innerText = index.toString() + "." + " " + note;
            notes_place.appendChild(p);
        }
    });
}



Update_Notes()

submit.addEventListener('click', () => {
    if(input.value == ""){
        return;
    }

    else{
        var text_input = input.value; // The text of input to store it
        notes.push(text_input); // store text input in array to store array in local storage
        localStorage.setItem("notes", JSON.stringify(notes)); // store in local storage
        Update_Notes()
        input.value = ""

    };

});

removeBtn.addEventListener('click', () => {
    notes = []; // نفرغ المصفوفة
    localStorage.removeItem('notes'); // نمسح من التخزين
    Update_Notes(); // نفضي العرض

});


