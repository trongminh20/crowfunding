function dropMenu(e) {
  if (e.style.display == "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}

function showFooter(e) {
  let idName = e.id;
  let target = idName + "-form-footer";
  if (e.checked) {
    if (window.innerWidth < 800) {
      document.getElementById(target).style = "display:flex; flex-direction:column";
    } else if (window.innerWidth >= 800) {
      document.getElementById(target).style = "display:flex; flex-direction:row";
    }
  } else {
    e.checked = false;
    document.getElementById(target).style.display = "none";
  }
}

function showModel() {
  let target = document.getElementById("models-reward");
  if (target.style.display == 'none') {
    // document.style = "position:relative;";
    
    // document.body.style = " -webkit-filter: blur(2px);-moz-filter: blur(2px);-o-filter: blur(2px);-ms-filter: blur(2px);filter:blur(2px);";
    document.style = "position:relative;";
    target.style = "position:absolute;z-index:12; display:flex; flex-direction:column;top:100%;right:.25rem;";
  }else{
    target.style.display = "none";
  }
}
function closeModel(){
  document.getElementById('models-reward').style.display = "none";
}

function scrollNavbar(e){
  e.classList.add("scrolling");
}