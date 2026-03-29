document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("button");

  btn.addEventListener("click", () => {
    // Optional: fade out effect before redirect
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "vid.html"; // your target HTML page
    }, 500); // wait for fade
  });
});