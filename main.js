const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0' // url de todos os pokemons no pokeapi
let contador = 0 // contador

function getPokemon(url) { //função que vai importar a url dentro da função
    return fetch(url) // fetch converte em json
    .then(data => data.json()) //Transforma em json
    .catch(err => err.json()); //Transforma em json
}

async function infoPoke2(url) {  //função que vai pegar o url do pokemon especifico, sendo ele: https://pokeapi.co/api/v2/pokemon/1/
    const aaa = await getPokemon(url) // aaa ele espera e mostra sua finalização, feito um time ou um cooldown
    const results = aaa.results[contador].url // Aqui iria mostrar o resultado, pegando o await da const acima e pegando o contador, para começar a contar e não duplicar infinitamente, sendo assim, pegando o url dentro do pokeapi
    return fetch(results) // fetch pegando a const results, trazendo o url em json 
    .then(data => data.json()) // transforma em json
}

async function dadosPoke() {
    const bbb = await infoPoke2(url)

    while(contador<150) {
        const principal = await infoPoke2(url)

        const nomePokemon = principal.name;
        const idPokemon = principal.id;
        const imagemPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+idPokemon+'.gif'
        const alturaPokemon = principal.height;
        const pesoPokemon = principal.weight;

        const card = document.querySelector('.poke');
        card.innerHTML += `
        
      <div class="pokebox">
        <p class="nomeP">${nomePokemon}</p>
        <p class="number"># ${idPokemon}</p>
        <p class="altura">${alturaPokemon/10} m</p>
        <p>${pesoPokemon/10} kg</p>
            <img src="${imagemPokemon}">

             <div id="tipos${contador}" class="tipos">
          </div>
        </div>
        `

        const typesNames = principal.types

        
    let contador2 = 0;
    while(contador2 < typesNames.length) {
        let colocarTipos = document.getElementById('tipos' + contador)
        let tipo = document.createElement('p')
        tipo.innerHTML = `
        ${typesNames[contador2].type.name}
        `

        colocarTipos.appendChild(tipo)

        if (typesNames[contador2].type.name == 'grass') {
          tipo.style.background = 'green'
        } else if (typesNames[contador2].type.name == 'poison') {
          tipo.style.background = 'purple'
        } else if (typesNames[contador2].type.name == 'fire') {
          tipo.style.background = 'orange'
        } else if (typesNames[contador2].type.name == 'flying') {
          tipo.style.background = '#836FFF'
        } else if (typesNames[contador2].type.name == 'water') {
          tipo.style.background = 'blue'
        } else if (typesNames[contador2].type.name == 'bug') {
          tipo.style.background = 'olivedrab'
        }  else if (typesNames[contador2].type.name == 'normal') {
          tipo.style.background = 'navajowhite'
        }  else if (typesNames[contador2].type.name == 'electric') {
          tipo.style.background = 'gold'
        }  else if (typesNames[contador2].type.name == 'ground') {
          tipo.style.background = '#bc5e00'
        } else if (typesNames[contador2].type.name == 'fairy') {
          tipo.style.background = '#FF69B4'
        } else if (typesNames[contador2].type.name == 'dark') {
          tipo.style.background = '#1C1C1C'
        } else if (typesNames[contador2].type.name == 'dragon') {
          tipo.style.background = '#483D8B'
        } else if (typesNames[contador2].type.name == 'fighting') {
          tipo.style.background = '#8B0000'
        } else if (typesNames[contador2].type.name == 'ghost') {
          tipo.style.background = '#7B68EE'
        } else if (typesNames[contador2].type.name == 'ice') {
          tipo.style.background = '#87CEEB'
        } else if (typesNames[contador2].type.name == 'psychic') {
          tipo.style.background = '	#FF1493'
        } else if (typesNames[contador2].type.name == 'rock') {
          tipo.style.background = '#D2B48C'
        } else if (typesNames[contador2].type.name == 'steel') {
          tipo.style.background = '#008080'
        }
        contador2++
    }

        contador++
    }
   
}

dadosPoke()