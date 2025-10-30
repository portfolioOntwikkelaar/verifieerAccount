const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
      code.value = '';
      setTimeout(() => codes[idx + 1]?.focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1]?.focus(), 10);
    }
  });

  code.addEventListener('input', () => {
    if (code.value.length > 0) {
      code.classList.add('filled');
      code.style.animation = 'pulse 0.5s ease';
      setTimeout(() => (code.style.animation = ''), 500);
    } else {
      code.classList.remove('filled');
    }
  });
});

/* Optional: pulsating verification effect */
const container = document.querySelector('.container');
codes[codes.length - 1].addEventListener('input', () => {
  if ([...codes].every(c => c.value !== '')) {
    container.classList.add('verified');
    container.style.boxShadow = '0 0 50px rgba(0,255,100,0.5)';
    container.style.borderColor = '#00ff7f';
    setTimeout(() => {
      container.style.transition = 'all 0.8s ease';
      container.style.boxShadow = '';
      container.classList.remove('verified');
    }, 1500);
  }
});
