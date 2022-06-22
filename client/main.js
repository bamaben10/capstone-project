// const baseURL = `http://localhost:5050`


const searchButton = document.querySelector('#getQuerySubmit')
const displaySection = document.querySelector('#displaySection')
const userInput = document.querySelector('#query-input')
const addtoOrderButton = document.createElement('button')
// const deleteButton = document.createElement('button')

const addToOrder = (item) => {
    console.log(item)
    let body = {
        item
    }
    axios.post(`/api/products`, body)

    //when the response comesback, console.log the response
    .then(res => displayRolls(res.data))
    .catch(err => console.log(err))
    
}

// const removeOrder = (item) => {
//     if(cardContainer){
//         const cardContainer = document.createElement("div")
//         cardContainer.subtract('removeOrder')
//         axios.delete(`/api/removeOrder`)
//         .then(res => removeOrder(res.data))
//         .catch(err => console.log(err))
//     } else {
//         axios.delete(`./api/order`)
//         .then(res => removeOrder(res.data))
//         .catch(err => console.log(err))
//     }
//     deleteButton.addEventListener('click', removeOrder)
// }


const displayRolls = (arr) => {
    userInput.value = ''
    displaySection.innerHTML=''
    arr.map(product => {
        const cardContainer = document.createElement("div")
        console.log(typeof product.price)
        cardContainer.classList.add('card')
        cardContainer.style.width = "18rem"
        cardContainer.style.margin = "10px auto"
        cardContainer.innerHTML = `
        <img src="${product.image}" class="card-img-top" alt="cinnamon roll">
        <div class="card-body">
          <h5 class="card-title" style="color: black">${product.name}</h5>
          <p class="card-subtitle" style="color: black">$${product.price}</p>
          <button onclick="addToOrder('${product.name}')" class="btn btn-primary">Select Cinnamon Roll</a>
         
        </div>
      </div>
        `
        displaySection.appendChild(cardContainer)
    }) 
}

const postRolls = (arr) => {
    if(cardContainer){
        const cardContainer = document.createElement("div")
        cardContainer.add('addToOrder')
        axios.post(`/api/postRolls?search=$`)
        .then(res => displayRolls(res.data))
        .catch(err => console.log(err))
    } else {
        axios.post(`./api/products`)
        .then(res => postRolls(res.data))
        .catch(err => console.log(err))

        displaySection.appendChild(cardContainer)
        addtoOrderButton.addEventListener('click', postRolls)
    }
}


const getRolls = () => {
    console.log(userInput.value)
    if(userInput.value){
        axios.get(`/api/products?search=${userInput.value}`)
        .then(res => displayRolls(res.data))
        .catch(err => console.log(err))
    } else {
        axios.get(`/api/products`)
        .then(res => displayRolls(res.data))
        .catch(err => console.log(err))
    }
} 
searchButton.addEventListener('click', getRolls)

getRolls()

