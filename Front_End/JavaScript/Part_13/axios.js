//----------------------------------------------Axios--------------------------------------------
//Asios - Library to make HTTP requests--
//fatch(url) - return - ReadableStream (parse response - (res.json() then Data)|| Asios - return - Data
//axios link - "https://github.com/axios/axios"  || attach cnd script link
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
        
    }catch(e){
        console.log("Error - ",e);
    }
}
getFacts();

//Print fact HTML Element----------
async function getCatFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;           //async fnx hai isi liye return Promise
    }catch(err){
        return `Error - ${err}`;
    }
}

// console.log(getCatFacts());

let btn = document.querySelector('button');
let p = document.querySelector('#result');

// let btn2 = document.createElement('button');

btn.addEventListener("click",async ()=>{          //Promise return kar rha hai kyo ki getCatFacts() async fnx 
    let fact = await getCatFacts();               //await use karge or await ke liye fnx ko async fux bandege
    // console.log(fact);
    p.innerHTML = fact;

    
    // btn2.innerText = "Translate in to HINDI";
    // document.querySelector('body').append(btn2);

})
// btn2.addEventListener("click",()=>{

// })
