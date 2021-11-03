let mastHave1 = new IrregularTable(acord, 0, 20, "#out", "block1");
let mastHave2 = new IrregularTable(acord, 20, 40, "#out", "block2");
let mastHave3 = new IrregularTable(acord, 40, 60, "#out", "block3");
let mastHave4 = new IrregularTable(acord, 60, 80, "#out", "block4");

let should1 = new IrregularTable(acord, 80, 110, "#out", "should-block1");
let should2 = new IrregularTable(acord, 110, 140, "#out", "should-block2");
let should3 = new IrregularTable(acord, 140, 175, "#out", "should-block3");
let should4 = new IrregularTable(acord, 175, 195, "#out", "should-block4");

document.querySelector('#must1').onclick = function () {
    mastHave1.render();
};

document.querySelector('#must2').onclick = function () {
    mastHave2.render();
};

document.querySelector('#must3').onclick = function () {
    mastHave3.render();
};

document.querySelector('#must4').onclick = function () {
    mastHave4.render();
};

document.querySelector('#should1').onclick = function () {
    should1.render();
};

document.querySelector('#should2').onclick = function () {
    should2.render();
};

document.querySelector('#should3').onclick = function () {
    should3.render();
};

document.querySelector('#should4').onclick = function () {
    should4.render();
};




