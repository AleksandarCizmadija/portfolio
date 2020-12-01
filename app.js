const copyYear = document.querySelector('#copy-year'),
    portfoliosDiv = document.querySelector('#portfolios'),
    portfoliosContainer = portfoliosDiv.querySelector('.container');


copyYear.innerText = new Date().getFullYear();


const portfolioArray = [
    {
        name: 'Clone Create',
        image: 'images/clone-create-tablet-mobile.png',
        pageLink: 'https://aleksandarcizmadija.github.io/Clone-Create/',
        codeLink: 'https://github.com/AleksandarCizmadija/Clone-Create'
    },
    {
        name: 'Clone Lawn Care',
        image: 'images/lawncare-laptop-tablet-mobile.png',
        pageLink: 'https://aleksandarcizmadija.github.io/Lawn-Care-Clone/',
        codeLink: 'https://github.com/AleksandarCizmadija/Lawn-Care-Clone'
    },
    {
        name: 'Domino Bilbordi',
        image: 'images/domino-laptop-tablet-mobile.png',
        pageLink: 'https://dominobilbordi.com/',
        codeLink: ''
    },
    {
        name: 'Quiz Game API',
        image: 'images/quiz-game-laptop-tablet-mobile.png',
        pageLink: 'https://aleksandarcizmadija.github.io/Quiz-Game-API/index.html',
        codeLink: 'https://github.com/AleksandarCizmadija/Quiz-Game-API'
    },
    {
        name: 'Meal DB API',
        image: 'images/meal-db-laptop-tablet-mobile.png',
        pageLink: 'https://aleksandarcizmadija.github.io/Meal-Db-API/',
        codeLink: 'https://github.com/AleksandarCizmadija/Meal-Db-API'
    },
    {
        name: 'Elektroservis',
        image: 'images/elektroservis-laptop-tablet-mobile.png',
        pageLink: '',
        codeLink: 'https://github.com/AleksandarCizmadija/Multi-page-Website-Using-PHP'
    },
    {
        name: 'Sunreef Boats',
        image: 'images/sunreef-laptop-tablet-mobile.png',
        pageLink: 'https://aleksandarcizmadija.github.io/Sunreef-boats/index.html',
        codeLink: 'https://github.com/AleksandarCizmadija/Sunreef-boats'
    },
    {
        name: 'Bike Website',
        image: 'images/bike-laptop-tablet-mobile.png',
        pageLink: 'https://codepen.io/AleksandarCizmadija/full/rNewLOz',
        codeLink: 'https://codepen.io/AleksandarCizmadija/pen/rNewLOz'
    },
    {
        name: 'Loolap Bootstrap',
        image: 'images/loolap-laptop-tablet-mobile.png',
        pageLink: 'https://codepen.io/AleksandarCizmadija/full/OJRPebe',
        codeLink: 'https://codepen.io/AleksandarCizmadija/pen/OJRPebe'
    },
    {
        name: 'Login Page',
        image: 'images/escape-laptop-tablet-mobile.png',
        pageLink: 'https://codepen.io/AleksandarCizmadija/full/PoZpXYw',
        codeLink: 'https://codepen.io/AleksandarCizmadija/pen/PoZpXYw'
    },
    {
        name: 'Ice Cream',
        image: 'images/nice-cream-laptop-tablet-mobile.png',
        pageLink: 'https://codepen.io/AleksandarCizmadija/full/wvMJRXd',
        codeLink: 'https://codepen.io/AleksandarCizmadija/pen/wvMJRXd'
    },
    {
        name: 'Green Foods',
        image: 'images/food-laptop-tablet-mobile.png',
        pageLink: 'https://codepen.io/AleksandarCizmadija/full/LYGWXem',
        codeLink: 'https://codepen.io/AleksandarCizmadija/pen/LYGWXem'
    },
    {
         name: 'Clone Vegefoods',
         image: 'images/vegefoods-laptop-tablet-mobile.png',
         pageLink: 'https://aleksandarcizmadija.github.io/Clone-Vegefoods/',
         codeLink: 'https://github.com/AleksandarCizmadija/Clone-Vegefoods'
     },
    // {
    //     name: '',
    //     image: 'images/.png',
    //     pageLink: '',
    //     codeLink: ''
    // },
    // {
    //     name: '',
    //     image: 'images/.png',
    //     pageLink: '',
    //     codeLink: ''
    // },
    // {
    //     name: '',
    //     image: 'images/.png',
    //     pageLink: '',
    //     codeLink: ''
    // },
]

portfolioArray.forEach(item => {
    const singlePortfolio = document.createElement('div');
    singlePortfolio.classList = 'portfolio';
    singlePortfolio.innerHTML = `
        <h3>${item.name}</h3>
        <img src="${item.image}" alt="">
        <div class="buttons">
            ${item.pageLink ? `<a href="${item.pageLink}" target="_blank" class="btn">View page</a>` : ''}
            ${item.codeLink ? `<a href="${item.codeLink}" target="_blank" class="btn">View code</a>` : ''}
        </div>
    `;
    portfoliosContainer.appendChild(singlePortfolio);
})


// Select all links with hashes
// scroll-behavior: smooth fallback
// Copyed from stackoverflow
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
