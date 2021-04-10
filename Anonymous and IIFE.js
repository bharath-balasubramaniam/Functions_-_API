//Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let odd = function(data) {
	let add = [];
	for (i of data) {
		if(i%2===1) {
			add.push(i);
		}
	}
	return add;
}
console.log(odd(arr));
    //IIFE
let odd1 = (function(data) {
	let add = [];
	for (i of data) {
		if(i%2===1) {
			add.push(i);
		}
	}
	return add;
})(arr);
console.log(odd1);

//Sum of all numbers in an array

let sum = function(data) {
	let sum = 0;
	for(i of data) {
		sum += i;
	}
	return sum;
}
console.log(sum(arr));
	//IIFE
let sum1 = (function(data) {
	let sum = 0;
	for(i of data) {
		sum+=i;
	}
	return sum;
})(arr);
console.log(sum1);

//Remove duplicates from an array

let arr1 = [1,2,1,3,4,5,6,4,3,8,2,9,11,3,13,8,10]
let dup = function(data) {
	let dup = [];
	for(i of data) {
		if(i in dup) {
		}else {
			dup.push(i);
		}
	}
	return dup;
}
console.log(dup(arr1));
	//IIFE
let dup1 = (function(data) {
	let dup = [];
	for(i of data) {
		if(i in dup) {
		}else {
			dup.push(i);
		}
	}
	return dup;
})(arr1);
console.log(dup1);

// Return all the prime numbers in an array

let arr2 = [129,13,11,2,5,6,165132,39641,4552714,157,1426,13846,123425,1]
let prime = function(num){
	if(num===2) {
		return true;
	}
	if (num<2 || num%2===0) {
		return false;
	}
	if(num%2===1){
		for (fact =3; fact*fact <= num; fact +=2) {
			if(num%fact === 0) {
				return false;			}
		}
		return true;
	}
}
let bv = arr2.filter(prime);
console.log(bv);
	//IIFE
let prime1 = (function(data) {
	let prime = [];
	let no_prime = [];
	for( i of data) {
		if(i ===2) {
			prime.push(i);
		}else if(i<2||i%2===0) {
			no_prime.push(i);
		}else if(i>2 && i%2!==0) {
			for(let k = 3; k <= i; k++) {
				if(i%k === 0) {
					if(i === k) {
						prime.push(i);
						break;
					}else {
						no_prime.push(i);
						break;
					}
				}
			}
		}
			
	}	
	return prime;
})(arr2);
console.log(prime1);

//Rotate an array by k times and return the rotated array.

let arr4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let rotate = function rot(arr,k) {
	let ar = [...arr];
	for(let i = 0 ; i <=k-1; i++) {
		let re = ar.shift(ar[i]);
        ar.push(re);
	}
	return ar;
	
}
console.log(rotate(arr4,2));
//IIFE
let rotate1 = (function rot(arr,k) {
	let ar = [...arr];
	for(let i = 0 ; i <=k-1; i++) {
		let re = ar.shift(ar[i]);
        ar.push(re);
	}
	return ar;	
})(arr4,2);
console.log(rotate1);

//Return median of two sorted arrays of same size

let a = [8,9,44,55,2,3];
let b = [6,4,12,32,41,11];
let median = function(a,b) {
	let c = [];
	for( i of a) {
		c.push(i);
	}
	for(j of b){
		c.push(j)
	}
	c.sort(function(a,b){return(a-b)});
	let med = c.length/2;
	med = Math.round(med);
	if(c.length%2 === 0) {
		var medi = ((c[med-1])+(c[med]))/2;
	}
	else if(c.length%2===1) {
		var medi = (c[med-1])
	}
	return medi;
}
console.log(median([1,2,3],[8,7,6]));
//IIFE
let median1 = (function(a,b) {
	let c = [];
	for( i of a) {
		c.push(i);
	}
	for(j of b){
		c.push(j)
	}
	c.sort(function(a,b){return(a-b)});
	let med1 = c.length/2;
	med1 = Math.round(med1);
	if(c.length%2 === 0) {
		var medi1 = ((c[med1-1])+(c[med1]))/2;
	}
	else if(c.length%2===1) {
		var medi1 = (c[med-1])
	}
	return medi1;
})([1,2,3],[6,7,8]);
console.log(median1);

//Convert all the strings to title caps in a string array 

let s = 'welcome to the guvi zen class';
let caps = function(str) {
  let j = [];
	let st = s.split(' ');
	for ( i of st) {
		j.push(i[0].toUpperCase()+i.slice(1,i.length));
	}
  return j.join(' ');
}
console.log(caps(s));
//IIFE
let s1 = (function(str) {
	let j = [];
	  let st = str.split(' ');
	  for ( i of st) {
		  j.push(i[0].toUpperCase()+i.slice(1,i.length));
	  }
	return j.join(' ');
})('welcome to the guvi zen class');
console.log(s1);

//Return all the palindromes in an array

let a5 = ['content','hi','dad','did','mom','hello']

function poli(data) {
	let nor = [];
	let nor1 = [];
	let result = [];
	for(i of data) {
	  for(let k =0 ; k < i.length; k++) {
		nor.push(i[k]);
		nor1.unshift(i[k]);
	  }
	  if(JSON.stringify(nor)===JSON.stringify(nor1)) {
		result.push(i);
	  }
	  nor.splice(0,nor.length);
	  nor1.splice(0,nor1.length);
	}
	return result;
}
console.log(poli(a5));
	// IIFE
let a51 = (function poli(data) {

	let nor = [];
	let nor1 = [];
	let result = [];
	for(i of data) {
		for(let k =0 ; k < i.length; k++) {
			nor.push(i[k]);
			nor1.unshift(i[k]);
		}
	  	if(JSON.stringify(nor)===JSON.stringify(nor1)) {
			result.push(i);
	  	}
		nor.splice(0,nor.length);
		nor1.splice(0,nor1.length);
	}
	return result;
})(['content','hi','dad','did','mom','hello']);
console.log(a51);