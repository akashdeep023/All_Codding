let dels = document.querySelectorAll("button#del")      //not work perfect delete yes ya no click...
for (const del of dels) {    
    del.addEventListener("click",async()=>{
        console.log("are you sure!");
        await confirm("Are you sure! You want to delete chat");
    });
}       