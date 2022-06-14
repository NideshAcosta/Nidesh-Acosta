window.onbeforeunload = function () 
{
    window.scrollTo(0, 0);
}; 
function show()
{
  document.getElementById("modal").style.display="block";
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
