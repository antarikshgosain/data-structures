function isSubsequence(word, sentence){

    var wordPointer = 0 ;
    var sentencePointer = 0 ;

    for ( var i=0 ; i<sentence.length ; i++ ) {
        console.log( word[wordPointer] , sentence[i] );
        if(word[wordPointer] === sentence[i]){
            wordPointer++;
        }
        if(wordPointer === word.length){
            return true;
        }
    }
    return false;
}



console.log(isSubsequence( "hello", "hello world" )); // true
console.log(isSubsequence( "sing", "sting")); // true
console.log(isSubsequence( "abc", "abracadabra " )) ; // true
console.log(isSubsequence("abc", "acb"));// false (order matters)