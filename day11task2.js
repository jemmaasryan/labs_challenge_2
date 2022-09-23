//Day 11 task 2
//Գրել ֆունկցիա որը կվերցնի օբյեկտի բոլոր թվային արժեքները և կբազմապատկի 2-ի;

let object = {
    width: 200,
    height: 300,
    title: "My obj"
};

function multiplyByTwo(object) {
    for(let i in object) {
        if(typeof object[i] == 'number') object[i] *= 2
    }
    return object
}

console.log(multiplyByTwo(object));