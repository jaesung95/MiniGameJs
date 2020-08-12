var word = '이재성'
while(true){
    var answer = prompt(word) 
    if (word[word.length-1] === answer[0]) {
    word = answer;
    //정답일 때
    alert('yes')    
} else {
    //틀렸을 떄
    alert('no')    
    }
}

//while 문을 for문으로 바꿀때

// for ( 처음 중간 끝 )
for(var word = '홍영준'; true;) {
    var answer = prompt(word) 
    if (word[word.length-1] === answer[0]) {
    word = answer;
    //정답일 때
    alert('yes')    
} else {
    //틀렸을 떄
    alert('no')    
    }
}