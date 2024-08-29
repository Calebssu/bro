const express = require("express");
const cors = require("cors");
const data = require("../data.json")

const app = express();
app.use(cors());

function pushData(array) {
    array = []
    for(let i = 0; i < data.length; i++){
        array.push(data[i].title)
    }
    return array
}

app.get('/', (req, res) => {
    let arr = []
    res.status(200).json(pushData(arr).sort())
    console.log("Route hit")
});

app.get('/inser/:input1/:input2/:input3', (req, res) => {// Insertion sort had to be heavily dubbed since we were using an array of numbers instead of one with parenthesis()
    const { input1, input2, input3 } = req.params;
    let iArr = [];
    let arr = [];

    iArr.push(input1)
    iArr.push(input2)
    iArr.push(input3)

    for (let i = 0; i < iArr.length; i++) {
      arr.push(iArr[i]);
    }

    arr.sort((a, b) => {
      return a - b;
    });

    res.status(200).json(arr)
});

app.get('/add/:input1/:input2', (req, res) => {
    const { input1, input2 } = req.params;
    let sum = 0;

    
    sum += parseInt(input1) + parseInt(input2)
    console.log(sum)

    res.status(200).json(sum)
});

app.get('/year/:input1', (req, res) => {
    const { input1 } = req.params;
    let input = parseInt(input1)

    function dayOfProgrammer(year) {
        let day = 0
        if(year % 400 === 0){
            console.log("Leap Year")
            day += 12
        } else if(year % 4 === 0 && !year % 100 === 0){
            console.log("Leap year")
            day += 12
        } else {
            console.log("Not a leap year")
            day += 13
        }
        let date = `${day}/09/${year}`
        return date
    }
    
    function main(year) {
      
        const result = dayOfProgrammer(year);
    
        console.log(result + '\n');
        res.status(200).json(result)
    }
    
    main(input)
});

app.listen(3001, () => {
    console.log("Started!");
    console.log("Server is lstening on port 3001.");
})