const numberOfRoots= function(a, b, c){
	const determinant=b*b-4*a*c;
	if(determinant<0)
		return 0;
	if(determinant===0)
		return 1;
	return 2;
};
const MyName=function(){
	return "Harut";
};
const Sum=function(a1, a2, a3, a4){
	a4=a1+a2+a3+a4;
	console.log(a4);
};

const fullName=function(firstName, lastName){
	return firstName+" "+lastName;
};

const max=function(a, b){
	if(a.length>b.length)
		return a;
	return b;
};
const theLongest=function(s1, s2, s3){
	return max(max(s1,s2),s3);
	};
	
const theBiggest=function(num1, num2){
	if(num1===num2)
		return 0;
	if(num1>num2)
		return 1;
	return -1;
};
const firstTruthy=function(s1, s2, s3){
	if(!!s1===true)
		return s1;
	if(!!s2===true)
		return s2;
	return s3;
};
	