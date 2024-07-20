console.log(document);
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector("[data-start]");
    const stopButton = document.querySelector("[data-stop]");
    let colorChange;
    function startChangingColor() {
        if (!colorChange) {
            colorChange = setInterval(() => {
                document.body.style.backgroundColor = getRandomHexColor();
            }, 1000);
        };
    };

    function stopChangingColor() {
        clearInterval(colorChange);
        colorChange = null;
    };
    startButton.addEventListener("click", startChangingColor);
    stopButton.addEventListener("click", stopChangingColor);
});