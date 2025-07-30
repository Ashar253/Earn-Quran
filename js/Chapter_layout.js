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
 // backBtn.setAttribute('onClick', 'innerTextFnBackward()');
  backBtn.setAttribute('onClick', 'innerTextFnBackward(); nextLetter();');

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
