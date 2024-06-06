document.addEventListener("DOMContentLoaded", function() {
    const showDotsButton = document.getElementById("showDotsButton");
    const showStatesButton = document.getElementById("showStatesButton");
    const showAllDotsButton = document.getElementById("showAllDotsButton");
    const dots = document.querySelectorAll(".about-map");
    const mapImg = document.querySelector(".map-img");
    const worldMapContainer = document.getElementsByClassName('world-map')[0];

    // Hide dots corresponding to tool numbers 16 to 42 initially
    hideDotsBetween16And42();

    showDotsButton.addEventListener("click", function() {
        hideDotsBetween16And42(); // Hide dots between tool-16 to tool-42
        showAdditionalDots(39); // Display another 39 dots
        changeMapImage("wold-mapx.svg");
    });

    showStatesButton.addEventListener("click", function() {
        showIndiaDots();
        changeMapImage("india_map.svg");
    });

    showAllDotsButton.addEventListener("click", function() {
        showAllDots();
        changeMapImage("wold-mapx.svg");
    });

    function hideDotsBetween16And42() {
        dots.forEach(dot => {
            const className = dot.classList[0];
            const toolNumber = parseInt(className.split('-')[1]);
            if (toolNumber >= 16 && toolNumber <= 42) {
                dot.style.display = "none";
            }
        });
    }

    function showAdditionalDots(number) {
        let count = 0;
        dots.forEach(dot => {
            if (count < number) {
                const className = dot.classList[0];
                const toolNumber = parseInt(className.split('-')[1]);
                if (toolNumber >= 16 && toolNumber <= 42) {
                    dot.style.display = "none";
                } else {
                    dot.style.display = "block";
                    count++;
                }
            } else {
                dot.style.display = "none";
            }
        });
    }
    

    function showIndiaDots() {
        dots.forEach(dot => {
            const className = dot.classList[0];
            const toolNumber = parseInt(className.split('-')[1]);
            if (toolNumber >= 16 && toolNumber <= 42) {
                dot.style.display = "block";
            } else {
                dot.style.display = "none";
            }
        });
    }

    function showAllDots() {
        dots.forEach(dot => {
            dot.style.display = "block";
        });
        hideDotsBetween16And42();
    }

    function changeMapImage(imageSrc) {
        mapImg.src = imageSrc;
    
        if (imageSrc === "india_map.svg") {
            worldMapContainer.style.width = '45vw';
            worldMapContainer.style.height = 'auto';
        } else {
            // Reset size for other images
            worldMapContainer.style.width = '100%';
            worldMapContainer.style.height = 'auto';
        }
    }
});
