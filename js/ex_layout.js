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
  backBtn.innerText = '<<';
  backwordP.appendChild(backBtn);
  chapterBody.appendChild(backwordP);

  const chapterDiv = document.createElement('div');
  chapterDiv.className = 'chapter';

  const blocks = [
    {
      letterClass: 'letter1',
      spanIds: ['chapter_body1', 'chapter_body2', 'chapter_body3'],
    },
    {
      letterClass: 'letter2',
      spanIds: ['chapter_body5', 'chapter_body6', 'chapter_body7'],
    },
    {
      letterClass: 'letter3',
      spanIds: ['chapter_body8', 'chapter_body9', 'chapter_body10'],
    },
    {
      letterClass: 'letter4',
      spanIds: ['chapter_body11', 'chapter_body12', 'chapter_body13'],
    },
    {
      letterClass: 'letter5',
      spanIds: ['chapter_body14', 'chapter_body15', 'chapter_body16'],
    }
  ];

  blocks.forEach(block => {
    const letterBlock = document.createElement('div');
    letterBlock.className = 'letterblock_audio';

    const spanGroup = document.createElement('p');
    spanGroup.className = block.letterClass;

    block.spanIds.forEach(spanId => {
      const span = document.createElement('span');
      span.id = spanId;
      span.textContent = ''; // Fill later with value

      const audio = document.createElement('audio');
      audio.id = `${spanId}_audio`;
      audio.src = ''; // Update later like: `sounds/${value}.mp3`

      // Click span to play its own audio
      span.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
      });

      spanGroup.appendChild(span);
      spanGroup.appendChild(audio);
    });

    letterBlock.appendChild(spanGroup);
    chapterDiv.appendChild(letterBlock);
  });

  chapterBody.appendChild(chapterDiv);

  const forwardP = document.createElement('p');
  forwardP.className = 'Forword';

  const forwardBtn = document.createElement('button');
  forwardBtn.className = 'Forwordbutton';
  forwardBtn.setAttribute('onClick', 'innerTextFn()');
  forwardBtn.innerText = '>>';
  forwardP.appendChild(forwardBtn);

  chapterBody.appendChild(forwardP);
  swipeArea.appendChild(chapterBody);

  document.body.appendChild(swipeArea);
}
