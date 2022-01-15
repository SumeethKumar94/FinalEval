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

function sub()
{
    alert('Expenses Sucessfully Added');
}
function num()
{
    var y = document.getElementById("Expamt");

  if(isNaN(y.value)){
    alert("Please only enter numeric  (Allowed input:0-9)");
    y.value="";
  }
}

function num2()
{
    var z = document.getElementById("itemamt");

  if(isNaN(z.value)){
    alert("Please only enter numeric characters ");
    z.value="";
  }

}