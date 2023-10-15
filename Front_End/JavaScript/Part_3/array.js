//Arrays----------
//Linear collection of things
//Create Arrays - type object hote h
    let students=["aman","shradha","akash","ashu"];
    console.log(students[2]);
    console.log(typeof students);
    console.log(students.length);


    let marks=[99,89,87,45,59];
    console.log(marks[3]);
    console.log(marks.length);

    let info=["akashdeep", 35, 6.2];    //mixed array
    console.log(info[0]);
    console.log(info[0][0]);
    console.log(info.length);
    console.log(info[0].length);

    let empArr=[];
    console.log(empArr[0]);
    console.log(empArr.length);

//Arrays are Mutable---------------
    let fruits=["mango", "apple", "litchi"];
    console.log(fruits);
    console.log(fruits.length);
    fruits[0]="banana";
    console.log(fruits);
    fruits[0][0]="a";
    console.log(fruits[0][0]);  //string immutable hota hai

    console.log(fruits[0].replace("b","a"));

    console.log(fruits.length);
    fruits[10]="orange";
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[5]);     //difined nhi kiya gya hai

//Array Methods-----------
    //push - add to end
    let car=["audi", "bmw", "suv", "maruti"];
    console.log(car);
    car.push("toyota");
    console.log(car);
    car.push("ferrari");
    console.log(car);
    //pop - delete from end & returns it
    car.pop();
    console.log(car);
    car.pop();
    console.log(car);
    //unshift - add to start
    car.unshift("toyota");
    console.log(car);
    //shift - delete from end & returns it
    car.shift();
    console.log(car);

//indexOf & includes Method
    //arr.indexof() - returns index of something
    let primary=["red", "yellow", "orange"];
    console.log(primary.indexOf("yellow"));
    console.log(primary.indexOf("green"));
    //arr.includes()    - search for a value
    console.log(primary.includes("orange"));
    console.log(primary.includes("green"));

//concat & reverse Method
    //arr1.concat(arr2);    - merge 2 arrays (concatenate)
    let color1=["red", "yellow", "blue"];
    let color2=["orange", "green", "voilet"];
    let allColor=color1.concat(color2)  //create a new array
    console.log(allColor);
    //arr.reverse();    - reverse an array
    console.log(color1.reverse());  

//slice Method
    //arr.slice(0)  - copy
    let color=['red', 'yellow', 'blue', 'orange', 'green', 'voilet'];
    console.log(color.length);
    console.log(color.slice(2));
    console.log(color.slice(2,5));
    console.log(color.slice(-2));    //color.length-2
    
//splice Method
    //arr.splice(arg)   - remove/replaces/add elements in place
    //arg- (start,deleteCount, item0....itemN)
    //arr.splice(arg) - delete
    let colors=['red', 'yellow', 'blue', 'orange', 'green', 'voilet'];
    console.log(colors.splice(5));  //remove
    console.log(colors);
    console.log(colors.splice(1,2));    //remove
    console.log(colors);
    console.log(colors.splice(1,0,"black", "grey"));    //add elements
    console.log(colors);
    console.log(colors.splice(1,1,"brown"));    //replaces
    console.log(colors);

//sort Method
    //arr.sort()    ascending ya descending
    // this sort use only character & word
    let days=["monday", "sunday", "wednesday", "tuesday"];
    days.sort();
    console.log(days);

    // sort not work in number
    let mark = [99, 89, 67, 42, 100];
    mark.sort();
    console.log(mark);


//join Method ---- without delta course -----
    //The join() method returns an array as a string.
    //The join() method does not change the original array.
    //Convert array to string--
    const fruit = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruit.join();       //Any separator can be specified. The default is comma (,).
    console.log(text);
    let text1 = fruit.join(" ");
    console.log(text1);


//Array References
    // [1] == [1]  - false
    // [1] === [1] - false
    let arr1=[1,4]; //arr1 me - address store hota hai
    let arr2=[1,4]; //arr2 me - address store hota hai
    console.log(arr1==arr2); //arr1 address != arr2 address
    console.log(arr1===arr2);
    let arrCopy=arr1;   // same address arr1 & arrCopy
    console.log(arrCopy);   
    console.log(arrCopy==arr1);
    console.log(arrCopy===arr1);
    arrCopy.push(8);
    console.log(arrCopy);
    console.log(arr1);

//Constant Arrays
    const arr=[1,2,3];  //arr me value nhi address store hota hai
    //const rhne pa element me change hota hai
    arr.push(9);
    console.log(arr);
    //const rhne pe  address (reference) me change nhi hota hai
    // arr=[2,5,6];

//Nested array (multi dimention)
    let nums=[[2,4], [3,6], [4,8]];;
    console.log(nums);
    console.log(nums.length);
    console.log(nums[0]);
    console.log(nums[0].length);
    nums[0][1]=5;
    console.log(nums[0][1]);
    console.log(nums[1][2]);
    console.log(nums[2][1]);

    // nested array ka nested array .....
    let num1=[[3,5,2], [[1,3,4],[6,7,5],[6,8],0],9];
    console.log(num1);
    console.log(num1[1][2][1]);








