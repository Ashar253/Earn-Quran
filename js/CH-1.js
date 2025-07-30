
    // 
    function createLayout() {
      const body = document.body;
      
    const letterblock = document.createElement("div");
     letterblock.className="letter-block1";
      letterblock.id="letter-block";
     const letterDiv = document.createElement("div");
     letterDiv.className="letter-Div";
     const letter1=document.createElement("div");
     letter1.id="letter-1";
      letter1.innerHTML = "Alif";
      const letter2=document.createElement("div");
     letter2.id="letter-2";
     letter2.innerHTML = "ಅಲಿಫ್";
      const letter3=document.createElement("div");
     letter3.id="letter-3";
     letter3.innerHTML = "अलिफ़";
     const letter4=document.createElement("div");
     letter4.id="letter-4";
     letter4.innerHTML = "ا";
     letterblock.appendChild(letterDiv);
     letterDiv.appendChild(letter1);
     letterDiv.appendChild(letter2);
     letterDiv.appendChild(letter3);
     letterblock.appendChild(letter4);
      
      // 2. Arrows
      const nav = document.createElement("div");
      nav.className = "navigation-arrows";
      const left = document.createElement("span");
      left.innerHTML = "⬅️";
      left.id="l-backword";
      left.onclick = () =>left.onclick = () => {prev(); colour();};

      const right = document.createElement("span");
      right.innerHTML = "➡️";
      right.id="r-forword";
      right.onclick = () => {next();  colour(); };
      nav.appendChild(left);
      nav.appendChild(right);
      body.appendChild(letterblock);
      body.appendChild(nav);
      

      // 3. Intro
      const intro = document.createElement("div");
      intro.className = "intro";
      intro.textContent = "Intro about below rows here";
      body.appendChild(intro);

      // 4. Letter Table
      const table = document.createElement("div");
      table.className = "letter-table";


        ["End", "Middle", "Start"].forEach((label, i) => {
          const cell = document.createElement("div");

          // Assign different class names based on index
          if (i === 0) {
            cell.className = "header";   // First div
          } else if (i === 1) {
            cell.className = "header-M";  // Second div
          } else if (i === 2) {
            cell.className = "header-S";  // Third div
          }

          cell.textContent = label;
          table.appendChild(cell);
        });
     

      const empty2 = document.createElement("div");
       empty2.id="end";
       empty2.className="start-middle-end";
      const middleCell = document.createElement("div");
       middleCell.id="middle";
      middleCell.className="start-middle-end";
      middleCell.textContent = "";
      const startCell = document.createElement("div");
       startCell.id="start";
       startCell.className="start-middle-end";
     // table.appendChild(empty1);
      table.appendChild(empty2);
      table.appendChild(middleCell);
      table.appendChild(startCell);
      body.appendChild(table);
   //example section starts
   const table1 = document.createElement("div");
      table1.className = "letter-table_ex";

    
     
      const empty21 = document.createElement("div");
       empty21.id="end1";
       empty21.className="start-middle-end1";
      const middleCell1 = document.createElement("div");
       middleCell1.id="middle1";
       middleCell1.className="start-middle-end1";
      middleCell1.textContent = "";
      const startCell1 = document.createElement("div");
       startCell1.id="start1";
       startCell1.className="start-middle-end1";
     // table.appendChild(empty1);
      table1.appendChild(empty21);
      table1.appendChild(middleCell1);
      table1.appendChild(startCell1);
      body.appendChild(table1);
 

   const iframe = document.createElement("iframe");
    iframe.id="videoid";
    iframe.src = "";
    //"https://www.youtube.com/embed/rkQ2pzGBQho";

// ✅ Use the proper YouTube embed URL format:
//iframe.src = "https://www.youtube.com/embed/rkQ2pzGBQho";

// ✅ Allow fullscreen and other features:
//iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.allowFullscreen = true;

// ✅ Styling
iframe.style.width = "95%";
iframe.style.maxWidth = "637px";
iframe.style.height = "360px"; // standard 16:9 height for 640px width
iframe.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
iframe.style.display = "block";
iframe.style.margin = "30px auto";
iframe.style.border = "none"; // remove iframe border

// ✅ Add to page
document.body.appendChild(iframe);

    }

    // Call the layout function
    createLayout();
    let currentIndex =-1;
    //sessionStorage.getItem('index');

//Swipe start
const elements = ['letter-1', 'letter-2', 'letter-3', 'letter-4', 'start', 'middle', 'end', 'start1', 'middle1', 'end1',]; //dom Id list
 
    
    function render() {
  const box1 = document.getElementById('letter-1');
  const box2 = document.getElementById('letter-2');
  const box3 = document.getElementById('letter-3');
  const box4 = document.getElementById('letter-4');
  const box5 = document.getElementById('start');
  const box6 = document.getElementById('middle');
  const box7 = document.getElementById('end');
  const box8 = document.getElementById('start1');
  const box9 = document.getElementById('middle1');
  const box10 = document.getElementById('end1');
  const box11 = document.getElementById('letter-block'); // container for audio (optional)
  const box12 = document.getElementById('videoid'); 
  console.log("box12::"+box12);
  const data = [
    chapters[0].data1,
    chapters[0].data2,
    chapters[0].data3,
    chapters[0].chapter,
    chapters[0].data5,
    chapters[0].data6,
    chapters[0].data7,
    chapters[0].data8,
    chapters[0].data9,
    chapters[0].data10,
    chapters[0].data11, // audio URLs
    chapters[0].data12 // video URLs
  ];

  // Fill text
  box1.innerText = data[0][currentIndex];
  box2.innerText = data[1][currentIndex];
  box3.innerText = data[2][currentIndex];
  box4.innerText = data[3][currentIndex];
  box5.innerText = data[4][currentIndex];
  box6.innerText = data[5][currentIndex];
  box7.innerText = data[6][currentIndex];
  box8.innerText = data[7][currentIndex];
  box9.innerText = data[8][currentIndex];
  box10.innerText = data[9][currentIndex];
  
  box12.videoSrc =data[11][currentIndex];
  console.log("video url :"+data[11][currentIndex]);

/*
  const videoSrc =data[11][currentIndex];
  box12.innerHTML = "";
*/
//function setVideoSrcFromArray(currentIndex) {
  

  const iframe = document.getElementById("videoid");
  if (iframe && data[11][currentIndex]) {
    iframe.src = 'https://www.youtube.com/embed/'+data[11][currentIndex];
    console.log("iframe.src:"+iframe.src);
    console.log("Video set to:", data[11][currentIndex]);
  } else {
    console.warn("Iframe not found or video URL missing");
  }
//}


const audioSrc = data[10][currentIndex] + '.mp3';  // Ensure correct extension
  box11.style.cursor = "pointer";
  box11.onclick = () => {
    const audio = new Audio(audioSrc);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
}
//console.log(maxLength);
    function next() {
      const data = [chapters[0].data1, chapters[0].data2, chapters[0].data3, chapters[0].chapter, chapters[0].data5, chapters[0].data6, chapters[0].data7,chapters[0].data8,chapters[0].data9, chapters[0].data10]; //array data 
      const maxLength = Math.min(data[0].length, data[1].length, data[2].length, data[3].length, data[4].length, data[5].length,data[6].length, data[7].length, data[8].length, data[9].length);

      if (currentIndex < maxLength - 1) {
        currentIndex++;
        sessionStorage.setItem('index', currentIndex);
      console.log(sessionStorage.getItem('index'));
        render();
      } else if (currentIndex >=28) {
      currentIndex = -1;
      }

    
    }

    function prev() {
      const data = [chapters[0].data1, chapters[0].data2, chapters[0].data3, chapters[0].chapter, chapters[0].data5, chapters[0].data6, chapters[0].data7,chapters[0].data8,chapters[0].data9, chapters[0].data10]; //array data 
      const maxLength = Math.min(data[0].length, data[1].length, data[2].length, data[3].length, data[4].length, data[5].length,data[6].length, data[7].length, data[8].length, data[9].length);
   
      if (currentIndex > 0) {
        currentIndex--;
        sessionStorage.setItem('index', currentIndex);
      console.log(sessionStorage.getItem('index'));
        render();
      }else {
        // Ensure wraparound logic correctly resets index
        currentIndex = 29;
      }
      
    }
    function colour(){
      const data = [chapters[0].data1, chapters[0].data2, chapters[0].data3, chapters[0].chapter, chapters[0].data5, chapters[0].data6, chapters[0].data7,chapters[0].data8,chapters[0].data9, chapters[0].data10]; 
      const index=currentIndex;
      console.log(index);
      const www=data[7][index];
      console.log(www);
        const textContainer = document.getElementById("end1");
         const textContainer1 = document.getElementById("middle1");
         const textContainer2 = document.getElementById("start1");
        const word =data[7][index];
        const word1 =data[8][index];
        const word2 =data[9][index];
        const targetLetter = data[3][index];
        const targetLetter1 = data[5][index];
        const targetLetter2 = data[6][index];
        console.log(targetLetter);
         console.log(targetLetter1);
         console.log(targetLetter2);
        console.log(word);
        console.log(textContainer);
        textContainer.innerHTML = word.split("").map(letter => 
            letter === targetLetter ? `<span class="highlight">${letter}</span>` : letter
        ).join("");
        textContainer1.innerHTML = word1.split("").map(letter => 
            letter === targetLetter ? `<span class="highlight">${letter}</span>` : letter
        ).join("");
        textContainer2.innerHTML = word2.split("").map(letter => 
            letter === targetLetter ? `<span class="highlight">${letter}</span>` : letter
        ).join("");
      }

    // Swipe support
    let startX = 0;

    document.addEventListener("touchstart", e => {
      startX = e.changedTouches[0].clientX;
    });

    document.addEventListener("touchend", e => {
      const deltaX = e.changedTouches[0].clientX - startX;
      if (deltaX > 50)  {prev(); colour();}
      else if (deltaX < -50) {next(); colour();}
    });

    document.addEventListener("mousedown", e => {
      startX = e.clientX;
    });

    document.addEventListener("mouseup", e => {
      const deltaX = e.clientX - startX;
      if (deltaX > 50)  {prev(); colour();}
      else if (deltaX < -50) {next(); colour();}
    });

    // Initial render
    render();

    
