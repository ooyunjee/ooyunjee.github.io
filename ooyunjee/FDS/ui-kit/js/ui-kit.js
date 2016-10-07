// UI KIT
function computedFontSize(text_scale, heading_num) {
  var font_size1 = 1;
  for(var i = 0; i < heading_num; i++) {
    // console.log(text_scale);
    font_size1 *= text_scale;
    // console.log(text_scale);
  }
  return font_size1;
}

// 칸 수: Math.ceil(font_size_ratio/line_height_ratio)
function computedLineHight(font_size_ratio, line_height_ratio) {
  console.log(Math.ceil(font_size_ratio/line_height_ratio));
  var lineHeight = 3 * (line_height_ratio/font_size_ratio);
  return lineHeight;
}

function computedMarginTop(lineHeight) {
  return lineHeight / 2;
}

var font_size = computedFontSize(1.313, 5);
var line_height = computedLineHight(font_size, 1.5);
var margin_top = computedMarginTop(line_height);

console.log('font-size: ', font_size);
console.log('line-height: ', line_height);
console.log('margin-top: ', margin_top);

console.log('----------------------------------------');

function assignGuideClass() {
  var body = document.body;
  var body_current_class = body.getAttribute('class');
  if(body_current_class == 'container guide'){
    body.setAttribute('class', 'container');
  } else {
    body.setAttribute('class', body_current_class + ' guide');
  }
}

document.onclick = assignGuideClass;
