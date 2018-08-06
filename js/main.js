var p = 0;
var p2 = 0;

function display(e) {
  if (e === 'ov1') {
    p += 1;
    var res = (p * 100 / (p + p2));
    document.getElementById(e).setAttribute('style', 'display:block');
    document.getElementById('ov2').setAttribute('style', 'display:none');
    document.getElementById('per1').innerHTML = res.toPrecision(3) + '%';
  } else if (e === 'ov2') {
    p2 += 1;
    var res = (p2 * 100 / (p + p2));
    document.getElementById(e).setAttribute('style', 'display:block');
    document.getElementById('ov1').setAttribute('style', 'display:none');
    document.getElementById('per2').innerHTML = res.toPrecision(3) + '%';
  } else if (e === 'bg2') {
    document.getElementById('bg3').setAttribute('style', 'display:none');
    document.getElementById(e).setAttribute('style', 'display:block');
    document.getElementById('foot').setAttribute('style', 'width:85%');
    document.getElementById('menu').setAttribute('style', 'padding: 16px 0 5px;');
  } else if (e === 'bg') {
    document.getElementById('bg3').setAttribute('style', 'display:block');
    document.getElementById('ov1').setAttribute('style', 'display:none');
    document.getElementById('ov2').setAttribute('style', 'display:none');
  } else if (e === 'bn_ch') {
    document.getElementById('bn_ch').setAttribute('style', 'display:inline-block');
    document.getElementById('bn2_ch').setAttribute('style', 'display:none');
  } else if (e === 'bn2_ch') {
    document.getElementById('bn2_ch').setAttribute('style', 'display:inline-block');
    document.getElementById('bn_ch').setAttribute('style', 'display:none');
  } else if (e === 'bn3_ch') {
    document.getElementById('bn3_ch').setAttribute('style', 'display:inline-block');
    document.getElementById('bn3').setAttribute('style', 'display:none');
  }
}

function validate_form(){
  valid = true;
  if (document.form.name.value == "") {
    document.form.name.placeholder="Введите свое имя";
    document.getElementById('name').setAttribute('style', 'border:red 1px solid;');
    valid = false;
  } if (document.form.email.value == "") {
    document.form.email.placeholder="Неверный формат email";
    document.getElementById('email').setAttribute('style', 'border:red 1px solid;');
    valid = false;
  } if (document.form.password.value == "") {
    document.form.password.placeholder="Придумайте новый пароль";
    document.getElementById('password').setAttribute('style', 'border:red 1px solid;');
    valid = false;
  }
  return valid;
}