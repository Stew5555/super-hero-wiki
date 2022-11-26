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

// displaying the hero details on screen 
function loadDetails(heroid) {
    fetch(`https://superheroapi.com/api.php/ 3328323083897178/${heroid}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // var details = document.getElementById('details');
            // details.setAttribute("style","background-color:rgba(0,0,0,0.8);")

            var img = document.getElementById("img");
            img.setAttribute("src", data.image.url);

            var name = document.getElementById("name");
            name.innerHTML = data.name;

        })
        .catch((error) => console.log(error));
}

function ajax(keyword) {  //AJAX request

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
        dataType: "jsonp",

        success: function (responses) {
            //console.log(response.query);

            if (responses.query.searchinfo.totalhits === 0) {
                alert(keyword + "NO RESULTS FOUND");
            }
            else {
                displayData(responses);
            }
        },
        error: function () {
            alert("Error retrieving search results, please refresh the page");
        }
    });
}