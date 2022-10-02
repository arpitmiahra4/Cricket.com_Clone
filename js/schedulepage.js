let container=document.getElementById('container')


let upcoming=async()=>{
    //  alert('hi i am upcoming')
   
    let date2=new Date
    console.log(date2)
    let month=date2.getUTCMonth()+1
    let day=date2.getDate()
    let year=date2.getFullYear()
    
    
    let month2=date2.getMonth()+2
    
    
      console.log(year+"-"+month2+"-"+day)
      console.log(year+"-"+month+"-"+day)
      let res=await fetch(`https://api.api-cricket.com/cricket/?method=get_events&APIkey=7d62c723b884900b164dedced277c45adbaeaf5a56bf15301f9e17b4537c62a7&date_start=${(year+"-"+month+"-"+day)}&date_stop=${(year+"-"+month2+"-"+day)}`)
      res=await res.json()
    
     let data=res.result
     appendData(data)
     console.log(data)
}
upcoming()
let appendData=(data)=>{
        container.innerHTML=null
    data.forEach((el)=>{
      // let u=document.getElementById('uc')
      // u.style.backgroundColor="#A70E13"
            if(el.event_status_info==null){  
            let div=document.createElement('div')
            div.id="main"
            div.onclick=()=>{
               appendupcoming(el)
            }
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
            let h2=document.createElement('h2')
            h2.innerText=el.league_name+" "+el.league_season
            
            let p=document.createElement('p')
            p.innerText=el.event_date_start
            p.className="time"
            let a=document.createElement('p')
        //  a.innerText=event_status_info

           
            //  div2.append(h2)

           let time=document.createElement('p')
           time.innerText=el.event_time +"PM IST"
             time.className="time"

           let h3=document.createElement('h3')
           if(el.league_name=="ICC World Twenty20"||el.league_name=="One Day International"||el.league_name=="Twenty20 International"||el.league_name=="Twenty20 International Women"||el.league_name=="T20 Asia Cup Women"){
            h3.innerText="INT"
           }else{
            h3.innerText="DOM"
           }

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
             div6.id="inter"
            let div7=document.createElement('div')
            let country=document.createElement('p')
            country.innerText="Venue:- "+ el.country_name

            div3.append(team,team2)
            
            div6.append(h3)
            div5.append(p,time)
            div2.append(img,img2)
            div4.append(div2,div3,div5)
            div.append(div6,h2,country,div4,a)
          
          
           container.append(div)
        }
    })


}

// let appendupcoming=(el)=>{
//   let arr=[]
//   arr.push(el)
  
//   localStorage.setItem('data',JSON.stringify(arr))
//   window.location.href="upcoming.html"
// }

// let upcomingData=JSON.parse(localStorage.getItem('data'))||[]
// console.log(upcomingData)

// let appendupcomingdata=()=>{
//   upcomingData.forEach((el)=>{
//     let div=document.createElement('div')

//     let p=document.createElement('p')
//      p.innerText=el.event_home_team
      
//      div.append(p)
//      container.append(div)
//   })
// }








let live=async()=>{
// alert('hi i am live')
// let l=document.getElementById('lv')
// l.style.backgroundColor="#A70E13"
    let res=await fetch(`https://apiv2.api-cricket.com/?method=get_livescore&APIkey=7d62c723b884900b164dedced277c45adbaeaf5a56bf15301f9e17b4537c62a7`)

    res=await res.json()

    let data2=res.result
    console.log(data2)
    appendlive(data2)
}


let appendlive=(data2)=>{
    container.innerHTML=null
data2.forEach((el)=>{
      if(el.event_status=="In Progress"){ 
        let div=document.createElement('div')
        div.id="main"
        div.onclick=()=>{
          appendliveData(el)
       }
        let div4=document.createElement('div')
        div4.id='cont1'
        let div2=document.createElement('div')
       div2.className="team"
       
        let img=document.createElement('p')
        
        
        img.className='img1'
        if(el.event_service_away===""){
          img.innerText=el.event_away_final_result
        }else{
          img.innerText=el.event_away_final_result+" & "+el.event_service_away
        }
        let img2=document.createElement('p')
        
        if(el.event_service_home===""){
          img2.innerText=el.event_home_final_result
        }else{
          img2.innerText=el.event_home_final_result+" & "+el.event_service_home
        }
        img2.className='img1'
        let h2=document.createElement('h3')
        h2.innerText=el.league_name+" "+el.league_season
        
        let p=document.createElement('p')
        p.innerText=el.event_date_start
        p.className="time"
        let a=document.createElement('p')
    //    a.innerText=event_status_info

        if(el.event_status_info==null){
            a.innerText='Yet to start'
        
        }else{
            a.innerText=el.event_status_info
        }
        //  div2.append(h2)

       let time=document.createElement('p')
       time.innerText=el.event_time +"PM IST"
         time.className="time"

       let h3=document.createElement('h3')

       if(el.league_name=="ICC World Twenty20"||el.league_name=="One Day International"||el.league_name=="Twenty20 International"||el.league_name=="Twenty20 International Women"||el.league_name=="T20 Asia Cup Women"){
        h3.innerText="INT"
       }else{
        h3.innerText="DOM"
       }

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
         div6.id="inter"
        let div7=document.createElement('div')
        let country=document.createElement('p')
        country.innerText="Venue:- "+el.event_stadium

        let type=document.createElement('h4')
        type.innerText=el.event_type
       type.style.color="orange"
        div3.append(team,team2)

        div7.append(type)
        div6.append(h3)
        div5.append(p,time)
        div2.append(img2,img)
        div4.append(div3,div2,div5)
        div.append(div6,div7,h2,country,div4,a)
      
      
       container.append(div)
      }
      })


}





let appendliveData=(el)=>{
  
  
    let arr=[]
    arr.push(el)
    
    localStorage.setItem('dataresult',JSON.stringify(arr))
   window.location.href="upcoming.html"
  
}


let results=async()=>{
  // alert('hi i am results')
  let date2=new Date
      console.log(date2)
      let month=date2.getMonth()+1
      let day=date2.getDate()-1
      let year=date2.getFullYear()

      
      let month2=date2.getMonth()
      //${(year+"-"+month2+"-"+day)}
      console.log(year+"-"+month2+"-"+day)
      console.log(year+"-"+month+"-"+day)

      let res=await fetch(`https://api.api-cricket.com/cricket/?method=get_events&APIkey=7d62c723b884900b164dedced277c45adbaeaf5a56bf15301f9e17b4537c62a7&date_start=2022-09-26&date_stop=2022-10-03`)
      res=await res.json()
    
     let data3=res.result
console.log(data3)
appendresults(data3)




}


  let appendresults=(data3)=>{
    container.innerHTML=null
data3.forEach((el)=>{
       if(el.event_status=="Finished"){  
        let div=document.createElement('div')
        div.id="main"
        div.onclick=()=>{
          appendresultsData(el)
       }
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
        let h2=document.createElement('h2')
        h2.innerText=el.league_name+" "+el.league_season
        
        let p=document.createElement('p')
        p.innerText=el.event_home_final_result

        p.className="time"
        let a=document.createElement('p')
        a.innerText=el.event_status_info
       let time=document.createElement('p')
       time.innerText=el.event_away_final_result

         time.className="time"

       let h3=document.createElement('h3')
       if(el.league_name=="ICC World Twenty20"||el.league_name=="One Day International"||el.league_name=="Twenty20 International"||el.league_name=="Twenty20 International Women"||el.league_name=="T20 Asia Cup Women"||el.league_name=="Test Series"){
        h3.innerText="INT"
       }else{
        h3.innerText="DOM"
       }

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
         div6.id="inter"
        let div7=document.createElement('div')
        // let country=document.createElement('p')
        // country.innerText="Venue:- "+event_stadium

        div3.append(team,team2)
        
        div6.append(h3)
        div5.append(p,time)
        div2.append(img,img2)
        div4.append(div2,div3,div5)
        div.append(div6,h2,div4,a)
      
      
       container.append(div)
     }
})


}




let appendresultsData=(el)=>{
  
  let arr=[]
  arr.push(el)
  
  localStorage.setItem('dataresult',JSON.stringify(arr))
 window.location.href="result.html"
}

// let selectone=()=>{
//   let select=document.getElementById('inn2').value ;
//   if(select=="INT"){
//     console.log('i am interntional')
//   }else if(select=='DOM'){
//     console.log('i am domestic')
//   }else{
//     console.log('i am all')
//   }
  

    
   
      
//   appendData(filter_data)
// }



