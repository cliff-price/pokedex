let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
      function add(pokemon) {
        pokemonList.push(pokemon);
      }
  
      function addListItem(pokemon) {
        let pokemonList = document.querySelector('.list-group'); 
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item')
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.setAttribute("data-target", "#pokemonModal");
        button.setAttribute("data-toggle","modal");
        button.classList.add('btn')
        button.classList.add('btn-secondary')
        listItem.append(button);
        pokemonList.append(listItem);

       showDetails(pokemon)
       }

        function loadList() {
          return fetch(apiUrl).then(function (response) {
            return response.json();
          }).then(function (json) {
            json.results.forEach(function (item) {
              let pokemon = {
                name: item.name,
                detailsUrl: item.url
              };
              add(pokemon);
            });
          }).catch(function (e) {
            console.error(e);
          })
        }
          
      function getAll() {
        return pokemonList;
      }
    
      function showDetails(pokemon) {
        let modalBody=document.querySelector('.modal-body'); 
        let modalTitle=document.querySelector('.modal-body');
        console.log(modalTitle);
        // clear the modal body and title
        modalBody="";
        modalTitle="";

        loadDetails(pokemon).then(function () {

          let nameElement = document.createElement('h1');
          nameElement.innerText = pokemon.name
          let heightElement = document.createElement('h1');
          heightElement.innerText = "height = " + pokemon.height;
          let imageElement = document.createElement('img');
          imageElement.src = pokemon.imageUrl;
          imageElement.width = 250;

       
           modalTitle.innerChild(nameElement);
//          modalBody.append(heightElement);
//          modalBody.append(imageElement);
         });
      }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

       return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
      }

    })
    ();

  pokemonRepository.loadList().then(function() {
      // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    });

  });