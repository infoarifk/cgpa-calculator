const parentChild = document.getElementById("main-input");
 
let add=0;

function addCourse(){
    
const newDiv= document.createElement("div");
newDiv.className = "input-area";


newDiv.innerHTML = `
<input type="text" name="" id="" placeholder="Course Name">
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

}