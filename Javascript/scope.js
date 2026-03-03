let greet="hello";//global scope 


function outer()
{

    let greet="namste"; //function scope

    console.log(greet);

    function inner()
    {

        console.log(greet);//lexical scope 

    
    }

    inner();



}
 
console.log(greet);
outer();


