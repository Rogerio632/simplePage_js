let consulta = document.querySelectorAll(`.modal-body`)[1]
let storage = JSON.parse(localStorage.getItem(`red_dead`)) || []

/*elementos*/

let cadastrar = document.querySelector(`button#cadastrar`)
cadastrar.onclick = () => {

    let nome = document.querySelector(`#nome`)
    let descricao = document.querySelector(`#descricao`)
    let foto = document.querySelector(`#foto`)

    if ((nome == ``) || (descricao == ``) || foto == ``) {

        window.alert(`Opa! Algum campo ficou em branco! `)

    } else {


        storage.push(nome.value)
        storage.push(descricao.value)
        storage.push(foto.value)
        save_in_storage()

        nome.value = ``
        descricao.value = ``
        foto.value     = ``

        window.alert(`Cadastrado com sucesso!`)
        load()

    }

}


function load() {

    consulta.innerHTML = ``

    let x = 0
    let y = 1
    let z = 2

    for (; x < storage.length;) {

        consulta.innerHTML += ` <div class="card" style="width: 18rem;">
                          <img class="slide card-img-top" src="${storage[z]}">
 <div class="card-body">
                              <h5 class="card-title">${storage[x]}</h5>
  <p class="card-text">${storage[y]}</p>
                                </div>
                                </div>`

        z += 3
        x += 3
        y += 3

    }
}
load()





function save_in_storage() {

    localStorage.setItem(`red_dead`, JSON.stringify(storage))


}


