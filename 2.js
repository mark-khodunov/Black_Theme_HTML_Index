const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');

const btn = document.querySelector('#openModal');

modal1.style.display = 'flex';
modal2.style.display = 'flex';
modal3.style.width = '300px';
modal3.style.height = '850px';
modal3.style.display = 'flex';
btn.style.margin = '0 0 0 0';

btn.onclick = function()
    {
    if  (   modal1.style.display === 'none')
        {
            modal1.style.display = 'flex';
            modal2.style.display = 'flex';
            modal3.style.width = '300px';
            modal3.style.height = '850px';
            modal3.style.display = 'flex';
            btn.style.margin = '0 0 0 0';
        }
    else{
            modal1.style.display = 'none';
            modal2.style.display = 'none';
            modal3.style.width = '100px';
            modal3.style.height = '850px';
            modal3.style.display = 'flex';
            btn.style.margin = '0 0 0 -400px';
        };
    }

const modal4 = document.querySelector('#m0');
const m10 = document.querySelector('#m10');
const m20 = document.querySelector('#m20');
const m30 = document.querySelector('#m30');
const m40 = document.querySelector('#m40');
const m50 = document.querySelector('#m50');
const modal5 = document.querySelector('#m01');
const mo02 = document.querySelector('#m02');
const mo03 = document.querySelector('#m03');
const mo04 = document.querySelector('#m04');
const mo05 = document.querySelector('#m05');
const mo06 = document.querySelector('#m06');

modal4.addEventListener('mouseover', function() {
  modal5.style.display = "flex";
  modal5.style.position = "absolute";
  modal5.innerText = "Dashboard";
});

modal4.addEventListener('mouseout', function() {
  modal5.style.display = "none";
  modal5.style.position = "none";
});

m10.addEventListener('mouseover', function() {
  mo02.style.display = "flex";
  mo02.style.position = "absolute";
  mo02.innerText = "Sales";
});

m10.addEventListener('mouseout', function() {
  mo02.style.display = "none";
  mo02.style.position = "none";
});

m20.addEventListener('mouseover', function() {
  mo03.style.display = "flex";
  mo03.style.position = "absolute";
  mo03.innerText = "Costs";
});

m20.addEventListener('mouseout', function() {
  mo03.style.display = "none";
  mo03.style.position = "none";
});

m30.addEventListener('mouseover', function() {
  mo04.style.display = "flex";
  mo04.style.position = "absolute";
  mo04.innerText = "Payments";
});

m30.addEventListener('mouseout', function() {
  mo04.style.display = "none";
  mo04.style.position = "none";
});

m40.addEventListener('mouseover', function() {
  mo05.style.display = "flex";
  mo05.style.position = "absolute";
  mo05.innerText = "Finances";
});

m40.addEventListener('mouseout', function() {
  mo05.style.display = "none";
  mo05.style.position = "none";
});

m50.addEventListener('mouseover', function() {
  mo06.style.display = "flex";
  mo06.style.position = "absolute";
  mo06.innerText = "Messages";
});

m50.addEventListener('mouseout', function() {
  mo06.style.display = "none";
  mo06.style.position = "none";
});

