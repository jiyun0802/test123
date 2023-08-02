document.getElementById("frontBtn").addEventListener("click", () => {
    setTimeout(() => {
      window.focus();
    }, 10000);
  });
  
  document.getElementById("backBtn").addEventListener("click", () => {
    window.blur();
  });
  