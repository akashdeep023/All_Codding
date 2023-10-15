//Favorite Movie guess
    //method-1
        // let favMovie="Avatar";
        // let user = prompt("Enter Movie name.");
        // while(user!=favMovie && user!='quit'){
        //     user=prompt("Wrong guess try again Enter Movie name");
        // }
        // if(user == favMovie){
        //     console.log("Congrats");
        // }else{
        //     console.log("you quit");
        // }

    //method-2  best method
        // let favMovie="Avatar";
        // let user = prompt("Enter Movie name.");
        // while(user!=favMovie){
        //     if(user=="quit"){
        //         console.log(`You quit`);
        //         break;
        //     }
        //     user=prompt("Wrong guess try again Enter Movie name");
        // }
        // if(user == favMovie){
        //     console.log("Congrats");
        // }

//To Do App
    let todo=[];
    let req=prompt("Please enter your request");
    while(true){
        if(req=="quit"){
            console.log("quitting app");
            break;
        }
        if(req=="list"){
            console.log("------------------")
            for(let i=0; i<todo.length;i++){
                console.log(i, todo[i]);
            }
            console.log("------------------")

        }else if(req=="add"){
            let task= prompt("Please enter the task you want to add");
            todo.push(task);
            console.log("task added");

        }else if(req=="delete"){
            let ind=prompt("Please enter the task index you want to delete");
            todo.splice(ind,1);
            console.log("task",ind ,"delete");
        }else{
            console.log("Wrong request");
        }
        req=prompt("Please enter your request");
    }

