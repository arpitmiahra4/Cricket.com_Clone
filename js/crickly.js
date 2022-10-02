function login() {
    window.location.href = "login/login.html";
  }

  function slide() {
    const arr = [
      "../images/criclytics.PNG",
      "../images/match prediction.png",
      "../images/com_stats.PNG",
    ];
    let image = document.getElementById("slideimage");
    let i = 1;
    setInterval(function () {
      image.setAttribute("src", arr[i]);
      i++;
      if (i == 3) {
        i = 0;
      }
    }, 2000);
  }
  slide();