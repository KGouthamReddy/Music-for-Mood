
var songrun=false;
var count=1;
var mod=1;
var path=[
"songs/1 Ignite.mp3"
,"songs/2 Sing Me to Sleep.mp3"
,"songs/3 On My Way.mp3"
,"songs/4 Alone.mp3"
,"songs/5 Liar.mp3"
,"songs/6 Dont Let Me Down.mp3"
,"songs/7 Dance Monkey.mp3"
,"songs/8 Perfect.mp3"
,"songs/9 I Dont Care.mp3"
,"songs/10 Faded.mp3"
,"songs/11 Happier.mp3"
,"songs/12 In the End.mp3"
,"songs/13 Lily.mp3"
,"songs/14 Memories.mp3"
,"songs/15 Earth Song.mp3"
,"songs/16 Rescue Me.mp3"
,"songs/17 Scars To Your Beautiful.mp3"
,"songs/18 Who Says.mp3"
,"songs/19 Trampoline.mp3"
,"songs/20 Stitches.mp3"
,"songs/21 Chandelier.mp3"
,"songs/22 Cheap Thrills.mp3"
,"songs/23 Takeaway.mp3"
,"songs/24 You Need To Calm Down.mp3"
,"songs/25 Sweater Weather.mp3"
,"songs/6 Hymn for the Weekend.mp3"
,"songs/27 There You Are.mp3"
,"songs/28 The Night We Met.mp3"
,"songs/29 Careless Whisper.mp3"
];

var sname=["Ignite",
"Sing Me To Sleep",
"On My Way",
"Alone",
"Liar",
"Dont Let Me Down",
"Dance Monkey",
"Perfect",
"I Dont Care",
"Faded",
"Happier",
"In the End",
"Lily",
"Memories",
"Earth Song",
"Rescue Me",
"Scars To Your Beautiful",
"Who Says",
"Trampoline",
"Stiches",
"Chandelier",
"Cheap Thrills",
"Takeaway",
"You Need To Calm Down",
"Sweater Weather",
"Hymn For The Weekend",
"There You Are",
"The Night We Met",
"Careless Wishper"
];

var sd=[
"<center><b>K-391</b><br>Ignite</center>"
,"<center><b>Alan Walker</b><br>Sing Me To Sleep</center>"
,"<center><b>Sabrina Carpenter</b><br>On My Way</center>"
,"<center><b>Ava Max</b><br>Alone</center>"
,"<center><b>Camila Cabello</b><br>Liar</center>"
,"<center><b>The_Chainsmokers</b><br>Don't Let Me Down</center>"
,"<center><b>Tones and I</b><br>Dance Monkey</center>"
,"<center><b>Ed_Sheeran</b><br>Perfect</center>"
,"<center><b>Ed_Sheeran</b><br>I Don't Care</center>"
,"<center><b>Alan_Walker</b><br>Faded</center>"
,"<center><b>Marshello</b><br>Happier</center>"
,"<center><b>Tommee Profitt</b><br>In the End</center>"
,"<center><b>Emelie Hollow</b><br>Lily</center>"
,"<center><b>Maroon 5</b><br>Memories</center>"
,"<center><b>Michael_Jackson</b><br>Earth</center>"
,"<center><b>One Republic</b><br>Rescue Me</center>"
,"<center><b>Alessia Cara</b><br>Scars To Your Beautiful</center>"
,"<center><b>Selena Gomez</b><br>Who Says</center>"
,"<center><b>Shaed</b><br>Trampoline</center>"
,"<center><b>Shawn Mendes</b><br>Stiches</center>"
,"<center><b>Sia</b><br>Chandelier</center>"
,"<center><b>Sia</b><br>Cheap Thrills</center>"
,"<center><b>The Chainsmokers</b><br>Takeaway</center>"
,"<center><b>Taylor Swift</b><br>You Need To Calm Down</center>"
,"<center><b>Neighbourhood</b><br>Sweater Weather</center>"
,"<center><b>Coldplay</b><br>Hymn for the Weekend</center>"
,"<center><b>ZAYN</b><br>There You Are</center>"
,"<center><b>Lord_Huron</b><br>The Night We Met</center>"
,"<center><b>George Michael</b><br>Careless Whisper</center>"
];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["wimages/Ignite.jpg",
"wimages/Sing Me To Sleep.jpg",
"wimages/On My Way.jpg",
"wimages/Alone.jpg",
"wimages/Liar.jpg",
"wimages/Dont Let Me Down.jpg",
"wimages/Dance Monkey.jpg",
"wimages/Perfect.jpg",
"wimages/I Dont Care.jpg",
"wimages/Faded.jpg",
"wimages/Happier.jpg",
"wimages/In the End.jpg",
"wimages/Lily.jpg",
"wimages/Memories.jpg",
"wimages/Earth.jpg",
"wimages/Rescue Me.jpg",
"wimages/Scars To Your Beautiful.jpg",
"wimages/Who Says.png",
"wimages/Trampoline.jpg",
"wimages/Stiches.jpg",
"wimages/Chandelier.jpg",
"wimages/Cheap Thrills.jpg",
"wimages/Takeaway.jpg",
"wimages/You Need To Calm Down.jpg",
"wimages/Sweater Weather.jpg",
"wimages/Hymn for the Weekend.jpg",
"wimages/There You Are.jpg",
"wimages/The Night We Met.jpg",
"wimages/Careless Whisper.jpg",
];

var mood=[
"1","2","3","4","5","6","7","8","9","10"
,"11","12","13","14","15","16","17","18","19","20"
,"21","22","23","24","25","26","27","28","29"
];
var mmm=[
"wimages/Angryemoji.png",
"wimages/Sademoji.png",
"wimages/Sademoji.png",
"wimages/Angryemoji.png",
"wimages/Angryemoji.png",
"wimages/Neutralemoji.png",
"wimages/Happyemoji.png",
"wimages/Neutralemoji.png",
"wimages/Happyemoji.png",
"wimages/Sademoji.png",
"wimages/Happyemoji.png",
"wimages/Sademoji.png",
"wimages/Sademoji.png",
"wimages/Neutralemoji.png",
"wimages/Sademoji.png",
"wimages/Angryemoji.png",
"wimages/Sademoji.png",
"wimages/Sademoji.png",
"wimages/Neutralemoji.png",
"wimages/Angryemoji.png",
"wimages/Neutralemoji.png",
"wimages/Happyemoji.png",
"wimages/Angryemoji.png",
"wimages/Angryemoji.png",
"wimages/Neutralemoji.png",
"wimages/Angryemoji.png",
"wimages/Happyemoji.png",
"wimages/Happyemoji.png",
"wimages/Happyemoji.png"
];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	// ins.onclick=function(){
	// next(this);
 //  	};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'> <input type="hidden" id="'+"a"+i+'" class="play" > <input type="hidden" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		// play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		// addq(this);
	};	
}

