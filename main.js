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

searchkey.onkeyup = function () {
    var searchname = searchkey.value;
    if (searchname !== "") {
        fetch(
            `https://superheroapi.com/api.php/3328323083897178/search/` + searchname.trim()
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                function showhero() {
                    var heronames = data.results;
                    console.log(data.results);
                    ul.innerText = " ";
                    for (var i of heronames) {
                        var li = document.createElement("li");
                        li.innerHTML = i.name;
                        li.id = i.id;

                        li.addEventListener("click", function () {
                            heroid = this.id;
                            console.log(heroid + "this is id");
                            loadDetails(heroid);
                            ul.innerText = " ";
                        });
                        li.setAttribute("style", "display: block;");
                        ul.appendChild(li);
                    }
                }

                showhero();
            })
            .catch((err) => console.log(err));
    }
}