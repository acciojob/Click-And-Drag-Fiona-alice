// Your code here.
var itemsContainer = document.querySelector('.items');
    var isDragging = false;
    var startPosition = 0;
    var currentTranslate = 0;
    var prevTranslate = 0;

    itemsContainer.addEventListener('mousedown', dragStart);
    itemsContainer.addEventListener('mousemove', drag);
    itemsContainer.addEventListener('mouseup', dragEnd);
    itemsContainer.addEventListener('mouseleave', dragEnd);

    itemsContainer.addEventListener('touchstart', dragStart);
    itemsContainer.addEventListener('touchmove', drag);
    itemsContainer.addEventListener('touchend', dragEnd);
    itemsContainer.addEventListener('touchcancel', dragEnd);

    function dragStart(event) {
      if (event.type === 'touchstart') {
        startPosition = event.touches[0].clientX;
      } else {
        startPosition = event.clientX;
      }

      isDragging = true;
      itemsContainer.classList.add('active');
    }

    function drag(event) {
      if (!isDragging) return;

      event.preventDefault();

      var currentPosition = 0;
      if (event.type === 'touchmove') {
        currentPosition = event.touches[0].clientX;
      } else {
        currentPosition = event.clientX;
      }

      var diffPosition = currentPosition - startPosition;
      currentTranslate = prevTranslate + diffPosition;

      itemsContainer.style.transform = `translateX(${currentTranslate}px)`;
    }

    function dragEnd() {
      isDragging = false;
      itemsContainer.classList.remove('active');
      prevTranslate = currentTranslate;
    }