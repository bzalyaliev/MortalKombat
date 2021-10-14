const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife'],
    attack:
        function ()
        {
            console.log(this.name + "Fight...")
        }
}

const player2 = {
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['fireball'],
    attack:
        function ()
        {
            console.log(player2.name + "Fight...")
        }
}

function createPlayer(name, hp, img) {
    const $player1 = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');

    $player1.classList.add('Player1');
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');

    const arenas = document.querySelector('.arenas');
    arenas.appendChild($player1);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    $life.style.width = hp + '%';
    $name.innerText = name;
    $img.src = img;
}

createPlayer(player1['name'], player1['hp'], player1['img']);
createPlayer(player2['name'], player2['hp'], player2['img']);


