function getPilComputer() {
    const comp = Math.random()
    if( comp < 0.8 ) return 'batu';
    if( comp >= 0.8 && comp < 1 ) return 'kertas'; return 'gunting';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'kertas' ) return ( comp == 'batu' ) ? 'PLAYER 1 WIN!' : 'YOU LOSE!';
    if( player == 'batu' ) return ( comp == 'kertas' ) ? 'YOU LOSE!' : 'COMP WIN!';
    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'YOU LOSE!' : 'COMP WIN!';
}

const playerBatu = document.getElementsByClassName(".batu");
playerBatu.addEventListener("click", function() {
    const pilComputer = getPilComputer();
    const pilPlayer = playerBatu.className;
    const hasil = getHasil(pilComputer, pilPlayer);

    const result = document.getElementsByClassName(".result");
    result.innerHTML = hasil;
});

const playerKertas = document.getElementsByClassName(".kertas");
playerKertas.addEventListener("click", function() {
    const pilComputer = getPilComputer();
    const pilPlayer = playerKertas.className;
    const hasil = getHasil(pilComputer, pilPlayer);

    const result = document.getElementsByClassName(".result");
    result.innerHTML = hasil;
});


const playerGunting = document.getElementsByClassName(".gunting");
playerGunting.addEventListener("click", function() {
    const pilComputer = getPilComputer();
    const pilPlayer = playerGunting.className;
    const hasil = getHasil(pilComputer, pilPlayer);

    const result = document.getElementsByClassName(".result");
    result.innerHTML = hasil;
});


function newgame() {
    window.location.reload();  
  }

document.getElementsByClassName("tombolrefresh").onclick = function () {
    newgame();
  };
  