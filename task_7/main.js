const is_eligible_employee = (employee) => {
    const employeeName = employee["name"];

    if (employee["age"] > 30 && employee["cost"] > 50000)
    {
        console.log(`сотрудник ${employeeName} подходящий`);
    }
    else
    {
        console.log(`сотрудник ${employeeName} не подходящий`);
    }
}

let employes = [];
let numEmployes = prompt("Введите количество сотрудников:");

for(let i = 0; i < numEmployes; i++)
{
    let name = prompt("Введите имя сотрудника:");
    let age = parseInt(prompt("Введите возвраст сотрудника:"));
    let cost = parseInt(prompt("Введите зарплату сотрудника:"));

    employes[i] = {name: name, age: age, cost: cost};
}

for(employee of employes)
{
    is_eligible_employee(employee);
}