const parentChild = document.getElementById("main-input");
 
let add=0;

function addCourse(){
    
const newDiv= document.createElement("div");
newDiv.className = "input-area";


newDiv.innerHTML = `
<input type="text" class="course-name" placeholder="Course Name (optional)">
            <div class="mobile">
            <input type="text" class="credit" placeholder="Credit">

            <select class="grade">
                <option value="">Select your Grade</option>
                <option  value="A+">A+</option>
                <option  value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            </div>
`;

parentChild.appendChild(newDiv);

add+=1;

}

function removeCourse(){
  
    if(add>0){
  
    const lastChild = parentChild.lastChild;

    parentChild.removeChild(lastChild);
    add-=1;

    }
    if(add==0){
       document.getElementsByClassName("credit")[0].value='';
       document.getElementsByClassName("course-name")[0].value='';
       document.getElementsByClassName('grade')[0].value=""; 
       document.getElementById("final-result").innerHTML="0.00";
  
       
    }

}