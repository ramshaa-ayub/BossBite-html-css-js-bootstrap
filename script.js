window.onscroll = function () {
    let button = document.querySelector(".back-to-top");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
};

document.querySelector(".back-to-top").addEventListener("click", function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {

        e.preventDefault(); 

        alert("🍔 Your table has been reserved successfully!");

        form.reset(); 

    });

});


