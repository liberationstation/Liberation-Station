document.addEventListener('DOMContentLoaded', () => {
  // Grab elements
  const amountButtons = document.querySelectorAll('.donation-buttons button');
  const customAmountInput = document.getElementById('customAmount');
  const paymentButtons = document.querySelectorAll('.payment-btn');
  const donateBtn = document.getElementById('donate-btn');
  const paypalContainer = document.getElementById('paypal-button-container');

  let selectedAmount = 0;
  let selectedMethod = 'paypal';

  // --- Predefined amounts ---
  amountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedAmount = parseFloat(btn.getAttribute('data-amount'));
      customAmountInput.value = '';

      // Active state
      amountButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --- Custom amount input ---
  customAmountInput.addEventListener('input', () => {
    selectedAmount = 0;
    amountButtons.forEach(b => b.classList.remove('active'));
  });

  // --- Payment method selection ---
  paymentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedMethod = btn.getAttribute('data-method');

      // Active state
      paymentButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --- PayPal Buttons ---
  if (paypalContainer) {
    paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'gold',
        shape: 'rect',
        label: 'paypal'
      },
      createOrder: function(data, actions) {
        if (selectedMethod !== 'paypal') return; // Skip if MB WAY

        const amount = selectedAmount || parseFloat(customAmountInput.value) || 1;
        return actions.order.create({
          purchase_units: [{
            amount: { value: amount.toFixed(2) }
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(details => {
          alert('Donation completed by ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container');
  }

  // --- Donate button click ---
  donateBtn.addEventListener('click', () => {
    const amount = selectedAmount || parseFloat(customAmountInput.value) || 1;

    if (selectedMethod === 'paypal') {
      // Open PayPal checkout in a new window
      if (paypalContainer) {
        // Trigger the PayPal button iframe manually
        const iframe = paypalContainer.querySelector('iframe');
        if (iframe) {
          iframe.contentWindow.focus();
        } else {
          alert('PayPal button is not loaded yet. Please wait a moment.');
        }
      }
    } else if (selectedMethod === 'mbway') {
      // Placeholder for MB WAY integration
      alert(`MB WAY selected. Amount: €${amount.toFixed(2)}\nImplement MB WAY payment flow here.`);
    }
  });
});
