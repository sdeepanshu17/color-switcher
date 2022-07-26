let colors = [];
while (colors.length < 200) {
    colors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}

function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
}

export default colors;