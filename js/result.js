


let dataresult=JSON.parse(localStorage.getItem("dataresult"))||[]

let container3=document.getElementById('container3')
console.log(dataresult)
let container=document.getElementById('container')
let appendData=(dataresult)=>{
    dataresult.forEach((el) => {
        let div=document.createElement('div')
        div.id="main"
       
        let div4=document.createElement('div')
        div4.id='cont'
        let div2=document.createElement('div')
       div2.className="team"
       
        let img=document.createElement('img')
        img.src=el.event_home_team_logo
         img.className='img1'
        let img2=document.createElement('img')
        img2.src=el.event_away_team_logo
        img2.className='img1'
        let d=document.createElement('div')
       d.id="heading"
       d.style.backgroundColor="teal"
        let h2=document.createElement('h2')
        h2.innerText=el.event_home_team+" "+"VS"+" "+el.event_away_team
        h2.style.color="white"
        let p=document.createElement('p')
        p.innerText=el.event_away_final_result

        p.className="time"
        let a=document.createElement('p')
        a.innerText=el.event_status_info
       let time=document.createElement('p')
       time.innerText=el.event_home_final_result

         time.className="time"

       let rr=document.createElement('p')
         rr.innerText=el.event_away_rr

       let rr2=document.createElement('p')
         rr2.innerText=el.event_home_rr
        let div3=document.createElement('div')
        div3.className="team"
           let team=document.createElement('h4')
           team.innerText=el.event_home_team
           team.className="one" 
           let team2=document.createElement('h4')
           team2.innerText=el.event_away_team
           team2.className="one"
         let div5=document.createElement('div')
       let div6=document.createElement('div')
        
        let div7=document.createElement('div')
       let btn=document.createElement('button')
       btn.innerText="Summary"
       btn.onclick=()=>{
        summary()
       }
       let btn2=document.createElement('button')
       btn2.innerText="Commentary"
       let btn3=document.createElement('button')
       btn3.innerText="Scorecard"
       btn3.onclick=()=>{
        scorecard()
       }
       let btn4=document.createElement('button')
       btn4.innerText="Highlights"
       let btn5=document.createElement('button')
       btn5.innerText="Player List"
       btn5.onclick=()=>{
        matchinfo(el)
       }
       let btn6=document.createElement('button')
       btn6.innerText="Articles"
       

       
       
       
       
       
       d.append(h2)
        div3.append(team,team2)
        div6.append(rr,rr2)
        div7.append(btn,btn2,btn3,btn4,btn5,btn6)
        div5.append(p,time)
        div2.append(img,img2)
        div4.append(div2,div3,div5,div6)
        div.append(div4,a)
      
      
       container.append(d,div,div7)
     
})
}
appendData(dataresult)


let container2=document.getElementById('container2')

let scorecard=()=>{
  container3.innerHTML=null
container2.innerText=null
console.log(dataresult)

dataresult.forEach((el)=>{
    let x=(el.scorecard)
   
    let p=document.createElement('hr')
let div=document.createElement('div')
let name=document.createElement('h5')
name.innerText=el.event_away_team

let score=document.createElement('h5')
score.innerText=el.event_away_final_result

let score2=document.createElement('h5')
score2.innerText=el.event_home_final_result


let name2=document.createElement('h5')
name2.innerText=el.event_home_team
let s=document.createElement('h2')
s.className='select'
s.innerText="+"
s.onclick=()=>{
    scorecardData(el)
}

let o=document.createElement('option')
o.className='option1'
o.innerText=el.event_date_stop

let se=document.createElement('h2')
se.className='select'
se.innerText="+"
let op=document.createElement('option')
op.className='option1'

let div2=document.createElement('div')
div2.className="info"
let div3=document.createElement('div')
div3.className="info"



div3.append(name2,score2,se)
div2.append(name,score,s)
div.append(div2,p,div3)
container2.append(div)
})


}


let scorecardData=(el)=>{

let data=el.ball_by_ball

console.log(data)
// let {IND_INNINGS}=data
console.log(data)

}








let matchinfo=(el)=>{
container2.innerHTML=null
container3.innerHTML=null
  let div=document.createElement('div')
  div.id='main22'
  let div2=document.createElement('div')
  div2.onclick=()=>{
    appendaway(el)
  }
  let div3=document.createElement('div')
  div3.onclick=()=>{
    appendhome(el)
  }

  let h4=document.createElement('h4')
  h4.innerText=el.event_away_team

  let h42=document.createElement('h4')
  h42.innerText=el.event_home_team

   div2.append(h4)
   div3.append(h42)
   div.append(div3,div2)
   container2.append(div)

}
let appendaway=(el)=>{
  container3.innerHTML=null
  let data2=el.lineups.away_team.starting_lineups
    console.log(data2)
  data2.forEach((el)=>{
   let div=document.createElement('div')
   div.className='lane'
   let div2=document.createElement('div')
   let p=document.createElement('h4')
  
 p.textContent=el.player
   div.append(p)
   container3.append(div)
})
 
}




let appendhome=(el)=>{
  container3.innerHTML=null
  let data2=el.lineups.home_team.starting_lineups
    console.log(data2)
  data2.forEach((el)=>{
   let div=document.createElement('div')
   div.className='lane'
   let div2=document.createElement('div')
   let p=document.createElement('h4')
  
 p.textContent=el.player
   div.append(p)
   container3.append(div)
})
 
}