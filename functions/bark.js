const bark = (dogName, dogWeight) => {
    if (dogWeight > 20)
        console.log(`${dogName} says WOOF WOOF`);
    else    
        console.log(`${dogName} says woof woof`);
}

let dogName = "rover";
let dogWeight = 23;

bark(dogName, dogWeight);

dogName = "spot";
dogWeight = 13;

bark(dogName, dogWeight);
bark('fido', '20');