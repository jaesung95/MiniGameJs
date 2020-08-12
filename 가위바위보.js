var left = 0;
setInterval(function(){
    if (left === 0) {
      left = '-142px';
    } else if (left === '142px') {
      left = '248px';
    } else {
      left =0;
    }
    document.querySelectorAll('#computer').style.background = 
    'url../제로초/가위바위보.jpg)' + left + '0';

document.querySelectorAll('button').forEach(function(button){
    addEventListener('click', function() {
        console.log(this.textContent);
    })
});
