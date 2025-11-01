console.log("hello")

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]


function squaredNums(nums) {
    return nums.map (
        num => num * num
    )
}
console.log(squaredNums(nums))

const squares = nums.map(function(num) {
    return num * num
})
console.log(squares)


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

function capitalizedNames(names) {
    return names.map (name =>
        name[0].toUpperCase() + name.slice(1)
    )
}
console.log(capitalizedNames(names))

// const capitalized = names.map((name) => {
//     return name[0].toUpperCase() + name.slice(1)
// })
const capitalized = names.map((name) => 
    name[0].toUpperCase() + name.slice(1))
console.log(capitalized)   // shorter, more concise way since return is implied

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle", "Strawberry"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

function paragraphPokemon(pokemon) {
    return pokemon.map (pokemon =>
        `<p>${pokemon}</p>`
    )
}
console.log(paragraphPokemon(pokemon))

// const paragraph = pokemon.map((pokemon) => {
//     return `<p>${pokemon}</p>`
// })
const paragraph = pokemon.map(pokemon => 
    `<p>${pokemon}</p`)     // shorter, more concise way since return is implicit
console.log(paragraph)