console.log("Hello garima");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let playButton=Array.from(document.getElementsByClassName("songItemPlay"));
let mainSongName=document.getElementById('mainSongName');

let songs=[
    {songName:"It's Always Blue", filePath:'songs/1.mp3', coverPath:"covers/1.jpg"},
    {songName:"Tere Bina", filePath:'songs/2.mp3', coverPath:"covers/2.jpg"},
    {songName:"Bhula Dena", filePath:'songs/3.mp3', coverPath:"covers/3.jpg"},
    {songName:"Maine Bola Hai", filePath:'songs/4.mp3', coverPath:"covers/4.jpg"},
    {songName:"Tere Siva", filePath:'songs/5.mp3', coverPath:"covers/5.jpg"},
    {songName:"Apki Kasam", filePath:'songs/6.mp3', coverPath:"covers/6.jpg"},
    {songName:"Ruk jana nhi", filePath:'songs/7.mp3', coverPath:"covers/7.jpg"},
    {songName:"Hey Baby", filePath:'songs/8.mp3', coverPath:"covers/8.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
  

})
const makeAllPlays=()=>{
    playButton.forEach((element)=>{
           element.classList.remove('fa-pause-circle'); 
           element.classList.add('fa-play-circle');
    })
}

playButton.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=i;
        mainSongName.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
  

    })

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=7;
    }else{
        songIndex-=1;
    }
    mainSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    gif.style.opacity=1;
    audioElement.currentTime=0;
     audioElement.play(); 
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    mainSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    gif.style.opacity=1;
    audioElement.currentTime=0;
     audioElement.play(); 
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        mainSongName.innerText=songs[songIndex].songName;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        mainSongName.innerText=songs[songIndex].songName;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})