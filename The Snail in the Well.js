/*
คำนวณจำนวนวันในการปีนของหอยทาก
เดินได้วันละ 7 feet และตอนกลางคืนจะถอย 2 feet
input = จำนวนระยะทาง output = จำนวนวันที่จะเดินได้ โดยวันสุดท้ายไม่นับ 2 feet ที่ถอยหลัง 
*/
function main(){
    depth = prompt();
    if ((depth%5) <= 2){
        console.log(Math.ceil(depth/5)-1)
    }
    else {
        console.log(Math.ceil(depth/5))
    }
}
/*
ex 
input = 31 output = 6
d1 7-2=5
d2 5+7-2=10
d3 10+7-2=15
d4 15+7-2=20
d5 20+7-2=25
d6 25+7=32
 */