const names = "VAKHTANGI";
const surname = "IOSELIANI";
const age = "18"

if(names.length>20){
    console.log("სახელი დასაშვებზე მეტია")
} else if(surname.length>40){
    console.log("გვარი დასაშვებზე მეტია")
} else if (age >= 18 ){
    console.log(`გამარჯობა, ${names} ${surname}`)
}