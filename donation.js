document.addEventListener('DOMContentLoaded', () => {
  const customAmountInput = document.getElementById('customAmount');
  const paypalContainer = document.getElementById('paypal-button-container');

  // --- Render PayPal button ---
  function renderPaypalButton() {
    if (!paypalContainer) return;
    paypalContainer.innerHTML = ''; // Clear previous button

    const amount = parseFloat(customAmountInput.value) || 1;

    paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'donate',
        tagline: false
      },
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: amount.toFixed(2) },
            category: "DONATION" // marks payment as donation
          }]
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

  // Re-render button whenever the amount changes
  customAmountInput.addEventListener('input', renderPaypalButton);

  // Initial render
  renderPaypalButton();
});
