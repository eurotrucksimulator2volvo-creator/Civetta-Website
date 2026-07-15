(function () {
  const container = document.getElementById('site-nav');
  if (!container) return;

  container.innerHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="scintilla.html">Scintilla</a>
      <a href="#">About</a>
      <a href="#">Models</a>
      <a href="#">Contact</a>
    </nav>
  `;
})();
