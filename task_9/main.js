const calculate = () => {
    const inputMilkCost = parseInt(document.querySelector('#milksCost').value);
    const inputEggCost = parseInt(document.querySelector('#eggsCost').value);
    const inputBananaCost = parseInt(document.querySelector('#bananaCost').value);
    const inputPotatoCost = parseInt(document.querySelector('#potatoCost').value);

    const inputMilk = parseInt(document.querySelector('#milks').value);
    const inputEgg = parseInt(document.querySelector('#eggs').value);
    const inputBanana = parseInt(document.querySelector('#banana').value);
    const inputPotato = parseInt(document.querySelector('#potato').value);
    
    const Nan = isNaN(inputMilkCost) || isNaN(inputEggCost) || isNaN(inputBananaCost) || isNaN(inputPotatoCost);
    const Zero = inputMilkCost <= 0 || inputEggCost <= 0 || inputBananaCost <= 0 || inputPotatoCost <= 0;
    if (Nan)
    {
        alert("Заполните все поля");
        return;
    }
    if (Zero)
    {
        alert("Цена не может быть меньше либо равна 0");
        return;
    }

    let sum = inputMilk + inputEgg + inputBanana + inputPotato;

    const cost = {
        'milks': (inputMilk * inputMilkCost),
        'eggs': (inputEgg * inputEggCost),
        'banana': (inputBanana * inputBananaCost),
        'potato': (inputPotato * inputPotatoCost),
    }

    const totalCost = cost["milks"] + cost["eggs"] + cost["banana"] + cost["potato"];

    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = `
        <p>Стоимость молока: ${cost["milks"].toFixed(2)}</p>
        <p>Стоимость яиц: ${cost["eggs"].toFixed(2)}</p>
        <p>Стоимость бананов: ${cost["banana"].toFixed(2)}</p>
        <p>Стоимость картохи: ${cost["potato"].toFixed(2)}</p>
        <p>Общая стоимость: ${totalCost.toFixed(2)}</p>
    `;
}