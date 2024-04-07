// document.querySelector("#mode-switch").oninput = () => {
//     console.log("Toggle mode");
//     if (document.querySelector("#mode-switch").checked == true) {
//         document.querySelector("body").classList.add("dark");
//     } else {
//         document.querySelector("body").classList.remove("dark");
//     }
// };

// // Get the root element
// var r = document.querySelector(':root');

// // Create a function for getting a variable value
// function myFunction_get() {
//     // Get the styles (properties and values) for the root
//     var rs = getComputedStyle(r);
//     // Alert the value of the --blue variable
//     console.log("The value of --black is: " + rs.getPropertyValue('--black'));
// }

// // Create a function for setting a variable value
// function myFunction_set() {
//     // Set the value of variable --blue to another value (in this case "lightblue")
//     r.style.setProperty('--blue', 'lightblue');
// }

function changeMode() {
    if (document.querySelector('#mode-switch').checked) {
        console.log("Checked!");
        document.querySelector(':root').style.setProperty('--black', '#FFFDF8');
        document.querySelector(':root').style.setProperty('--white', '#1D100C');
        var x = document.querySelectorAll('.img--links, .icon');
        for (i = 0; i < x.length; i++) {
            x[i].style.filter = 'invert(91%) sepia(2%) saturate(581%) hue-rotate(343deg) brightness(109%) contrast(101%)';
        }
    } else {
        console.log("Unchecked");
        document.querySelector(':root').style.setProperty('--white', '#FFFDF8');
        document.querySelector(':root').style.setProperty('--black', '#000000');
        var x = document.querySelectorAll('.img--links, .icon');
        for (i = 0; i < x.length; i++) {
            x[i].style.filter = 'none';
        }
    }
}