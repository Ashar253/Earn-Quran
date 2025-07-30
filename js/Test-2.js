//Start


    // Call the layout function
    createLayout();
    let currentIndex =sessionStorage.getItem('index');
//End

let h123;
let h1234;
let h222;
let h2221;
let h2222;
let h333;
function innerTextFnBackward()
{
   const zabar = 'َ'; //  zabar
  const zer   = 'ِ';  // ِ
  const pesh  = 'ُ';
  const headSet0 = chapters[0].data1;
  const chldSet0 = chapters[0].chapter;
  const headSet = chapters[1].data1;
  const updatedArray = chldSet0.map(letter => letter + zabar);
  const chldSet =updatedArray;
  //chapters[1].chapter;
  const headSet1 = chapters[1].data4;
  const updatedArrayzer = chldSet0.map(letter => letter + zer);
  const chldSet1 =updatedArrayzer;
  // chapters[1].chapter1;
  const headSet2 = chapters[1].data7;
  const updatedArraypesh = chldSet0.map(letter => letter + pesh);
  const chldSet2 = updatedArraypesh;
  //chapters[1].chapter2;
  var array=[chldSet0,chldSet,chldSet1,chldSet2];
  var arrayh=[headSet0,headSet,headSet1,headSet2];
  

  const aresult = generateRandomLetters(array);
 
  h123=aresult;
  let index = array.indexOf(aresult[0]);
  let index1 = array.indexOf(aresult[1]);
  let index2 = array.indexOf(aresult[2]);

  
 
  let h1 = Math.floor(Math.random() * arrayh[index].length);
  h1234 =h1;
  document.getElementById("chapter_body4").innerHTML = `<span style="font-size: 18px;color: blue;" data-key="choose">choose </span>` +
  `<span style="font-size: 30px; font-weight: bold;">${arrayh[index][h1]}</span>` +
  `<span style="font-size: 18px;color: blue;" data-key="from below"> from below</span>`;
  //arrayh[index][h1];
  
  let hc1 = h1;
  let hc2 = Math.floor(Math.random() * aresult[0].length);
  let hc3 = Math.floor(Math.random() * arrayh[index].length);
  console.log(hc3);
  const h1c_arya = [1,2,3]
  const result = generateRandomLetters(h1c_arya);
  console.log(result);

  document.getElementById("chapter_body"+result[0]).innerHTML = aresult[0][hc1];
  document.getElementById("chapter_body"+result[1]).innerHTML = aresult[1][hc2];
  document.getElementById("chapter_body"+result[2]).innerHTML = aresult[2][hc3];  


//2
  
  let h11 = Math.floor(Math.random() * arrayh[index1].length);
  h222=h11;
  document.getElementById("chapter_body11").innerHTML =  `<span style="font-size: 18px;color: blue;" data-key="Choose">Choose </span>` +
  `<span style="font-size: 30px; font-weight: bold;">${arrayh[index1][h11]}</span>` +
  `<span style="font-size: 18px; color: blue;" data-key="from below"> from below</span>`;
  //arrayh[index1][h11];
  
  let hc11 = h11;
  let hc21 = Math.floor(Math.random() * aresult[1].length);
  let hc31 = Math.floor(Math.random() * arrayh[index1].length);
  const h1c_arya1 = [5,6,7]
  const result1 = generateRandomLetters(h1c_arya1);
  document.getElementById("chapter_body"+result1[0]).innerHTML = aresult[1][hc11];
  document.getElementById("chapter_body"+result1[1]).innerHTML = aresult[2][hc21];
  document.getElementById("chapter_body"+result1[2]).innerHTML = aresult[0][hc31];  
  //2
  //3
  
  let h12 = Math.floor(Math.random() * arrayh[index2].length);
  h333=h12;
  document.getElementById("chapter_body12").innerHTML =  `<span style="font-size: 18px;color: blue;" data-key="Choose">Choose </span>` +
  `<span style="font-size: 30px; font-weight: bold;">${arrayh[index2][h12]}</span>` +
  `<span style="font-size: 18px;color: blue;" data-key="from below"> from below</span>`;
  //arrayh[index2][h12];
  
  let hc12 = h12;
  let hc22 = Math.floor(Math.random() * aresult[2].length);
  let hc32 = Math.floor(Math.random() * arrayh[index2].length);
  const h1c_arya2 = [8,9,10]
  const result2 = generateRandomLetters(h1c_arya2);
  document.getElementById("chapter_body"+result2[0]).innerHTML = aresult[2][hc12];
  document.getElementById("chapter_body"+result2[1]).innerHTML = aresult[0][hc22];
  document.getElementById("chapter_body"+result2[2]).innerHTML = aresult[1][hc32];  
  //3
  
}
//start
function generateRandomLetters(array) {
  if (array.length < 3) {
    throw new Error("Array must contain at least 3 elements.");
  }

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

//end

