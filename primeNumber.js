function isPrime(num) {

    let prime = true;

    if(num === 0 || num === 1)
    {
        prime = false;
    }

    for(var i = 2; i < num; i++)
    {
        if(num % i === 0)
        {
            prime = false;
            break;
        }
    }
    
    return prime;
}

console.log(isPrime(29));