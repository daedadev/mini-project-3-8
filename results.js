window.onload = function () {

    userInput = document.getElementById("current-search");
    userSelect = document.getElementById("lib-select");
    searchBtn = document.getElementById("search-button");
    resultsBox = document.getElementById("libResults");

    function printItems(data){

        for(i=0; i < data.results.length; i++){

            var theTitle = data.results[i].title
            var titleEL = document.createElement('h1');

            titleEL.innerHTML = theTitle;

            var theDate = data.results[i].date
            var dateEL = document.createElement('h3');

            dateEL.innerHTML = theDate;

            var theSubject = data.results[i].subject
            var subjectEL = document.createElement('h3');

            subjectEL.innerHTML = theSubject;

            var theDescription = data.results[i].description
            var descriptionEL = document.createElement('h3');

            descriptionEL.innerHTML = theDescription;

            resultsBox.appendChild(titleEL);

            resultsBox.appendChild(dateEL);
            resultsBox.appendChild(subjectEL);
            resultsBox.appendChild(descriptionEL);


        }

    }

    function buildQuery(path, query) {
        if(query.length < 1) {
            alert("YO, enter something plz")
            return ""
        }
        console.log(typeof path , path)
        let p = path.substring(0, path.length - 4)
        return `https://www.loc.gov/${p}/?q=${query}&fo=json`

        
    }



    searchBtn.addEventListener("click", function () {
        var url = buildQuery(userSelect.value, userInput.value)
        fetch(url).then(res => res.json()).then(json => {
            console.log("RESULT IS", json)
            printItems(json)
        } )

        resultsBox.innerHTML="";
    })

}

/**
 *
maps: maps
audio recordings: audio
photo, print, drawing: photos
manuscripts/mixed material: manuscripts
newspapers: newspapers
film, videos: film-and-videos
printed music, such as sheet music: notated-music
archived websites: websites
 */

