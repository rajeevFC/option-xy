var number =509;

var isPrime = true;

if(number==1){
    console.log("number is not prime");
}
else if(number>2){

    for( let i=2;i<number;i++){

        if(number%2 ==0){
            console.log(`${number}: is not prime`);
            break;
        }else{
            console.log(`${number} : is prime `)
        
            while(number >= 10){

                number /= 10;
                return number;
            }
            console.log("kkkkkkkkk",number)



        }


    }
}



