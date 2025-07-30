

  //Layout start


    let currentIndex =sessionStorage.getItem('index');
/*
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
*/

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
    chapters[0].example,  // 0
    chapters[0].example, // 1
    chapters[0].example, // 2
    chapters[0].example1, // 3
    chapters[0].example1, // 4
    chapters[0].example1, // 5
    chapters[0].example2, // 6
    chapters[0].example2, // 7
    chapters[0].example2,  // 8
    chapters[0].example1, // 3
    chapters[0].example1, // 4
    chapters[0].example1, // 5
    chapters[0].example2, // 6
    chapters[0].example2, // 7
    chapters[0].example2
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
    chapters[0].example,  // 0
    chapters[0].example, // 1
    chapters[0].example, // 2
    chapters[0].example1, // 3
    chapters[0].example1, // 4
    chapters[0].example1, // 5
    chapters[0].example2, // 6
    chapters[0].example2, // 7
    chapters[0].example2,  // 8
    chapters[0].example1, // 3
    chapters[0].example1, // 4
    chapters[0].example1, // 5
    chapters[0].example2, // 6
    chapters[0].example2, // 7
    chapters[0].example2
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
  // //Audio starts
  // const audioSrc = data[10][currentIndex] + '.mp3';  // Ensure correct extension
  // box11.style.cursor = "pointer";
  // box11.onclick = () => {
  //   const audio = new Audio(audioSrc);
  //   audio.play().catch(err => console.warn("Playback failed", err));
  // };
  //Audio ends
  //start
  const box1= document.getElementById('chapter_body1');
  const box2= document.getElementById('chapter_body2');
  const box3= document.getElementById('chapter_body3');
  const box4= document.getElementById('chapter_body5');
  const box5= document.getElementById('chapter_body6');
  const box6= document.getElementById('chapter_body7');
  const box7= document.getElementById('chapter_body8');
  const box8= document.getElementById('chapter_body9');
  const box9= document.getElementById('chapter_body10');
  const box10= document.getElementById('chapter_body11');
  const box11= document.getElementById('chapter_body12');
  const box12= document.getElementById('chapter_body13');
  const box13= document.getElementById('chapter_body14');
  const box14= document.getElementById('chapter_body15');
  const box15= document.getElementById('chapter_body16');
 //1
 const audioSrc = 'sounds/'+data[0][currentIndex]+'.mp3';  // Ensure correct extension
  box1.style.cursor = "pointer";
  box1.onclick = () => {
    const audio = new Audio(audioSrc);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
//2
const audioSrc1 = 'sounds/'+data[1][currentIndex + 1]+'.mp3';  // Ensure correct extension
  box2.style.cursor = "pointer";
  box2.onclick = () => {
    const audio = new Audio(audioSrc1);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
//3
const audioSrc2 = 'sounds/'+data[2][currentIndex + 2]+'.mp3';  // Ensure correct extension
  box3.style.cursor = "pointer";
  box3.onclick = () => {
    const audio = new Audio(audioSrc2);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //4
  const audioSrc3 = 'sounds/'+data[3][currentIndex]+'.mp3';  // Ensure correct extension
  box4.style.cursor = "pointer";
  box4.onclick = () => {
    const audio = new Audio(audioSrc3);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //5
  const audioSrc4 = 'sounds/'+data[4][currentIndex+1]+'.mp3';  // Ensure correct extension
  box5.style.cursor = "pointer";
  box5.onclick = () => {
    const audio = new Audio(audioSrc4);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //6
  const audioSrc5 = 'sounds/'+data[5][currentIndex+1]+'.mp3';  // Ensure correct extension
  box6.style.cursor = "pointer";
  box6.onclick = () => {
    const audio = new Audio(audioSrc5);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //7
  const audioSrc6 = 'sounds/'+data[6][currentIndex+2]+'.mp3';  // Ensure correct extension
  box7.style.cursor = "pointer";
  box7.onclick = () => {
    const audio = new Audio(audioSrc6);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //8
  const audioSrc7 = 'sounds/'+data[7][currentIndex+2]+'.mp3';  // Ensure correct extension
  box8.style.cursor = "pointer";
  box8.onclick = () => {
    const audio = new Audio(audioSrc7);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //9
  const audioSrc8 = 'sounds/'+data[8][currentIndex]+'.mp3';  // Ensure correct extension
  box9.style.cursor = "pointer";
  box9.onclick = () => {
    const audio = new Audio(audioSrc8);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //10
  const audioSrc9 = 'sounds/'+data[9][currentIndex+1]+'.mp3';  // Ensure correct extension
  box10.style.cursor = "pointer";
  box10.onclick = () => {
    const audio = new Audio(audioSrc9);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //11
  const audioSrc10 = 'sounds/'+data[10][currentIndex+2]+'.mp3';  // Ensure correct extension
  box11.style.cursor = "pointer";
  box11.onclick = () => {
    const audio = new Audio(audioSrc10);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //12
  const audioSrc11 = 'sounds/'+data[11][currentIndex]+'.mp3';  // Ensure correct extension
  box12.style.cursor = "pointer";
  box12.onclick = () => {
    const audio = new Audio(audioSrc11);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //13
  const audioSrc12 = 'sounds/'+data[12][currentIndex+1]+'.mp3';  // Ensure correct extension
  box13.style.cursor = "pointer";
  box13.onclick = () => {
    const audio = new Audio(audioSrc12);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //14
  const audioSrc13 = 'sounds/'+data[13][currentIndex+2]+'.mp3';  // Ensure correct extension
  box14.style.cursor = "pointer";
  box14.onclick = () => {
    const audio = new Audio(audioSrc13);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
  //15
   const audioSrc14 = 'sounds/'+data[14][currentIndex]+'.mp3';  // Ensure correct extension
   box15.style.cursor = "pointer";
  box15.onclick = () => {
    const audio = new Audio(audioSrc14);
    audio.play().catch(err => console.warn("Playback failed", err));
  };
    //end
}
