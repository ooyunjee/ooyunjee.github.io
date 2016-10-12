var toggle_grid = document.querySelector('.btn-toggle-grid');

function toggleGrid() {
  var _container = document.querySelector('.container');
  // 조건 검증
  // _container 요소에 .show-grid 클래스가 있어?
  // 있으면?
  if ( _container.classList.contains('show-grid')  ) {
    _container.classList.remove('show-grid');
  }
  // 없으면?
  else {
    _container.classList.add('show-grid');
  }
}

toggle_grid.onclick = toggleGrid;
