const personData =[
 {id: '001', name: 'Sujon', email: 'test@gmail.com'},
 {id: '002', name: 'Roxy', email: 'test@gmail.com'},
 {id: '003', name: 'Faltu Bappy', email: 'test@gmail.com'},
 {id: '004', name: 'Imran', email: 'test@gmail.com'},
 {id: '005', name: 'tousif', email: 'test@gmail.com'},
];

const dataInfo = {};

personData.map(person => {
    dataInfo[person.id] = person.name
});
console.log(dataInfo);
