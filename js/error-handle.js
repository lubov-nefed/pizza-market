function renderErr() {
  const products = document.querySelector('.products');
  const erorMsg = '<p class="error-message">Sorry! Server error. We\'re working on it.</p>';
  products.insertAdjacentHTML('beforeend', erorMsg);
}

export default renderErr;
