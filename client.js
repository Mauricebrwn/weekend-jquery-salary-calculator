$(document).ready(onReady);

//open array and starting monthly salary
let employee = []
let monthlySalary = 0


function onReady() {
// buttons and what they do!
    $('#submitNewButton').on('click', SubmitNewEmployee);
    $('body').on('click',".Delete", deleteEmployee);
    $('#submitNewButton').on('click', salaryTotal);
    $('#submitNewButton').on('click', render);
}
//function to delete employees
function deleteEmployee (){
    $(this).parent().parent().remove()
}
//function to render info and change css to red
function render(){
    if (monthlySalary>=20000){
        $('h3').css('background-color','red')
    }
    $('#firstNameInput').val('');
   $('#lastNameInput').val('');
   $('#id').val('');
   $('#titleNameInput').val('');
   $('#annualSalary').val('');
}
//function to convert yearly to monthly salary
function salaryTotal(){
    let yearlySalary = $("#annualSalary").val()
    monthlySalary += yearlySalary / 12
    $("#monthlyOut").text(monthlySalary)
} 
//empties out inputs
function SubmitNewEmployee() {
    let newName = $('#firstNameInput').val();
    let newLast = $('#lastNameInput').val();
    let newId = $('#id').val();
    let newTitle = $('#titleNameInput').val();
    let newAnnual = $('#annualSalary').val();
//new object
    let newEmployee = {
        name: newName,
        last: newLast,
        id: newId,
        title: newTitle,
        annual: newAnnual

}

//pushes new object into array
   employee.push(newEmployee);
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


