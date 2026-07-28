(function () {
  const container = document.getElementById('site-nav');
  if (!container) return;

  container.innerHTML = `
    <nav>
      <a href="index.html">
        <img src="logo.png" alt="Logo" class="logo" width="50" height="24">
      </a>
      <a href="index.html">Home</a>
      <a href="scintilla.html">Scintilla</a>
      <a href="about.html">About</a>
      <a href="models.html">Models</a>
      <a href="contact.html">Contact</a>
    </nav>
  `;
})();
