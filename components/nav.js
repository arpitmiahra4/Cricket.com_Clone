function navbar(){
    return`<div id="containing_logo_othertabs">
        <div id="containing_logo">
            <a href="../index.html"><img src="https://www.cricket.com/cricket.com.svg" alt="logo"/></a>
        </div>
        <!-- -------------------------end of logo-------------- -->
        <!-- ------------------------------start of different tabs----------- -->
        <div id="containing_othertabs">
        <a style="display:block" href="../html/fantasy.html"> <div class="containing_tabs" id="fantasy_tab">
            <div class="tab_logo">
               <img class="tab_logo" src="https://www.cricket.com/svgs/icons/frc.svg" alt="fantasy_logo"/>
            </div>
            <div class="tab_name">Fantasy Center</div>
           </div></a>
           <a style="display:block" href="../html/criclytics.html"><div id="adjlast" class="containing_tabs">
            <div class="tab_logo">
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/criclytics-icon.svg" alt="criclytics_logo"/>
            </div>
            <div class="tab_name">Criclytics</div>
           </div></a>
           <a style="display:block" href="../html/schedulepage.html"><div id="adjust3" class="containing_tabs">
            <div class="tab_logo">
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/schedule-icon.svg" alt="schedule_logo"/>
            </div>
           <div class="tab_name">Schedule</div>
           </div></a>
           <div id="leftshift" class="containing_tabs">
            <div class="tab_logo">
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/series-icon.svg" alt="series_logo"/>
            </div>
    
            <a style="display:block" href="../html/series.html"><div  class="tab_name">Series</div>
           </div>
           <div id="adjust1"  class="containing_tabs">
            <div class="tab_logo">
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg" alt="news_logo"/>
            </div></a>
            <a style="display:block" href="../html/news.html"><div class="tab_name">News</div>
           </div>
           <div  id="adj4"class="containing_tabs">
            <div class="tab_logo">
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/video-icon.svg" alt="videos_logo"/>
            </div></a>
            <div class="tab_name">Videos</div>
           </div>
           <div id="adj5"class="containing_tabs">
            <div class="tab_logo">
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/players-icon.svg" alt="players_logo"/>
            </div>
            <div class="tab_name">Players</div>
           </div>
    
           <div id="adjust2" class="containing_tabs">
            <div class="tab_logo">
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/teams-icon.svg" alt="teams_logo"/>
            </div>
            <div class="tab_name">Teams</div>
           </div>
           <!-- --------------------------more tab ---------------------- -->
           <div class="containing_tabs" id="getdropdown">
            <div class="tab_logo" >
                <img class="tab_logo" src="https://www.cricket.com/svgs/icons/more.svg" alt="more_logo"/>
                
            </div>
            <div id="more_arrow" >
                <div class="tab_name">More</div>
                <img src="https://www.cricket.com/svgs/downArrowFilled.svg" alt="arrow_img">
            </div>
            <!-- ------------------------------start of menu features--------------------------- -->
            <div id="menu_content">
            <div class="menu_content_row">
           
             <div class="menu_content_row_logo">
            
              <img src="https://www.cricket.com/svgs/icons/stadium-icon.svg" alt="stadium-icon"> 
                       
                    </div>
                    <div class="name_of_logo">Stadiums</div>
                </div>
    
                <a style="display:block"  href="../html/ranking.html"> <div class="menu_content_row">
                    <div class="menu_content_row_logo">
               <img src="https://www.cricket.com/svgs/icons/rankings-icon.svg" alt="ranking-icon">
                        
                    </div>
                    <div class="name_of_logo">Rankings</div>
                </div></a>
    
                <div class="menu_content_row">
                    <div class="menu_content_row_logo">
                        <img src="http://www.cricket.com/svgs/GroupArchive.svg" alt="archives-icon">
                        
                    </div>
                    <div class="name_of_logo">Archives</div>
                </div>
                <div class="menu_content_row">
                    <div class="menu_content_row_logo">
                        <img src="https://www.cricket.com/svgs/icons/records-icon.svg" alt="records-icon">
                        
                    </div>
                    <div class="name_of_logo">Records</div>
                </div>
                <div class="menu_content_row">
                    <div class="menu_content_row_logo">
                        <img src="https://www.cricket.com/svgs/fantasynav.svg" alt="season_fantasy-icon">
                        
                    </div>
                    <div class="name_of_logo">Season Fantasy</div>
                </div>
                <a style="display:block" href="../html/signin.html"> <div class="menu_content_row">
                    <div class="menu_content_row_logo">
                        <img src="https://www.cricket.com/svgs/icons/profile.svg" alt="Profile-icon">
                        
                    </div>
                    <div class="name_of_logo">Profile</div>
                </div></a>
            </div>
           </div>
        </div>`
};




export {navbar};