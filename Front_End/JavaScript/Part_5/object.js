//Object Literals -----------------
//used to store keyed collections & complex entities.
//property =>(key,value)pair
//objects are a collection of properties
//object me specific order nhi hota
    //syntex - Object literals
    const student ={
        name: "akash deep",
        age: 22,
        marks: 90.5,
        city: "Mumbai"
    };
    console.log(student);

    const item={
        price: 100.99,
        discount: 50,
        colors: ["red","pink"]
    };
    console.log(item);

    const post ={
        username: "@akashdeep",
        content: "This is my #firstPost",
        likes: 150,
        reposts: 5,
        tags: ["@apnacollege", "@delta"]
    };
    console.log(post);

//Get Values
    let students={
        name: "akash deep",
        fName: "sk singh",
        mName: "m sinha",
        age: 22,
        fri: ["sagar","bharat"]
    };
    console.log(students);
    //particular key value
    console.log(students["name"]);   //name var nhi hai is liye name ko string me pass karte hai
    let pro="name";                 //key ko var me store kar ke karte hai
    console.log(students[pro])
    //ya
    console.log(students.mName);    //mName key ke rupe me pass karte hai
    console.log(students.pro);      // var ko doubt oprator ke sath nhi likh sakte
    console.log(students.age);
    console.log(students.fri);
    console.log(students.fri[1]);
    console.log(students.fri[0][2]);

//Conversion in get values
    const obj={         //key string nnhi hota hai
        1:"a",          //js me key ki string ke jaisa behave karta hai
        2:"b",
        null:"d",
        true:"c",
        undefined:"e",
        col: "blue"      
    };
    console.log(obj)
    console.log(obj["1"]);
    console.log(obj[1]);    
    console.log(obj[2]);
    console.log(obj[null]);
    console.log(obj[undefined]);
    console.log(obj["col"])
    console.log(obj.null);      // doubt oprator me number nhi likh sakte use [ ] me likhte hai

//Add / Update values
    const stu ={
        name: "akash",
        age: 22,
        marks:90.8,
        city:"Delhi"
    }
    console.log(stu);
    console.log(stu.city);
    stu.city="Mumbai";          //update
    console.log(stu.city);
    console.log(stu);
    stu.gender="male";          //create
    console.log(stu.gender);
    console.log(stu);
    //change the marks
    stu.marks='A';
    console.log(stu);
    delete stu.age;             //delete
    console.log(stu);

//Object of Objects - nested
    const classInfo={
        aman:{
            grade:"A+",
            city:"Delhi"
        },
        shradha:{
            grade:"O",
            city:"Kolkta"
        },
        akash:{
            grade:"A",
            city:"Mumbai"
        }
    }
    console.log(classInfo);
    console.log(classInfo.aman);
    console.log(classInfo.aman.city);
    classInfo.shradha.city="Puna";
    console.log(classInfo.shradha.city);

//Array of Objects
    const classes=[
        {
            name:"aman",
            grade:"A+",
            city:"Delhi"
        },
        {
            name:"shradha",
            grade:"O",
            city:"Kolkta"
        },
        {
            name:"akash",
            grade:"A",
            city:"Mumbai"
        }
    ]
    console.log(classes);
    console.log(classes[1]);
    console.log(classes[1].name);
    classes[1].city="Gurgaon";
    console.log(classes[1]);
    classes[1].gender="female";
    console.log(classes[1]);

//Math Object
    //Properties -> (Math.PI , Math.E , ...)
    //Methods -> {Math.abs(n) , Math.pow(a,b) , Math.floor(n) , Math.ceil(n) , Math.random() , .....}
    console.log(Math.abs(-12.5));   //abs -> absolute value of number | without sign value
    console.log(Math.pow(2,4));     //pow -> power
    console.log(Math.floor(24.54)); //floor -> flooring | nearest smallest int value
    console.log(Math.floor(-4.5));  
    console.log(Math.ceil(24.44));  //ceil -> ceiling | nearest greater int value
    console.log(Math.ceil(-4.5));
    console.log(Math.random());     //rendom -> rendom value generate between (0-1) 1 not include
    console.log(Math.random());
    console.log(Math.random());
    console.log("-------------------");

//Random Integers
    //1st Method
    let step1=Math.random();        //random num generate           - 0.3453454423654   |   range(0-1)
    console.log(step1);
    let step2=step1*10;             //multiply 10                   - 3.453454423654    |   range(0-9)
    console.log(step2);
    let step3=Math.floor(step2);    //convert int value smallest    - 3                 |   range(0-9)
    console.log(step3);
    let step4=step3+1;              //int value +1 add              - 4                 |   range(1-10)
    console.log(step4);
    console.log("-------------------");


    //2nd Method
    let num= Math.floor(Math.random()*10)+1;    //range(1-10)
    console.log(num);
    let num1=Math.ceil(Math.random()*10);       //range(1-10)
    console.log(num1);

//










