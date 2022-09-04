async function newEmployee(event) {
    event.preventDefault();

    // get needed data for employee
    const employee_name = document.querySelector('#employee-name').value; 
    const position = document.querySelector('#position');

    const response = await fetch(`/api/employee`, {
        method: 'POST',
        body: JSON.stringify({
            employee_name,
            position,
            work_name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}; 
  document.querySelector('.new-employee-form').addEventListener('submit', newEmployee);
  