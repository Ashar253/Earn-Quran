let currentIndex =sessionStorage.getItem('index');
function onloadtext() {
     const elements = ['chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4', 'chapter_body5', 'chapter_body6', 'chapter_body7','chapter_body11','chapter_body8','chapter_body9','chapter_body10','chapter_body12','audio','audio1','audio2'];
    const data = [chapters[3].data1, chapters[3].data2, chapters[3].data3, chapters[3].chapter, chapters[3].data4, chapters[3].data5, chapters[3].data6,chapters[3].chapter1,chapters[3].data7, chapters[3].data8, chapters[3].data9,chapters[3].chapter2,chapters[3].data1,chapters[3].data4,chapters[3].data7];
  
    if (elements.every(el => currentIndex < data[elements.indexOf(el)].length)) {
      elements.forEach((el, i) => {
        document.getElementById(el).innerHTML = data[i][currentIndex];
      });
      console.log(currentIndex);
  }
  
  }


   
   function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  function playAudio1() {
    var audio1 = document.getElementById("audio1");
    audio1.play();
  }
  function playAudio2() {
    var audio2 = document.getElementById("audio2");
    audio2.play();
  }
   
   function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  function playAudio1() {
    var audio1 = document.getElementById("audio1");
    audio1.play();
  }
  function playAudio2() {
    var audio2 = document.getElementById("audio2");
    audio2.play();
  }
   
const swipeArea = document.getElementById('swipe-area');
  let touchStartX = 0;
swipeArea.addEventListener('mousedown', (e) => { // For mouse events
  touchStartX = e.clientX;
  swipeArea.style.cursor = 'grabbing';
});

swipeArea.addEventListener('mouseup', (e) => {
    swipeArea.style.cursor = 'grab';
});

swipeArea.addEventListener('touchstart', (e) => { // For touch events
  touchStartX = e.touches[0].clientX;
});

swipeArea.addEventListener('mousemove', (e) => {
    if (touchStartX > 0) {
        innerTextFn(e.clientX);
    }
});

swipeArea.addEventListener('touchmove', (e) => {
    innerTextFn(e.touches[0].clientX);
});

swipeArea.addEventListener('mouseleave', (e) => {
    touchStartX = 0;
    swipeArea.style.cursor = 'grab';
});

swipeArea.addEventListener('touchend', () => {
  touchStartX = 0;
});
 
 function innerTextFn() {
  
  let currentIndex = parseInt(sessionStorage.getItem('index') || '0');

  const zabar = '\u064E'; // Arabic diacritic for zabar
  const zer   = '\u0650';  // ِ
  const pesh  = '\u064F';
  const elements = [
    'chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4',
    'chapter_body5', 'chapter_body6', 'chapter_body7', 'chapter_body11',
    'chapter_body8', 'chapter_body9', 'chapter_body10', 'chapter_body12',
    'audio', 'audio1', 'audio2'
  ];

  const data = [
    chapters[1].data1, chapters[1].data2, chapters[1].data3, chapters[0].chapter,
    chapters[1].data4, chapters[1].data5, chapters[1].data6, chapters[0].chapter,
    chapters[1].data7, chapters[1].data8, chapters[1].data9, chapters[0].chapter,
    chapters[1].data1, chapters[1].data4, chapters[1].data7
  ];

  if (elements.every((el, i) => Array.isArray(data[i]) && currentIndex < data[i].length)) {
    elements.forEach((el, i) => {
      const element = document.getElementById(el);
      let value = data[i][currentIndex];

      if (!element) return;

      // Apply zabar only to chapters[0].chapter (which is at index 3)
      if (i === 3 && value) {
        value = value + zabar;
      }
      if (i === 7 && value) {
        value = value + zer;
      }
      if (i === 11 && value) {
        value = value + pesh;
      }
      if (element.tagName === "AUDIO") {
        element.src = `sounds/${value}.mp3`;
      } else {
        element.innerHTML = value;
      }
    });

    console.log("Current letter:", chapters[1].data1[currentIndex]);

    if (currentIndex < data[0].length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    sessionStorage.setItem('index', currentIndex);
  } else {
    console.warn("Invalid index or data mismatch");
    currentIndex = 0;
    sessionStorage.setItem('index', currentIndex);
  }

  touchStartX = touchEndX;
}

  

function innerTextFnBackward() {
  let currentIndex = parseInt(sessionStorage.getItem('index') || '0');
  const zabar = '\u064E'; // Unicode for zabar (fatha)
  const zer   = '\u0650';  // ِ
  const pesh  = '\u064F';
  const elements = [
    'chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4',
    'chapter_body5', 'chapter_body6', 'chapter_body7', 'chapter_body11',
    'chapter_body8', 'chapter_body9', 'chapter_body10', 'chapter_body12',
    'audio'
  ];

  const data = [
    chapters[1].data1, chapters[1].data2, chapters[1].data3, chapters[0].chapter,
    chapters[1].data4, chapters[1].data5, chapters[1].data6, chapters[0].chapter,
    chapters[1].data7, chapters[1].data8, chapters[1].data9, chapters[0].chapter,
    chapters[1].data1
  ];

  // Go back by one step
  let newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = data[0].length - 1; // wrap to last index
  }

  elements.forEach((el, i) => {
    const element = document.getElementById(el);
    if (!element || !Array.isArray(data[i]) || newIndex >= data[i].length) return;

    let value = data[i][newIndex];

    // Apply zabar if from chapters[0].chapter (which are at index 3, 7, and 11)
    if (i === 3 && value) {
      value += zabar;
    }
    if (i === 7 && value) {
        value = value + zer;
      }
      if (i === 11 && value) {
        value = value + pesh;
      }
    if (element.tagName === 'AUDIO') {
      element.src = 'sounds/' + value + '.mp3';
    } else {
      element.innerHTML = value;
    }
  });

  console.log('Backward letter:', chapters[1].data1[newIndex]);

  // Save index
  currentIndex = newIndex;
  sessionStorage.setItem('index', currentIndex);
  console.log('Saved index:', currentIndex);
}



   /*
   
   function innerTextFn(clientX) {
    const touchEndX = clientX;
    const swipeDistance = touchEndX - touchStartX;
    const elements = ['chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4', 'chapter_body5', 'chapter_body6', 'chapter_body7','chapter_body11','chapter_body8','chapter_body9','chapter_body10','chapter_body12','audio','audio1','audio2'];
    const data = [chapters[4].data1, chapters[4].data2, chapters[4].data3, chapters[4].chapter, chapters[4].data4, chapters[4].data5, chapters[4].data6,chapters[4].chapter1,chapters[4].data7, chapters[4].data8, chapters[4].data9,chapters[4].chapter2,chapters[4].data1,chapters[4].data4,chapters[4].data7];
  
    if (elements.every(el => currentIndex < data[elements.indexOf(el)].length)) {
      elements.forEach((el, i) => {
        document.getElementById(el).innerHTML = data[i][currentIndex];
        document.getElementById(el).src ='sounds/'+ data[i][currentIndex]+'.mp3';
        //document.getElementById('audio').src = data[i][currentIndex];
      });
      console.log(chapters[4].data1[currentIndex]);
      let intervalId=0;
      if (currentIndex === 29) {
        clearInterval(intervalId); // Assuming intervalId exists
        return;
      }
  
      currentIndex++;
      sessionStorage.setItem('index', currentIndex);
      console.log(sessionStorage.getItem('index'));
    } else if (currentIndex >= chapters[4].data1.length) {
      currentIndex = 0;
    }
     touchStartX = touchEndX;
  }
  

    function innerTextFnBackward() {
      const elements = ['chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4', 'chapter_body5', 'chapter_body6', 'chapter_body7','chapter_body11','chapter_body8','chapter_body9','chapter_body10','chapter_body12','audio'];
      const data = [chapters[4].data1, chapters[4].data2, chapters[4].data3, chapters[4].chapter, chapters[4].data4, chapters[4].data5, chapters[4].data6,chapters[4].chapter1,chapters[4].data7, chapters[4].data8, chapters[4].data9,chapters[4].chapter2,chapters[4].data1,chapters[4].data4,chapters[4].data7];
  
      if (currentIndex > 0 && elements.every(el => currentIndex - 1 >= 0 && currentIndex - 1 < data[elements.indexOf(el)].length)) {
        elements.forEach((el, i) => {
          document.getElementById(el).innerHTML = data[i][currentIndex - 2];
          document.getElementById(el).src = 'sounds/'+data[i][currentIndex - 2]+'.mp3';
        });
        console.log(chapters[4].data1[currentIndex - 1]);
        let intervalId=0;
       if (currentIndex === 1) {
          clearInterval(intervalId); 
          return;
      }
    
        currentIndex--;
        sessionStorage.setItem('index', currentIndex);
        console.log(sessionStorage.getItem('index'));
      } else if (currentIndex === 0) {
        currentIndex = chapters[4].data1.length - 1; 
      }
    } 
      */