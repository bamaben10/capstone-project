const baseURL = `http://localhost:5050`


const searchButton = document.querySelector('#getQuerySubmit')
const displaySection = document.querySelector('#displaySection')
const userInput = document.querySelector('#query-input')

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
          <a href="#" class="btn btn-primary">Add to Order</a>
        </div>
      </div>
        `
        displaySection.appendChild(cardContainer)
    }) 
}

const getRolls = () => {
    console.log(userInput.value)
    if(userInput.value){
        axios.get(`${baseURL}/api/products?search=${userInput.value}`)
        .then(res => displayRolls(res.data))
        .catch(err => console.log(err))
    } else {
        axios.get(`${baseURL}/api/products`)
        .then(res => displayRolls(res.data))
        .catch(err => console.log(err))
    }
} 
searchButton.addEventListener('click', getRolls)



getRolls()