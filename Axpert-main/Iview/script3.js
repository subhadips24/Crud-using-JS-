

const emps=(JSON.parse(localStorage.getItem("emps")));



//emps=(JSON.parse(localStorage.getItem("emps")));
let x=[];
var t=document.getElementById("m");
for (let index = 0; index <emps.length; index++) 
{
      
      console.log(emps[index]);
      var row=`
                  <tr>
                        <td>${emps[index].empid}</td>
                        <td>${emps[index].fname}</td>
                        <td>${emps[index].gender}</td>
                        <td>${emps[index].dob}</td>
                        <td>${emps[index].age}</td>
                  
                  </tr>
      
      
      `;
      t.innerHTML+=row;
  
  
}


