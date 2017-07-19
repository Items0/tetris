function sleep (milliseconds) 
{
  var start = new Date().getTime();
  while((new Date().getTime() - start) < milliseconds);
}

function start(e)
{
	if(e.keyCode == 32 || e.button == 0)
	{
		var myButton = document.getElementById('startButton');
		for(var i = 3; i >= 1; i--)
		{
			myButton.textContent = i;
			sleep(1000);
		}
		var which = Math.random(3).floor();
	}
}
document.addEventListener('keydown', start);
document.getElementById('startButton').addEventListener('click', start);
function moveShape()
{
	
}

function check()
{
	
}

function score()
{
	
}