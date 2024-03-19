type Point = {
    x: string;
    y: string;
};
const brothers: Point = {
    x: 'saif',
    y: 'ashik',
};

// console.log(brothers);

function players(params: Point) {
    console.log(`Player names are ${params.x} & ${params.y} `);
}

