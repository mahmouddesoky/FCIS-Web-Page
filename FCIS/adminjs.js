var x;
function getmousee(obj) {
    x = obj.id;
}
function addclickk() {
    var element = document.getElementById("admin");
    var y = element.childElementCount;
    var value = document.getElementById("test").value;
    var para = document.createElement("p");
    var node = document.createTextNode(value);
    para.appendChild(node);
    para.setAttribute('onclick', "getmousee(this)");
    para.style.textAlign = "center";
    para.style.color = "white";
    para.style.borderRadius = "4px";
    para.style.backgroundColor = "rosybrown";
    para.id = y + 1;
    para.className = "elem";
    element.appendChild(para);
}
function editclickk() {
    var element = document.getElementById("admin");
    var y = element.childElementCount;
    var value = document.getElementById("test").value;
    var newpara = document.createElement("p");
    var node = document.createTextNode(value);
    newpara.appendChild(node);
    var oldpara = document.getElementById(x);
    element.replaceChild(newpara, oldpara);
    newpara.setAttribute('onclick', "getmousee(this)");
    newpara.style.textAlign = "center";
    newpara.style.color = "white";
    newpara.style.borderRadius = "4px";
    newpara.style.backgroundColor = "rosybrown";
    newpara.id = y + 1;
    newpara.className = "elem";

}
function deleteclickk() {
    var element = document.getElementById("admin");
    var oldpara = document.getElementById(x)
    element.removeChild(oldpara);

}
