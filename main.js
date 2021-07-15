let titleArr = new Array();
let compArr = new Array();
let dateArr = new Array();
let videoUrlArr = new Array();
let match_container = document.querySelector('.content');
let docFrag = document.createDocumentFragment();


const getUrl = async id => {
    const url = `https://www.scorebat.com/video-api/v1/`;
    const res = await fetch(url);
    const match = await res.json();    
    
    getMatchData(match);
}

getUrl();

const getMatchData = (x) => {
    for(let i=0; i<= 70; i++){
           console.log(x[i]);
            let matchTitle = x[i].title;
            let compMatches = x[i].competition;
            let matchDate = x[i].date;
            let matchURL = x[i].url;
            titleArr.push(matchTitle);
            compArr.push(compMatches);
            dateArr.push(matchDate);
            videoUrlArr.push(matchURL);
            
    }
    //console.log(videoUrlArr);
    createCards(titleArr, compArr, dateArr, videoUrlArr);
}

createCards = (title, competition, matchDate, matchURL) => {
    
    for (let i = 0; i < title.length; i++) {
        const matchElement = document.createElement('div');
        const compElement = document.createElement('div');
        const dateElement = document.createElement('div');
        const videoElement = document.createElement('div');
        matchElement.classList.add('match-title');
        const matchInnerHTML = `    
               
        <div class="teams">${title[i]}  </div>
        
       
        `;
        const compInnerHTML = 
        `
              
        <div class="competition">${competition[i].name}</div>
        
        
        `;
        const dateHTML = `
        <div class="dates">${matchDate[i].date}
        `;
        const videoHTML = `
        <a class= "videoLink" href="${matchURL[i].url}">Watch now</a>
        `;
        compElement.innerHTML = compInnerHTML;
        matchElement.innerHTML = matchInnerHTML;
        dateElement.innerHTML = dateHTML;
        videoElement.innerHTML = videoHTML;
        match_container.appendChild(matchElement);
        matchElement.appendChild(compElement);
       // matchElement.appendChild(dateElement);
        matchElement.appendChild(videoElement);
}
    }
     

