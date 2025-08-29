//  Heart Icons Functionalities

const heartButtons = document.getElementsByClassName("heart-btn");
const heartCount = document.getElementById("heart-count");

for (const btn of heartButtons) {
    btn.addEventListener("click", function () {
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    });
}

// Copy button Functionalities

const copyButtons = document.querySelectorAll(".copy-btn");
const copyCount = document.getElementById("copy-count");


copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const card = button.closest(".card");
        const number = card.querySelector(".argent-num").textContent;


        navigator.clipboard.writeText(number)
            .then(function () {

                let count = parseInt(copyCount.textContent);
                count = count + 1 + " ";
                copyCount.textContent = count;

                alert("Copied successfully!");
            })
            .catch(function (err) {
                console.error("Failed to copy:", err);
            });
    });
});



 //  call functionalities


       const callBtn = document.getElementsByClassName("call-btn");

for (let btn of callBtn) {
    btn.addEventListener("click", function () {
       
        const coinCount = document.getElementById("coin-count");
        const coin = parseInt(coinCount.innerText);
        const coinCost =parseInt(20);

        const totalCoin = coin - coinCost;
 if (totalCoin < 0) {
            alert("Not enough coins! You need at least 20 coins to make a call");
            return;
        }
       

        coinCount.innerText = totalCoin;
    });
}





