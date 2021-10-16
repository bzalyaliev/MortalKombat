const $arenas = document.querySelector('.arenas');

const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife'],
    attack:
        function ()
        {
            console.log(name + ' ' + "Fight...")
        }
}

const player2 = {
    player: 2,
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['fireball'],
    attack:
        function ()
        {
            console.log(name + ' ' + "Fight...")
        }
}

function createElement(tag, className){
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');


    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.floor(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';
    console.log(player.hp);

    if (player1.hp < 0) {
        $arenas.appendChild(playerLose(player2.name));
        $playerLife.style.width = 0 + '%';
        $randomButton.disabled = true;
    }
    if (player2.hp < 0){
        $arenas.appendChild(playerLose(player1.name));
        $playerLife.style.width = 0 + '%';
        $randomButton.disabled = true;
    }
}

    function playerLose(name) {
        const $loseTitle = createElement('div', 'loseTitle');
        $loseTitle.innerText = name + ' win';

        return $loseTitle;
    }



    $randomButton.addEventListener('click', function () {
        console.log('####: Click Random Button');
        changeHP(player1);
        changeHP(player2);
    })

    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
