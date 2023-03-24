const num = [1,2,3,4,5];

const sum = num.reduce((previous, current) => {
    return previous * current;
}, 1
    );

    console.log(sum);