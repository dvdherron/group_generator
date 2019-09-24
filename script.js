

(function () {

  var classMates = ['david h', 'sigge', 'eva', 'august', 'Åsa', 'lina', 'david l', 'katja', 'duygu', 'caglar', 'jakob', 'anders', 'arlind', 'bob', 'calle', 'dipak', 'douglas', 'emelie e', 'emelie s', 'emil', 'emilio', 'essi', 'fanny', 'gina', 'joakim', 'johan', 'mudassar', 'nayab', 'peter', 'quena', 'tim', 'tom', 'tony', 'ture', 'wei'];

  
  var circle1 = document.getElementById('circle1');
  circle1.addEventListener('click', pickMate);
  var circle2 = document.getElementById('circle2');
  circle2.addEventListener('click', pickMate);
  var circle3 = document.getElementById('circle3');
  circle3.addEventListener('click', pickMate);
  // var circleTitle = document.querySelector('.circle_title');
  var startOver = document.getElementById('resetBTN');
  // startOver.addEventListener('click', resetNames);

  function pickMate(event) {
    var randomMate = classMates[Math.floor(Math.random()*classMates.length)];

    event.target.firstElementChild.textContent = randomMate;
    }

  // function resetNames() {
  //   var circles = document.getElementsByClassName('.circle_title');
  //   circles.textContent = '- - -';
  // }

  }());
