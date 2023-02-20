// The document represents the entire page from the browser
let planet = document.getElementById('greenplanet');            // This return an element object. This objects all have properties and methods
                                                                // Things you can do with an element object:
                                                                // [Get the content(text or HTML), Change the content]
                                                                // [Read an attribute, Add an attribute, Change an attribute, Remove an attribute]
console.log(planet.innerHTML);


planet.innerHTML = "Red Alert: hit by phaser fire!";            // We use this property to change the content from a gotten element.

console.log(planet.innerHTML);
