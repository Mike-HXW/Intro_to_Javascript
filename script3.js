function Schoolgrade(year) {
    if (year <= 6) {
        console.log("You are in primary school");
    } else if (year <= 8) {
        console.log("You are in middle school");
    } else if (year <= 12) {
        console.log("You are in high school");
    } else {
        console.log("You are an adult or you are before school!");
    }
}

Schoolgrade(3);
Schoolgrade(7);
Schoolgrade(9);
Schoolgrade(14)
