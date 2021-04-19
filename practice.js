// let a = [1,2,3];
let b = [];

// console.log(a);

// a.push(4);

// console.log(a);

// a.push(5)
// a.push(6)
// a.push(7)
// a.push(8)
// a.push(9)
// a.push(10)

// console.log(a);

// for(i=11;i<21;i++){
//     a.push(i);
// };

// console.log(a);

for(i=1;i<13;i++){
    if(i%3==0){
        b.push(i);
    }
}



for(i=0;i<4;i++){
    console.log(b[i]);    
    
}


b.forEach(function(item, index, arr){ // 위에 25~36줄 for 문과 39~41줄은 forEach문은 같다. 
    console.log(item);                //  forEach문은 위 for문처럼  13보다작은 3의 배수들을 엘리먼트로 가지고 있는 배열이고 그 배열들을 인덱스값으로 불러와싿.
});
                             