module.exports = function konamify (cb) {
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13], i = 0;
    window.addEventListener('keydown', function (e) {
        i = (e.keyCode === k[i]) ? i + 1 : 0;
        if (i === k.length) cb();
    });
};
