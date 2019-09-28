 // make array containing lists of classmates
 const classMates = ['david h', 'sigge', 'eva', 'august', 'Åsa', 'lina', 'david l', 'katja',
   'duygu', 'caglar', 'jakob', 'anders', 'arlind', 'bob', 'calle', 'dipak', 'douglas', 'emelie e',
   'emelie s', 'emil', 'emilio', 'essi', 'fanny', 'gina', 'joakim', 'johan', 'mudassar', 'nayab',
   'peter', 'quena', 'tim', 'tom', 'tony', 'ture', 'wei'
 ];

 const inputOneGroup = document.getElementById('input-one-group');
 const inputGroupsOf = document.getElementById('input-groups-of');

 const genGroupsOf = document.getElementById('groups-of_container');
 const genOneGroup = document.getElementById('one-group_container');

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
  * returns a random group classMates, of chosen size.
  */
 function oneRandomGroupOf(groupSize) {
   return groupsOf(groupSize)[0];
 }

 /*
  * Divides classMates in to groups of chosen size, and returns the groups.
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
  * Displays bubbles with randomized mates of chosen amount.
  */
 function showOneRandomGruopOf(groupSize) {
   oneRandomGroupOf(groupSize).forEach(mate => {
     var listItem = document.createElement("LI");
     var headerNode = document.createElement("H6");
     var node = document.createTextNode(mate);
     headerNode.appendChild(node);
     listItem.appendChild(headerNode);
     listItem.classList.add('circle', 'circle_SMALL')
     genOneGroup.appendChild(listItem);
   });
 }

 /*
  * Displays bubbles with randomized groups of chosen size.
  * The circle / bubble will take 3 different sizes depending on
  * the group size.
  */
 function showGruopsOf(groupSize) {
   groupsOf(groupSize).forEach(group => {
     var ul = document.createElement("UL");

     group.forEach(mate => {
       var listItem = document.createElement("LI");
       var headerNode = document.createElement("H6");
       var node = document.createTextNode(mate);
       headerNode.appendChild(node);
       listItem.appendChild(headerNode);
       ul.appendChild(listItem);
     });

     switch (groupSize) {
       case 2:
       case 3:
         ul.classList.add('circle', 'circle_MEDIUM-BIG');
       case 4:
       case 5:
         ul.classList.add('circle', 'circle_BIG');
         break;
       default:
         ul.classList.add('circle', 'circle_BIGGEST');
     }

     genGroupsOf.appendChild(ul);
   });
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

 /*
  * Adding an event listener to input field 'input-one-group'
  */
 inputOneGroup.addEventListener('keyup', function (e) {
   var input = parseInt(inputOneGroup.value);
   if (e.keyCode === 13 && Number.isInteger(input) && input !== 0) {
     clearContent();
     showOneRandomGruopOf(input);
   }
 });

 /*
  * Adding an event listener to input field 'input-groups-of'
  */
 inputGroupsOf.addEventListener('keyup', function (e) {
   var input = parseInt(inputGroupsOf.value);
   if (e.keyCode === 13 && Number.isInteger(input) && input !== (0 || 1)) {
     clearContent();
     showGruopsOf(input);
   }
 });

 /* Clears content */
 function clearContent() {
   document.getElementById('group_names--circles').style.display = 'none';
   genOneGroup.innerHTML = '';
   genGroupsOf.innerHTML = '';
 }

 function removePlaceholder(element) {
   element.placeholder = '';
 }

 function applyPlaceholder(element, placeholder) {
   element.value = '';
   element.placeholder = placeholder;
 }