document.getElementsByTagName("h1")[1].innerHTML="getElementsByTagName";
document.getElementsByClassName("p1")[0].innerHTML="hello week10";
// document.getElementsByClassName("p1")[0].style.cssText="background-color:red;color;font-size:200px";

var select = document.getElementsByClassName("p1");
for(var i=0; i<=select.length;i++){
    select[i].style.cssText="background-color:peachpuff; color:blue;"
    }