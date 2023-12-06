let manaWins = 20

//* ##### Manamanager #####
function manaManager(player, state) {
    if (state == "gain") {
        if (player.mana + manaWins < 100) {
            player.mana += manaWins
        } else {
            player.mana = 100
        }
    } else if(state == "reset") {
        //TODO Here when ulti is launch
        player.mana = 0
    }

    updateMana(player)
}

//* Update visuel of mana
function updateMana(player) {
    // console.log(player)
    let manaDiv;
    if (player.name == "player1") {
        manaDiv = document.getElementById("infoMana1")
    } else {
        manaDiv = document.getElementById("infoMana2")
    }
    manaDiv.style.clipPath  = `polygon(0px 0px, ${player.mana + 15}% 0%, ${player.mana + 10}% 100%, 0% 100%)`
}