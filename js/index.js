import {navbar} from "../components/nav.js"
import {footer} from "../components/foot.js"


document.getElementById("navbar").innerHTML=navbar();

document.getElementById("footer").innerHTML=footer();

let cont=document.querySelector("#h_n_btm")



let get=async ()=>{
    try{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=901bd0d3f4af4d1698306a25b880c39b `
    let res= await fetch(url);
    let res1= await res.json();
    let dataa=res1.articles
   // console.log(data)
   let data= dataa.filter(function(el){
        return (el.source.name=="ESPN Cric Info" || el.source.name=="Cricbuzz" || el.source.name=="Hindustan Times"
       || el.source.name=="Cricketaddictor.com"|| el.source.name=="International Cricket Council"
       ||  el.source.name=="Crictracker.com" || el.source.name=="Cricket.Com Staff"
       || el.source.name=="Cricket.Com Staff")
  })
  
  console.log(data)
    display(cont,data)
}catch{
    // setTimeout(function(){
    //     alert("the news api only works on local host, for demo pls see video")
    // },5000)
  
}
}
get()


let display=(cont,data)=>{

    cont.innerHTML="";

let res=data.forEach(({description,title,urlToImage,source,publishedAt,content},index)=>{

// console.log(data)
    //  if(index>2){
    //      return
    //  }
    let divs=document.createElement("div");
    divs.setAttribute("class","h_n_in")
    
    let div1=document.createElement("div");
    div1.setAttribute("id","div1")
    let div2=document.createElement("div");
    div2.setAttribute("id","div2");

    let idiv=document.createElement("div");
    idiv.setAttribute("class","divi")
    let imag=document.createElement("img");
    if(urlToImage==null){
        imag.src="https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0"
        imag.style.width="420px"
        imag.style.height="220px"
        // imag.style.height="100px"
        imag.style.borderRadius="5px"
        imag.style.overflow="hidden"
    }
    else{imag.src=urlToImage
    //console.log(urlToImage,imag)
    imag.style.width="420px"
    imag.style.height="220px"
    imag.style.borderRadius="5px"
    imag.style.overflow="hidden"
    // imag.strech="200px"
}

let divextra=document.createElement("div");
divextra.innerText="NEWS"
divextra.setAttribute("class","home_e")

idiv.append(imag,divextra)
   

    let tle=document.createElement("h3");
    tle.innerText=title;
    let desc=document.createElement("p");
     desc.innerText=description;
     div2.append(tle,desc)

     let div3=document.createElement("div");
     div3.setAttribute("id","div3")

     let athr=document.createElement("p");
     athr.innerText=source.name

     let date=document.createElement("p");
     let dt=publishedAt.split("-");
     //console.log(dt)
     let x=[dt[2][0],dt[2][1]]
    //  x=+x;
     dt.pop();
     dt.map(Number);
     let year=dt[0]
     let month=dt[1]
     let dayy=x[0]
     let da=x[1]
     let day=`${dayy}${da}`
     //console.log(year,month,day)
   let mon=check(month)
   //console.log(mon)
   date.innerText=`${day}  ${mon} ${year}`
  
   div3.append(athr,date)

   div1.append(div2,div3)
    divs.append(idiv,div1);
    cont.append(divs)
})

}

// document.querySelector("#h_img_1").addEventListener("click",h_img1)

// function h_img1(){
// let img1=document.querySelector("#h_img_1");
// img1.style. backgroundColor="black"
// img1.style.borderBottom="0.1px solid rgb(188, 177, 177)"
// img1.style.borderTop=" 0.1px solid rgb(188, 177, 177) "
// img1.style.borderLeft=" 0.1px solid rgb(188, 177, 177) "
// // img1.style.borderTop=" 0.1px solid rgb(188, 177, 177) "
// }

function check(str){
if (str==`01`){
    return "jan"
}
else if(str==`02`){
    return "feb"
}
else if(str==`03`){
    return "march"
}
else if(str==`04`){
    return "april"
}
else if(str==`05`){
    return "may"
}
else if(str==`06`){
    return "june"
}
else if(str==`07`){
    return "july"
}
else if(str==`08`){
    return "august"
}
else if(str==`09`){
    return "sep"
}
else if(str==10){
    return "oct"
}
else if(str==11){
    return "nov"
}
else{
    return "dec"
}
}
document.querySelector("#h_img_1").addEventListener("click",function(){
    document.querySelector("#pop1").style.display="block"
    document.querySelector("#h_news").style.filter='blur(3px)'
    document.querySelector("#navbar").style.filter='blur(5px)'
    document.querySelector("#footer").style.filter='blur(5px)'
    // document.querySelector(body).style.scrollY="no"
    //  window.onscroll = function () {
    //     window.scrollTo(0,0);
    //      }
        // window.addEventListener("keydown", function(e) {
        //     // space, page up, page down and arrow keys:
        //     if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        //         e.preventDefault();
        //     }
        // }, false);
        // document.querySelector("body").style.overflowY='hidden'

})
document.querySelector("#cos1").addEventListener("click",function(){
    document.querySelector("#pop1").style.display="none"
    document.querySelector("#h_news").style.filter='blur(0px)'
    document.querySelector("#navbar").style.filter='blur(0px)'
    document.querySelector("#footer").style.filter='blur(0px)'
    // document.querySelector("body").style.overflowY='scroll'
})


document.querySelector("#h_img_2").addEventListener("click",function(){
    document.querySelector("#pop2").style.display="block"
    document.querySelector("#h_news").style.filter='blur(3px)'
    document.querySelector("#navbar").style.filter='blur(5px)'
    document.querySelector("#footer").style.filter='blur(5px)'
    // document.querySelector("body").style.overflowY='hidden'
})
document.querySelector("#cos2").addEventListener("click",function(){
    document.querySelector("#pop2").style.display="none"
    document.querySelector("#h_news").style.filter='blur(0px)'
    document.querySelector("#navbar").style.filter='blur(0px)'
    document.querySelector("#footer").style.filter='blur(0px)'
    // document.querySelector("body").style.overflowY='scroll'
})


document.querySelector("#h_img_3").addEventListener("click",function(){
    document.querySelector("#pop3").style.display="block"
    document.querySelector("#h_news").style.filter='blur(3px)'
    document.querySelector("#navbar").style.filter='blur(7px)'
    document.querySelector("#footer").style.filter='blur(5px)'
    // document.querySelector("body").style.overflowY='hidden'
})
document.querySelector("#cos3").addEventListener("click",function(){
    document.querySelector("#pop3").style.display="none"
    document.querySelector("#h_news").style.filter='blur(0px)'
    document.querySelector("#navbar").style.filter='blur(0px)'
    document.querySelector("#footer").style.filter='blur(0px)'
    // document.querySelector("body").style.overflowY='scroll'
})


document.querySelector("#h_img_4").addEventListener("click",function(){
    document.querySelector("#pop4").style.display="block"
    document.querySelector("#h_news").style.filter='blur(3px)'
    document.querySelector("#navbar").style.filter='blur(5px)'
    document.querySelector("#footer").style.filter='blur(5px)'
    // document.querySelector("body").style.overflowY='hidden'
})
document.querySelector("#cos4").addEventListener("click",function(){
    document.querySelector("#pop4").style.display="none"
    document.querySelector("#h_news").style.filter='blur(0px)'
    document.querySelector("#navbar").style.filter='blur(0px)'
    document.querySelector("#footer").style.filter='blur(0px)'
    // document.querySelector("body").style.overflowY='scroll'
})



