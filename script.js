// script.js
const ratingStars = [...document.getElementsByClassName("star")];

function executeRating(stars) {
    const starClassActive = "star fas fa-star";
    const starClassInactive = "star far fa-star";
    const starsLength = stars.length;
    let i;

    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);
            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}

executeRating(ratingStars);
