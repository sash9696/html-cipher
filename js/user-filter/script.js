
let filter = document.getElementById('filter')
let result = document.getElementById('result')
let listItems = []
getUserData()

async function getUserData() {

    //getting users from backend
    let response = await fetch('https://randomuser.me/api/0.8/?results=50')

    let { results } = await response.json()
    //10 lines of more code

    result.innerHTML = ''

    results?.forEach(function (item) {

        // console.log(item.user)
        let li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${item.user.picture.large}" alt="${item.user.name.first}">

            <div class="user-info">

            <h4>${item.user.name.first} </h4>
            <p>${item.user.location.city} </p>

            </div>

        `

        result.appendChild(li)

    })

}

