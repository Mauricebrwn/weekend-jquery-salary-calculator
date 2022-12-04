$(document).ready(onReady);


let employee = []

function SubmitNewEmployee(){
    console.log('in SubmitNewEmployee');
}

function onReady() {
   
    $('#submitNewButton').on('click', SubmitNewEmployee);
}

function render() {
    $('.newEmployee').empty();
    for (let i = 0; i < employee.length; i++) {
        $('.newEmployee').append(`
        <tr>
          <td id="newFirst">${employee[i].name}</td>
          <td id="newLast">${employee[i].last}</td>
          <td id="newId">${employee[i].id}</td>
          <td id="newTitle">${employee[i].title}</td>
          <td id="newAnnual">${employee[i].annual}</td>
          <td><button class="Delete">Delete</button></td>
        </tr>
        `)
  }
  }
function monthlySalary () {
    let monthlyCost = 0;
    let totalSalary = o; 
    for (let i = 0; i<employee.length; i++){
        totalSalary += employee[i].annual
    }
    monthlyCost = (totalSalary/12);
    if(monthlyCost > 20000) {
        $('#monthlyOut').empty();
        $('#monthlyOut').append(`
        <h3 id="monthlyOut">
            <div id="red">
            Monthly cost: ${monthlyCost}
            </div>
            </h3>
        `);
    }
} 

function SubmitNewEmployee() {
    let newName = $('#firstNameInput').val();
    let newLast = $('#lastNameInput').val();
    let newId = $('#id').val();
    let newTitle = $('#titleNameInput').val();
    let newAnnual = $('#annualSalary').val();

    let newEmployee = {
        name: newName,
        last: newLast,
        id: newId,
        title: newTitle,
        annual: newAnnual

}

     
   employee.push(newEmployee);

   render ();

   $('#firstNameInput').val('');
   $('#lastNameInput').val('');
   $('#id').val('');
   $('#titleNameInput').val('');
   $('#annualSalary').val('');
}


