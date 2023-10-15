//--------------------------------------------------API(Application Programming Interface)----------------------------------------------
//ex - amazon.in search in google -> request -> amazon server -> response -> html,css,js -> output in browser
//API - waiter(hotal ka) ka kaam karta hai --------------------------------------
//ex - user(js) -> request -> API -> server -> API -> response -> user(js)

//two software interact with API
//but jo API https protocall ko use karke (internet ke basis pe) interact karti hai use hum Web API kahte hai
//API - return some data(JSON formate) | API ak link(url, endpoint) hai

//API - X key(secure / login) | X paid(money paid)  ->  jinme X key or X paid nhi hoti vo free hota hai

// ------------------------------------------------JSON(JavaScript Object Notation)--------------------------------
//JavaScript Object Notation -> www.json.org
//JSON formate me data return karti hai Web API
//ole XML formate -> XML(Extensible Markup Language) copy to html tag
//JSON formate -> copy to JS object (key and value pair) but JSON key is string
//JSON me fix data hote hai undifined nhi hote hai
//JSON value -> object, array, string, number, "true", "false", "null".  || not value "undifined".

//check JSON -> json validation  "https://jsonlint.com/"

//--------------------------------------------------Accessing Data from JSON ------------------------------------------
//JSON.parse(data) Method--------        //json data to js object convert
//To parse a string data into a JS object

let jsonRes = '{"fact":"The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.","length":101}';
console.log(jsonRes);
console.log(jsonRes.fact);              //undifined print (JSON return - string formate, not object)

let validRes = JSON.parse(jsonRes);     // JSON.parse - change data formate (json data to js object)
console.log(validRes);
console.log(typeof(validRes));
console.log(validRes.fact);

console.log("----------------------------------------------");
//JSON.stringify(json) Method------     //js object to json data convert
//To parse a JS object data into JSON

let student = {
    name: "akash",
    marks: 95,
    age: 22
};
let createJSON = JSON.stringify(student);
console.log(createJSON);                    //JSON data String hai

//----------------------------------------------------Testing API requests---------------------------------------------
//Tools -> Hoppscoth, Postman (Send request with help Get Verbs)    ||  (Use Developer ) (I am web developer)
//Postman tool -> download and signup then use..
//But Hoppscoth -> without download and signup use (online)  link -> "https://hoppscotch.io/"
//Allmost same Hoppscoth and Postman

//----------------------------------------------------What is Ajax?----------------------------------------------------
//Ajax (full form)-> Asynchronous JavaScript And XML
//API -> asynchronous kama karta hai
//Ajax -> clint send request, API send response (XML formate old) JSON formate new

//-----------------------------------------------------Https Verbs-----------------------------------------------------
//send request https formate me to option
//Get -> information lene ke liye
//Post -> information dene ke liiye
//Delete -> delete some information

//-----------------------------------------------------Status Codes---------------------------------------------------
//Examples:
//200 - OK                      -> calling exist API responses successfull
//404 - Not Found               -> calling not exist API 
//400 - Bad Request             -> clint error responses
//500 - Internal Server Error   -> server error responses

//----------------------------------------------------Adding Information in URLs-------------------------------------------
//Query String -> add information in URLs
//Example Google URLs (Not API) only ex-
//https://www.google.com/serch?q=harry+porter    (Query Strings -> q=harry+porter , ?q=apple , ?name=akash&marks=95)
//API ----
//Get - https://api.potterdb.com/v1/movies/b5c93f7c-49bb-43a6-84f3-796daa75f354       //.com ke baad query Strings hai API ka

//-------------------------------------------------------Http headers--------------------------------------------------
//header, value
//Additional information supply -> request header and response header
//Ex - Google search mango -> inspect -> Network -> select Name -> Header -> req & res header show
//API---
//Get - https://icanhazdadjoke.com/         Add Headers (Name - Accept & Value - text/plain)
//Header ke sath meta data (data about data) ka request bhejte hai

//----------------------------------------------------Our First Request API--------------------------------------------------

//using Fetch--------------------
//old method -> XML HTTP Request obj (create object then send request) (not work async and Promise method)
// fetch(url) - return Promise object

// console.log("----------------------------------------------");
//Normal code (without Promise channing )
// let url = "https://catfact.ninja/fact";         //API URLs
// console.log(fetch(url));                        // Return Promises  
// fetch(url)                                      // Inspect -> Network Tab -> select fetch -> Response
//     .then((res)=>{
//         console.log(res);                       // Promise ke Body me ReadableStream hote hai jisme Data hota hai 
//         // console.log(res.json());             // Return Promises Object
//         res.json().then((data)=>{               //parse
//             console.log(data);
//             console.log(data.fact);
//         });
//     })
//     .catch((err)=>{
//         console.log("Error = ",err)
//     });

console.log("----------------------------------------------");
//91 to 105 code Promises chaining 1 times

let url = "https://catfact.ninja/fact";         //API URLs
console.log(fetch(url));                        // Return Promises  
fetch(url)                                      // fetch - lana || Inspect -> Network Tab -> select fetch -> Response
    .then((res)=>{
        console.log(res);                       // Promise ke Body me ReadableStream hote hai jisme Data hota hai 
        // console.log(res.json());             // Return Promises Object
        return res.json();        
    })    
    .then((data)=>{               
        console.log(data);
        console.log(data.fact);
    })
    .catch((err)=>{
        console.log("Error = ",err)
    });

//Promises channing 2 times
let url1 = "https://catfact.ninja/fact";
fetch(url1)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("data1 = ",data.fact);
        return fetch(url1);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log("data2 = ",data2.fact);
    })
    .catch((err)=>{
        console.log("Error - ", err);
    })


//API call Asyncronous hai (wait nhi karta hai javascript)
console.log("API Asyncronous");

//-------------------------------------------------Using Fetch with async-await----------------------------------------------
//MOST READABLE FORMATE FOR SEND REQUEST API---------------------------------

let url2 = "https://catfact.ninja/fact";        

async function getFacts(){
    try{
        let res = await fetch(url2);            //await nhi hota to data undifined pending hota 
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url2);           
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(e){
        console.log("error - ",e);
    }
    console.log("bye");
}
console.log(getFacts());










// for(let i=0; i<1001; i++){
//     let p = document.createElement('p');

//     let ans = `${i} - Ab or bhejega  🤣😂😁`;
//     p.innerHTML = ans;
//     document.querySelector('body').append(p);
// }
