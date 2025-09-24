document.addEventListener('DOMContentLoaded', () => {
  const amountButtons = document.querySelectorAll('.donation-buttons button');
  const customAmountInput = document.getElementById('customAmount');
  const paymentButtons = document.querySelectorAll('.payment-btn');
  const donateBtn = document.getElementById('donate-btn');
  const paypalContainer = document.getElementById('paypal-button-container');

  let selectedAmount = 0;
  let selectedMethod = 'paypal';

  // --- Amount buttons ---
  amountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedAmount = parseFloat(btn.getAttribute('data-amount'));
      customAmountInput.value = '';
      amountButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --- Custom input ---
  customAmountInput.addEventListener('input', () => {
    selectedAmount = 0;
    amountButtons.forEach(b => b.classList.remove('active'));
  });

  // --- Payment method buttons ---
  paymentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedMethod = btn.getAttribute('data-method');
      paymentButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Re-render PayPal button when method changes
      renderPaypalButton();
    });
  });

  // --- Render PayPal button ---
  function renderPaypalButton() {
    if (!paypalContainer) return;
    paypalContainer.innerHTML = ''; // Clear previous buttons

    if (selectedMethod === 'paypal') {
      paypal.Buttons({
        style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', tagline: false },
        createOrder: function(data, actions) {
          const amount = selectedAmount || parseFloat(customAmountInput.value) || 1;
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
  }

  renderPaypalButton();

  // --- Donate button click ---
  donateBtn.addEventListener('click', () => {
    if (selectedMethod === 'mbway') {
      const amount = selectedAmount || parseFloat(customAmountInput.value) || 1;
      alert(`MB WAY selected. Amount: €${amount.toFixed(2)}\nImplement MB WAY payment flow here.`);
    }
  });
});
