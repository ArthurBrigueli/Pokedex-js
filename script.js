const pokemon_img = document.querySelector('.pokemon-img')
const id_pokemon = document.querySelector('.id-pokemon')
const nome_pokemon = document.querySelector('.nome-pokemon')
const input = document.querySelector('#input-txt')
const img = document.querySelector('.pokemon-img')
const botao_menos = document.querySelector('.button-menos')
const botao_mais = document.querySelector('.button-mais')
let click = 0


const getPokemon = async(pokemon) => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const res = await fetch(apiURL)
    const data = await res.json()
    return data
    
}




const showData = async (pokemon) => {
    nome_pokemon.innerHTML = 'Carregando...'
    id_pokemon.innerHTML = ''
    const data = await getPokemon(pokemon)
    click = data.id
    nome_pokemon.innerHTML = `${data.name}`
    id_pokemon.innerHTML = `${data.id}`
    const pokeimg = `${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`
    img.src = pokeimg
}

showData(1)

input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        showData(input.value)
        click = parseInt(click)
        input.value = ''
    }
})




botao_mais.addEventListener('click', (e)=>{
    e.preventDefault()
    click += 1
    showData(click)
})

botao_menos.addEventListener('click', (e)=>{
    e.preventDefault()
    if(click > 1){
        click -= 1
        showData(click)
    }
    
})