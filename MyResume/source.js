function toggleReadMore() {
    var moreText = document.querySelector(".more-text");
    var dots = document.querySelector("#dots");
    var buttonText = document.querySelector(".read-more-btn");


    if(dots.style.display === "none") {
        dots.style.display = 'inline';
        buttonText.innerHTML = 'Read More';
        moreText.style.display = 'none';
    }else {
        dots.style.display = "none";
        buttonText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
    
}