
let tab1 = ["kamien", "papier", "nozyce"]

function kamien(){
    let randomi = Math.floor(Math.random() * tab1.length)

    let randomp = document.getElementById("wynik")
    let starcie;
    if(tab1[randomi] == "kamien"){
        starcie = "remis 🤝";
    }
    if(tab1[randomi] == "papier"){
        starcie = "porażka ❌";
    }
    if(tab1[randomi] == "nozyce"){
        starcie = "zwycięstwo 👑";
    }
    randomp.innerHTML = "Komputer wybrał " + tab1[randomi] + "<br>" + starcie;

}

function papier(){
    let randomi = Math.floor(Math.random() * tab1.length)

    let randomp = document.getElementById("wynik")
    let starcie;
    if(tab1[randomi] == "kamien"){
        starcie = "zwycięstwo 👑";
    }
    if(tab1[randomi] == "papier"){
        starcie = "remis 🤝";
    }
    if(tab1[randomi] == "nozyce"){
        starcie = "porażka ❌";
    }
    randomp.innerHTML = "Komputer wybrał " + tab1[randomi] + "<br>" + starcie;

}

function nozyce(){
    let randomi = Math.floor(Math.random() * tab1.length)

    let randomp = document.getElementById("wynik")
    let starcie;
    if(tab1[randomi] == "kamien"){
        starcie = "porażka ❌";
    }
    if(tab1[randomi] == "papier"){
        starcie = "żwycięstwo 👑";
    }
    if(tab1[randomi] == "nozyce"){
        starcie = "remis 🤝";
    }
    randomp.innerHTML = "Komputer wybrał " + tab1[randomi] + "<br>" + starcie;

}