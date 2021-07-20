function fibonacci(n)
{
    let fibo = [0, 1];
    for(let i = 2; i<=n-1; i++)
    {
        fibo[i] = fibo[i-1]+fibo[i-2];
    }

    return fibo[n-1];

}

console.log(fibonacci(10));