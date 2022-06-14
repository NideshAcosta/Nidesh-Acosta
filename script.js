window.onbeforeunload = function () 
{
    window.scrollTo(0, 0);
}; 
function modalShow()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var reason=document.getElementById("reason").value;

    if (document.getElementById("name").value == "")
    {
      document.getElementById("msg").innerHTML="Please enter your name.";
    }
    else
    {
      document.getElementById("msg").innerHTML="";
    }

    if (document.getElementById("email").value == "")
    {
      document.getElementById("msg1").innerHTML="Please enter your email.";
    }
    else
    {
      document.getElementById("msg1").innerHTML="";
    }

    if  (document.getElementById("reason").value == "")
    {
      document.getElementById("msg2").innerHTML="Please select your reason.";
    }
    else
    {
      document.getElementById("msg2").innerHTML="";
    }

    if  ((name!="")&&(email!="")&&(reason!=""))
    {
      document.getElementById("displayName").innerHTML="Hi "+name+"!";
        document.getElementById("modal").style.display="block";
        document.body.style.overflow="hidden";
      clearr();
  }
}
function show()
{
  document.getElementById("modal").style.display="block";
}

function clearr()
{
    document.getElementById("msg").innerHTML="";
    document.getElementById("msg1").innerHTML="";
    document.getElementById("msg2").innerHTML="";
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("reason").value="";
}
function closeModal()
{
  document.getElementById("modal").style.display="none";
  document.body.style.overflow="auto";
}
function vbModalShow()
{
  document.getElementById("vbMod").style.display="block";
  window.scrollTo(0,document.getElementById("works").offsetTop);
  document.body.style.overflow="hidden";
}
function vbModalHide()
{
  document.getElementById("vbMod").style.display="none";
  document.body.style.overflow="auto";
}
function htmlModalShow()
{
  document.getElementById("htmlMod").style.display="block";
  window.scrollTo(0,document.getElementById("works").offsetTop);
  document.body.style.overflow="hidden";
}
function htmlModalHide()
{
  document.getElementById("htmlMod").style.display="none";
  document.body.style.overflow="auto";
}
function appModalShow()
{
  document.getElementById("appMod").style.display="block";
  window.scrollTo(0,document.getElementById("works").offsetTop);
  document.body.style.overflow="hidden";
}
function appModalHide()
{
  document.getElementById("appMod").style.display="none";
  document.body.style.overflow="auto";
}
