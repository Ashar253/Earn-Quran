

  //Layout start


    let currentIndex =sessionStorage.getItem('index');

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


function innerTextFn() {
  const elements = [
    'chapter_body1', 'chapter_body2', 'chapter_body3',
    'chapter_body5', 'chapter_body6', 'chapter_body7',
    'chapter_body8', 'chapter_body9', 'chapter_body10',
    'chapter_body11', 'chapter_body12', 'chapter_body13',
    'chapter_body14', 'chapter_body15', 'chapter_body16',
    'audio'
  ];

  const data = [
    chapters[1].example,  // 0
    chapters[1].example, // 1
    chapters[1].example, // 2
    chapters[1].example1, // 3
    chapters[1].example1, // 4
    chapters[1].example1, // 5
    chapters[1].example2, // 6
    chapters[1].example2, // 7
    chapters[1].example2,  // 8
    chapters[1].example1, // 3
    chapters[1].example1, // 4
    chapters[1].example1, // 5
    chapters[1].example2, // 6
    chapters[1].example2, // 7
    chapters[1].example2
  ];

  // Get current index or default to 0
  let currentIndex = parseInt(sessionStorage.getItem('index') || '0');

  const maxLength = data[0].length;
 

  elements.forEach((el, i) => {
    const element = document.getElementById(el);
    if (!element) return;

    const arr = data[i];
    if (!Array.isArray(arr) || currentIndex >= arr.length) return;

    let value = arr[currentIndex];

    // Add diacritics at specified indexes
   if (i === 0) {
      value = data[0][currentIndex % maxLength];
    } else if (i === 1) {
      value = data[1][(currentIndex + 1) % maxLength];
    } else if (i === 2) {
      value = data[2][(currentIndex + 2) % maxLength];
    } else 
    if (i === 3) {
      value = data[3][currentIndex % maxLength];
    }else
    if (i === 4) {
      value = data[4][(currentIndex + 1) % maxLength];
    }else 
    if (i === 5) {
      value = data[5][(currentIndex + 2) % maxLength];
    }else
    if (i === 6) {
      value = data[6][currentIndex % maxLength];
    }else
    if (i === 7) {
      value = data[7][(currentIndex + 1) % maxLength];
    }else 
    if (i === 8) {
      value = data[8][(currentIndex + 2) % maxLength];
    }
    else{
      // From index 3 onward, use currentIndex normally
      value = data[i][currentIndex % data[i].length];
    }
 
    //   if (i === value) value = value ;
    //   if (i ===  value) value = value ;
    //   if (i === value) value = value ;
   // }

    if (element.tagName === 'AUDIO') {
      element.src = `sounds/${value}.mp3`;
    } else {
      element.innerHTML = value;
    }
  });

  // Update index for next cycle
  currentIndex = (currentIndex + 1) % maxLength;
  sessionStorage.setItem('index', currentIndex);

  console.log('Forward letter:', chapters[1].example[currentIndex]);
  console.log('Saved index:', currentIndex);
}


 

function innerTextFnBackward() {
  const zabar = 'َ';
  const zer   = 'ِ';
  const pesh  = 'ُ';

  // Diacritic positions
  const zabarIndex = 3;
  const zerIndex = 7;
  const peshIndex = 11;

  const elements = [
    'chapter_body1', 'chapter_body2', 'chapter_body3',
    'chapter_body5', 'chapter_body6', 'chapter_body7', 
    'chapter_body8', 'chapter_body9', 'chapter_body10',
    'chapter_body11', 'chapter_body12', 'chapter_body13',
    'chapter_body14', 'chapter_body15', 'chapter_body16',
    'audio'
  ];

  const data = [
    chapters[1].example, chapters[1].example1, chapters[1].example2, 
    chapters[1].example1, chapters[1].example1, chapters[1].example1, 
    chapters[1].example2, chapters[1].example2, chapters[1].example2,
    chapters[1].example1, // 3
    chapters[1].example1, // 4
    chapters[1].example1, // 5
    chapters[1].example2, // 6
    chapters[1].example2, // 7
    chapters[1].example2
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
    /*  if (i === value) value = value ;
      if (i ===  value) value = value ;
      if (i === value) value = value ;
   // }*/
if (i === 0) {
      value = data[0][currentIndex % maxLength];
    } else if (i === 1) {
      value = data[1][(currentIndex + 1) % maxLength];
    } else if (i === 2) {
      value = data[2][(currentIndex + 2) % maxLength];
    } else 
    if (i === 3) {
      value = data[3][currentIndex % maxLength];
    }else
    if (i === 4) {
      value = data[4][(currentIndex + 1) % maxLength];
    }else 
    if (i === 5) {
      value = data[5][(currentIndex + 2) % maxLength];
    }else
    if (i === 6) {
      value = data[6][currentIndex % maxLength];
    }else
    if (i === 7) {
      value = data[7][(currentIndex + 1) % maxLength];
    }else 
    if (i === 8) {
      value = data[8][(currentIndex + 2) % maxLength];
    }
    else{
      // From index 3 onward, use currentIndex normally
      value = data[i][currentIndex % data[i].length];
    }
    if (element.tagName === 'AUDIO') {
      element.src = `sounds/${value}.mp3`;
    } else {
      element.innerHTML = value;
    }
  });

  // Save and log the new index
  sessionStorage.setItem('index', newIndex);
  console.log('Backward letter:', chapters[1].example[newIndex]);
  console.log('Saved index:', newIndex);
}
