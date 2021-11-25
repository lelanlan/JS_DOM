function mOver(obj) {
    obj.style.backgroundColor="blue"
}
function mOut(obj) {
    obj.style.backgroundColor="#a70e1a"
}
function changeColor(){
    document.getElementById("paragraph1").style.color="green"
    document.getElementById("paragraph2").style.color="yellow"
    document.getElementById("paragraph3").style.color="red"
}
function changeBgColor(){
    document.body.style.backgroundColor="#e6c3c3"
}
function copyContent(paragraph1, paragraph2){
    document.getElementById(paragraph1).innerHTML="Bảng A: Man City (12 điểm), PSG (8 điểm) đã giành hai tấm vé đi tiếp. Thậm chí, ở bảng đấu này hai vị trí đầu bảng chắc chắn sẽ không đổi chủ. Lượt cuối Man City thi đấu với RB Leipzig (4 điểm) , PSG thi đấu với Club Brugge (4 điểm). Như vậy ở bảng A, lượt cuối chỉ để xác định đội bóng sẽ dự Europa League."
    document.getElementById(paragraph2).innerHTML="Lượt trận thứ năm vòng bảng Champions League đã kết thúc, 11 đội bóng đã giành vé đi tiếp bao gồm: Man City, PSG, Liverpool, Ajax, Sporting, Real Madrid, Inter Milan, Bayern Munich, Man Utd, Chelsea, Juventus."
}
function changeFontSize(){
    document.getElementById("paragraph1").style.fontSize="20px"
    document.getElementById("paragraph2").style.fontSize="20px"
    document.getElementById("paragraph3").style.fontSize="20px"
}
function increaseFontSize(){
    var el = document.getElementById("paragraph1");
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(fontSize<30) {
        el.style.fontSize = (fontSize + 1) + 'px';
    }
    var el2 = document.getElementById("paragraph2");
    var style = window.getComputedStyle(el2, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(fontSize<30) {
        el2.style.fontSize = (fontSize + 1) + 'px';
    }
    var el3 = document.getElementById("paragraph3");
    var style = window.getComputedStyle(el3, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(fontSize<30) {
        el3.style.fontSize = (fontSize + 1) + 'px';
    }
}
function decreaseFontSize(){
    var el = document.getElementById("paragraph1");
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(fontSize>10) {
        el.style.fontSize = (fontSize - 1) + 'px';
    }
    var el2 = document.getElementById("paragraph2");
    var style = window.getComputedStyle(el2, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(fontSize>10) {
        el2.style.fontSize = (fontSize - 1) + 'px';
    }
    var el3 = document.getElementById("paragraph3");
    var style = window.getComputedStyle(el3, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(fontSize>10) {
        el3.style.fontSize = (fontSize - 1) + 'px';
    }
}