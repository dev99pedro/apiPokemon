
const btn = document.querySelector('.btn')
function getPokemon() {
    const input = document.getElementById('input').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`).then(response=>response.json()).then(element=>{
           document.querySelector('.imagem-pokemon').src = element.sprites.other["official-artwork"].front_default
           document.querySelector('.nome').innerHTML = element.name
    })

}


btn.addEventListener('click', () => {
    getPokemon()
  
})



