var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


function clickEvent(){
    var x=document.getElementById('helpText');
    var btn=document.getElementById('btn');
    if(x.style.display==="none"){
        x.style.display="block";
        btn.innerHTML="Close";
    }
    else{
        x.style.display="none"
        btn.innerHTML="Instructions"
    }
   
}

function inputLength(){
    return input.value.length;
}
function listLength(){
    return item.length;
}

function createListElement(){
    //creates li Elements
    var li = document.createElement("li");
    //Append it to the input value
    li.appendChild(document.createTextNode(input.value));
    //It will make text from input field(The li list)
    ul.appendChild(li);
    // Add li to ul
    input.value="";
    //Reset test input field
    	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items

    function crossOut(){
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);
    // End strikeThrough

    //Start add delete button
    var dBtn= document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
