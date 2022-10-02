let base = "https://mr-mishra.herokuapp.com/ranking"

let getdata = async ()=>{
    let res = await fetch(base);
    let data = await res.json();
    renderDom(data);
}
getdata()
let renderDom = async (data)=>{
let cont = document.getElementById("conti");
cont.innerHTML = null;
data.forEach((el)=>{
    let div = document.createElement("div");
    div.setAttribute("id","bahaar")
    let serial = document.createElement("h3");
    serial.innerText = el.serial;
    
    let div2 = document.createElement("div");
    div2.setAttribute("id","naams")
    let img = document.createElement("img");
    img.src = el.image;
    let name = document.createElement("h3");
    name.innerText = el.name;
    div2.append(img,name);
   
div.append(serial,div2);
cont.append(div);
});
};

let odi = async ()=>{
document.getElementById("odi").style.backgroundColor = "#a60d14"
document.getElementById("test").style.backgroundColor = null
document.getElementById("t20").style.backgroundColor = null
getdata()
}
let test = async ()=>{
    document.getElementById("test").style.backgroundColor = "#a60d14"
    document.getElementById("odi").style.backgroundColor = null
    document.getElementById("t20").style.backgroundColor = null

    let url = "https://mr-mishra.herokuapp.com/test"
    let res = await fetch(url);
    let data = await res.json();
    renderDom(data)
}
let t20 = async ()=>{
    document.getElementById("t20").style.backgroundColor = "#a60d14"
    document.getElementById("test").style.backgroundColor = null
    document.getElementById("odi").style.backgroundColor = null

    let url = "https://mr-mishra.herokuapp.com/t20"
    let res = await fetch(url);
    let data = await res.json();
    renderDom(data)
}