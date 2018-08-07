// function chgTitle() {
//     document.querySelector("h1").textContent += ' (je viens du fichier .js)';
// }
//
//
// function btnGoElt() {
//     document.getElementById("title").addEventListener("click", function () {
//         console.log("cliqué")
//     });
// }
//
//
// function btnServerElt() {
//     const btnServerElt = document.getElementById("server_time");
//     btnServerElt.addEventListener("click", function () {
//         ajaxGet("http://127.0.0.1:5000/getTime", function (response) {
//             document.getElementById("time").innerText = response;
//         });
//     });
// }
//
//
// btnServerElt();
// chgTitle();
// btnGoElt();


// function testElt() {
//     const testElt = document.getElementById("hello");
//     testElt.addEventListener("click", function () {
//         ajaxGet("http://127.0.0.1:5000/getPapyHello", function (response) {
//             document.getElementById("changer").innerText = response;
//         });
//     });
// }
//
// testElt();


function detect() {
    var detectElt = document.getElementById("submit").addEventListener("click", function () {
        console.log("cliqué");
    });
}

detect();