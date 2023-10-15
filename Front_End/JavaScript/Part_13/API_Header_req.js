//-------------------------------------Sending Headers with API requests-------------------------------------------------
//send header with API request in js - same process (send header with API request in hoppscotch)
const url = "https://icanhazdadjoke.com/";
async function getJokes(){
    try{
        const config = {headers:{Accept: "application/json"}};  //confing name hai header ka || headers ke liye object banan hota hai -> {headers:{Accept: "application/json"}}
        let res = await axios.get(url, config);                 //url ke sath header bhi argument me pass karte hai..
        console.log(res);                   //return Promise 
        console.log(res.data);              //return Promise data without header -> html formate
    }catch(e){
        console.log(e);
    }
}
getJokes();

//------------------------------------Activity using Query Strings------------------------------------------------------
//Axios -> Updating Query String--------------------------
// let url1 = "http://universities.hipolabs.com/search?name=";
// let country = "nepal";
// async function getColleges(){
//     try{
//         let res = await axios.get(url1+country);
//         console.log(res);
//     }catch(e){
//         console.log("error : ",e);
//     }
// }
// getColleges();

let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click",async()=>{
    let country = inp.value;
    let colArr = await getColleges(country);
    show(colArr);    
})

function show(colArr){
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        document.querySelector("#list").append(li);
    }
}

let url1 = "http://universities.hipolabs.com/search?name=";
async function getColleges(country){
    try{
        let res = await axios.get(url1+country);
        console.log(res.data);
        return res.data;
    }catch(e){
        console.log("error : ",e);
        return [];
    }
}




