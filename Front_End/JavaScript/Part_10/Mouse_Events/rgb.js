let bt = document.querySelector('button');
let h3 = document.querySelector('h3');
let div = document.querySelector('div');

function rgb(){
    let no1 = Math.floor(Math.random()*256);
    let no2 = Math.floor(Math.random()*256);
    let no3 = Math.floor(Math.random()*256);    
    let rgbNo = `rgb(${no1},${no2},${no3})`;
    return rgbNo;
}

bt.addEventListener("click",function(){
    h3.innerText = rgb();
    div.style.backgroundColor =rgb();
    console.log("color updated");
});