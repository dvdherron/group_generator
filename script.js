 // make array containing lists of classmates
 const classMates = ['david h', 'sigge', 'eva', 'august', 'Åsa', 'lina', 'david l', 'katja',
   'duygu', 'caglar', 'jakob', 'anders', 'arlind', 'bob', 'calle', 'dipak', 'douglas', 'emelie e',
   'emelie s', 'emil', 'emilio', 'essi', 'fanny', 'gina', 'joakim', 'johan', 'mudassar', 'nayab',
   'peter', 'quena', 'tim', 'tom', 'tony', 'ture', 'wei'
 ];

 (function () {

   var circle1 = document.getElementById('circle1');
   circle1.addEventListener('click', pickMate);
   var circle2 = document.getElementById('circle2');
   circle2.addEventListener('click', pickMate);
   var circle3 = document.getElementById('circle3');
   circle3.addEventListener('click', pickMate);

   /*randomly chooses classmate from list and then puts the name in the text field of circle element*/
   function pickMate(event) {
     var randomMate = classMates[Math.floor(Math.random() * classMates.length)];

     event.target.firstElementChild.textContent = randomMate;
   }
 }());


 /* 
  * returns a random group classMates, of choosen size.
  */
 function oneRandomGroupOf(groupSize) {
   return groupsOf(groupSize)[0];
 }

 /*
  * Divides classMates in to groups of choosen size, and returns the groups.
  */
 function groupsOf(groupSize) {
   shuffle(classMates);

   let groups = [];
   let group = [];

   classMates.forEach((mate, index) => {
     group.push(mate);

     if ((index + 1) % groupSize === 0 && index !== 0 ||
       (index + 1) === classMates.length) {
       groups.push(group);
       group = [];
     }
   });
   return groups;
 }

 /*
  * Using Fisher–Yates shuffle. Read more about it here 
  * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  */
 function shuffle(array) {
   var currentIndex = array.length,
     tempValue, randomIndex;
   while (0 !== currentIndex) {

     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;

     tempValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = tempValue;
   }
   return array;
 }

function removePlaceholder(element){
  element.placeholder = '';
}

function applyPlaceholder(element, placeholder){
  element.placeholder = placeholder;
}