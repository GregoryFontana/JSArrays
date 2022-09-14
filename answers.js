////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i <= 20; i++) 
console.log(i);
////////////////////////////////
// Get Even
////////////////////////////////
for(let i = 0; i<=200; i++){
    if(i%2===0){
    console.log(i)
    }
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let i = 0; i<=100; i++){
    if(i%5===0 && i%3===0){
        console.log("FizzBuzz" || i)
    }
    else if (i%5===0){
        console.log("Buzz" || i)
    }
    if (i%3===0){
        console.log("Fizz" || i)
    }
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
console.log(plantee)
wolfy[3] = "Gotham City"
console.log(wolfy)
dart.push("Hawkins")
console.log(dart)
wolfy[0] = "Gameboy"
console.log(wolfy)
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninTurts = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
    for (let ninTurt of ninTurts) {
        console.log(ninTurt.toUpperCase())
    }
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8])
console.log(favMovies.sort()) //The method rearranged them in ascending alphabetical order.
console.log(favMovies.pop())
console.log(favMovies.push("Guardians of the Galaxy"))
console.log(favMovies.reverse())
console.log(favMovies.shift())
console.log(favMovies.unshift()) //It returns "18" because there are no parameters to insert into he new array.
favMovies.splice(14, 0, 'Avatar')
console.log(favMovies) // The array has been altered.
console.log(favMovies.slice(8,18)) // .slice does not alter the original array.
let newSlice = favMovies.slice(8,18)
console.log(newSlice) // Not quite sure. It returns exactly what I expected.
console.log(favMovies.indexOf('Fast and Furious'))// We get 13. I don't know why.
//Not weird. We cannot change the value of a variable declared with const but we can change its contents. 

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
