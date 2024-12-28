const sidemenu = document.querySelector("#sidemenu");
const navbar = document.querySelector("nav");
const navlink = document.querySelector("nav ul");

function openmenu() {
  console.log("clicked");
  sidemenu.style.transform = "translateX(-16rem)";
}

function closemenu() {
  sidemenu.style.transform = "translateX(16rem)";
}

window.addEventListener('scroll',()=>{
  if(scrollY > 50){
    navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg','shadow-sm','dark:bg-darktheme','dark:shadow-white/20');
    navlink.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border-white/50',"dark:bg-transparent");
  }else{
    navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg','shadow-sm','dark:bg-darktheme','dark:shadow-white/20');
    navlink.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:border-white/50',"dark:bg-transparent");
  }
})

// --------light or dark mode-------------------
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
function toggletheme() {
  document.documentElement.classList.toggle('dark');
}
