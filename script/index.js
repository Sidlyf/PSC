function Students(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FT-WEB${b}`;
}





function storeData(e){
    e.preventDefault();
    let form = document.getElementById("studentData");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.img.value;
    let batch = form.batch.value;
    // let nav = document.getElementById("navbar")
    // nav.innerText="div"
    let s1 = new Students(name,course,unit,image,batch)

   //console.log(s1)

    let data = JSON.parse(localStorage.getItem("students")) || [];

    data.push(s1);

    localStorage.setItem("students",JSON.stringify(data))

    //console.log(s1)
}

function calculate(){
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let obj = {};

    for(let i = 0; i<data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch] = 0;
        }

    }

    for(let i = 0; i<data.length; i++){
        
            obj[data[i].batch]++;

    }
    localStorage.setItem("batchsize",JSON.stringify(obj))
    displayBatchSize(obj)
    
}
calculate();

function displayBatchSize(data){

    var div = document.getElementById("navbar")
    div.innertext="";
    for(k in data){
        var batch = document.createElement("div")
        batch.innerText=k+"-"+data[k]
        div.append(batch)
    }
}