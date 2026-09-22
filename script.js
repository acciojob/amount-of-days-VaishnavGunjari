//your JS code here. If required
function daysOfAYear(n){
	if (n%400==0 || (n%100!==0 && n%4==0)){
		return 366
	}else{
		return 365
	}
}