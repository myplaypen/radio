(function iife() {
    "use strict";
    const player = document.getElementById("player");
    const button = document.getElementById("button");
    const value = document.getElementById("input");
    const sent = document.getElementById("sent");
    const input = document.getElementById("clear");
    let canPlay = false;

    button.addEventListener("click", function () {
        if (!canPlay) {
            return;
        }
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    });
    sent.addEventListener("click", function () {
        player.src = value.value;
        player.volume = 1.0;
    });
    input.addEventListener("click", function () {
        value.value = "";
        player.pause();
        canPlay = false;
    }, false);
    player.oncanplay = function () {
        if (value.value !== "") {
            canPlay = true;
        }
    };
}());
