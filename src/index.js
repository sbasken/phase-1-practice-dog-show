const dogTable = document.querySelector("#table-body")
const dogAPI = "http://localhost:3000/dogs"
const form = document.querySelector("#dog-form")


fetch(dogAPI)
.then(res => res.json())
.then(dogs => dogs.forEach(renderDog))

function renderDog (dog) {
    const row = document.createElement("tr")
    row.id = dog.id
    dogTable.append(row)
    
    const name = document.createElement("td")
    name.textContent = dog.name
    
    const breed = document.createElement("td")
    breed.textContent = dog.breed
    
    const sex = document.createElement("td")
    sex.textContent = dog.sex

    const td = document.createElement("td")
    const button = document.createElement('button')
    button.textContent = "Edit Dog"
    td.append(button)

    row.append(name, breed, sex, td)

    button.addEventListener("click", (e)=> handleEdit(dog))
 

        
}

function handleEdit(dog) {
    form.name.value = dog.name
    form.breed.value = dog.breed
    form.sex.value = dog.sex

    form.addEventListener("submit", (e) => {
        e.preventDefault()
    
        const updateDog = {
            id: dog.id,
            name: e.target.name.value,
            breed: e.target.breed.value,
            sex: e.target.sex.value
        }
    
        console.log(updateDog)
        // fetch(`${dogAPI}/${dog.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(updateDog)
        // })
        
    })

}



