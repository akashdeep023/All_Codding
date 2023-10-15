        //LOOPS--------
        //Used to iterate(repete) a piece of code
//for loop ------------
    // for(initialisation; condition; updation){
    //     do something
    // }
    for(let i=1; i<=10; i++){
        console.log(i);
    }
    console.log("---------------------");

    //Print all add numbers (1 to 15)
        //accending order
        for(let i=1; i<=15; i=i+2){
            console.log(i);
        }
        console.log("---------------------");

        //decending order
        for(let i=15; i>=1; i=i-2){
            console.log(i);
        }
        console.log("---------------------");


    //Pring all even numbers (1 to 15)
        //accending order
        for(let i=2; i<=15; i=i+2){
            console.log(i);
        }
        console.log("---------------------");

        //decending order
        for(let i=14; i>=2; i=i-2){
            console.log(i);
        }
        console.log("---------------------");

    //Infinite Loops 
    //not good for programer and website

        //Print the multiplication table for 5
        for(let i=1; i<=10; i++){
            console.log(`${i} X 5 = ${i*5}`);
        }
        console.log("---------------------");

        // let n=prompt("Enter number.");
        // n=parseInt(n);
        // for(let i=n; i<=n*10; i=i+n){
        //     console.log(i);
        // }
        // console.log("---------------------");

    //Nested for loop
    // for(-----------){    - outer loop
    //     for(-----------){    -inner loop
    //         do something
    //      }
    // }

        for(let i=1; i<=3; i++){
            console.log(`outer loop ${i}`);
            for(let j=1; j<=3; j++){
                console.log(j);
            }
        }
        console.log("---------------------");

//while loop ------------
    // while(condition){
    //     do something
    // }
        let i=1;
        while(i<=5){
            console.log(i);
            i++;
        }
        console.log("---------------------");

    //Print 0 to 20 numbers
        let j=0;
        while(j<=20){
            console.log(j);
            j++;
        }

//break keyword
//maximum case me while ke sath used
    //loop ko stop karne ke liye break used
        let k=1;
        while(k<=5){
            if(k==3){
                break;
            }
            console.log(k);
            k++;
        }

//Loop with Arrays
    let fruits=["mango","apple","banana","litchi","orange","greaps","all"];
    for(let i=0;i<fruits.length;i++){
        console.log(i, fruits[i]);
        // for(let j=0; j<fruits[i].length;j++){
        //     console.log(i,j,fruits[i][j]);
        // }
    }
    //reverse
    for(let i=fruits.length-1; i>=0;i--){
        console.log(i,fruits[i]);
    }

    //Nested loops with nested arrays
    let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
    for(let i=0;i<heroes.length;i++){
        console.log(i, heroes[i]);
        for(let j=0; j<heroes[i].length;j++){
            console.log(i,j,heroes[i][j]);
        }
    }

    //ex
    let students=[["akash",90],["aman",85],["karan",89]];
    for(let i=0;i<students.length;i++){
        console.log(`Student no #${i+1}`);
        for(let j=0; j<students[i].length;j++){
            console.log(students[i][j]);
        }
    }

//for of loop
    // for(Element of collection){
    //     do something
    // }
        let fruits1=["mango", "apple", "banana", "orange", "litchi"];
        for(fruit of fruits1){
            console.log(fruit);
        }

        //ex
        for(char of "apnacollege"){
            console.log(char);
        }

    //nested array with for of loop
        let heroes1=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
            for(list of heroes1){
                for(hero of list){
                    console.log(hero);
                }
            }





