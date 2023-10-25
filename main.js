const clickBtn = document.querySelector("#clickBtn");
const userTable = document.querySelector("#tr-value")

clickBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const inputFirstName = document.querySelector("#firstname");
        const nameValue = inputFirstName.value
        const name = document.createElement("td")
        name.innerHTML = `${nameValue}`
        userTable.appendChild(name)

        const inputLastName = document.querySelector("#lastname");
        const surnameValue = inputLastName.value
        const surname = document.createElement("td")
        surname.innerHTML = `${surnameValue}`
        userTable.appendChild(surname)

        const inputAge = document.querySelector("#age");
        const ageValue = inputAge.value
        const age = document.createElement("td")
        age.innerHTML = `${ageValue}`
        userTable.appendChild(age)

        const inputMarriage = document.querySelector("#marriage");
        const marriageValue = inputMarriage.value
        const married = document.createElement("td")
        married.innerHTML = `${marriageValue}`
        userTable.appendChild(married)
    })
