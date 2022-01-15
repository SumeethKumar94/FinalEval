var fexp=document.getElementById("addexp");
var vexp=document.getElementById("viewexp");
var it=document.getElementById("items");
fexp.style.display="none";
vexp.style.display="none";

function addexps()
{
    fexp.style.display="block";
    vexp.style.display="none";
}
function shoitems() {
    
    fexp.style.display="block";
    it.style.display="block";

}
function viewexps() {
    vexp.style.display="block";  
    fexp.style.display="none";
    it.style.display="none";
}