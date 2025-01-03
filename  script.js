document.addEventListener("DOMContentLoaded", function() {
    const acceptBtn = document.getElementById("accept-prize");
    const rejectBtn = document.getElementById("reject-prize");

    acceptBtn.addEventListener("click", function() {
        alert("🏆 你领取了奖品…但是…它并没有带来好运？");
        document.body.style.backgroundColor = "#550000";
    });

    rejectBtn.addEventListener("click", function() {
        alert("💀 你拒绝了奖品！命运会如何改变呢？");
        document.body.style.backgroundColor = "#003355";
    });

    const glitchText = document.querySelectorAll(".glitch");
    setInterval(() => {
        glitchText.forEach((text) => {
            text.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
        });
    }, 200);
});