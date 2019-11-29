disintegrate.init();

document.getElementById("img").addEventListener("click", e => {
  const disObj = disintegrate.getDisObj(e.target);
  disintegrate.createSimultaneousParticles(disObj);
  e.target.remove();
});
