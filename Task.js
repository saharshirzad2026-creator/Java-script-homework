// ________First Task________
const week = prompt("Enter a number from 1 to 7");
switch(week){
    case 1:
        console.log("Today is Saturday");
        break;
    case 2:
        console.log("Today is Sunday");
        break;
    case 3:
        console.log("Today is Monday");
        break;
    case 4:
        console.log("Today is Tuesday");
        break;
    case 5:
        console.log("Today is Wednesday");
        break;
    case 6:
        console.log("Today is Thursday");
        break;
    case 7:
        console.log("Today is Friday");
        break;
    default:
        console.log("You should enter a number from 1 to 7");
        break;
}
// ________First Task________
const month = prompt("Enter a number from 1 to 12 then we say to you that witch month is how many days");
switch(month){
    case 1:
        console.log("January is thirteen days");
        break;
    case 2:
        console.log("Febreuary is twenty eight days");
        break;
    case 3:
        console.log("March is twenty nine days");
        break;
    case 4:
        console.log("April is thirteen days");
        break;
    case 5:
        console.log("May is thirteen days");
        break;
    case 6:
        console.log("June is twenty eight days");
        break;
    case 7:
        console.log("July is thrteen days");
        break;
    case 8:
        console.log("Augest is thirteen days");
        break;
    case 9:
        console.log("September is twenty nine days");
        break;
    case 10:
        console.log("October is thirteen days");
        break;
    case 11:
        console.log("November is thirteen days");
        break;
    case 12:
        console.log("December is thirteen days");
        break;
    default:
        console.count("You should enter a number from 1 to 12");
        break;
}
// ________Third Task________
const grade = prompt("Enter a letter form A to F");
switch(grade){
    case "A":
        console.log("You are great");
        break;
    case "B":
        console.log("You are good");
        break;
    case "C":
        console.log("You are medium");
        break;
    case "D":
        console.log("You are not bad");
        break;
    case "E":
        console.log("You are bad");
        break;
    case "F":
        console.log("You should try a lot");
        break;
    default:
        console.log("You should enter a letter from A to F");
        break;
}
// ________Fourth Task________
const direct = prompt("Choose a direct north,south,east and west then we tell to you to where you should move");
switch(direct){
    case "north":
        console.log("You should move to up");
        break;
    case "south":
        console.log("You should move to down");
        break;
    case "west":
        console.log("You should move to left");
        break;
    case "east":
        console.log("You should move to right");
        break;
    default:
        console.log("We don't know to where you should move");
        break;
}
// ________Fifth Task________
const fruits = prompt("Enter a fruit then we tell you that witch color is this");
switch(fruits){
    case "Apple":
        console.log("It's color is red, green or yellow");
        break;
    case "Orange":
        console.log("It's color is orange");
        break;
    case "Banana":
        console.count("It's color is yellow");
        break;
    case "Grapes":
        console.log("It's color is red, green and black");
        break;
    default:
        console.log("We don't know what color is that");
        break;
}
// ________Sixth Task________
const permission = prompt("Enter that you are admin, editor, viewer or guest");
switch(permission){
    case "admin":
        console.log("You can do everything edit and also add employee");
        break;
    case "editor":
        console.log("You can edit but you can't add employee");
        break;
    case "viewer":
        console.log("You can only see everything");
        break;
    case "guest":
        console.log("You are only a guest");
        break;
    default:
        console.log("We don't know you");
        break;
}
// ________Seventh Task________
const character = prompt("Enter a character +,-,*,/");
switch(character){
    case "+":
        console.log("این یک عملیه مثبت است");
        break;
    case "-":
        console.log("این یک عملیه منفی است");
        break;
    case "*":
        console.log("این یک عملیه ضرب است");
        break;
    case "/":
        console.log("این یک عملیه تقسیم است");
        break;
    default:
        console.log("ما نمیدانیم این چی عملیه است");
        break;
}
// ________Eighth Task________
const season = prompt("Enter a number from 1 to 4 then we tell you in witch season what should you do");
switch(season){
    case 1:
        console.log("In spring you can go to your family huose");
        break;
    case 2:
        console.log("In summer you can go to pinics");
        break;
    case 3:
        console.log("In fall you can walk under the yellow trees");
        break;
    case 4:
        console.log("In winter you can go to ski and drink a warm tea");
        break;
    default:
        console.log("You should enter a number from 1 to 4");
        break;
}
// ________Ninth Task________
const countryCode = prompt("Enter the end of your phone number then we tell you this code is from witch country");
switch(countryCode){
    case 98:
        console.log("It's the code of Iran country");
        break;
    case 90:
        console.log("It's the code of Pakistan country");
        break;
    case 93:
        console.log("It's the code of Afghanistan country");
        break;
    case 971:
        console.log("It's the code of America");
        break;
    default:
        console.log("We don't know it's the code of witch country");
        break;
}
// ________Tenth Task________
const number = prompt("Enter a number from 1 to 10");
switch(number){
    case 0:
        console.log("صفر");
        break;
    case 1:
        console.log("یک");
        break;
    case 2:
        console.log("دو");
        break;
        case 3:
            console.log("سه");
            break;
        case 4:
            console.log("چهار");
            break;
        case 5:
            console.log("پنج");
            break;
        case 6:
            console.log("شش");
            break;
        case 7:
            console.log("هفت");
            break;
        case 8:
            console.log("هشت");
            break;
        case 9:
            console.log("نه");
            break;
        case 10:
            console.log("ده");
            break;
        default:
            console.log("ما نمیدانیم این عدد چند است");
            break;
}
// ________Eleventh Task________
const fileType = prompt("Enter the type of your file");
switch(fileType){
    case "mp4":
        console.log("You should use from VLC or Windows Media Player");
        break;
    case "txt":
        console.log("You should use from word or notepad");
        break;
    case "pdf":
        console.log("You should use from pdf Reader");
        break;
    case "png":
        console.log("You should use from photos");
        break;
    case "jpg":
        console.log("You can use from photos");
        break;
    default:
        console.log("I don't know what app you should use");
        break;
}
// ________Twelfth Task________
const mobileCharg = "low";
switch(mobileCharg){
    case "high":
        console.log("شارژ موبایل شما بالا است");
        break;
    case "medium":
        console.log("شارژ موبایل شما متوسط است");
        break;
    case "full":
        console.log("شارژ موبایل شما کامل است");
        break;
    case "charging":
        console.log("موبایل شما در حال شارژ است");
        break;
    case "low":
        console.log("لطفا موبایل تان را به شارژر وصل کنید");
        break;
    default:
        console.log("موبایل شما در حالت عادی است");
        break;
}
// ________Thirteenth Task________
const days = prompt("یک روزهفته را وارد کنید تا به شما بگوییم که این روز کاری است یا تعطیل");
switch(days){
    case "شنبه":
        console.log("شنبه یک روز کاری است");
        break;
    case "یک شنبه":
        console.log("یک شنبه یک روز کاری است");
        break;
    case "دو شنبه":
        console.log("دو شنبه یک روز کاری است");
        break;
    case "سه شنبه":
        console.log("سه شنبه یک روز کاری است");
        break;
    case "چهار شنبه":
        console.log("چهار شنبه یک روز کاری است");
        break;
    case "پنج شنبه":
        console.log("پنج شنبه یک روز تعطیل است");
        break;
    case "جمعه":
        console.log("جمعه یک روز تعطیل است");
        break;
    default:
        console.log("شما باید یک روز هفته را وارد کنید");
        break;
}