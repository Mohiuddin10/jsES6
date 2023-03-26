const data = [
    {_id : 001,
    name : 'coxs bazar',
    district : 'Chattogram',
    isHill : false,
    img: 'https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'},

    {
        _id : 002,
    name : 'Bandarban',
    district : 'Chattogram',
    isHill : true,
    img: 'https://dailyasianage.com/library/2019/12/09/1575920575_6.jpg'},


    {_id : 003,
    name : 'Jaflong',
    district : 'Sylet',
    isHill : true,
    img: 'https://images.unsplash.com/photo-1643001607577-0a0332e79aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFmbG9uZyUyQyUyMHN5bGhldCUyQyUyMGJhbmdsYWRlc2h8ZW58MHx8MHx8&w=1000&q=80'},
    
    {_id : 004,
    name : 'Kuakata',
    district : 'Borishal',
    isHill : false,
    img: 'https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a3Vha2F0YSUyQyUyMGJhbmdsYWRlc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'}

];

data.forEach(touristSpot => {
    // destructure 
    const {_id, name, district, isHill, img} =touristSpot;
    // hold the container by id 
    const cardContainer = document.getElementById('card-container');
    // create a div 
    const singleCard = document.createElement('div');
    // set class name
    singleCard.classList.add('col');
    // set inner html 
    singleCard.innerHTML = `
    <div class="card">
    <img src= "${img}" class="card-img-top rounded img-container" alt="No image">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6>${district}</h6>
        <p>It is a ${isHill === true ? "Hill side area" : "Sea side area"}</p>
        <p class="card-text">This is a longer card with supporting </p>
    </div>
    </div>
    `;
    // append the div inside the card container 
    cardContainer.appendChild(singleCard);


})

{/* <div class="col">
              <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div> */}