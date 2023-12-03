function sameFrequency(num1, num2){
    var str1 = num1.toString();
    var str2 = num2.toString();
    if(str1.length !== str2.length){
        return false;
    }
    console.log("str1",str1,"\str2",str2);
    var obj1 = {};
    var obj2 = {};
    for(var ch of str1){
        if(ch in obj1){
            obj1[ch] += 1 ;
        } else {
            obj1[ch] = 1;  
        }
    }
    for(var ch of str2){
        if(ch in obj2){
            obj2[ch] += 1 ;
        } else {
            obj2[ch] = 1;  
        }
    }
    console.log("obj1",obj1,"\nobj2",obj2);
    if(JSON.stringify(obj1)==JSON.stringify(obj2)){
        return true;
    } else {
        return false
    }
    
}

console.log(sameFrequency (182, 281));
console.log(sameFrequency (34, 14));
console.log(sameFrequency (3589578, 5879385));
console.log(sameFrequency (22, 222));
