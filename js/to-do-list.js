
showtask();
 
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");


addtaskbtn.addEventListener("click", function () {
    // get the value from input
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0 ){
          
    // console.log(addtaskinputval)
    let webtask = localStorage.getItem("localtask");
    
    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask);
    }

    taskObj.push(addtaskinputval);
    // taskObj.push("hello");
    // console.log(taskObj)
    localStorage.setItem("localtask", JSON.stringify(taskObj));

    }
  

    showtask();
 
    addtaskinput.value = " ";
});

function showtask() {
    // addtaskinputval = addtaskinput.value;
    // console.log(addtaskinputval)
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask);
    }
    let html = '';

    let addedtasklist = document.getElementById("addedtasklist");

    console.log(taskObj)
    taskObj.forEach((item, index) => {
        html += `
         <tr>
          <th scope="row"> ${index+1} </th>
          <td> ${item} </td>
          <td>
              <button type="button" class="text-primary" 
              onclick="edittask( ${index} )" >
              <i class='fas fa-edit'></i>
                  Edit
              </button>
          </td>
          <td>
              <button type="button" class="text-primary"
              onclick="deleteitem( ${index})">
                  <i class="fa fa-trash "></i>
                  Delete
              </button>
          </td>
          </tr>
                `
    });

    addedtasklist.innerHTML = html;
    // console.log(html)
}

// edittask
 function edittask(index){

    let saveindex =document.getElementById("saveindex"); // hidden input  
    let savetaskbtn =document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");
    saveindex.value = index;

    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];

    addtaskbtn.style.display ="none"
    savetaskbtn.style.display ="block"
 }


//   save task 
 let savetaskbtn =document.getElementById("savetaskbtn");
 savetaskbtn.addEventListener("click",function(){

    let savetaskbtn =document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");

    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    let saveindex =document.getElementById("saveindex").value;

    taskObj[saveindex]  = addtaskinput.value;
   // set value in local storage 
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    // console.log(savetaskbtn)
    savetaskbtn.style.display="none";
    addtaskbtn.style.display ="block"
    addtaskinput.value ="";
    showtask();

 })
//  deleteitem

function deleteitem(index){

    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    
    //  array method
    taskObj.splice(index,1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();

}