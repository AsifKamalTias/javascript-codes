function factorial(number){

    if(number>=0)
    {
        let fact = 1;
        for(let i = 1; i<=number; i++)
        {
            fact = fact*i;
        }
        return fact;
    }
    else
    {
        return undefined;
    }
}

console.log(factorial(5));