let fido = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls'
};

const loseWeight = (dog, amount) => dog.weight -= amount;

let bark = fido.weight > 20 ? 'WOOF WOOF' : 'woof woof';

console.log(`${fido.name} says ${bark} when he wants to ${fido.activity}`)

loseWeight(fido, 5);

console.log(fido);