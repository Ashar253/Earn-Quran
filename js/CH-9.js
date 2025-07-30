


   
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
   

   let currentIndex =sessionStorage.getItem('index'); // Keeps track of the current index in the data array
   
   function innerTextFn() {
    const elements = ['chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4', 'chapter_body5', 'chapter_body6', 'chapter_body7','chapter_body11','chapter_body8','chapter_body9','chapter_body10','chapter_body12','audio','audio1','audio2'];
    const data = [chapters[5].data1, chapters[5].data2, chapters[5].data3, chapters[5].chapter, chapters[5].data4, chapters[5].data5, chapters[5].data6,chapters[5].chapter1,chapters[5].data7, chapters[5].data8, chapters[5].data9,chapters[5].chapter2,chapters[5].data1,chapters[5].data4,chapters[5].data7];
  
    if (elements.every(el => currentIndex < data[elements.indexOf(el)].length)) {
      elements.forEach((el, i) => {
        document.getElementById(el).innerHTML = data[i][currentIndex];
        document.getElementById(el).src ='sounds/'+ data[i][currentIndex]+'.mp3';
        //document.getElementById('audio').src = data[i][currentIndex];
      });
      console.log(chapters[5].data1[currentIndex]);
      let intervalId=0;
      if (currentIndex === 29) {
        clearInterval(intervalId); // Assuming intervalId exists
        return;
      }
  
      currentIndex++;
      sessionStorage.setItem('index', currentIndex);
      console.log(sessionStorage.getItem('index'));
    } else if (currentIndex >= chapters[5].data1.length) {
      currentIndex = 0;
    }
  }
  

    function innerTextFnBackward() {
      const elements = ['chapter_body1', 'chapter_body2', 'chapter_body3', 'chapter_body4', 'chapter_body5', 'chapter_body6', 'chapter_body7','chapter_body11','chapter_body8','chapter_body9','chapter_body10','chapter_body12','audio'];
      const data = [chapters[5].data1, chapters[5].data2, chapters[5].data3, chapters[5].chapter, chapters[5].data4, chapters[5].data5, chapters[5].data6,chapters[5].chapter1,chapters[5].data7, chapters[5].data8, chapters[5].data9,chapters[5].chapter2,chapters[5].data1,chapters[5].data4,chapters[5].data7];
  
      if (currentIndex > 0 && elements.every(el => currentIndex - 1 >= 0 && currentIndex - 1 < data[elements.indexOf(el)].length)) {
        elements.forEach((el, i) => {
          document.getElementById(el).innerHTML = data[i][currentIndex - 2];
          document.getElementById(el).src = 'sounds/'+data[i][currentIndex - 2]+'.mp3';
        });
        console.log(chapters[5].data1[currentIndex - 1]);
        let intervalId=0;
       if (currentIndex === 1) {
          clearInterval(intervalId); 
          return;
      }
    
        currentIndex--;
        sessionStorage.setItem('index', currentIndex);
        console.log(sessionStorage.getItem('index'));
      } else if (currentIndex === 0) {
        currentIndex = chapters[5].data1.length - 1; 
      }
    } 