let enterThis = ""
let audio = new Audio("media/audio.mp3");
audio.loop = true;
let playing = false;
let firstCharacterTyped = false;
let original = document.getElementById('input-line');
let clone = original.cloneNode(true);
let pre = clone.querySelector("pre");

userInput.addEventListener('keydown', function(event) {
  if (!firstCharacterTyped) {
    playSong();
    firstCharacterTyped = true;
  }})

window.addEventListener('DOMContentLoaded', function() {
  // User focus
  var userInput = document.getElementById('userInput');
  userInput.focus();
  document.addEventListener('click', function() {
    userInput.focus();
  });
  let inputText = "";
  let previousInput = "";

  function showProjects() {
    // Display the projects list
    document.getElementById('projects').style.display = 'block';
  }

  userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      let original = document.getElementById('input-line');
      let clone = original.cloneNode(true);
      clone.classList.add("clone");
      clone.id = '';
      inputText = userInput.value;
      previousInput = inputText
      userInput.value = "";
      userInput.scrollTop = userInput.scrollHeight;
      let switchVal = process(inputText); 

      // Create a new <pre> element
      let pre = document.createElement('pre');
      pre.innerHTML = switchVal;
      pre.classList.add('in')
      
      // Replace the textarea with the <pre> element
      let textarea = clone.querySelector('textarea');
      clone.replaceChild(pre, textarea);
      
      original.parentNode.insertBefore(clone, original);
      window.scrollTo(0, document.body.scrollHeight);
      
      setTimeout(function() {
        clone.classList.add("active");
        clone.style.marginRight="0px";
      }, 10);
      

      if (inputText === "about" || inputText === 'ebere') {
        setTimeout(function() {
          pre.classList.add("deets");
        }, 10);
        clone.querySelector('pre').style.marginRight= "0px"
        clone.querySelector('pre').style.width = "80%";
        window.scrollTo(0, document.body.scrollHeight);
      }

      if (inputText === "ls" || inputText === 'man' || inputText === "help") {
        clone.querySelector('pre').style.color = "green"
      }

            
      if (switchVal === "Invalid command, Enter 'ls' for the list of commands" || inputText === "projects"){
        clone.querySelector('pre').style.color = 'green'
      }

    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      userInput.value = previousInput; // Set the value of the input to the previous input
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      userInput.value = ""
    }

    function process(inputText) {
      inputVal = inputText.toLowerCase()
      switch(inputVal) {
        case 'phone' :
          insertText = "Nope, not happening." + "\nUse ls to see the other available commands"
          return insertText;
          break;
        case 'clear' :
          let clones = document.querySelectorAll('.clone');
          clones.forEach(clone => {
            clone.classList.add("remove-animation");
            setTimeout(() => clone.remove(), 500); // Delay removal to match the animation duration
          });
          clear();
          return none;
          break;
        case 'man' :
        case 'help' :
        case 'ls' :
          insertText = "about     Shows details about Ebere" + 
                     "\nclear     Clears the terminal" +
                     "\nls        Shows the list of commands" +
                     "\nprojects  Shows the list of Ebere's projects" +
                     "\nskills    Shows list of Ebere's skills" +
                     "\nsocials   Displays Ebere's social links" +
                     "\nsurprise  Open this for a surprise"+
                     "\nmusic     Play/Pause music"+
                     "\nphone     Get Ebere's phone number"
          return insertText
          break;
        case 'ebere':
        case "about":
          insertText = (
                "👋 Welcome to Ebere's Portfolio Website.\n"+
                "Hello, everyone! I'm a dedicated and driven computer science student with a strong passion for coding, problem-solving, and innovation."+
                "\nMy academic journey at the University of Manitoba has equipped me with a solid foundation in"+" computer science, complemented by minors in mathematics and economics.\n\n"+
                "\nProfessional Experience:\nI recently completed a Software Development Engineering Internship at"+" Amazon Web Services (AWS) in Toronto, Ontario, "+
                "where I engineered backend coral services deployed on AWS Lambda,\narchitected infrastructure as code with AWS CDK, "+
                "and led the design of full-stack internal web applications using Java, React, and TypeScript.\n\n"+
                "\nPreviously, I worked as a Data Analyst Intern at IGM Financial (IG Wealth Management) where I developed new data models using SQL and SAP HANA "+
                "to automate financial reports and created forecasts for key performance metrics.\n\n"+
                "\nI was also a Quantitative Trader and Researcher Intern at"+" Quantreo in Paris, France, where I conducted quantitative analysis on currency pair CFDs "+
                "and collaborated with senior traders to develop trading algorithms in Python,\nachieving a 29% increase in trading profitability.\n\n"+
                "\nAdditionally, I worked as a Software Engineer at Limitless Aeronautics in Daytona Beach, Florida, "+
                "where I designed user-friendly interfaces for UAV ground control systems and led the creation of a JavaScript framework "+
                "\ntailored to the aeronautics industry, resulting in a 40% increase in operational efficiency.\n\n"+
                "\nTechnical Skills:\nExperienced in Java, Python, C, C++, SQL, JavaScript, TypeScript, HTML, CSS, R, React, "+
                "NumPy, Pandas, Matplotlib, LeafletJS, Git, GitHub, Visual Studio Code, IntelliJ IDEA, SAP, and REST APIs.\n\n"+
                "\nAcademic Pursuits:\nMy academic journey is fueled by a desire to understand the theoretical foundations of computer science, mathematics, and economics, "+
                "while also applying this knowledge in practical, real-world settings. "+
                "\nI'm constantly seeking opportunities to bridge the gap between theory and application.\n\n"+
                "\nLet's Connect!\n"+
                "\nI'm always open to connecting with fellow students, professionals, and anyone who shares a passion for technology, cloud computing, quantitative finance, "+
                "or simply wants to chat about all things related to computer science,\nmaths, and economics. "+
                "\nFeel free to reach out via LinkedIn or GitHub. I'm excited to connect and learn from your experiences!"
            )
            return insertText
            break
        
        case "skills" :
          enterThis = document.getElementById("skills").innerHTML
          insertText = enterThis
          return insertText
          break
        case "socials" :
          enterThis = document.getElementById("socials").innerHTML
          insertText = enterThis
          return insertText
          break
        case "projects" :
          enterThis = document.getElementById("projects").innerHTML
          insertText = enterThis
          return insertText
          break
        case "surprise" :
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          return "Hope you loved it!"
          break
        case "music" :
          playSong()
          return none
          break
        default :
        insertText = "Invalid command, Enter 'ls' for the list of commands";
        return insertText;
      }
    }

  });
});

function playSong() {
  if (!playing) {
    audio.play();
    playing = true;
  } else {
    audio.pause();
    playing = false;
  }
}
