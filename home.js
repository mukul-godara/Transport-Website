function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "list") {
      x.className = "responsive";
    } else {
      x.className = "list";
    }

  }