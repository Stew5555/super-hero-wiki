//Search input
var search = document.getElementById("text_search");
var searchkey = document.getElementById("text_searchh");
const ul = document.getElementById("auto-complete");
var superheroImg;

// Serch user event listener
search.addEventListener('keydown', (e) => {
    //get the input text
    if (e.keyCode == 13) {
        //console.log("ENTER KEY PRESSED");
        const userText = e.target.value;

        if (userText != '') {
            //console.log(userText);
            // getSuperHeroImg(userText);
            ajax(userText); //Call the ajax function


        }
        else {
            var display = document.getElementById('display-data');
            //console.log("CLEAR ");
            display.innerHTML = "";
        }
    }

});