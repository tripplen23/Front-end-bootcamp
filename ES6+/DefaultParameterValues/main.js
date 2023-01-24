function logger(log) {
    if (typeof log === 'undefined') {
        console.log("Gia tri mac dinh");
    }
    console.log(log)
}

logger();

//ES6

function logger1(log = "Gia tri mac dinh") {
    console.log(log)
}

logger1();

function logger2(log, isAlert = false) {
    if (isAlert) return alert(log);
    console.log(log)
}

logger2("Ben", true);

