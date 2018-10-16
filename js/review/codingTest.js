console.log(1 == {valueOf:function(){
			return true;
		}});


console.log('1e0');
console.log(1e0);
console.log({valueOf:function(){
						return true;
								}
			 }
			);
//valueOf method returns primitive value of the specified object
//'1e0'

alert({valueOf:function(){
					return true;
						}
		}
		);
