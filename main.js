x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    document.getElementById("status").innerHTML = "Systen is listening, please speak";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;



    document.getElementById("status").innerHTML = "Your speech has been recorded as: " + content;
    if (content == "circle") {

        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Start drawing a circle";
        draw_circle = "set";
    }

    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Start drawing a rectangle";
        draw_circle = "set";
    }

}

function setup() {

    canvas = createCanvas(900, 600);
}

function draw() {

    if (draw_circle = "set") {

        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }

    if (draw_circle = "set") {

        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = " Rectangle is drawn";
        draw_rect = "";
    }

}