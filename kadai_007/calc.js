//数字をランダムに生成
let num = Math.floor(Math.random() * 14);

//if文で判断
if (num % 3 == 0 && num % 5 == 0) {
    console.log('3と5の倍数です');
} 
else if (num % 3 == 0) {
    console.log('3の倍数です');
}
else if (num % 5 == 0) {
    console.log('5の倍数です');
}
else{
    console.log(num);
}
