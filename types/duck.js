function Duck(sound){
    this.sound = sound;
    this.quack = function() { console.log(this.sound) };
}

let toy = new Duck('quack quack');

console.log(typeof toy);
console.log(toy instanceof Duck);