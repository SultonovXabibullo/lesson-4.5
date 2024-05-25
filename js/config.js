/* let text ="textni uzunligini qaytaruvchi method"
let length = text.length; //text uzunligini aniqlab beruvchi metodit
console.log(length); */

/* let text = ' hello mars '
let char = text.charAt(6);//berilgan index dagi belgini qaytaradi
 console.log(char);  */

/*  let text ="salom bolalar";
 let char = text.charCodeAt (1);// textdan berilgan indexdagi simbol (harif, raqam yoki har qanday belgining) unicode  ni chiqaradi.
 console.log(char);*/

/*  const name1 = "bunyodbek";
 let letter = name1.at (-1);// berilgan index dagi belgini qaytaradi. bu charAt dan farqi (-) qiymat ham berish mumkun.
 console.log(letter); */ 

/* const name1 ="Bunyodbek";
let lettar =name1[3];
console.log(lettar);*/

/* let text = "Bunyodbek, Zubayr, Ali";
let part = text.slice(7,13);// Berigan string qiymatdan boshlang'ich va oxirgiqiymat orasidagi simbol larni qaytaradi va yangi string bo'ladi.
console.log(part);  */

/*  
let text = " Bunyodbek , zubayr, ali";
let part = text.slice (-3)// Ushbu xolatda stringni bosh qismidan 7 harifni olib tashlab yangi string qaytaradi.
console.log(part); */

/* let text = " Bunyodbek, Zubayr, ali "
let part = text.slice(-3);
console.log(part); */

/* let text1 ="Hello mars";
let text2 = text1.toUpperCase();
console.log(text2); */

/* let text1 ="hello mars"
let text2 = text1.toLowerCase();
console.log(text2); */

/* 
let text1 ="hello"
let text2 = "mars"
let text3 = text1.concat("",text2)
console.log(text3); */

/* let text ="please vist Uran"
let newText = text.replace("Uran", "Mars")
console.log(newText); */

/* let name1 = "Bunyodbek" 
let test=name1.includes("hon")
console.log(test); */

 let name = prompt ("ismingizni kiriting")
let a = prompt ("xoxlagan xarfni kiriting ") 

let test= name.includes(a)
alert(test);