
var colorMap=new Map();
var colorCode=["red","green","brown","yellow","blue","white","magenta"];
colorMap.set(colorCode[0],"rgb(255, 0, 0)");
colorMap.set(colorCode[1],"rgb(0, 255, 0)");
colorMap.set(colorCode[2],"rgb(160, 82, 45)");
colorMap.set(colorCode[3],"rgb(255, 255, 0)");
colorMap.set(colorCode[4],"rgb(0, 0, 255)");
colorMap.set(colorCode[5],"rgb(255, 255, 255)");
colorMap.set(colorCode[6],"rgb(0, 255, 255)");
var squares=document.querySelectorAll(".square");
var colorMessage=document.querySelector("h1 span");	
var resetButton= document.querySelector(".message button");
var pickedColor=colorPicker();
var rightcolor=colorMap.get(pickedColor);
var displayBox=squares.length;
colorMessage.textContent=pickedColor;
var diffButton=document.querySelectorAll(".mode");

for(var i=0;i<squares.length;i++){	
	
	
	squares[i].addEventListener("click",function()
	{
		var clickedColor=this.style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor===rightcolor)
			{
				rightAns(rightcolor);
				document.querySelector(".message span").textContent="Right";
				resetButton.textContent="Play Again?";
					document.querySelector("h1").style.backgroundColor=rightcolor;
			}
		else 
			{
				this.style.backgroundColor="#1a1a1a";
				document.querySelector(".message span").textContent="Try Again";
			}
	})
}


for(var i=0;i<diffButton.length;i++)
diffButton[i].addEventListener("click",function()
{
	document.querySelector("h1").style.backgroundColor=" #0077b3";
	diffButton[0].classList.remove("selected");
	diffButton[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent==="Easy" ? displayBox=3: displayBox=squares.length;
	colorsetup();
});


function colorsetup()
{
	pickedColor=colorPicker();
	rightcolor=colorMap.get(pickedColor);
	colorMessage.textContent=pickedColor;
	document.querySelector(".message span").textContent="";
	squareFill(displayBox);
	if(displayBox===3)
	{
		for(var i=3;i<squares.length;i++)
		squares[i].style.display="none";
	}
	else
	{
			for(var i=3;i<squares.length;i++)
		squares[i].style.display="block";
	
	}

}

//reset all the colors in square
resetButton.addEventListener("click",function(){
	resetButton.textContent="New Colors"

	colorsetup();
	document.querySelector("h1").style.backgroundColor="#0077b3";
});
squareFill(squares.length);
	
//changes all square to the right answer color
function rightAns(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}

}
//random color for guessing
function colorPicker()
{
	return colorCode[Math.floor(Math.random()*colorCode.length)];
}
//to fill the square with color
function squareFill(blocknum)
{
	var gotColor=false;
	for(var i=0;i<blocknum;i++)
	{
		squares[i].style.backgroundColor=colorMap.get(colorCode[Math.floor(Math.random()*(colorCode.length))]);
	//check if the right color is in the square
	if(squares[i].style.backgroundColor===rightcolor)
			gotColor=true;
	//if the right color is not in the squares we take it and give it a random position
	if((i===blocknum-1) && !gotColor)
		{
			
			squares[Math.floor(Math.random()*blocknum)].style.backgroundColor=rightcolor;
		}
	}
}

