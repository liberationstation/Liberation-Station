document.addEventListener('DOMContentLoaded', () => {
  const amountButtons = document.querySelectorAll('.donation-buttons button');
  const customAmountInput = document.getElementById('customAmount');
  const paypalContainer = document.getElementById('paypal-button-container');

  let selectedAmount = 0;

  // --- Amount buttons ---
  amountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedAmount = parseFloat(btn.getAttribute('data-amount'));
      customAmountInput.value = '';
      amountButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderPaypalButton();
    });
  });

  // --- Custom input ---
  customAmountInput.addEventListener('input', () => {
    selectedAmount = 0;
    amountButtons.forEach(b => b.classList.remove('active'));
    renderPaypalButton();
  });

  // --- Render PayPal button ---
  function renderPaypalButton() {
    if (!paypalContainer) return;
    paypalContainer.innerHTML = ''; // Clear previous button

    const amount = selectedAmount || parseFloat(customAmountInput.value) || 1;

    paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', tagline: false },
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{ amount: { value: amount.toFixed(2) } }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(details => {
          alert('Donation completed by ' + details.payer.name.given_name);
        });
      },
      commit: true
    }).render('#paypal-button-container');
  }

  // Initial render
  renderPaypalButton();
});
