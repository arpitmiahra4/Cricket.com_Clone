

    let categ=JSON.parse(localStorage.getItem("categ"))
    console.log(categ);
    
    let getData = async ()=>{
        try{
            let res = await fetch (`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7fe798a8a3b34e748f7f0ccb417e8f64`)
            let data= await res.json()
            // let new_data=data.articles
            console.log(data.articles);
            
            appendData(data)
        }
        catch(err){
            console.log("err", err)
        }
     }
     getData()
     
     let appendData = (data) =>{
        //  console.log(new_data);
         let append_ent_data=document.getElementById("container")
         append_ent_data.innerHTML = null
         data["articles"].forEach(({title,description,urlToImage,publishedAt,author}) => {
            let div= document.createElement('div')
            div.setAttribute("class", "elem")
            let div1= document.createElement('div')
            div1.setAttribute("class", "img")
            let div2= document.createElement('div')
            div2.setAttribute("class", "text")
            let div3= document.createElement('div')
            div3.setAttribute("class", "date_author")
            let name1=document.createElement('h3')
           name1.setAttribute("class","name2")
        
            name1.innerHTML=title
            let desc1=document.createElement('p')
            desc1.innerHTML=description
            let auth1=document.createElement('p')
            auth1.innerHTML=author
            let pub1=document.createElement('p')
            pub1.innerHTML=publishedAt
            let img1=document.createElement('img')
            if(urlToImage==null){
                img1.src="https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0"
                img1.style.width="420px"
                img1.style.height="220px"
                // imag.style.height="100px"
                img1.style.borderRadius="5px"
                img1.style.overflow="hidden"
            }
            else{img1.src=urlToImage
            //console.log(urlToImage,imag)
            img1.style.width="420px"
            img1.style.height="220px"
            img1.style.borderRadius="5px"
            img1.style.overflow="hidden"
            // imag.strech="200px"
        }
            

            div1.append(img1)
            div1.style.marginRight="10px"
            div3.append(auth1,pub1)
            div3.style.marginTop="10px"
            
            div2.append(name1,desc1,div3)
            div2.style.paddingTop="-10px"
            div.append(div1,div2)
            div.style.display="flex"
            div.style.padding="20px"
            append_ent_data.append(div)
            append_ent_data.style.width="70%"
            append_ent_data.style.margin="auto"
            append_ent_data.style.fontFamily= "Montserrat";
            // console.log(element.name);
            
        
        });



    }
