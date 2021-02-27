function details(event, detail) {
  let cont, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablink = document.getElementsByClassName("tablink")
  
  for (cont = 0; cont < tabcontent.length; cont++) {
    tabcontent[cont].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (cont = 0; cont < tablink.length; cont++) {
    tablink[cont].className = tablink[cont].className.replace(" active", "");
  }

  document.getElementById(detail).style.display = "block";
  event.currentTarget.className += " active";
}