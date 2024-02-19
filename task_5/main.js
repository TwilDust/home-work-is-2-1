let task = {
    name:"task1",
    description: "It's task 1",
    note: "It's note to task 1",
    complexity: 1,
    completeonTime: 20, // in minutes
    maxCompleteonTime: 60,
};

for(item in task)
{
    if (item === "complexity")
    {
        console.log(`Сложность задания: ${task[item]}`);
        continue;
    }
    else if (item === "completeonTime")
    {
        console.log(`Предпологаемое время выполнения: ${task[item]}`);
        continue;
    }
    else if(item === "maxCompleteonTime")
    {
        console.log(`Максимально допустипое время выполнения: ${task[item]}`);
        continue;
    }
    console.log(task[item]);
}

const taskComplexity = task["complexity"];

if (taskComplexity === 1)
{
    console.log("Это не сложная задача!");
}
else if (taskComplexity === 2)
{
    console.log("Эта задача средней сложности!");
}
else if (taskComplexity === 3)
{
    console.log("Это сложная задача!");
}