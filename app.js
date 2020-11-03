
var image=document.getElementById("image");
var percentage=document.querySelectorAll(".percentage");
var prog=document.querySelectorAll(".prog");
for(i=0;i<prog.length;i++){
	prog[i].style.width=percentage[i].innerHTML;
	percentage[i].style.width=(100-Number(percentage[i].innerHTML.substring(0,2))) + "%";
}
var image_num=1;
opacity=10;
setTimeout(fadeout, 3000);
function slider(){
	if(image_num===3)
		image_num=0;
	else
	image_num++;
	value="images/"+image_num+".jpg";
	image.setAttribute("src", value);
	fadein();
}
function fadeout(){
	image.style.opacity=0.1*opacity;
	opacity--;
	if(opacity!=4)
	setTimeout(fadeout, 30);
	else
		slider();
}
function fadein(){
	image.style.opacity=0.1*opacity;
	opacity++;	
	if(opacity!=10)
		setTimeout(fadein, 30);
	else
		setTimeout(fadeout, 3000);
}