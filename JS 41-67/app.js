// Chapter 38-42

// function power(a, b) {
//     return Math.pow(a, b)
// }
// console.log(power(3, 5))

// var leapYear = Number(prompt("Enter year to check whether it is leap or not"))

// function checkYear() {
//     if (leapYear % 2 == 0) {
//         console.log(leapYear + "It is leap year")
//     } else {
//         console.log(leapYear + "Not leap year")
//     }
// }
// checkYear();

// function checkIndex(str) {
//     var a = str.indexOf("w")
//     return a;
// }
// console.log(checkIndex("Hellow"))

// var a = 5;
// var b = 5;
// var c = 6;
// function sides(side){
//      side = (a+b+c)/2
//     function area(){
//         return side*(side-a)*(side-b)*(side-c)
//     }
//     return area()
// }
// console.log(sides())

// var sub1 = 40;
// var sub2 = 30;
// var sub3 = 50;
// var obMarks = sub1 + sub2 + sub3
// var total = 300;

// function mainFunction() {
//            function percentage(){
//                 return console.log((obMarks/total)*100)
//     }
//     return percentage()
// }
// mainFunction();


// function checkVowel(str){
//     return str.replace(/[aeiouAEIOU]/g,"")
// }
// console.log(checkVowel("Hello My Name is Syed Rayyan Ali and I am 21 years old"))

// var distance = Number(prompt("Enter distance b/w two cities in KM"))
// function meters(){
//     return distance*1000
// }
// function feet(){
//     return distance*3281
// }
// function inches(){
//     return distance*39370
// }
// function centiMeters(){    
//     return distance*100000
// }
// console.log(meters())
// console.log(feet())
// console.log(inches())
// console.log(centiMeters())

// function currencyDenomination() {
//     var cash = prompt("Enter cash (in hundreds): "); 
//    var hundred = parseInt(cash / 100);
//    var fifty = parseInt((cash % 100) / 50);
//    var ten = parseInt(((cash % 100) % 50) / 10);
//    document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination();

// function calcOvertime(){
// var reg = 20;
// var overTime;
// var workingHours=40;
// if(workingHours<40){
//     console.log("OverTime is not applied")
// }
// else{
//     var pay = reg*60
//     console.log("OverTime pay is: "+pay)
// }
// }
// calcOvertime()

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());

//CHAPTER 43-48
// var greet = document.querySelectorAll("img")
// for (i = 0; i <= greet.length; i++) {
//     greet[i].addEventListener("click", function() {
//         alert("tHANKS FOR PURCHASING")
//     })
// }

// var rec = document.getElementsByClassName("record");
// var btn = document.querySelectorAll("button");
// for (var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function() {
//         for (var j = 0; j < rec.length; j--) {
//             rec[j].remove()
//         }
//     })
// }

// var change = document.querySelector("img");
// change.addEventListener("mouseover", function() {
//     this.setAttribute("src", "https://nepalvehiclebooking.com/wp-content/uploads/2020/02/pexels-photo-112460.jpeg")
// })
// change.addEventListener("mouseout", function() {
//     this.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNWZyCYJ-lzOkBL2P3S2emvkvQ3fq9uW7C6w&usqp=CAU")
// })

// var head = document.querySelector("h1")
// var counter = 0;
// var inc = document.getElementById("inc")
// var dec = document.getElementById("dec")
//     inc.addEventListener("click",function(){
//         counter++;
//         head.textContent=counter
//     })
//     dec.addEventListener("click",function(){
//         counter--;
//         head.textContent=counter
//     })

//CHAPTER 49-52
// var btn = document.getElementById("submit")
// var display = document.getElementById("display")
// btn.addEventListener("click", function(){
//     var email = document.getElementById("email").value
//     var pass = document.getElementById("pass").value;    
//     display.innerHTML="email "+email +" password is"+ pass
// })

// function showMore(){
//     var morePara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, maiores dolorem! Consectetur optio dicta quisquam possimus eligendi accusantium! A eum expedita aperiam ab, magnam deserunt debitis corporis quod velit natus?"
//     document.getElementById("detail").innerHTML=morePara
// }

//CHAPTER 58-67
// var abc = document.getElementById("main-content").innerHTML
// var abc = document.getElementById("main-content").childNodes
// console.log(abc)

// var inp = document.getElementById("first-name");
// inp.value="hellooooo"

// var lName = document.getElementById("last-name")
// var email = document.getElementById("email")
// lName.value="Rayyan"
// email.value="abc@gmail.com

// var abc = document.getElementById("main-content").innerHTML;
// var cr = document.createElement("h1");
// var fill = document.createTextNode(abc)
// cr.appendChild(fill)
// var msg = document.getElementById("message")
// msg.appendChild(cr)

// var ch = document.getElementById("form-content").nodeType;
// console.log(ch)

// var ch = document.getElementById("last-name").childNodes;
// console.log(ch)

// var ch = document.getElementById("main-content").firstChild;
// var ab = document.getElementById("main-content").lastChild;
// console.log(ch)
// console.log(ab)

// var ch = document.getElementById("lastName").nextSibling;
// var ab = document.getElementById("lastName").previousSibling;
// console.log(ch)
// console.log(ab)

// var ch = document.getElementById("email").parentNode;
// var ab = ch.nodeType
// console.log(ch)
// console.log(ab)


//chapter 52-57
// var modl = document.getElementById("modalImage")
// function showImage(e){
//     modl.src=e.src
// }

// var rec = document.getElementsByClassName("record");
// var btn = document.querySelectorAll("button");
// for (var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function() {
//         for (var j = 0; j < rec.length; j--) {
//             rec[j].remove()
//         }
//     })
// }

