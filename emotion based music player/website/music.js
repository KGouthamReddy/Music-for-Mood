
var songrun=false;
var count=1;
var mod=1;
var path=[
"songs/1 Ignite.mp3"
,"songs/3 On My Way.mp3"
,"songs/6 Dont Let Me Down.mp3"
,"songs/7 Dance Monkey.mp3"
,"songs/9 I Dont Care.mp3"
,"songs/4 Careless Whisper.mp3"
,"songs/14 Memories.mp3"
,"songs/8 Scars To Your Beautiful.mp3"
,"songs/2 In the End.mp3"
,"songs/10 The Night We Met.mp3"
];

var sname=["Ignite",
"On My Way",
"Dont Let Me Down",
"Dance Monkey",
"I Dont Care",
"Careless Whisper",
"Memories",
"Scars To Your Beautiful",
"In the End",
"The Night We Met",
];

var sd=[
"<center><b>K-391</b><br>Ignite</center>"
,"<center><b>Sabrina Carpenter</b><br>On My Way</center>"
,"<center><b>The_Chainsmokers</b><br>Don't Let Me Down</center>"
,"<center><b>Tones and I</b><br>Dance Monkey</center>"
,"<center><b>Ed_Sheeran</b><br>I Don't Care</center>"
,"<center><b>George Michael</b><br>Careless Whisper</center>"
,"<center><b>Maroon 5</b><br>Memories</center>"
,"<center><b>Alessia Cara</b><br>Scars To Your Beautiful</center>"
,"<center><b>Tommee Profitt</b><br>In the End</center>"
,"<center><b>Lord_Huron</b><br>The Night We Met</center>"
];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["wimages/Ignite.jpg",
"wimages/On My Way.jpg",
"wimages/Dont Let Me Down.jpg",
"wimages/Dance Monkey.jpg",
"wimages/I Dont Care.jpg",
"wimages/Careless Whisper.jpg",
"wimages/Memories.jpg",
"wimages/Scars To Your Beautiful.jpg",
"wimages/In the End.jpg",
"wimages/The Night We Met.jpg",
];

var mood=[
["1","2","3"],["4","5"],["6","7","8"],["9","10"]];

var mmm=[
"wimages/Angryemoji.png",
"wimages/Angryemoji.png",
"wimages/Angryemoji.png",
"wimages/Happyemoji.png",
"wimages/Happyemoji.png",
"wimages/Sademoji.png",
"wimages/Sademoji.png",
"wimages/Sademoji.png",
"wimages/Neutralemoji.png",
"wimages/Neutralemoji.png",
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
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
		alert("Queue is empty.");
		return;
}
var elem=document.getElementById("e"+sqc);
	var xa=elem.name;
	var pa=songs[xa][0];
	bool[xa]=false;
	document.getElementById("sname").innerHTML=sname[xa];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
	
	songrun=true;
	document.getElementById("queue").removeChild(elem);	
	sqc=sqc+1;

}

function next_in_Q(){
	songrun=false;
	if(sqc==eqc){
		alert("Queue is empty.");
		return;
	}
	var elem=document.getElementById("e"+sqc);
	var xa=elem.name;
	var pa=songs[xa][0];
	document.getElementById("sname").innerHTML=sname[xa];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
	songrun=true;
	document.getElementById("queue").removeChild(elem);	
	sqc=sqc+1;
	}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }