function showMenu() {
    var x = document.getElementById("menu");
    if (x.className === "") {
        x.className = "expanded";
    } else {
        x.className = "";
    }

    var y = document.getElementById("menu-icon");
    if (y.className === "menu-icon") {
        y.className += " expanded";
    } else {
        y.className = "menu-icon";
    }
}

function setDestination(name) {
    document.querySelectorAll("article.destination").forEach(function(article) {
        if (article.id === name) {
            if (article.className === "destination") {
                article.className += " active";
            }
        }
        else {
            article.className = "destination";
        }
    });
}

function showCrewMember(name) {
    document.querySelectorAll("article.crew").forEach(function(article) {
        if (article.id === name) {
            if (article.className === "crew") {
                article.className += " active";
            }
        }
        else {
            article.className = "crew";
        }
    });
}

function showTechInfo(name) {
    document.querySelectorAll("article.technology").forEach(function(article) {
        if (article.id === name) {
            if (article.className === "technology") {
                article.className += " active";
            }
        }
        else {
            article.className = "technology";
        }
    });
}