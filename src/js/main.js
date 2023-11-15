import "./../css/style.css"





fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);



        for (let i = 0; i < 3; i++) {

            const randomNumber = Math.floor(Math.random() * data.results.length);


            const rickContainer = document.createElement("div");
            rickContainer.className = "rickContainer"
            const nameTag = document.createElement("h1");
            const locationTag = document.createElement("h3");
            const speciesTag = document.createElement("h3");

            const image = document.createElement("img");

            nameTag.innerHTML = data.results[randomNumber].name;
            locationTag.innerHTML = "Location: " + data.results[randomNumber].location.name;
            speciesTag.innerHTML = "Species: " + data.results[randomNumber].species;
            image.src = data.results[randomNumber].image;

            rickContainer.appendChild(nameTag);
            rickContainer.appendChild(locationTag);
            rickContainer.appendChild(speciesTag);
            rickContainer.appendChild(image);
            document.body.appendChild(rickContainer);
        }
    });





