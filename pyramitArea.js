function pyramitArea(length,width,height){
    let baseArea = length * width;
    let pyramitVolume = 1/3 * baseArea * height;
    return pyramitVolume;
}
let area1 = pyramitArea(7,7,3);
let area2 = pyramitArea(9,9,3);
console.log('พื้นที่ 1 = ' + area1 + ', พื้นที่ 2 = ' + area2);