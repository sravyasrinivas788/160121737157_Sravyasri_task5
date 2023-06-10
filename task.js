var a="codegnan"
console.log(a.length)
console.log(a.indexOf("code"))
console.log(a.slice(0,2))
console.log(a.slice(-5,-3))
console.log(a.substring(0,2))
console.log(a.substring(-5,-3))
console.log(a.replace("gnan","studio"))
var b=new Date()
console.log(b)
//document.getElementById("demo").innerHTML=b


function date(){
    var b=new Date()
    console.log(b)
    document.getElementById("demo").innerHTML=b;
}
function second(){
    var d =new Date("Feb 26 2004")
    document.getElementById("demo").innerHTML=d;
}
var s=new Date()
console.log(s.getFullYear())
console.log(s.getMonth())
var list=["jan","feb","march","june"]
console.log(list[s.getMonth()])
console.log(s.getDate())
console.log(s.getHours())
document.getElementById("one").innerHTML
function bla(){
  var k=  document.getElementById("two").innerHTML
    console.log(k)
    var v=  document.getElementById("in").value
    console.log(v)


}
//function write(){
   // document.write("erases");
//}
function Byclass(){
    var l=document.getElementsByClassName("three")
    console.log(l[0].innerHTML)

}
function attr(){
    document.getElementById("in").setAttribute("type","number")
}
function over(){
    alert("from over")

}
function out(){
    alert("from out")

}
function change(){
    console.log("on change")

}
function down(){
    console.log("on keydown")

}
function inp(){
    console.log("on input")
}