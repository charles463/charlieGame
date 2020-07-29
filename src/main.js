
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Update is called once per frame

var character = {
    x: 60,
    y: 60
}
exports.update = function () {
    if(btn.right) character.x += 1;
    if(btn.left) character.x -=1;
    if(btn.up) character.y -=1;
    if(btn.down) character.y +=1;

    cls();
    sprite(153, character.x, character.y);
};
