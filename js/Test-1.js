
    // Call the layout function
createLayout();
   
    let currentIndex =sessionStorage.getItem('index');

//Swipe start
let h123;
let h1234;
let h222;
let h2221;
let h2222;
let h333;
function innerTextFnBackward()
{
  const headSet0 = chapters[0].data1;
  const chldSet0 = chapters[0].chapter;
  const headSet = chapters[0].data1;
  const chldSet = chapters[0].chapter;
  const headSet1 = chapters[0].data1;
  const chldSet1 = chapters[0].chapter;
  const headSet2 = chapters[0].data1;
  const chldSet2 = chapters[0].chapter;
  var array=[chldSet0,chldSet,chldSet1,chldSet2];
  var arrayh=[headSet0,headSet,headSet1,headSet2];
  


  const aresult = generateRandomLetters(array);
  h123=aresult;
  
  let index = array.indexOf(aresult[0]);  
  let index1 = array.indexOf(aresult[1]);
   
  let index2 = array.indexOf(aresult[2]);
   

  console.log(arrayh[index1]);
  console.log(aresult[0]);
 
  let h1 = Math.floor(Math.random() * arrayh[index].length);
  console.log("h1 is:"+h1);
  h1234 =h1;
  //document.getElementById("chapter_body4").innerHTML = arrayh[index][h1];
  document.getElementById("chapter_body4").innerHTML =
  `<span style="font-size: 18px;color: black;" data-key="choose">choose </span>` +
  `<span style="font-size: 30px; font-weight: bold;">${arrayh[index][h1]}</span>` +
  `<span style="font-size: 18px;color: black;" data-key="from below"> from below</span>`;
  
  //start1
  let hc1 = h1;

// Generate hc2 and ensure it's different from hc1
let hc2;
do {
  hc2 = Math.floor(Math.random() * aresult[0].length);
} while (hc2 === hc1);
console.log("hc2: " + hc2);

// Generate hc3 and ensure it's different from both hc1 and hc2
let hc3;
do {
  hc3 = Math.floor(Math.random() * arrayh[index].length);
} while (hc3 === hc1 || hc3 === hc2);
console.log("hc3: " + hc3);



  //end1
  const h1c_arya = [1,2,3]
  const result = generateRandomLetters(h1c_arya);
  console.log(result);
 document.getElementById("chapter_body"+result[0]).innerHTML = aresult[0][hc1];
  document.getElementById("chapter_body"+result[1]).innerHTML = aresult[1][hc2];
  document.getElementById("chapter_body"+result[2]).innerHTML = aresult[2][hc3];  



//2
  
  let h11 = Math.floor(Math.random() * arrayh[index1].length);
  h222=h11;
  //document.getElementById("chapter_body11").innerHTML = arrayh[index1][h11];
  document.getElementById("chapter_body11").innerHTML =
  `<span style="font-size: 18px;color: black;" data-key="Choose">Choose </span>` +
  `<span style="font-size: 30px; font-weight: bold;">${arrayh[index1][h11]}</span>` +
  `<span style="font-size: 18px; color: black;" data-key="from below"> from below</span>`;
  
  //start2
  let hc11 = h11;

// Generate hc2 and ensure it's different from hc1
let hc21;
do {
  hc21 = Math.floor(Math.random() * aresult[0].length);
} while (hc21 === hc11);
console.log("hc21: " + hc21);

// Generate hc3 and ensure it's different from both hc1 and hc2
let hc31;
do {
  hc31 = Math.floor(Math.random() * arrayh[index].length);
} while (hc31 === hc11 || hc31 === hc21);
console.log("hc31: " + hc31);

  //end2
  const h1c_arya1 = [5,6,7]
  const result1 = generateRandomLetters(h1c_arya1);
  document.getElementById("chapter_body"+result1[0]).innerHTML = aresult[1][hc11];
  document.getElementById("chapter_body"+result1[1]).innerHTML = aresult[2][hc21];
  document.getElementById("chapter_body"+result1[2]).innerHTML = aresult[0][hc31];  
  //2
  //3
  
  let h12 = Math.floor(Math.random() * arrayh[index2].length);
  h333=h12;
 // document.getElementById("chapter_body12").innerHTML = arrayh[index2][h12];
  document.getElementById("chapter_body12").innerHTML =
  `<span style="font-size: 18px;color: black;" data-key="Choose">Choose </span>` +
  `<span style="font-size: 30px; font-weight: bold;">${arrayh[index2][h12]}</span>` +
  `<span style="font-size: 18px;color: black;" data-key="from below"> from below</span>`;
/*
  let hc12 = h12;
  let hc22 = Math.floor(Math.random() * aresult[2].length);
  let hc32 = Math.floor(Math.random() * arrayh[index2].length);
  */
  //start2
  let hc12 = h12;

// Generate hc2 and ensure it's different from hc1
let hc22;
do {
  hc22 = Math.floor(Math.random() * aresult[0].length);
} while (hc22 === hc12);
console.log("hc21: " + hc22);

// Generate hc3 and ensure it's different from both hc1 and hc2
let hc32;
do {
  hc32 = Math.floor(Math.random() * arrayh[index].length);
} while (hc32 === hc12 || hc32 === hc22);
console.log("hc31: " + hc32);

  //end2
  const h1c_arya2 = [8,9,10]
  const result2 = generateRandomLetters(h1c_arya2);
  document.getElementById("chapter_body"+result2[0]).innerHTML = aresult[2][hc12];
  document.getElementById("chapter_body"+result2[1]).innerHTML = aresult[0][hc22];
  document.getElementById("chapter_body"+result2[2]).innerHTML = aresult[1][hc32];  
  //3
  
}


function generateRandomLetters(array) {
  const randomLetters = [];
  const usedIndices = new Set();

  while (randomLetters.length < 3) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!usedIndices.has(randomIndex)) {
          randomLetters.push(array[randomIndex]);
          usedIndices.add(randomIndex);
      }
  }

  return randomLetters;
}

