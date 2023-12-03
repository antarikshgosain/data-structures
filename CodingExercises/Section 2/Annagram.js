function validAnnagram(str1, str2){
    var map1 = {};
    var map2 = {};
    for(var char of str1){
        if(char in map1){
            map1[char] += 1;
        } else {
            map1[char] = 1
        }
    } 
    for(var char of str2){
        if(char in map2){
            map2[char] += 1;
        } else {
            map2[char] = 1
        }
    }
    console.log("Map1",map1);
    console.log("Map2",map2);

    for(var curr in map1){
        console.log(curr, map1[curr]);
        if(curr in map2 && map2[curr]===map1[curr]){
            console.log("deleting", map2[curr]);
            delete map2[curr];
            delete map1[curr];
        }
    }
    
    console.log("Map1",map1);
    console.log("Map2",map2);


    console.log('\nRESUTLS');
    if(JSON.stringify(map2) === '{}' && JSON.stringify(map1) === '{}'){
        console.log('ANNAGRAM');
        return true;
    } else {
        console.log('NOT ANNAGRAM');
        return false
    }

}

validAnnagram("cinema","iceman");