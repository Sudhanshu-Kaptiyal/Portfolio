



const container = document.querySelector('.main-loan');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.loan-content');

container.addEventListener('click', function(e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function(btn) {
      btn.classList.remove('loan-active');
    });

    e.target.classList.add('loan-active');

    contents.forEach(function(content) {
      if (content.id === id) {
        content.classList.add('loan-active');
      } else {
        content.classList.remove('loan-active');
      }
    });
  }
});
