const data = [
    {_id : 001,
    name : 'coxs bazar',
    district : 'Chattogram',
    isHill : false,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcoxs-bazar&psig=AOvVaw0pXrcfEkKf6OUghRJoU9FX&ust=1679944734976000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjgpvun-v0CFQAAAAAdAAAAABAE'},

    {
        _id : 002,
    name : 'Bandarban',
    district : 'Chattogram',
    isHill : true,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbandarban&psig=AOvVaw3nmS6OQxEvqOFyUYErAr4l&ust=1679944821756000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjMyaSo-v0CFQAAAAAdAAAAABAE'},


    {_id : 003,
    name : 'Jaflong',
    district : 'Sylet',
    isHill : true,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fjaflong%252C-sylhet%252C-bangladesh&psig=AOvVaw13Rfd4mJW4fWEV-JxvjTb-&ust=1679944896135000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjM98eo-v0CFQAAAAAdAAAAABAE'},
    
    {_id : 004,
    name : 'Kuakata',
    district : 'Borishal',
    isHill : false,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fkuakata%252C-bangladesh&psig=AOvVaw3ldPRhCf3DSwHUbS9cU4ch&ust=1679944958243000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCwyOWo-v0CFQAAAAAdAAAAABAE'}

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
    <img src=${img} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6>${district}</h6>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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