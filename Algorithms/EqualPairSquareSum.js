//Problem Statement - Print all positive numbers between 1 and max(1000) where a^3 + b^3 == c^3 + d^3

var max = 100

function solution1(){
    for(var a=0; a<max; a++){
        for(var b=0; b<max; b++){
            for(var c=0; c<max; c++){
                for(var d=0; d<max; d++){
                    if(a*a*a + b*b*b == c*c*c + d*d*d){
                        console.log(a,b,c,d);
                    }
                }
            }
        }
    }
}

function solution2(){
    for(var a=0; a<max; a++){
        for(var b=0; b<max; b++){
            for(var c=0; c<max; c++){
                for(var d=0; d<max; d++){
                    if(a*a + b*b == c*c + d*d){
                        console.log(a,b,c,d);
                        break;
                    }
                }
            }
        }
    }
}

function solution3(){
    for(var a=0; a<max; a++){
        for(var b=0; b<max; b++){
            for(var c=0; c<max; c++){
                var d = Math.round(Math.pow(a*a*a + b*b*b - c*c*c, 1/3));
                if(a*a + b*b == c*c + d*d && 0<d && d<max && a!=c ){
                    console.log(a,b,c,d);
                    break;
                }
            }
        }
    }
}

//SOLUTION 1 - iterate through all values [complexity O^4]
//solution1(); 

//SOLUTION 2 - break from loop once a valid value for d is found  [Complexity O^4]
//solution2(); 

//SOLUTION 3 - if a^3 + b^3 == c^3 + d^3 is true that means d = (a^3 + b^3 - c^3)^1/3
solution3();