$(document).ready(onReady);

const totalMonthly = 0;

let Employee = [
    {
        name: 'Maurice',
        last: 'Brown',
        id: 1308,
        title: 'General Manager',
        annual: 65000
    }
]
function SubmitNewEmployee(){
    console.log('in SubmitNewEmployee');
}

function onReady() {
    let el = $('#monthlyOut');
    el.empty();
    el.append(totalMonthly);
    $('#submitNewButton').on('click', SubmitNewEmployee);
}

function render() {
    $('.newEmployee').empty();
    for (let i = 0; i < Employee.length; i++) {
        $('.newEmployee').append(`
        <li class="newEmployeeText">
        <span class="nameText">${Employee[i].name}</span>: ${Employee[i].last}${Employee[i].id} ${Employee[i].title}${Employee[i].annual}
        <button class="deleteEmployeeButton">Delete</button>
        </li>
        `)

    
    }
}

function SubmitNewEmployee() {
    let newName = $('.newEmployee').val();
    let newLast = $('.newEmployee').val();
    let newId = $('.newEmployee').val();
    let newTitle = $('.newEmployee').val();
    let newAnnual = $('.newEmployee').val();

    let newEmployee = {
        name: newName,
        last: newLast,
        id: newId,
        title: newTitle,
        annual: newAnnual

}

     
   Employee.push(newEmployee);

   $('#newFirst').val('');
   $('#newLast').val('');
   $('#newId').val('');
   $('#newTitle').val('');
   $('#newAnnualSalary').val('');
}
