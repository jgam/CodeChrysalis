for(let cond=1; cond<101; cond++){
	if(cond % 15 == 0){
		console.log('fizzbuzz');
	}
	else if(cond % 3 == 0){
		console.log('fizz');
	}
	else if(cond % 5 == 0){
		console.log('buzz');
	}
	else{
		console.log(cond)
	}
}
