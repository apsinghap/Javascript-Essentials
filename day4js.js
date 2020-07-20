/* *********************************************************** */

console.log(`Question 1`);

for(i=1;i<=100;i++)
{
    if(i%3==0)
    {
        console.log(`i=${i} : fizz`);
    }
    if(i%5==0)
    {
        console.log(`i=${i} : buzz`);
    }
    if(i%3==0 && i%5==0)
    {
        console.log(`i=${i} : fizzbuzz`);
    }
}

/* *********************************************************** */

console.log(`\nQuestion 2`);

/* *********************************************************** */

console.log(`\nQuestion 3`);

shoppingList=['A','B','C','D','E'];
console.log("Items bought:",shoppingList);
shoppingBasket=[...shoppingList,'X','Y','Z'];
shoppingBasket.push('P','Q','R');
console.log("New shopping list:",shoppingBasket);

/* *********************************************************** */

console.log(`\nQuestion 4`);

/* *********************************************************** */

console.log(`\nQuestion 5`);

var sales=prompt("Enter your sales amount.");
var comm=0;
if(sales>0 && sales<=5000)
{
    comm=sales*0.02;
}
else if(sales>5000 && sales<=10000)
{
    comm=5000*0.02+(sales-5000)*0.05;
}
else if(sales>10000 && sales<=20000)
{
    comm=5000*0.02+5000*0.05+(sales-10000)*0.07;
}
else if(sales>20000)
{
    comm=5000*0.02+5000*0.05+10000*0.07+(sales-20000)*0.1;
}
console.log("Total commision earned by him =",comm);

/* *********************************************************** */

console.log(`\nQuestion 6`);

/* *********************************************************** */

console.log(`\nQuestion 7`);

n=Number(prompt("Enter number to print primes="));
flag=0;
for(i=2;i<=n;i++)
{
    flag=0;
    for(j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        console.log(i)
    }
}
/* *********************************************************** */

console.log(`\nQuestion 8`);

/* *********************************************************** */