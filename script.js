function updateClock(){
  const now=new Date();
  const h=String(now.getHours()).padStart(2,'0');
  const m=String(now.getMinutes()).padStart(2,'0');
  const s=String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clock').textContent=`${h}:${m}:${s}`;
}

function showRandomQuote(){
  const quotes=[
    "People keep asking if I'm back... yeah, I'm thinking I'm back!",
    "You can either hand over your son... or you can die screaming alongside him!",
    "Guns. Lots of guns.",
    "I once saw him kill three men in a bar... with a pencil.",
    "He's not the boogeyman. He's the one you send to kill the boogeyman.",
    "You stabbed the devil in the back. To him, this isn't vengeance. This is justice.",
    "I'm not afraid of John Wick. - You should be.",
    "Everything's got a price, bitch.",
    "You wanted me back… I'm back."
  ];
  const randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById('quote').textContent=`"${randomQuote}"`;
}

function loadAnimation(){
  lottie.loadAnimation({
    container:document.getElementById('john-wick-animation'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'johnwick.json' 
  });
}

window.addEventListener('click', () => {
  const audio=document.getElementById('bgm');
  if(audio){
    audio.muted=false;
    audio.play().catch(err=>console.log("Autoplay blocked:",err));
  }
},{once:true});

document.addEventListener('visibilitychange',()=>{
  const audio=document.getElementById('bgm');
  if(!audio)return;
  if(document.hidden){
    audio.pause();
  }
  else{
    audio.play().catch(err=>console.log("Playback error:",err));
  }
});

updateClock();
setInterval(updateClock,1000);
showRandomQuote();
loadAnimation();
