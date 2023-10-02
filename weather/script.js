
 function displayalert(element){
   // console.log(element);
   alert("Loading weather report.. ");
 }

 var cookie= document.querySelector(".cookiecontainer");
 //console.log(cookie);
 function accepts(element){
    //console.log(element);
    cookie.remove();
 }

 function fahrenheit(num){
   var f = Math.round(((num-32)*5)/9);
 return f;
 }
 function celsius(num,num2){
    var c = Math.round((num*1.8) + 32);
    return c;
 }

//  console.log(fahrenheit(100));
//  console.log(celsius(27));

//console.log(num.innerText);

 function pickFC(element){
    num= document.querySelector(".max1").innerText;
    num2=document.querySelector(".min1").innerText;
    //console.log(element.value);
   // --- console.log(num + "-")
   // --- console.log(num2+ "-")
    if( element.value == "farenheit"){
      var ans1= celsius(num);
      var ans2= celsius(num2);
      document.querySelector(".max1").innerText= ans1;
      document.querySelector(".min1").innerText= ans2;
      // console.log("c-"+ans1);
      // console.log("c-"+ans2);
    
       }else {

   //    if(num != 24 || num2 !=18 ){
   //    var ans1= fahrenheit(num);
   //    var ans2= fahrenheit(num2);
     document.querySelector(".max1").innerText= "24";
     document.querySelector(".min1").innerText= "18";}
   //    // console.log("f-"+ans1);
   //    // console.log("f-"+ans2);
   //  }----------------------------------------
   num3= document.querySelector(".max2").innerText;
   num4=document.querySelector(".min2").innerText;

   if( element.value == "farenheit"){
     var ans3= celsius(num3);
     var ans4= celsius(num4);
     document.querySelector(".max2").innerText= ans3;
     document.querySelector(".min2").innerText= ans4;
 
      }else {
         document.querySelector(".max2").innerText= "27";
         document.querySelector(".min2").innerText= "19";
      } 
   num5= document.querySelector(".max3").innerText;
   num6=document.querySelector(".min3").innerText;   

   if( element.value == "farenheit"){
      var ans3= celsius(num5);
      var ans4= celsius(num6);
      document.querySelector(".max3").innerText= ans3;
      document.querySelector(".min3").innerText= ans4;
  
       }else {
          document.querySelector(".max3").innerText= "21";
          document.querySelector(".min3").innerText= "16";
       } 
 
   num7= document.querySelector(".max4").innerText;
   num8=document.querySelector(".min4").innerText;

   if( element.value == "farenheit"){
      var ans7= celsius(num7);
      var ans8= celsius(num8);
      document.querySelector(".max4").innerText= ans7;
      document.querySelector(".min4").innerText= ans8;
  
       }else {
          document.querySelector(".max4").innerText= "26";
          document.querySelector(".min4").innerText= "21";
       } 
   }
