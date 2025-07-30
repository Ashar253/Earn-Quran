  // 
  function createLayout() {
  const body = document.body;

  const createElement = (tag, attrs = {}, children = []) => {
    const el = document.createElement(tag);
    for (const key in attrs) {
      if (key === "class") el.className = attrs[key];
      else if (key === "onClick") el.onclick = attrs[key];
      else if (key === "innerText") el.innerText = attrs[key];
      else el.setAttribute(key, attrs[key]);
    }
    children.forEach(child => el.appendChild(child));
    return el;
  };

  const createLetterBlock = (audioId, anchorId, btnIds, btnFns) => {
    const audio = createElement("audio", { id: audioId, src: "" });
    const anchor = createElement("a", { id: anchorId }, [audio]);
    const letter = createElement("p", { class: "letter" }, [anchor]);

    const buttons = btnIds.map((id, i) =>
      createElement("button", { class: "quizChoice", id, onClick: btnFns[i] })
    );
    const letter2 = createElement("p", { class: "letter2" }, buttons);

    return createElement("div", {
      class: "letterblock",
      type: "button",
      value: "play"
    }, [letter, letter2]);
  };

  const chapter = createElement("div", { class: "chapter" }, [
    createLetterBlock("audio", "chapter_body4", ["chapter_body1", "chapter_body2", "chapter_body3"], [quiz, quiz1, quiz2]),
    createLetterBlock("audio1", "chapter_body11", ["chapter_body5", "chapter_body6", "chapter_body7"], [quiz3, quiz4, quiz5]),
    createLetterBlock("audio2", "chapter_body12", ["chapter_body8", "chapter_body9", "chapter_body10"], [quiz6, quiz7, quiz8])
  ]);
  


  const forwardBtn = createElement("button", {
    class: "Forwordbutton",
    onClick: innerTextFnBackward,
    innerText: ">>"
  });
  const forwardP = createElement("p", { class: "Forword" }, [forwardBtn]);

  const chapterBody = createElement("div", { class: "chapterbody" }, [chapter, forwardP]);
  const swipeArea = createElement("div", { class: "swipe-area" });

  body.appendChild(chapterBody);
  body.appendChild(swipeArea);
}



    // Call the layout function
    createLayout();

   
    //Quiz start

function quiz(){
  var h = document.getElementById('chapter_body1').innerText;
  console.log(h);
  const chldSet = chapters[0].chapter;
  let index = h123[0].indexOf(h);
  console.log(index);
   console.log(h123[0]);
    var rightSound = document.getElementById("rightSound");
    var wrongSound = document.getElementById("wrongSound");
   
      if(index==h1234){
     document.getElementById('chapter_body1').style.backgroundColor = "green";
      rightSound.play();
        } 
          else 
         { 
          document.getElementById('chapter_body1').style.backgroundColor= "Red";
          wrongSound.play();
         } 
          setTimeout(function() {
           document.getElementById('chapter_body1').style.backgroundColor = "";
       }, 1000);    
      
  }
  


  function quiz1(){
    var h = document.getElementById('chapter_body2').innerText;
  console.log(h);
  const chldSet = chapters[0].chapter;
  let index = h123[0].indexOf(h);
  console.log(index);
   console.log(h123[0]);
    var rightSound = document.getElementById("rightSound");
    var wrongSound = document.getElementById("wrongSound");
   
      if(index==h1234){
     document.getElementById('chapter_body2').style.backgroundColor = "green";
      rightSound.play();
        } 
          else 
         { 
          document.getElementById('chapter_body2').style.backgroundColor= "Red";
         wrongSound.play();
         } 
          setTimeout(function() {
           document.getElementById('chapter_body2').style.backgroundColor = "";
       }, 1000);    
        
    }
    function quiz2(){
      var h = document.getElementById('chapter_body3').innerText;
  console.log(h);
  const chldSet = chapters[0].chapter;
  let index = h123[0].indexOf(h);
  console.log(index);
   console.log(h123[0]);
    var rightSound = document.getElementById("rightSound");
    var wrongSound = document.getElementById("wrongSound");
   
      if(index==h1234){
     document.getElementById('chapter_body3').style.backgroundColor = "green";
      rightSound.play();
        } 
          else 
         { 
          document.getElementById('chapter_body3').style.backgroundColor= "Red";
          wrongSound.play();
         } 
          setTimeout(function() {
           document.getElementById('chapter_body3').style.backgroundColor = "";
       }, 1000);    
          
      }

      function quiz3(){
        var h = document.getElementById('chapter_body5').innerText;
    console.log(h);
    const chldSet = chapters[0].chapter;
    let index = h123[1].indexOf(h);
    console.log(index);
     console.log(h123[1]);
      var rightSound = document.getElementById("rightSound");
      var wrongSound = document.getElementById("wrongSound");
     
        if(index==h222){
       document.getElementById('chapter_body5').style.backgroundColor = "green";
        rightSound.play();
          } 
            else 
           { 
            document.getElementById('chapter_body5').style.backgroundColor= "Red";
            wrongSound.play();
           } 
            setTimeout(function() {
             document.getElementById('chapter_body5').style.backgroundColor = "";
         }, 1000);    
            
        }

        function quiz4(){
          var h = document.getElementById('chapter_body6').innerText;
      console.log(h);
      const chldSet = chapters[0].chapter;
      let index = h123[1].indexOf(h);
      console.log(index);
       console.log(h123[1]);
        var rightSound = document.getElementById("rightSound");
        var wrongSound = document.getElementById("wrongSound");
       
          if(index==h222){
         document.getElementById('chapter_body6').style.backgroundColor = "green";
         rightSound.play();
            } 
              else 
             { 
              document.getElementById('chapter_body6').style.backgroundColor= "Red";
            wrongSound.play();
             } 
              setTimeout(function() {
               document.getElementById('chapter_body6').style.backgroundColor = "";
           }, 1000);    
              
          }
          function quiz5(){
            var h = document.getElementById('chapter_body7').innerText;
        console.log(h);
        const chldSet = chapters[0].chapter;
        let index = h123[1].indexOf(h);
        console.log(index);
         console.log(h123[1]);
          var rightSound = document.getElementById("rightSound");
          var wrongSound = document.getElementById("wrongSound");
         
            if(index==h222){
           document.getElementById('chapter_body7').style.backgroundColor = "green";
            rightSound.play();
              } 
                else 
               { 
                document.getElementById('chapter_body7').style.backgroundColor= "Red";
                wrongSound.play();
               } 
                setTimeout(function() {
                 document.getElementById('chapter_body7').style.backgroundColor = "";
             }, 1000);    
                
            }
         
     //
     function quiz6(){
      var h = document.getElementById('chapter_body8').innerText;
  console.log(h);
  const chldSet = chapters[0].chapter;
  let index = h123[2].indexOf(h);
  console.log(index);
   console.log(h123[2]);
    var rightSound = document.getElementById("rightSound");
    var wrongSound = document.getElementById("wrongSound");
   
      if(index==h333){
     document.getElementById('chapter_body8').style.backgroundColor = "green";
      rightSound.play();
        } 
          else 
         { 
          document.getElementById('chapter_body8').style.backgroundColor= "Red";
         wrongSound.play();
         } 
          setTimeout(function() {
           document.getElementById('chapter_body8').style.backgroundColor = "";
       }, 1000);    
          
      }

      function quiz7(){
        var h = document.getElementById('chapter_body9').innerText;
    console.log(h);
    const chldSet = chapters[0].chapter;
    let index = h123[2].indexOf(h);
    console.log(index);
     console.log(h123[2]);
      var rightSound = document.getElementById("rightSound");
      var wrongSound = document.getElementById("wrongSound");
     
        if(index==h333){
       document.getElementById('chapter_body9').style.backgroundColor = "green";
        rightSound.play();
          } 
            else 
           { 
            document.getElementById('chapter_body9').style.backgroundColor= "Red";
            wrongSound.play();
           } 
            setTimeout(function() {
             document.getElementById('chapter_body9').style.backgroundColor = "";
         }, 1000);    
            
        }
        function quiz8(){
          var h = document.getElementById('chapter_body10').innerText;
      console.log(h);
      const chldSet = chapters[0].chapter;
      let index = h123[2].indexOf(h);
      console.log(index);
       console.log(h123[2]);
        var rightSound = document.getElementById("rightSound");
        var wrongSound = document.getElementById("wrongSound");
       
          if(index==h333){
         document.getElementById('chapter_body10').style.backgroundColor = "green";
          rightSound.play();
            } 
              else 
             { 
              document.getElementById('chapter_body10').style.backgroundColor= "Red";
              wrongSound.play();
             } 
              setTimeout(function() {
               document.getElementById('chapter_body10').style.backgroundColor = "";
           }, 1000);    
              
          }
      
//Quiz end


