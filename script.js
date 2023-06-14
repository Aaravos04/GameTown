let text01 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maiores facere voluptate accusantium distinctio inventore quo autem dolor molestias voluptatibus reiciendis similique harum, laudantium quisquam iure minus consectetur aspernatur praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit."

let text02 = "<br><br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quidem ullam similique dicta reiciendis magni consequuntur porro a laborum perspiciatis iure nihil rem excepturi eligendi quas, facere atque! Dicta, fugiat. Maxime, quibusdam recusandae adipisci consequuntur earum veniam iure, atque dignissimos sed sit, aperiam nam.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa fuga animi quibusdam libero, rem aliquam, est sequi tempore quia laudantium esse maiores, praesentium distinctio eveniet. Inventore suscipit quidem fugit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis et culpa sunt odit optio, aut dignissimos quasi quis eos, architecto numquam dolore impedit, id atque quam voluptatem officiis ipsa eveniet!<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem quos cumque aliquid explicabo ex est dolorem nostrum rerum fuga, ad iste debitis ullam doloribus quo aut animi nemo odit. Maxime, quibusdam recusandae adipisci consequuntur earum veniam iure, atque dignissimos sed sit, aperiam nam."

let Login = false;
function alertnone () {window.open("error.html");}

function loginstatus () {
    Login = !Login;
    let activeonlogin = document.getElementsByClassName("activeonlogin");
    let activeonlogout = document.getElementsByClassName("activeonlogout");

    if (Login) {
        for (let i = 0; i < activeonlogin.length; i++) {
            let element = activeonlogin[i];
            element.classList.remove("invis");
            element.classList.add("vis");
        }
        for (let i = 0; i < activeonlogout.length; i++) {
            let element = activeonlogout[i];
            element.classList.remove("vis");
            element.classList.add("invis");
        }
        alert("You have successfully logged in.");
    }
    else {
        for (let i = 0; i < activeonlogin.length; i++) {
            let element = activeonlogin[i];
            element.classList.remove("vis");
            element.classList.add("invis");
        }
        for (let i = 0; i < activeonlogout.length; i++) {
            let element = activeonlogout[i];
            element.classList.remove("invis");
            element.classList.add("vis");
        }
        alert("You have successfully logged out.");
    }
}

function playnow () {
    if (Login) 
        alertnone();
    else
        alert("Please login to play this game.");
}

function submit () {
    var field01 = document.getElementById("field01").value
    var field02 = document.getElementById("field02").value
    var field03 = document.getElementById("field03").value

    var element01 = document.getElementById("contactwarning01");
    var element02 = document.getElementById("contactwarning02");
    var element03 = document.getElementById("contactwarning03");
    
    element01.style.visibility = "hidden";
    element02.style.visibility = "hidden";
    element03.style.visibility = "hidden";

    if ((field01 == "") || (field02 == "") || (field03 == "")) {
        if (field01 == "")
            element01.style.visibility = "visible";
        if (field02 == "")
            element02.style.visibility = "visible";
        if (field03 == "")
            element03.style.visibility = "visible";
    }
    else {
        document.getElementById("field01").value = "";
        document.getElementById("field02").value = "";
        document.getElementById("field03").value = "";
        alert("Your message has been sent successfully.");
    }
}

function readmore () {
    let image = document.getElementById("aboutimg");
    let paragraph = document.getElementById("aboutparagraph");
    let readmore = document.getElementById("readmore");
    let readless = document.getElementById("readless");

    image.style.display = "none";
    readmore.style.display = "none"
    readless.style.display = "block";
    paragraph.innerHTML = text01 + text02;
}

function readless () {
    let image = document.getElementById("aboutimg");
    let paragraph = document.getElementById("aboutparagraph");
    let readmore = document.getElementById("readmore");
    let readless = document.getElementById("readless");

    image.style.display = "block";
    readmore.style.display = "block"
    readless.style.display = "none";
    paragraph.innerHTML = text01;
}

function loginside () {
    let signup = document.getElementById("signupside");
    let login = document.getElementById("loginside");
    let page = document.getElementById("absolute");

    signup.style.display = "none";
    login.style.display = "block";
    page.style.display = "flex";

    var mess = document.getElementById("message");
    mess.style.visibility = "hidden";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function signupside () {
    let signup = document.getElementById("signupside");
    let login = document.getElementById("loginside");
    let page = document.getElementById("absolute");

    signup.style.display = "block";
    login.style.display = "none";
    page.style.display = "flex";

    var mess01 = document.getElementById("mess01");
    var mess02 = document.getElementById("mess02");
    var mess03 = document.getElementById("mess03");
    var mess04 = document.getElementById("mess04");

    mess01.style.visibility = "hidden";
    mess02.style.visibility = "hidden";
    mess03.style.visibility = "hidden";
    mess04.style.visibility = "hidden";

    document.getElementById("sf01").value = "";
    document.getElementById("sf02").value = "";
    document.getElementById("sf03").value = "";
    document.getElementById("sf04").value = "";
}

function closepage () {
    var element = document.getElementById("absolute");
    element.style.display = "none";
}

function login () {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if ((user == "Abcd1234") && (pass == 12345678)) {
        closepage();
        loginstatus();
    }
    else {
        var element = document.getElementById("message");
        element.innerHTML = "Incorrect Username or Password!";
        element.style.visibility = "visible";
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function signup () {
    var valid = true;
    var sf01 = document.getElementById("sf01").value;
    var sf02 = document.getElementById("sf02").value;
    var sf03 = document.getElementById("sf03").value;
    var sf04 = document.getElementById("sf04").value;

    var mess01 = document.getElementById("mess01");
    var mess02 = document.getElementById("mess02");
    var mess03 = document.getElementById("mess03");
    var mess04 = document.getElementById("mess04");

    mess01.style.visibility = "hidden";
    mess02.style.visibility = "hidden";
    mess03.style.visibility = "hidden";
    mess04.style.visibility = "hidden";

    if (sf03.length < 8) {
        mess03.innerHTML = "Password must be at least 8 characters."
        mess03.style.visibility = "visible";
        valid = false;
    }

    if (sf03 != sf04) {
        mess04.innerHTML = "Confirm Password doesn't match."
        mess04.style.visibility = "visible";
        valid = false;
    }

    if ((sf01 == "") || (sf02 == "") || (sf03 == "") || (sf04 == "")) {
        valid = false;
        if (sf01 == "") 
            mess01.style.visibility = "visible";
        if (sf02 == "")
            mess02.style.visibility = "visible";
        if (sf03 == "") {
            mess03.innerHTML = "This field is required."
            mess03.style.visibility = "visible";
        }
        if (sf04 == "") {
            mess04.innerHTML = "This field is required."
            mess04.style.visibility = "visible";
        }
    }

    if (valid) {
        closepage();
        alert("You have signed up successfully. Please login.");
    }
}

function revealpass () {
    var element = document.getElementById("message");
    element.innerHTML = "Username: Abcd1234 | Password: 12345678";
    element.style.visibility = "visible";
}
