


let chapter=['ا', 'ب','ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز','س','ش','ص','ض', 'ط', 'ظ','ع', 'غ', 'ف', 'ق', 'ک','ل', 'م','ن','ه','و','ی','ء'];
let currentIndex =sessionStorage.getItem('index');
//start


//end

function innerTextFn() { 
  function shuffleArray(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    }
    let a = ['chapter_body1','chapter_body2','chapter_body3'];
    let b=['chapter_body5', 'chapter_body6','chapter_body7'];
    let c=['chapter_body8','chapter_body9','chapter_body10'];
    
    shuffleArray(a);
    shuffleArray(b);
    shuffleArray(c);
    
    let r = a;
    console.log(r);
    let p = b;
    console.log(p);
    let q = c;
    console.log(q);
    
    console.log(r[0]);
  
 const elements = [r[0], 'chapter_body4', p[2],'chapter_body11',q[0],'chapter_body12'];
 
 var data = [chapters[0].chapter, chapters[0].data1, chapters[0].chapte,chapters[0].data,chapters[0].chapt,chapters[0].dat,chapters[1].data1,chapters[1].data4,chapters[1].data7];
 
 var result=chapter[currentIndex];
 console.log(result);
  var data1 = [chapters[0].chapter[1], chapters[0].chapter[2], chapters[0].chapter[3], chapters[0].chapter[4]];
  var random=data[0][Math.floor(Math.random() * data[0].length)];
  var random1=data[0][Math.floor(Math.random() * data[0].length)];
  var random2=data[0][Math.floor(Math.random() * data[0].length)];
  var random3=data[0][Math.floor(Math.random() * data[0].length)];
  var random4=data[0][Math.floor(Math.random() * data[0].length)];
  var random5=data[0][Math.floor(Math.random() * data[0].length)];
  var ide=document.getElementById(r[1]).innerHTML =random;
  var ide1= document.getElementById(r[2]).innerHTML =random1;
  var ide2= document.getElementById(p[0]).innerHTML =random2;
  var ide3= document.getElementById(p[1]).innerHTML =random3;
  var ide4= document.getElementById(q[1]).innerHTML =random4;
  var ide5= document.getElementById(q[2]).innerHTML =random5; 
  

 if (elements.every(el => currentIndex < data[elements.indexOf(el)].length)) {
  
   elements.forEach((el, i) => {
     document.getElementById(el).innerHTML = data[i][currentIndex];
    
     
   });
   currentIndex++;
   sessionStorage.setItem('index', currentIndex);
 
 } else if (currentIndex >= chapters[0].data1.length) {
   currentIndex = 0;
 }

 
}

console.log(sessionStorage.getItem('index'));
var x= document.getElementById("chapter_body12");
var letterindex;


 function innerTextFnBackward() {  
function shuffleArray(arr) {

  for (let i = arr.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  }
  let a = ['chapter_body1','chapter_body2','chapter_body3'];
  let b=['chapter_body5', 'chapter_body6','chapter_body7'];
  let c=['chapter_body8','chapter_body9','chapter_body10'];
  
  shuffleArray(a);
  shuffleArray(b);
  shuffleArray(c);
  
  let r = a;
  console.log(r);
  let p = b;
  console.log(p);
  let q = c;
  console.log(q);
  
  console.log(r[0]);
  

   const elements = [r[0], 'chapter_body4', p[2],'chapter_body11',q[0],'chapter_body12'];
   const data = [chapters[0].chapter, chapters[0].data1, chapters[0].chapte,chapters[0].data,chapters[0].chapt,chapters[0].dat,chapters[1].data1,chapters[1].data4,chapters[1].data7];
 
  const data1 = [chapters[0].chapter[1], chapters[0].chapter[2], chapters[0].chapter[3], chapters[0].chapter[4]];
// var id=data1[Math.floor(Math.random() * data1.length)];
  var random=data[0][Math.floor(Math.random() * data[0].length)];
  var random1=data[0][Math.floor(Math.random() * data[0].length)];
  var random2=data[0][Math.floor(Math.random() * data[0].length)];
  var random3=data[0][Math.floor(Math.random() * data[0].length)];
  var random4=data[0][Math.floor(Math.random() * data[0].length)];
  var random5=data[0][Math.floor(Math.random() * data[0].length)];
var ide= document.getElementById(r[1]).innerHTML =random;
var ide1= document.getElementById(r[2]).innerHTML =random1;
var ide2= document.getElementById(p[0]).innerHTML =random2;
var ide3= document.getElementById(p[1]).innerHTML =random3;
var ide4= document.getElementById(q[1]).innerHTML =random4;
var ide5= document.getElementById(q[2]).innerHTML =random5; 


   if (currentIndex > 0 && elements.every(el => currentIndex - 1 >= 0 && currentIndex - 1 < data[elements.indexOf(el)].length)) {
     elements.forEach((el, i) => {
                 
      document.getElementById(el).innerHTML = data[i][currentIndex - 1];
         
     });
     currentIndex--;
     sessionStorage.setItem('index', currentIndex);
    
   } else if (currentIndex === 0) {
     currentIndex = chapters[2].data1.length - 1; 
   }

  
 } 


 var letter=['ا', 'ب','ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز','س','ش','ص','ض', 'ط', 'ظ','ع', 'غ', 'ف', 'ق', 'ک','ل', 'م','ن','ه','و','ی','ء'];
 var letter1=['ز','س','ش','ص','ض', 'ط', 'ظ','ع', 'غ', 'ف', 'ق', 'ک','ل', 'م','ن','ه','و','ی','ء','ا', 'ب','ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر'];
 var  letter2= ['ق', 'ک','ل', 'م','ن','ه','و','ی','ء','ا', 'ب','ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر','ز','س','ش','ص','ض', 'ط', 'ظ','ع', 'غ', 'ف'];
  
  function play() {
    var audio = document.getElementById("chapter_body1");
    
  }
  //
 function quiz(){
   var ch1 = document.getElementById('chapter_body1').innerText;
   var result=letter[currentIndex];
   console.log(ch1);
     if(ch1==result){
    document.getElementById("chapter_body1").style.backgroundColor = "green";
    document.getElementById("chapter_body1").src ='sounds/correct.mp3'; 
       } 
         else 
        { 
         document.getElementById("chapter_body1").style.backgroundColor= "Red";
         document.getElementById("chapter_body1").src ='sounds/wrong.mp3'; 
         } 
         setTimeout(function() {
          document.getElementById("chapter_body1").style.backgroundColor = "";
      }, 1000); 
      
     
}

function quiz1(){
  var result=letter[currentIndex];
  var ch2=document.getElementById('chapter_body2').innerText;
 console.log(ch2);
    
        if(ch2==result){
          document.getElementById("chapter_body2").style.backgroundColor = "green";
          document.getElementById("chapter_body2").src ='sounds/correct.mp3'; 
        } else 
       { 
        document.getElementById("chapter_body2").style.backgroundColor= "red";
        document.getElementById("chapter_body1").src ='sounds/wrong.mp3'; 
        } 
        setTimeout(function() {
          document.getElementById("chapter_body2").style.backgroundColor = "";
      }, 1000);   
}
function quiz2(){
  var result=letter[currentIndex];
  var ch3=document.getElementById('chapter_body3').innerText;
   console.log(ch3);
          if(ch3==result){
          document.getElementById("chapter_body3").style.backgroundColor = "green";
        
        } else 
       { 
        document.getElementById("chapter_body3").style.backgroundColor= "Red";
        } 
        setTimeout(function() {
          document.getElementById("chapter_body3").style.backgroundColor = "";
      }, 1000); 
}
  
function quiz3(){
  
  var ch3=document.getElementById('chapter_body5').innerText;
  var result1=letter1[currentIndex];
   console.log(ch3);
          if(ch3==result1){
          document.getElementById("chapter_body5").style.backgroundColor = "green";
        
        } else 
       { 
        document.getElementById("chapter_body5").style.backgroundColor= "Red";
        } 
        setTimeout(function() {
          document.getElementById("chapter_body5").style.backgroundColor = "";
      }, 1000); 
}

function quiz4(){
  
  var ch3=document.getElementById('chapter_body6').innerText;
  var result1=letter1[currentIndex];
   console.log(ch3);
          if(ch3==result1){
          document.getElementById("chapter_body6").style.backgroundColor = "green";
        
        } else 
       { 
        document.getElementById("chapter_body6").style.backgroundColor= "Red";
        } 
        setTimeout(function() {
          document.getElementById("chapter_body6").style.backgroundColor = "";
      }, 1000); 
}

function quiz5(){
  
  var ch3=document.getElementById('chapter_body7').innerText;
  var result1=letter1[currentIndex];
   console.log(ch3);
          if(ch3==result1){
          document.getElementById("chapter_body7").style.backgroundColor = "green";
        
        } else 
       { 
        document.getElementById("chapter_body7").style.backgroundColor= "Red";
        } 
        setTimeout(function() {
          document.getElementById("chapter_body7").style.backgroundColor = "";
      }, 1000); 
}

function quiz6(){
  
  var ch3=document.getElementById('chapter_body8').innerText;
  var result2=letter2[currentIndex];
   console.log(ch3);
          if(ch3==result2){
          document.getElementById("chapter_body8").style.backgroundColor = "green";
        
        } else 
       { 
        document.getElementById("chapter_body8").style.backgroundColor= "Red";
        } 
        setTimeout(function() {
          document.getElementById("chapter_body8").style.backgroundColor = "";
      }, 1000); 
}
function quiz7(){
  
  var ch3=document.getElementById('chapter_body9').innerText;
  var result2=letter2[currentIndex];
   console.log(ch3);
          if(ch3==result2){
          document.getElementById("chapter_body9").style.backgroundColor = "green";
        
        } else 
       { 
        document.getElementById("chapter_body9").style.backgroundColor= "Red";
        } 
        setTimeout(function() {
          document.getElementById("chapter_body9").style.backgroundColor = "";
      }, 1000); 
}

function quiz8(){
  
  var ch3=document.getElementById('chapter_body10').innerText;
  var result2=letter2[currentIndex];
   console.log(ch3);
          if(ch3==result2){
          document.getElementById("chapter_body10").style.backgroundColor = "green";
        
        } else 
       { 
        document.getElementById("chapter_body10").style.backgroundColor= "Red";
        } 
        setTimeout(function() {
          document.getElementById("chapter_body10").style.backgroundColor = "";
      }, 1000); 
}

 
 