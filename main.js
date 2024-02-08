import './global.scss';

const password = "fkcode";
const linkedin = "https://www.linkedin.com/in/aissam-salman-webdev/";
const github = "https://github.com/Aissam-salman";
const email = 'mailto:nasawi.lmj@gmail.com';

const whois = [
    "<br>",
    "Hey, I'm Salman! 👋",
    "I'm a Back-end Developer.",
    "I'm convinced that creativity will be the core skill of the future,",
    "with technical issues taking a back seat. The challenges of the future are extremely exciting and motivating.",
    "Every project is an opportunity to innovate and push back the boundaries of imagination.",
    "My commitment to providing meaningful and innovative solutions guides every one of my achievements.",
    "Together, let's create an inspiring and positive future. 🎉",
    "<br>"
];

const social = [
    "<br>",
    'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/aissam-salman-webdev' + "</a>",
    'github         <a href="' + github + '" target="_blank">github/Aissam-salman' + "</a>",
    "<br>"
];

const secret = [
    "<br>",
    '<span class="command">sudo</span>           Only use if you\'re admin',
    "<br>"
];

const projects = [
    "<br>",
    "Still curating... most projects are offline, on GitHub, or confidential.",
    "<br>"
];

const help = [
    "<br>",
    '<span class="command">whois</span>          Who is Salman?',
    '<span class="command">social</span>         Display social networks',
    '<span class="command">secret</span>         Find the password',
    '<span class="command">projects</span>       View coding projects',
    '<span class="command">history</span>        View command history',
    '<span class="command">help</span>           You obviously already know what this does',
    '<span class="command">clear</span>          Clear terminal',
    '<span class="command">banner</span>         Display the header',
    "<br>",
];

const banner = [
    "<span class=\"ascii\">&NewLine;&#x20;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&#x20;&#x20;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&#x20;&#x20;&lowbar;&lowbar;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&lowbar;&lowbar;&#x20;&#x20;&#x20;&#x20;&lowbar;&lowbar;&#x20;&#x20;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&#x20;&#x20;&lowbar;&lowbar;&#x20;&#x20;&#x20;&lowbar;&lowbar;&#x20;&#x20;&#x20;&#x20;&NewLine;&sol;&bsol;&#x20;&#x20;&lowbar;&lowbar;&lowbar;&bsol;&sol;&bsol;&#x20;&#x20;&lowbar;&lowbar;&#x20;&bsol;&sol;&bsol;&#x20;&bsol;&#x20;&#x20;&#x20;&#x20;&sol;&bsol;&#x20;&quot;&#x2d;&period;&sol;&#x20;&#x20;&bsol;&sol;&bsol;&#x20;&#x20;&lowbar;&lowbar;&#x20;&bsol;&sol;&bsol;&#x20;&quot;&#x2d;&period;&bsol;&#x20;&bsol;&#x20;&#x20;&#x20;&NewLine;&bsol;&#x20;&bsol;&lowbar;&lowbar;&lowbar;&#x20;&#x20;&bsol;&#x20;&bsol;&#x20;&#x20;&lowbar;&lowbar;&#x20;&bsol;&#x20;&bsol;&#x20;&bsol;&lowbar;&lowbar;&lowbar;&bsol;&#x20;&bsol;&#x20;&bsol;&#x2d;&period;&sol;&bsol;&#x20;&bsol;&#x20;&bsol;&#x20;&#x20;&lowbar;&lowbar;&#x20;&bsol;&#x20;&bsol;&#x20;&bsol;&#x2d;&period;&#x20;&#x20;&bsol;&#x20;&#x20;&NewLine;&#x20;&bsol;&sol;&bsol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&bsol;&#x20;&bsol;&lowbar;&bsol;&#x20;&bsol;&lowbar;&bsol;&#x20;&bsol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&bsol;&#x20;&bsol;&lowbar;&bsol;&#x20;&bsol;&#x20;&bsol;&lowbar;&bsol;&#x20;&bsol;&lowbar;&bsol;&#x20;&bsol;&lowbar;&bsol;&#x20;&bsol;&lowbar;&bsol;&bsol;&quot;&bsol;&lowbar;&bsol;&#x20;&NewLine;&#x20;&#x20;&bsol;&sol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&sol;&bsol;&sol;&lowbar;&sol;&bsol;&sol;&lowbar;&sol;&bsol;&sol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&sol;&bsol;&sol;&lowbar;&sol;&#x20;&#x20;&bsol;&sol;&lowbar;&sol;&bsol;&sol;&lowbar;&sol;&bsol;&sol;&lowbar;&sol;&bsol;&sol;&lowbar;&sol;&#x20;&bsol;&sol;&lowbar;&sol;&#x20;&NewLine;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;</span>",
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

var cursor;
var git = 0;
var pw = false;
var pwd = false;
var commands = [];
const textarea = document.getElementById("texter");
const before = document.getElementById("before");
const liner = document.getElementById("liner");
const command = document.getElementById("typer");
const terminal = document.getElementById("terminal");

//TODO: add cmd keyboard for clear terminal and other features

//utilitaries
function init() {
    cursor = document.getElementById("cursor");
    cursor.style.left = "0px";
}
function nl2br(txt) {
    return txt.replace(/\n/g, '');
}
function typeIt(from, e) {
    e = e || window.event;
    let w = document.getElementById("typer");
    let tw = from.value;
    if (!pw) {
        w.innerHTML = nl2br(tw);
    }
}
function moveIt(count, e) {
    e = e || window.event;
    let keycode = e.keyCode || e.which;
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}
function handleMouseMove(event) {
    // Récupérer la position de la souris par rapport à l'élément "smiley"
    const { clientX, clientY } = event;
    const smiley = document.getElementById('smiley');

    // Calculer la valeur du décalage en fonction de la position de la souris
    const offsetX = (clientX - window.innerWidth / 2) * 1;
    const offsetY = (clientY - window.innerHeight / 2) * 1;

    // Animer le déplacement
    gsap.to(smiley, { x: offsetX, y: offsetY, duration: 0.5 });
}

// event handlers
window.onload = init;
document.addEventListener('mousemove', handleMouseMove);
document.querySelector("#command").addEventListener('click', function() {textarea.focus();});
textarea.addEventListener('keyup', function(event) {typeIt(this, event);});
textarea.addEventListener('keydown',function(event){
    typeIt(this, event);
    moveIt(this.value.length, event);
});
textarea.addEventListener('keypress',function(event) {typeIt(this, event);});
window.addEventListener("keyup", enterKey);
textarea.addEventListener("focus", () => {
    document.querySelector('.container_terminal').style.borderColor = "#bd93f9";
})
textarea.addEventListener("blur", () => {
    document.querySelector('.container_terminal').style.borderColor = "inherit";
})


// cmd line
function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (pw) {
        let et = "*";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
        if (textarea.value === password) {
            pwd = true;
        }
        if (pwd && e.keyCode == 13) {
            loopLines(secret, "color2 margin", 120);
            command.innerHTML = "";
            textarea.value = "";
            pwd = false;
            pw = false;
            liner.classList.remove("password");
        } else if (e.keyCode == 13) {
            addLine("Wrong password ", "error", 0);
            command.innerHTML = "";
            textarea.value = "";
            pw = false;
            liner.classList.remove("password");
        }
    } else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("<span class=\"pink\">visitor@nasawi.com</span><br> <span class='purple'>❯❯❯</span> " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } else {
                textarea.value = commands[git];
            }
            command.innerHTML = textarea.value;
        }
    }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "whois":
            loopLines(whois, "color2 margin", 80);
            break;
        case "sudo":
            addLine("Oh no, you're not admin...", "color2", 80);
            setTimeout(function () {
                window.open('https://youtu.be/t6-cCh9bTG4?t=13','_blank');
            }, 2000);
            break;
        case "sudo secret":
            addLine("Oh no, you're not admin...", "color2", 80);
            setTimeout(function () {
                window.open('https://youtu.be/t6-cCh9bTG4?t=13','_blank');
            }, 2000);
            break;
        case "sudo fkcode":
            addLine("Oh no, you're not admin...", "color2", 80);
            setTimeout(function () {
                window.open('https://youtu.be/t6-cCh9bTG4?t=13','_blank');
            }, 2000);
            break;
        case "social":
            loopLines(social, "color2 margin", 80);
            break;
        case "secret":
            liner.classList.add("password");
            pw = true;
            break;
        case "projects":
            loopLines(projects, "color2 margin", 80);
            break;
        case "password":
            addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
            break;
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
        case "email":
            addLine('Opening mailto:<a href="mailto:nasawi.lmj@gmail.com">nasawi.lmj@gmail.com</a>...', "color2", 80);
            newTab(email);
            break;
        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "banner":
            loopLines(banner, "", 80);
            break;
        // socials
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            newTab(linkedin);
            break;
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
            break;
        case "ls":
            addLine("index.html style.css main.js", "pink", 50);
            break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}


// on startup
setTimeout(function () {
    loopLines(banner, "", 80);
    textarea.focus({ focusVisible: true });
}, 100);

console.log(
    "%cYou hacked my password!😠",
    "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");