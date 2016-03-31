/**
 * Created by jian_ on 2016/3/31.
 */
var fortuneCookiew = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

exports.getFortune = function () {
    var idx = Math.floor(Math.random() * fortuneCookiew.length);
    return fortuneCookiew[idx];
};