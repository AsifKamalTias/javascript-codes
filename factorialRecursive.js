function factorial(number){
    if(number === 0)
    {
        return 1;
    }
    else if(number<0)
    {
        return undefined;
    }
    else
    {
        return number*(factorial(number-1));
    }
}

console.log(factorial(5));