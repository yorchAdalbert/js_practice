const init = () => {
    let planet = document.getElementById('greenplanet');
    planet.innerHTML = 'Red Alert: hit by phaser fire!';

    // The setAttribute method is used to create a new attribute on an element object, this method needs to arguments... 
    // the attribute name and the value for a given attribute name.
    planet.setAttribute('class', 'redtext');
}

// The window object represents the window browser and this property needs a function to execute 
// after the the browser's window get loaded.

window.onload = init;   // this property only needs the reference to the function.