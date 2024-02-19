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
    if (item === "completeonTime")
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