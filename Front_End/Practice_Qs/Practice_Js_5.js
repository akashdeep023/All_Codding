//Practice Qs -1
    //Generate a random number between 1 and 100.
    let num = Math.floor(Math.random()*100)+1; //range (1-100)
    console.log(num);
    let num0 = Math.ceil(Math.random()*100); //range (1-100)
    console.log(num0);
    //Gererate a randon number between 1 and 5
    let num1 = Math.ceil(Math.random()*5);  //range (1-5)
    console.log(num1);
    //Gererate a randon number between 21 and 25
    let num2 = Math.ceil(Math.random()*5)+20;  //range (21-25)
    console.log(num2);
    //Gererate a randon number between 20 and 25
    let num3 = Math.floor(Math.random()*6)+20;  //range (20-25)
    console.log(num3);

    console.log("--------------------");

//Guessing Game
    //User enters a max number & then tries to guess a random generated number between 1 to max.
    let max=prompt("Enter the max number");
    let ranNum=Math.ceil(Math.random()*max);
    // console.log(ranNum);
    console.log(`Guess the number between (1 to ${max})`)
    let guess=prompt("Guess the number");
    while(true){
        if(guess=="quit"){
            console.log("User quit the game");
            console.log(`Right answer is ${ranNum}`);
            break;
        }
        if(ranNum==guess){
            console.log(`Your guess number ${guess} is right. Congratulations!!`);
            break;
        }else{
            console.log("Wrong guess");
            if(guess>ranNum){
                console.log(`Your guess number ${guess} is largest`);
            }else{
                console.log(`Your guess number ${guess} is smallest`);
            }
            guess=prompt("Guess the number again");
        }
        
    }
