let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');
  
      function add(pokemon) {
        pokemonList.push(pokemon);
      }
  
      function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list'); 
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('buttonItem');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function(event){showDetails(pokemon)});
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
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
                modalContainer.innerHTML = '';
        let modal = document.createElement('div');
          modal.classList.add('modal');

          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerText = 'Close';
          closeButtonElement.addEventListener('click', hideModal);

          let nameElement = document.createElement('h1');
          nameElement.innerText = pokemon.name
          let heightElement = document.createElement('h1');
          heightElement.innerText = "height = " + pokemon.height;
          let imageElement = document.createElement('img');
          imageElement.src = pokemon.imageUrl;
          imageElement.width = 250;
          imageElement.height = 250;

          console.log(nameElement)
          console.log(heightElement);

          modal.appendChild(closeButtonElement);
          modal.appendChild(nameElement);
          modal.appendChild(heightElement);
          modal.appendChild(imageElement);
          modalContainer.appendChild(modal);
          
          modalContainer.classList.add('is-visible');
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

      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }  

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
     //Since this is also triggered when clicking INSIDE the modal
     //We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
   }
  });

  function hideModal() {
    modalContainer.classList.remove('is-visible');
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
      // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    });

  });