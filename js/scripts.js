let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
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
              //button.classList.add('buttonItem');
        listItem.append(button);
        pokemonList.append(listItem);
       }
  
      function getAll() {
        return pokemonList;
      }
    
     function showDetails(pokemon) {
        let modalBody=(".modal-body");
        let modalHeader=(".modal-header");
        let modalTitle=(".modal-title")
        // clear the modal body and title
        modalBody.empty();
        modalTitle.empty();

        loadDetails(pokemon).then(function () {

          let nameElement = document.createElement('h1');
          nameElement.innerText = pokemon.name
          let heightElement = document.createElement('h1');
          heightElement.innerText = "height = " + pokemon.height;
          let imageElement = document.createElement('img');
          imageElement.src = pokemon.imageUrl;
          imageElement.width = 250;
       
          //modal.appendChild(closeButtonElement);
          modalTitle.append(nameElement);
          modalBody.append(heightElement);
          modalBody.append(imageElement);
         modalContainer.appendChild(modal);
          
         modalContainer.classList.add('is-visible');
       });
      }

       return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
      }})
    ();
  
  pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
    });

  });