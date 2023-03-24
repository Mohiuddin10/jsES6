const students = [
    { name: 'Sujon', email: 'sujon@mail.com', avg: 51, fiftyPercent: true},
    { name: 'Roxy', email: 'roxy@mail.com', avg: 32, fiftyPercent: false},
    { name: 'Tousif', email: 'tousif@mail.com', avg: 59, fiftyPercent:true},
    { name: 'Saiful', email: 'saifool@mail.com', avg: 12, fiftyPercent: false},
    { name: 'Bappy', email: 'faltuBappy@mail.com', avg: 32, fiftyPercent: false},
    { name: 'Imran', email: 'bangachi@mail.com', avg: 67, fiftyPercent:true},
    { name: 'Romel', email: 'sesra@mail.com', avg: 32, fiftyPercent: false},
    { name: 'Hani', email: 'jibonSesh@mail.com', avg: 12, fiftyPercent: false},
    { name: 'Siam', email: 'bagha@mail.com', avg: 87, fiftyPercent: true},
    { name: 'Moriam', email: 'gondogol@mail.com', avg: 79, fiftyPercent: true},
    { name: 'Maishan', email: 'chotoBagga@mail.com', avg: 82, fiftyPercent: true}
];

const pass = students.filter(student => student.avg > 50 && student.fiftyPercent === true);
const passName = pass.map(student => {
    const {name, email} = student;
    console.log(`baba ${name} tumi pass korso tatatari milad poro ar tomar ${email} ay maile msg chole jabe`)
});



const fail = students.filter(student => student.avg < 50 && student.fiftyPercent === false);
const failName = fail.map(student => {
    const {name: num, email: mail} = student;
    console.log(`${num} tui jibone sudu ey ektai pap korsos, tur ${mail} theke kono mail dibi na`)
});
