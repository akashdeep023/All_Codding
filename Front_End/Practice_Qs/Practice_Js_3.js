// Practice Qs-1
//trim is & convert it to uppercase.
    let msg="help!";
    console.log(msg.trim().toUpperCase());

// Practice Qs-2
    let name="ApnaCollege";
    console.log(name.slice(4,9));
    console.log(name.indexOf("na"));
    console.log(name.replace("Apna","Our"));

// Practice Qs-3
    console.log(name.slice(4).replace('l','t'));
    console.log(name.slice(4).replace('l','t').replace('l','t'));

// Practice Qs-4
    let start=["january", "july", "march", "august"];
    start.shift();
    start.shift();
    start.unshift("june");
    start.unshift("july");
    console.log(start);
    
//Practice Qs-5
    let starts=["january", "july", "march", "august"];
    starts.splice(0,2, "july","june");
    console.log(starts);

//Practice Qs-6
    let lag=['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
    lag.reverse();
    console.log(lag);
    console.log("javascript index is :",lag.indexOf('javascript'));

//Practice Qs-7
        let game=[['X',null,'O'],[null,'X',null],['0',null,'X']];
        console.log(game);
        game[0][1]='O';
        console.log(game);

