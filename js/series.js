//  let changee=()=>{
//   let up = document.getElementById("up")
//   up.style.borderBottom = "3px solid red"
//   let on = document.getElementById("on")
//   on.style.borderBottom = "3px solid red"
//   let co = document.getElementById("co")
//     co.style.borderBottom = "3px solid red"
//  }

let up = ()=>{
    document.getElementById("up").style.borderBottom = "3px solid red";
    document.getElementById("on").style.borderBottom = null;
    document.getElementById("co").style.borderBottom = null;
}
let on = ()=>{
    document.getElementById("on").style.borderBottom = "3px solid red";
    document.getElementById("up").style.borderBottom = null
    document.getElementById("co").style.borderBottom = null
}
let co = ()=>{
    document.getElementById("co").style.borderBottom = "3px solid red";
    document.getElementById("up").style.borderBottom = null
    document.getElementById("on").style.borderBottom = null
}
//  let on=()=>{
//     let on = document.getElementById("on")
//     on.style.borderBottom = "3px solid red"
//     window.location.reload()
//    }
//    let co=()=>{
//     let co = document.getElementById("co")
//     co.style.borderBottom = "3px solid red"
//    }

 let base_url = "https://mr-mishra.herokuapp.com/all";

 let getdata = async ()=>{
    let res = await fetch(base_url)
    let data = await res.json();
    console.log(data);
    renderDom(data);
 }
getdata()
 let renderDom = async (data)=>{
    let cont = document.getElementById("containers")
    cont.innerHTML = null;
    data.forEach((el)=>{
        let wht = document.createElement("div")
        wht.setAttribute("class","cparent")
        wht.style.border = el.border;
        let indiv = document.createElement("div")
        indiv.setAttribute("class","c1")
        let div2 = document.createElement("div")
        div2.setAttribute("class","cmatchs")
        let h3 = document.createElement("h3");
        h3.innerText = el.title;
        indiv.append(h3)
        let p = document.createElement("p");
        p.innerText = el.num;
        let p2 = document.createElement("p");
        p2.innerText = el.match;
        div2.style.display = "flex";
        div2.append(p,p2)
        indiv.append(div2)
        let div3 = document.createElement("div");
        div3.setAttribute("class","c3")
        let p3 = document.createElement("p");
        p3.innerText = el.kuch;
        p3.style.color = "white"
        div3.style.backgroundColor = el.color;
        div3.append(p3)
        wht.append(indiv,div3)
        cont.append(wht)
    })
 }

// click func in all category
let alld = ()=>{
    document.getElementById("al").style.backgroundColor = "#a70e13"
    document.getElementById("ii").style.backgroundColor = null
    document.getElementById("wo").style.backgroundColor = null
    document.getElementById("do").style.backgroundColor = null
    getdata()
}

let ii = async ()=>{
  document.getElementById("ii").style.backgroundColor = "#43b88e"
  document.getElementById("al").style.backgroundColor = null;
  document.getElementById("wo").style.backgroundColor = null;
  document.getElementById("do").style.backgroundColor = null;

    let url = "https://mr-mishra.herokuapp.com/international"
    let res = await fetch(url)
    let data = await res.json();
    renderDom(data)
}
let doo = async ()=>{
    document.getElementById("do").style.backgroundColor = "#a4c0c6"
    document.getElementById("al").style.backgroundColor = null
  document.getElementById("wo").style.backgroundColor = null
  document.getElementById("ii").style.backgroundColor = null
  let url = "https://mr-mishra.herokuapp.com/domestic"
    let res = await fetch(url)
    let data = await res.json();
    renderDom(data)
}
let wo = async ()=>{
    document.getElementById("wo").style.backgroundColor = "#ff8474"
    document.getElementById("ii").style.backgroundColor = null
    document.getElementById("al").style.backgroundColor = null
    document.getElementById("do").style.backgroundColor = null
    let url = "https://mr-mishra.herokuapp.com/women"
    let res = await fetch(url)
    let data = await res.json();
    renderDom(data)
}

const open = document.getElementById('fill');
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

open.addEventListener('click', () =>{
    modal_container.classList.add('show');
})

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
})
