var ad = document.querySelectorAll('.tracking-ad');
ad = Array.from(ad);
ad.filter(function (value){
   value.style.display = 'none';
});