document.addEventListener("DOMContentLoaded", function () {
  const offersContainer = document.getElementById("offers");
  const resetButton = document.getElementById("reset");
  const acc = document.querySelectorAll(".accordion");

  offersContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("redeem-btn")) {
      const offer = event.target.parentElement;
      offer.style.opacity = '0';
      setTimeout(() => offer.remove(), 300);
    }
  });

  acc.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });

  });

  resetButton.addEventListener("click", function () {
    offersContainer.innerHTML = `
        <div class="offer">
          <span>Billet til Korsbæk Bio</span>
          <button class="redeem-btn">Indløs</button>
        </div>
        <div class="offer">
          <span>Billet til Korsbæk Svømmehal</span>
          <button class="redeem-btn">Indløs</button>
        </div>
        <div class="offer">
          <span>Slik for 100 DKK i Silkytten</span>
          <button class="redeem-btn">Indløs</button>
        </div>
      `;
  });
});

