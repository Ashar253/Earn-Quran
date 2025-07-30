function generateSwipeAreaHTML() {
  const swipeArea = document.createElement('div');
  swipeArea.id = 'swipe-area';

  const chapterBody = document.createElement('div');
  chapterBody.className = 'chapterbody';

  // Backward button
  const backwordP = document.createElement('p');
  backwordP.className = 'backword';

  const backBtn = document.createElement('button');
  backBtn.className = 'backwordbutton';
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
      audioId: 'audio',
      
     // onclick: 'playAudio()',
    },
    {
      letterClass: 'letter2',
      spanIds: ['chapter_body5', 'chapter_body6', 'chapter_body7'],
      
      audioId: 'audio1',
     
     // onclick: 'playAudio1()'
    },
    {
      letterClass: 'letter3',
      spanIds: ['chapter_body8', 'chapter_body9', 'chapter_body10'],
      
      audioId: 'audio2',
     
     // onclick: 'playAudio2()'
    },
     {
      letterClass: 'letter4',
      spanIds: ['chapter_body11', 'chapter_body12', 'chapter_body13'],
      
      audioId: 'audio3',
     
     // onclick: 'playAudio3()'
    },
    {
      letterClass: 'letter5',
      spanIds: ['chapter_body14', 'chapter_body15', 'chapter_body16'],
      
      audioId: 'audio3',
     
     // onclick: 'playAudio3()'
    }
  ];

  blocks.forEach(block => {
    const letterBlock = document.createElement('div');
    letterBlock.className = 'letterblock_audio';
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
    audio.id = block.spanIds;
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
