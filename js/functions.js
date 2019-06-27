function displayName(dsName){
    console.log('Hello ' + dsName)
}

function convertToF(temp){
    let ftemp = (temp * (9/5)) + 32;
    console.log(temp + ' degrees celcius is ' + ftemp);
}

function convertToC(temp){
    let ctemp = (temp -32) * (5/9);
    console.log(temp + ' degrees farenheit is ' + ctemp);
}

displayName('Chuck');

convertToF(23);
convertToC(73.4);