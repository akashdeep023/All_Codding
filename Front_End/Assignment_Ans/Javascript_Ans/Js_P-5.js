//Question-1
    //Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].
    let dice=Math.ceil(Math.random()*6);
    console.log(dice);
//Question-2
    //Create an object representing a car that stores the following properties for the car:name,model,color.{Print the car's name.}
    const car={
        name:"bmw-2xt",
        model:"xt24-500",
        color:"black"    
    };
    console.log(car.name);
//Question-3
    //Create an object Person with their name, age and city.Edit their city's original value to change it to "New York".Add a new property country and set it to the United States.
    const person={
        name: "Akash Deep",
        age: 22,
        city: "Patna"
    }
    console.log(person);
    person.city="New York";
    console.log(person);
    console.log(person["city"]);        //by me
    person.country="United States";
    console.log(person);
    console.log(person["country"]);     //by me

    