function scrollToSection(id){
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("scroll", () => {
  document.querySelectorAll(".animate-on-scroll").forEach(card=>{
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      card.classList.add("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".animate-on-scroll").forEach(card=>{
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      card.classList.add("visible");
    }
  });
});