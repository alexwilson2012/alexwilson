


function bounce(obj,bounce_count)
{
	var obj_top_start = obj.offsetTop;
	var obj_left_start = obj.offsetLeft;
	obj.style.position = 'absolute';
	obj.style.left = (obj_left_start)+'px';
	obj.style.top = (obj_top_start+10)+'px';
}