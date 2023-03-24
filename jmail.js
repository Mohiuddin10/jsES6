const pola = [
    {name: 'roxy', job: 'nai', salary: 1000},
    {name: 'tousif', job: 'business', salary: 50000},
    {name: 'sujon', job: 'business', salary: 30000},
    {name: 'saifool', job: 'business', salary: 40000},
    {name: 'santo', job: 'besorkari', salary: 45000},
    {name: 'bappy', job: 'bariwala', salary: 2000},
    {name: 'romel', job: 'nai', salary: 10000},
    {name: 'hero alam', job: 'business', salary: 50000},

];

const jamai = pola.filter(pola => pola.salary > 10000 || pola.job === 'bariwala');
const biya = jamai.map( jamai => {
    const {name , job} = jamai;
    console.log(`Congratulations ${name} tomar biya pakka, sudu ${job} ta er moddhe chere diyo na`);
})