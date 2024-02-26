const max = (num1, num2) => {
    if (num1 === undefined || num2 === undefined)
    {
        console.log("Одно из чисел не введенно.");
    }
    else 
    {
        if (num1 > num2)
        {
            console.log(`Num1 = ${num1} больше, чем num2.`);
        }
        else
        {
            console.log(`Num2 = ${num2} больше, чем num1.`);
        }
    }
}

max(17, 16);
max(1, 2);
max(1, )