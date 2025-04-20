function Pro_BMI()
{   var input_weight = document.getElementById("input-weight");
    var input_height = document.getElementById("input-height");
    var weight = parseFloat(input_weight.value);
    var height = parseFloat(input_height.value);

    if(weight === "" || height ==="")
    {
        document.getElementById('result').innerHTML = "Is NaN"
    }
    var bmi = weight/(height*height);
    var re_bmi = "";
    if(bmi < 18.5)
    {
        re_bmi = "ต่ำกว่าเกณฑ์";
    }
    else if(bmi <= 22.9)
    {
        re_bmi = "สมส่วน";
    }
    else if(bmi <= 24.9)
    {
        re_bmi = "มาตราฐาน"
    }
    else if(bmi <=29.9)
    {
        re_bmi = "อ้วน"
    }
    else {
        re_bmi = "เกินกว่าเกณฑ์"
    }
    document.getElementById("result").innerHTML = bmi.toFixed(1)+"  "+re_bmi
}