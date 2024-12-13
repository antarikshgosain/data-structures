

var numbers = [8, 42, 38, 11, 2, 39, 1, 7, 1700];

numbers.forEach(num => {
    setTimeout(() => {
        console.log(num);
    }, num);
});


