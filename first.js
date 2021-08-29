const which=('choose a 3-digit number');
let num1=which;
let sum=0;
for(let i=0;i<3;i++){
sum+=num1%10;
num1=Math.floor(num1/10);
}



console.log(sum);
