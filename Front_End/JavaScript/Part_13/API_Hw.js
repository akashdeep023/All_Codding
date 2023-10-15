let url = "http://universities.hipolabs.com/search?country=india";
// let country = "india";
// let state = "Bihar";
let state = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector("#list");

async function getColleges(stateNameModified){
    try{
        let res = await axios.get(url);
        // console.log(res);
        console.log(res.data);
        let data = res.data;
        // return res.data;


        list.innerText = "";
        for (const coll of data) {
            // console.log(coll["state-province"]);
            if(coll["state-province"] === stateNameModified){
                console.log(coll.name);

                let li = document.createElement("li");
                li.innerText = coll.name;
                list.append(li);
            }
        };


    }catch(e){
        console.log("error : ", e);
        // return [];
    }
}

// btn.addEventListener("click",async()=>{
//     let state = inp.value;
//     // console.log(col.state-province);

//     // let colAll = await getColleges();
//     // show(colAll);
    
//     getColleges();
// })
// function show(colAll){
//     list.innerText = "";
//     for (const col of colAll) {
//         console.log(col)        
//         console.log(col.name );
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.append(li);        
//     }
// }

const callApi = function(){
    console.log(state.value);//--------------
    const names = state.value.split(" ");       // String method split() -> convert string to array
    console.log(names);//------------
    const properName = [];

    names.forEach(e => {
        properName.push(e[0].toUpperCase() + e.slice(1).toLowerCase());
    });

    console.log(properName);//----------------------

    stateNameModified = properName.join(" ");   //Array method join() -> convert array to string

    console.log(stateNameModified);

    getColleges(stateNameModified);
};
document.querySelector("button").addEventListener("click",function(){
    callApi();
});


//------------------------------------------------------------------------------------------------------------


// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// let country = "india";

// btn.addEventListener("click", async () => {
//   let state = document.querySelector("input").value;
//   console.log(`State: ${state}`);

//   let colArr = await getColleges(state);
//   show(colArr);
// });

// async function getColleges(state) {
//   try {
//     const response = await fetch(`${url}${state}`);
//     console.log(response);
//     // if (!response.ok) {
//     //   throw new Error(`Failed to fetch data. Status code: ${response.status}`);
//     // }
//     const colleges = await response.json();
//     // console.log(colleges);
//     return colleges;
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     // console.log("error", error);
//     return [];
//   }
// }

// function show(colArr) {
//   let list = document.querySelector("#list");
//   list.innerText = " ";
//   for (col of colArr) {
//     console.log(col.name);
//     let li = document.createElement("li");
//     li.innerText = col.name;
//     list.appendChild(li);
//   }
// }


//------------------------------------------------------------------------------------------------------------



// let stateNameModified;
// const state = document.querySelector("input");
// const getApi = async function(){
//     const response = await fetch(`http://universities.hipolabs.com/search?country=India`);
//     const data = await response.json();
//     console.log(data);
//     data.forEach(e => {
//         console.log(e["state-province"]);
//         if(e["state-province"] === stateNameModified) console.log(e.name);
//     });
// };

// const callApi = function(){
//     console.log(state.value);//--------------
//     const names = state.value.split(" ");
//     console.log(names);//------------
//     const properName = [];

//     names.forEach(e => {
//         properName.push(e[0].toUpperCase() + e.slice(1).toLowerCase());
//     });

//     console.log(properName);//----------------------

//     stateNameModified = properName.join(" ");

//     console.log(stateNameModified);

//     getApi();
// };
// document.querySelector("button").addEventListener("click",function(e){
//     callApi();
// });