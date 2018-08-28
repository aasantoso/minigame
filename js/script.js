var kartu = ['H','H','A','A','C','C','K','K','T','T','I','I','V','V','8','8'];
var value = [];
var kartuID = [];
var balikKartu = 0;

Array.prototype.shuffle = function() {
  var currentIndex = this.length, randomIndex, temporaryValue;
  while (--currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    temporaryValue = this[randomIndex];
    this[randomIndex] = this[currentIndex];
    this[currentIndex] = temporaryValue;
  }
}

function board() {
  balikKartu = 0;
  var output = '';

  kartu.shuffle();

  for (var i = 0; i < kartu.length; i++) {
    output += '<div id="tile_'+i+'" onclick="simpanBalikKartu(this,\''+kartu[i]+'\')"></div>';
  }
  document.getElementById('mainBoard').innerHTML = output;
}

window.addEventListener("load", board());

function simpanBalikKartu(tile, val) {
  if (tile.innerHTML == "" && value.length < 2) {
    tile.style.background = '#ffbe76';
    tile.innerHTML = val;
    if (value.length == 0) {
      value.push(val);
      kartuID.push(tile.id);
    } else if (value.length == 1) {
      value.push(val);
      kartuID.push(tile.id);
      if (value[0] === value[1]) {
        balikKartu += 2;

        value = [];
        kartuID = [];

        if (balikKartu === kartu.length) {
          alert("WOW! You are amazing! Let's play again!");
          document.getElementById('mainBoard').innerHTML = "";
          board();
        }
      } else {
          function balikkanKartuLagi() {
            var tile_1 = document.getElementById(kartuID[0]);
            var tile_2 = document.getElementById(kartuID[1]);
            tile_1.style.backgroundImage = 'url(src/card.jpg)';
            tile_1.innerHTML = "";
            tile_2.style.backgroundImage = 'url(src/card.jpg)';
            tile_2.innerHTML = "";

            value = [];
            kartuID = [];
          }
          setTimeout(balikkanKartuLagi, 700);
      }
    }
  }
}
