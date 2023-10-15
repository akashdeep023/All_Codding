let url = "https://dog.ceo/api/breeds/image/random";
async function getDogPic(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(e){
        return "/";
    }
}
let btn = document.querySelector('button');
let pic = document.querySelector('#result');

btn.addEventListener("click",async ()=>{
    let imgUrl = await getDogPic();
    console.log(imgUrl);    
    pic.setAttribute('src',imgUrl);
})