const details = {
    name: 'Venu',
    surname: 'Reddy',
    fullName: () => {
        return this.name + ' ' + this.surname;
    }
}

const newDetails = {
    name: 'Hercules',
    surname: ', The Warrior'
}

const unboundGetFullName = details.fullName;
console.log(unboundGetFullName())

const boundFullName = details.fullName.bind(newDetails);
console.log(boundFullName())


var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function (snack, hobby) {
    console.log(this.getPokeName() + ' loves', snack + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algorithms');
pokemonName.apply(pokemon, ['sushi', 'algorithms'])

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'