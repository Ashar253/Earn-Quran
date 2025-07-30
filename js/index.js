
const card_container = document.querySelector('.card_container');

window.addEventListener("DOMContentLoaded", function () {
const chaptercardcont = chapters.map((chapter,index) => {
      
    
       let chaptercard;
       chaptercard = document.createElement("div");
       chaptercard.classList.add("card");
       chaptercard.setAttribute('id', 'chaptercard');
       card_container.appendChild(chaptercard);
      
        //ancor tag for chapter refernce link to direct to perticular chapter page .
        const anchor = document.createElement('a');
        anchor.href = chapter.href;
        anchor.classList.add("ch_anchor");
        //
       let chapternamediv;
       chapternamediv = document.createElement("div");
       chapternamediv.classList.add("card-header");
       chaptercard.appendChild(chapternamediv);
       
        let progressdiv;
        progressdiv = document.createElement("div");
        progressdiv.classList.add("Progress-bar");
        chaptercard.appendChild(progressdiv); 

       let chapterdiv;
       chapterdiv = document.createElement("div");
       chapterdiv.classList.add("menu-bar");
       chaptercard.appendChild(chapterdiv);

    //chapter name
      let chaptername;
      chaptername = document.createElement("h");
      chaptername.setAttribute("data-key","chapter")
      chaptername.classList.add("chaptername");
      chapternamediv.append(chaptername);
      let chapternumber;
      chapternumber = document.createElement("h");
      chapternumber.classList.add("chapternumber");
      chapternumber.innerText += chapter.no;
      chapternamediv.append(chapternumber);

      //progress bar
      const progressLabel = document.createElement('label');
      progressLabel.htmlFor = 'file';
      progressLabel.textContent = 'Progress:';
      progressLabel.classList.add("Progress-bar-label");
      progressdiv.appendChild(progressLabel);
      // Create the progress bar
      const progressBar = document.createElement('progress');
      progressBar.id = 'progress-bar';
       progressBar.value = progress[index];
       //chapter.chid;
       progressBar.max = 29;
      progressBar.classList.add("Progress-bar-Indic");
      progressdiv.appendChild(progressBar);

//Help start and Test portion below
      
      
      let chapterstr;
      chapterstr = document.createElement("h");
      chapterstr.setAttribute("data-key","start")
      chapterstr.classList.add("start-test-help");
      chapterdiv.append(chapterstr);
    
     const anchor_test = document.createElement('a');
     anchor_test.href = chapter.href_test;
     
      
      // let chaptertest;
      // chaptertest = document.createElement("h");
      // chaptertest.setAttribute("data-key","test")
      // chaptertest.classList.add("start-test-help");
      // anchor_test.append(chaptertest);
      let chaptertest;
      chaptertest = document.createElement("div");  // use div instead of invalid <h>
      chaptertest.setAttribute("data-key", "test");
      chaptertest.classList.add("start-test-help");
      anchor_test.append(chaptertest);
      chapterdiv.append(anchor_test);

      chapterdiv.append(anchor_test);

      let chapterhelp;
      chapterhelp = document.createElement("h");
      chapterhelp.setAttribute("data-key","help")
      chapterhelp.classList.add("start-test-help");
      chapterdiv.append(chapterhelp);

      let letterpara;
      letterpara = document.createElement("p");
      letterpara.classList.add("letterset");

    if(chapter.no == 1) //for first chapter card 
      {
        for(let i=0; i<=2; i++)
        {
          let chapteritem;
          chapteritem = document.createElement("h");
          chapteritem.classList.add("letter-block");
          chapteritem.innerText += chapter.chapter[i];
          letterpara.append(chapteritem);
        }
    }
   else if(chapter.no == 2)
    {
   
    for(let i=0; i<=2; i++) //for remaining chapters card
    {   const zabar = 'َ'; //  zabar
        const zer   = 'ِ';  // ِ
        const pesh  = 'ُ';
        const letter=chapters[0].chapter[0];
        console.log(letter);
      let chapteritem;
      chapteritem = document.createElement("h");
      chapteritem.classList.add("letter-block");
      if(i == 0)
        {chapteritem.innerText = letter+zabar}
      else if(i==1)
       { chapteritem.innerText =  letter+zer}
        else
       {chapteritem.innerText =  letter+pesh}
        chaptercard.append(letterpara);
  
      letterpara.append(chapteritem);
    }
   }else if(chapter.no == 3)
    {
    for(let i=0; i<=2; i++) //for remaining chapters card
    {   const kzabar =  'ٰ'; // Unicode for khada_zabar (fatha)
        const kzer   = 'ٖ';  // ِ
        const upesh  = 'ٗ';
        const letter=chapters[0].chapter[0];
        console.log(letter);
      let chapteritem;
      chapteritem = document.createElement("h");
      chapteritem.classList.add("letter-block");
      if(i == 0)
        {chapteritem.innerText = letter+kzabar}
        else if(i==1)
       { chapteritem.innerText =  letter+kzer}
        else
       {chapteritem.innerText =  letter+upesh}
         chaptercard.append(letterpara);
  
      letterpara.append(chapteritem);
    }
   }else if(chapter.no == 4)
    {
    for(let i=0; i<=2; i++) //for remaining chapters card
    {   const dozabar =  'ً'; // Unicode for Do zabar (fatha)
        const dozer   = 'ٍ';  // ِ
        const dopesh  = 'ٌ';
        const letter=chapters[0].chapter[0];
        console.log(letter);
      let chapteritem;
      chapteritem = document.createElement("h");
      chapteritem.classList.add("letter-block");
      if(i == 0)
        {chapteritem.innerText = letter+dozabar}
          else if(i==1)
       { chapteritem.innerText =  letter+dozer}
        else
       {chapteritem.innerText =  letter+dopesh}
      chaptercard.append(letterpara);
  
      letterpara.append(chapteritem);
    }
   }else
   for(let i=0; i<=2; i++) //for remaining chapters card
    {  
      let chapteritem;
      chapteritem = document.createElement("h");
      chapteritem.classList.add("letter-block");
      if(i == 0)
        {chapteritem.innerText = chapter.chapter[0]}
      else if(i==1)
       { chapteritem.innerText =  chapter.chapter1[0];}
        
      else
       {chapteritem.innerText =  chapter.chapter2[0];}
        
      chaptercard.append(letterpara);
  
      letterpara.append(chapteritem);
    }
   chaptercard.append(letterpara);
  
  //example start
 
     let chapterdiv1;
       chapterdiv1 = document.createElement("div");
       chapterdiv1.classList.add("menu-bar");
       chaptercard.appendChild(chapterdiv1);
       const anchor_test1 = document.createElement('a');
       anchor_test1.href = chapter.href_example;
      
      
      let chaptertest1;
      chaptertest1 = document.createElement("h");
      chaptertest1.setAttribute("data-key","example")
      chaptertest1.classList.add("example");
      anchor_test1.append(chaptertest1);
      
      chapterdiv1.append(anchor_test1);
  //example end
  
      anchor.appendChild(chapternamediv);
      anchor.appendChild(progressdiv);
      anchor.appendChild(letterpara);
      anchor.appendChild(chapterdiv);
      anchor.appendChild(chapterdiv1);
  
   
  // Append anchor to card
  chaptercard.appendChild(anchor);
     
     
  });
});


function applyTranslation(langCode) {
      const translations = langtranslation[langCode];
      if (!translations) {
        console.warn(`No translations for ${langCode}`);
        return;
      }

      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key')?.trim();
        if (key && translations[key]) {
          el.innerText = translations[key];
        }
      });
    }

    // ✅ Apply English by default on load
    window.addEventListener('DOMContentLoaded', () => {
      applyTranslation('en');
    });

