function toggleMode() {
  var body = document.body;
  var linktree = document.querySelector('.linktree');
  var modeToggle = document.getElementById('mode-toggle');

  body.classList.toggle('dark-mode');
  linktree.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent ='';
  } else {
    modeToggle.textContent = '';
  }
}
