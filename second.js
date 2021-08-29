const a=prompt('a');
const b=prompt('b'); 
const c=prompt('c');   // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
let count=b*b-4*a*c;
if(count>0){
    solutionA=(-b + Math.sqrt(count)) / (2 * a);
    solutionB=(-b - Math.sqrt(count)) / (2 * a);
}
if (count == 0) {
    solutionA = solutionB = -b / (2 * a);
}
if(count<0){
    console.log("no solution");

}


// your code goes here
console.log(solutionA, solutionB);