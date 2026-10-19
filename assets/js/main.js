'use strict';

// Native dialog provides modal focus containment and Escape support.
// Without JavaScript, each photograph still opens its larger image file.
const viewer = document.querySelector('#photo-viewer');

if (viewer && typeof viewer.showModal === 'function') {
  const image = viewer.querySelector('#viewer-image');
  const caption = viewer.querySelector('#viewer-caption');
  const closeButton = viewer.querySelector('.viewer-close');
  let opener = null;

  document.querySelectorAll('[data-photo]').forEach((link) => {
    link.addEventListener('click', (event) => {
      // Preserve normal browser behavior for opening an image in another tab.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      caption.textContent = link.dataset.caption;
      viewer.showModal();
      document.body.classList.add('viewer-open');
    });
  });

  closeButton.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    if (opener) opener.focus({ preventScroll: true });
  });
}
