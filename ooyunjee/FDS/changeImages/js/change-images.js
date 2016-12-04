// 첫번째 섹션만 활성화
// 두번째 섹션은 비활성화
// 첫번째 섹션에서 버튼 클릭
// 해당 섹션의 다른 버튼은 비활성화 makeBtnUnique -> makeBtnDisabled
// 두번째 섹션 활성화 makeBtnActivated
// 두번째 섹션에서 버튼 클릭
// 해당 섹션의 다른 버튼 비활성화
// 선택된 두 버튼 교체 exchangeTwoImages -> makeBtnDisabled
(function(global, $) {
  'use strict';

  var container = document.querySelector('.container');
  var notification = document.querySelector('.notification');

  var section_1 = container.querySelector('.section-1');
  var section_2 = container.querySelector('.section-2');

  var btns_1 = section_1.querySelectorAll('button');
  var btns_2 = section_2.querySelectorAll('button');

  var is_first_btn_selected = false;
  var selected_first_btn = null;

  for(var i = 0, l = btns_1.length; i < l; i++) {
    var btn_1 = btns_1[i];

    btn_1.addEventListener('click', makeBtnUnique);
  }

  for(var j = 0, ll = btns_2.length; j < ll; j++) {
    var btn_2 = btns_2[j];

    btn_2.onclick = exchangeTwoImages;
  }

  // 버튼 비활성화 메소드
  function makeBtnDisabled(el) {
    if($.isElementNode(el) && el.nodeName === 'BUTTON') {
      el.setAttribute('disabled', 'disabled');
      el.style.cursor = 'default';
    }
  }

  // 선택된 버튼 상태 변경 메소드
  function btnSelected(el) {
    if($.isElementNode(el) && el.nodeName === 'BUTTON') {
      el.setAttribute('data-toggle', 'clicked');
      changeStyle(el);
    }
  }

  // 버튼 선택시 다른 버튼은 비활성화하는 메소드
  function makeBtnUnique() {
    console.log('clicked');
    is_first_btn_selected = true;
    selected_first_btn = this;
    var parent = this.parentNode;
    var btns = parent.querySelectorAll('button');

    btnSelected(this);
    notification.innerHTML = '포스터가 선택되었습니다.';

    for(var i = 0, l = btns.length; i < l; i++) {
      var btn = btns[i];
      if(!btn.getAttribute('data-toggle')) {
        makeBtnDisabled(btn);
      }
    }
    makeBtnActivated();
  }

  // 버튼 섹션 활성화 메소드
  function makeBtnActivated() {
    // if($.isElementNode(el) && el.nodeName === 'BUTTON') {
    //   el.setAttribute('disabled', 'false');
    //   el.style.cursor = 'pointer';
      section_2.classList.remove('disabled');
    // }
  }

  // 다른 섹션에도 선택된 것이 있는지 확인하는 메소드
  function checkAnotherSectionSelected() {
    if(is_first_btn_selected) {
      btnSelected(this);
      return true;
    } else {
      console.log('첫번째 버튼이 선택되지 않았습니다.');
      return false;
    }
  }

  // 두 이미지 교체하는 메소드
  function exchangeTwoImages() {

    if(checkAnotherSectionSelected()) {
      var second_box = this;
      var parent = second_box.parentNode;


      var btns = parent.querySelectorAll('button');
      var second_box_next = second_box.nextSibling;

      // 두번째 image에 border 설정
      btnSelected(second_box);

      // image 교체
      selected_first_btn.parentNode.replaceChild(second_box, selected_first_btn);
      second_box_next.parentNode.insertBefore(selected_first_btn, second_box_next);

      for(var i = 0, l = btns.length; i < l; i++) {
        var btn = btns[i];
        if(!btn.getAttribute('data-toggle')) {
          makeBtnDisabled(btn);
        }
      }

      notification.innerHTML = '포스터가 교체되었습니다.';
    }
  }

  // 이미지 border 추가 메소드
  function changeStyle(btn) {
    btn.style.border = '5px solid #c77e7e';
    // btn.style.boxShadow = '-10px -10px 10px hsla(0, 0%, 55%, 0.75)';
    btn.style.transform = 'scale(1.05)';
  }

  // 이미지 border 삭제 메소드
  function resetBtnStyle(btn) {
    btn.style.border = 0;
  }

}); //(this, this.DOM_Helper)


// 버튼 클릭
// => data-toggle = "clicked"
// 섹션 내에 선택 된 버튼이 있는지 확인 checkAnotherBtnSelected
// => 선택된 버튼의 부모를 가져와서 버튼의 상태 확인
// 유일하게 선택된 버튼이라면
// => <button data-toggle="clicked"> 가 한개이면
// 다른 섹션에 선택된 버튼이 있는지 확인 checkAnotherSectionSelected
// => 선택된 버튼의 부모의 형제의 버튼들 검사
// 다른 섹션에 선택된 버튼이 한 개 있다면
// => 다른 섹션의 버튼중 data-toggle="clicked" 인 것이 한개인지 검사
// 교체 => exchangeTwoImages
(function(global, $) {
  'use strict';

  var container = document.querySelector('.container');
  var section_wrapper = container.querySelector('.section-wrapper');
  var notification = container.querySelector('.notification');

  var btns = section_wrapper.querySelectorAll('button');
  var change_btn = container.querySelector('.change-btn');

  var selected_btns = [];
  var is_btn_selected = false;

  btns.forEach(function(btn,index) {
    console.log(btn,index);
    btn.addEventListener('click', btnClicked);
  });

  change_btn.addEventListener('click', function(){
    selected_btns = exchangeTwoImages(selected_btns);
  });

  function btnClicked() {
    if(!this.classList.contains('clicked')) {
      is_btn_selected = true;
      this.classList.add('clicked');
      makeBtnUnique(this, true);
      selected_btns.push(this);
      notification.innerHTML = '포스터가 선택되었습니다.';
    } else {
      is_btn_selected = false;
      this.classList.remove('clicked');
      makeBtnUnique(this, false);
      selected_btns.pop(this);
      notification.innerHTML = '포스터를 선택하세요.';
    }
    // selected_btns = exchangeTwoImages(selected_btns);
  }

  function makeBtnUnique(el, bool) {
    var parent = el.parentNode;
    var children = parent.querySelectorAll('button');

    children.forEach(function(child) {
      if(bool === true) {
        if(!child.classList.contains('clicked')) {
          child.setAttribute('disabled', 'true');
          child.style.cursor = 'default';
          child.style.opacity = '0.5';
        }
      }
      if(bool === false) {
        child.removeAttribute('disabled');
        child.style = {
          'opacity': '1',
          'cursor': 'pointer'
        };
      }
    });
  }

  // 버튼이 선택된 것이 있는지 확인하는 메소드
  function checkAnotherSectionSelected() {
    if(is_btn_selected) {
      return true;
    } else {
      return false;
    }
  }

  function resetBtns() {
    btns.forEach(function(btn,index) {
      btn.classList.remove('clicked');
      btn.removeAttribute('disabled');
      btn.style = {
        'opacity': '1',
        'cursor': 'pointer'
      };
      // btn.style.opacity = '1';
      // btn.style.cursor = 'pointer';
    });
  }

  // checkAnotherSectionSelected();

  // 두 이미지 교체하는 메소드
  function exchangeTwoImages(array) {
    if(array.length === 2) {
      var first_box = array[0];
      var second_box = array[1];

      var parent = second_box.parentNode;

      var btns = parent.querySelectorAll('button');
      var second_box_next = second_box.nextSibling;

      // image 교체
      first_box.parentNode.replaceChild(second_box, first_box);
      second_box_next.parentNode.insertBefore(first_box, second_box_next);

      notification.innerHTML = '포스터가 교체되었습니다.';

      array = [];


      setTimeout(function() {
        resetBtns();
        notification.innerHTML = '포스터를 선택하세요.';
      }, 500);
    }
    return array;
  }

})(this, this.DOM_Helper);// (this, this.DOM_Helper)
