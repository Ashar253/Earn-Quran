//layout  start
function generateSwipeAreaHTML() {
  const swipeArea = document.createElement('div');
  swipeArea.id = 'swipe-area';

  const chapterBody = document.createElement('div');
  chapterBody.className = 'chapterbody';

  // Backward button
  const backwordP = document.createElement('p');
  backwordP.className = 'backword';

  const backBtn = document.createElement('button');
  backBtn.className = 'Forwordbutton';
  backBtn.id = 'backword';
  backBtn.setAttribute('onClick', 'innerTextFnBackward()');
  backBtn.innerText = ' <<';
  backwordP.appendChild(backBtn);

  chapterBody.appendChild(backwordP);

  // Chapter container
  const chapterDiv = document.createElement('div');
  chapterDiv.className = 'chapter';

  // Letter blocks config
  const blocks = [
    {
      letterClass: 'letter1',
      spanIds: ['chapter_body1', 'chapter_body2', 'chapter_body3'],
      aId: 'chapter_body4',
      audioId: 'audio',
      pClass: 'letter',
      onclick: 'playAudio()'
    },
    {
      letterClass: 'letter2',
      spanIds: ['chapter_body5', 'chapter_body6', 'chapter_body7'],
      aId: 'chapter_body11',
      audioId: 'audio1',
      pClass: 'letter01',
      onclick: 'playAudio1()'
    },
    {
      letterClass: 'letter3',
      spanIds: ['chapter_body8', 'chapter_body9', 'chapter_body10'],
      aId: 'chapter_body12',
      audioId: 'audio2',
      pClass: 'letter02',
      onclick: 'playAudio2()'
    }
  ];

  blocks.forEach(block => {
    const letterBlock = document.createElement('div');
    letterBlock.className = 'letterblock audio';
    letterBlock.setAttribute('type', 'button');
    letterBlock.setAttribute('value', 'play');
    letterBlock.setAttribute('onclick', block.onclick);

    const spanGroupP = document.createElement('p');
    spanGroupP.className = block.letterClass;

    block.spanIds.forEach(spanId => {
      const span = document.createElement('span');
      span.id = spanId;
      spanGroupP.appendChild(span);
    });

    const audioBlockP = document.createElement('p');
    audioBlockP.className = block.pClass;

    const anchor = document.createElement('a');
    anchor.id = block.aId;
    anchor.innerHTML = ' ';

    const audio = document.createElement('audio');
    audio.id = block.audioId;
    audio.src = '';

    audioBlockP.appendChild(anchor);
    audioBlockP.appendChild(audio);

    letterBlock.appendChild(spanGroupP);
    letterBlock.appendChild(audioBlockP);
    chapterDiv.appendChild(letterBlock);
  });

  chapterBody.appendChild(chapterDiv);

  // Forward button
  const forwardP = document.createElement('p');
  forwardP.className = 'Forword';

  const forwardBtn = document.createElement('button');
  forwardBtn.className = 'Forwordbutton';
  forwardBtn.setAttribute('onClick', 'innerTextFn()');
  forwardBtn.innerText = ' >>';
  forwardP.appendChild(forwardBtn);

  chapterBody.appendChild(forwardP);
  swipeArea.appendChild(chapterBody);

  document.body.appendChild(swipeArea);
}

//layout end
window.addEventListener('load', () => {
  generateSwipeAreaHTML();
  innerTextFn(); // or any other init function
});
//layout end
let currentIndex =sessionStorage.getItem('index');
function onloadtext() {
     const elements = ['chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4', 'chapter_body5', 'chapter_body6', 'chapter_body7','chapter_body11','chapter_body8','chapter_body9','chapter_body10','chapter_body12','audio','audio1','audio2'];
    const data = [chapters[1].data1, chapters[1].data2, chapters[1].data3, chapters[1].chapter, chapters[1].data4, chapters[1].data5, chapters[1].data6,chapters[1].chapter1,chapters[1].data7, chapters[1].data8, chapters[1].data9,chapters[1].chapter2,chapters[1].data1,chapters[1].data4,chapters[1].data7];
  
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

   const zabar = 'ً'; // Unicode for khada_zabar (fatha)
  const zer   = 'ٍ';  // ِ
  const pesh  = 'ٌ';
  const elements = [
    'chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4',
    'chapter_body5', 'chapter_body6', 'chapter_body7', 'chapter_body11',
    'chapter_body8', 'chapter_body9', 'chapter_body10', 'chapter_body12',
    'audio', 'audio1', 'audio2'
  ];

  const data = [
    chapters[3].data1, chapters[3].data2, chapters[3].data3, chapters[0].chapter,
    chapters[3].data4, chapters[3].data5, chapters[3].data6, chapters[0].chapter,
    chapters[3].data7, chapters[3].data8, chapters[3].data9, chapters[0].chapter,
    chapters[3].data1, chapters[3].data4, chapters[3].data7
  ];

  if (elements.every((el, i) => Array.isArray(data[i]) && currentIndex < data[i].length)) {
    elements.forEach((el, i) => {
      const element = document.getElementById(el);
      let value = data[i][currentIndex];

      if (!element) return;

      // Apply zabar only to chapters[0].chapter (which is at index 3)
     if(currentIndex==0)
     {
      if (i === 3 && value) {
        value = '◌'+zabar;
      }
      if (i === 7 && value) {
        value = '◌'+zer;
      }
      if (i === 11 && value) {
        value = '◌'+pesh;
      }
     
     }else{
      if (i === 3 && value) {
        value = value + zabar;
      }
      if (i === 7 && value) {
        value = value + zer;
      }
      if (i === 11 && value) {
        value = value + pesh;
      }
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
  const zabar = 'ً'; // Unicode for Do zabar (fatha)
  const zer   = 'ٍ';  // ِ
  const pesh  = 'ٌ';

  // Diacritic positions
  const zabarIndex = 3;
  const zerIndex = 7;
  const peshIndex = 11;

  const elements = [
    'chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4',
    'chapter_body5', 'chapter_body6', 'chapter_body7', 'chapter_body11',
    'chapter_body8', 'chapter_body9', 'chapter_body10', 'chapter_body12',
    'audio'
  ];

  const data = [
    chapters[3].data1, chapters[3].data2, chapters[3].data3, chapters[0].chapter,
    chapters[3].data4, chapters[3].data5, chapters[3].data6, chapters[0].chapter,
    chapters[3].data7, chapters[3].data8, chapters[3].data9, chapters[0].chapter,
    chapters[3].data1, chapters[3].data4, chapters[3].data7
  ];

  // Get or initialize current index
  let currentIndex = parseInt(sessionStorage.getItem('index') || '0');
  let newIndex = currentIndex - 1;

  // Wrap-around logic
  const maxLength = data[0].length;
  if (newIndex < 0) newIndex = maxLength - 1;

  elements.forEach((el, i) => {
    const element = document.getElementById(el);
    if (!element) return;

    const arr = data[i];
    if (!Array.isArray(arr) || newIndex >= arr.length) return;

    let value = arr[newIndex];

    // ✅ Check for newIndex instead of currentIndex
    if (newIndex === 0) {
      if (i === zabarIndex && value) value = '◌' + zabar;
      if (i === zerIndex && value) value = '◌' + zer;
      if (i === peshIndex && value) value = '◌' + pesh;
    } else {
      if (i === zabarIndex && value) value = value + zabar;
      if (i === zerIndex && value) value = value + zer;
      if (i === peshIndex && value) value = value + pesh;
    }

    if (element.tagName === 'AUDIO') {
      element.src = `sounds/${value}.mp3`;
    } else {
      element.innerHTML = value;
    }
  });

  // Save and log the new index
  sessionStorage.setItem('index', newIndex);
  console.log('Backward letter:', chapters[1].data1[newIndex]);
  console.log('Saved index:', newIndex);
}

