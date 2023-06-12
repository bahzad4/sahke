const toggleBtns = document.getElementsByClassName("shav");
const theme = document.documentElement.classList;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.add("dark-mode-theme");
  for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].src = "sun.png";
  }
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.remove("dark-mode-theme");
  for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].src = "moon.png";
  }
  localStorage.setItem("dark-mode", "disabled");
};
if (darkMode === "enabled")
{
  enableDarkMode();
}

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}


function myfunction(a) 
{ var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  a.classList.toggle("change");
}