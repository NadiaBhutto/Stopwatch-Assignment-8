

var min = 0;
var sec = 0;
var mSec = 0;	
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var mSecHeading = document.getElementById("mSec");
var interval;

function timer(){
	mSec++
	mSecHeading.innerHTML = mSec;
	if(mSec >= 100){
		sec++
		secHeading.innerHTML = sec;
		mSec = 0;
	}else if(sec >= 60){
		min++
		minHeading.innerHTML = min;
		sec = 0;	
	}
}

function start(){
     interval = setInterval(timer,10)
	 document.getElementById("start_btn").disabled = true;
}
function pause(){
	clearInterval(interval)
	document.getElementById("start_btn").disabled = false;
}
function resetbtn(){
	min = 0;
	sec = 0;
	mSec = 0;
	minHeading.innerHTML = min;
	secHeading.innerHTML = sec;
	mSecHeading.innerHTML = mSec;
	pause();
	document.getElementById("start_btn").disabled = false;
}
















