append();

function append(){
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let container = document.getElementById("container");
    container.innerHTML=null;
    
    data.forEach(function (el,index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let nm = document.createElement("p");
        nm.innerText = el.name;
        let co =document.createElement("p");
        co.innerText = el.course;
        let un = document.createElement("p");
        un.innerText = el.unit;
        let bt = document.createElement("p");
        bt.innerText = el.batch;
        let btn = document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            remove(index);
        });


        div.append(img,nm,co,un,bt,btn);
        container.append(div)

    });
}
append();

function remove(index){
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let newData = data.filter(function(el,i){
        if(i===index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i!==index;
        }
        
        
    });
    localStorage.setItem("students",JSON.stringify(newData));
    append()

}
