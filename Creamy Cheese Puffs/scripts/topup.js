const topupForm = document.getElementById('topupForm');
        const topupAmountInput = document.getElementById('topupAmount');
        const successMessageDiv = document.getElementById('successMessage');
        const toppedUpAmountSpan = document.getElementById('toppedUpAmount');
        const newBalanceSpan = document.getElementById('newBalance');
        const topupCurrentBalSpan = document.getElementById('topupCurrentBal');
        const closeSuccessBtn = document.getElementById('closeSuccessBtn');

        topupForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const amount = parseFloat(topupAmountInput.value);
            const currentBalanceText = topupCurrentBalSpan.textContent.replace(/[^0-9.]/g, '');
            const currentBalance = parseFloat(currentBalanceText);

            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid top-up amount.');
                return;
            }
             if (isNaN(currentBalance)) {
                 alert('Error reading current balance.');
                 return;
             }


            console.log(`Attempting to top up: ${amount}`);

            const simulatedNewBalance = currentBalance + amount;

            toppedUpAmountSpan.textContent = `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            newBalanceSpan.textContent = `₱${simulatedNewBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            topupCurrentBalSpan.textContent = `₱${simulatedNewBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;


            successMessageDiv.style.display = 'block';
            topupForm.style.display = 'none';


            topupAmountInput.value = '';

            console.log(`Top up successful. New balance: ${simulatedNewBalance}`);
        });

         closeSuccessBtn.addEventListener('click', () => {
             successMessageDiv.style.display = 'none';
             topupForm.style.display = 'block';
         });