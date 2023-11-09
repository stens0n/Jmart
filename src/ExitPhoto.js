function closeLargerView() {
    document.getElementById('larger-view').classList.add('hidden');
  }

  function openModal(imageSrc) {
    var modal = document.getElementById('larger-view');
    var zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.src = imageSrc;
    modal.classList.remove('hidden');
  }