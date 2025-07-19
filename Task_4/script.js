const song=[{title:"Takkaru Takkaru",artist:"HipHop Aathi",src:"song2.mp3",cover:"cover1.jpg"},
            {title:"Badass",artist:"Aniruth",src:"song1.mp3",cover:"cover2.jpg"}];
let current=0;
const audio=document.getElementById("audio");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const cover=document.getElementById("cover");
const prevbtn=document.getElementById("prev");
const nextbtn=document.getElementById("next");
const playbtn=document.getElementById("play");
const progress=document.getElementById("progress");
const volume=document.getElementById("volume");
const currenttime=document.getElementById("current");
const duration=document.getElementById("duration");
const list=document.getElementById("list");
function music(index){
   const s=song[index];
   title.textContent=s.title;
   artist.textContent=s.artist;
   audio.src=s.src;
   cover.src=s.cover;
   update();
}
function playpause(){
    if(audio.paused){
        audio.play();
        playbtn.textContent="⏸️";
    }
    else{
        audio.pause();
        playbtn.textContent="▶️"
    }
}

function playprev(){
    current=(current-1+song.length)%song.length;
    music(current);
    audio.play();
    playbtn.textContent="⏸️";
}
function playnext(){
    current=(current+1)%song.length;
    music(current);
    audio.play();
    playbtn.textContent="⏸️"
}
function uptprogress(){
    if(!audio.duration){
        return;
    }
    progress.value=(audio.currentTime/audio.duration)*100;
    currenttime.textContent = formatTime(audio.currentTime);
    duration.textContent=formatTime(audio.duration);
}
function setprogress(){
    audio.currentTime=(progress.value/100)*audio.duration;
}
function formatTime(time){
    let min=Math.floor(time/60);
    let sec=Math.floor(time%60);
    return `${min}:${sec<10?"0"+sec:sec}`;
}
function update(){
    list.innerHTML="";
    song.forEach((s,index)=>{
        const li=document.createElement("li");
        li.textContent=s.title;
        if(index==current)li.classList.add("active");
        li.onclick=()=>{
            current=index;
            music(current);
            audio.play();
            playbtn.textContent="⏸️";
        };
        list.appendChild(li);
    });
}
playbtn.onclick=playpause;
prevbtn.onclick=playprev;
nextbtn.onclick=playnext;
audio.ontimeupdate=uptprogress;
volume.oninput = () => {
    audio.volume = volume.value;
};
audio.onended=playnext;

music(current);