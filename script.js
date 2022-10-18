// roll a d 20
console.log(Math.floor(Math.random() * 20) + 1);

console.log(Math.floor(Math.random() * 12) + 1);

console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * 8) + 1);

console.log(Math.floor(Math.random() * 6) + 1);

console.log(Math.floor(Math.random() * 4) + 1);


const button = document.querySelectorAll("button");

document.addEventListener("click", function rollD20 () {
    return (Math.floor(Math.random() * 20)+ 1);
    if (return === 20) {
        alert("Critical success!");
    } else if (return === 1) {
        alert("Shit.")
    } else {
        document.appendChild(return, "p");
    }
});


// // Other dice functions
// function rollD12 () {}
// function rollD10 () {}
// function rollD8 () {}
// function rollD6 () {}
// function rollD4 () {}
