document.addEventListener("DOMContentLoaded", function () {
    const offersContainer = document.getElementById("offers");
    const resetButton = document.getElementById("reset");

    offersContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("redeem-btn")) {
            const offer = event.target.parentElement;
            offer.style.opacity = '0';
            setTimeout(() => offer.remove(), 300);
        }
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
