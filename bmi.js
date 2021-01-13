function calculator(){
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;
    var BMI = w/((h/100)*(h/100));
    document.getElementById('result').innerHTML = ("BMI = " + BMI)
    if (BMI>=30) {
        var result = "โรคอ้วนระดับ3" }
    else if (BMI>=25 && BMI<=29.90) {
        var result = "โรคอ้วนระดับ2"}
    else if (BMI>=23 && BMI<=24.90) {
        var result = "โรคอ้วนระดับ1" }
    else if (BMI>=18.50 && BMI<=22.90) {
        var result = "สุขภาพดี"}
    else if (BMI<= 18 && BMI>0) {
        var result = "ผอม"}
    else {
        var result = "ไม่ทราบค่าที่ชัดเจน"}
    document.getElementById('result2').innerHTML = result
}
