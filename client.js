$(document).ready(onReady);

let newEmployee = [
    {
        firstName: 'Maurice',
        lastName: 'Brown',
        id: 1308,
        title: 'General Manager',
        annualSalary: 65000
    }
]
function onReady() {

    $('#submitNewButton').on('click', SubmitNewEmployee);
}

function SubmitNewEmployee() {
    console.log('hi');
}