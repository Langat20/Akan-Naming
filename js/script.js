var maleName = ["Kwasi", "Kwa", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getName() {
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1;

    // var bDay = new Date(mm + "/" + dd + "/" + yy);
    // var weekDay = bDay.getDay();


    var birthDay = parseInt(cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;

    if (document.getElementById("gender").checked) {
        var gender = "male";
    } else {
        var gender = "female";
    }

    // form validation
    if (dd <= 0 || dd == "" || dd > 31) {
        alert("invalid Date");
    } else if (mm <= 0 || mm > 12 || mm == "" || mm == 2 && dd > 29) {
        alert("invalid Month");
    } else if (Math.abs(birthDay) == 0 && gender === "male") {
        alert("Your Name is " + maleName[0]);
    } else if (Math.abs(birthDay) == 1 && gender === "male") {
        alert("Your Name is " + maleName[1]);
    } else if (Math.abs(birthDay) == 2 && gender === "male") {
        alert("Your Name is " + maleName[2]);
    } else if (Math.abs(birthDay) == 3 && gender === "male") {
        alert("Your Name is " + maleName[3]);
    } else if (Math.abs(birthDay) == 4 && gender === "male") {
        alert("Your Name is " + maleName[4]);
    } else if (Math.abs(birthDay) == 5 && gender === "male") {
        alert("Your Name is " + maleName[5]);
    } else if (Math.abs(birthDay) == 6 && gender === "male") {
        alert("Your Name is " + maleName[6]);
    } else if (Math.abs(birthDay) == 0 && gender === "female") {
        alert("Your Name is " + femaleName[0]);
    } else if (Math.abs(birthDay) == 1 && gender === "female") {
        alert("Your Name is " + femaleName[1]);
    } else if (Math.abs(birthDay) == 2 && gender === "female") {
        alert("Your Name is " + femaleName[2]);
    } else if (Math.abs(birthDay) == 3 && gender === "female") {
        alert("Your Name is " + femaleName[3]);
    } else if (Math.abs(birthDay) == 4 && gender === "female") {
        alert("Your Name is " + femaleName[4]);
    } else if (Math.abs(birthDay) == 5 && gender === "female") {
        alert("Your Name is " + femaleName[5]);
    } else if (Math.abs(birthDay) == 6 && gender === "female") {
        alert("Your Name is " + femaleName[6]);
    } else {
        alert("inputs required")
    }

}