const formularioRegistro = document.querySelector("#formularioRegistro")
const contUsuariosHTML = document.querySelector(".contUsuarios")
const usuarios = []
const btnSweet = document.getElementById("btn-sweet")

btnSweet.addEventListener("click", ()=>{
    Swal.fire(
        '¡Enhorabuena!',
        'Tu solicitud fue enviada!',
        'success'
        )

})

const mostrarUsuarios =() =>{
    contUsuariosHTML.innerHTML =""
    for(const usuario of usuarios){
        contUsuariosHTML.innerHTML += `
        <div class="user-card">
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Email: ${usuario.email}</p>
            <p>Postal: ${usuario.postal}</p>
        </div>
        `
    }

}
formularioRegistro.addEventListener("submit", (event)=>{
    event.preventDefault()
    usuarios.push({
        nombre:formularioRegistro.nombre.value,
        email:formularioRegistro.email.value,
        postal:formularioRegistro.numero.value,
    })
    mostrarUsuarios()
    formularioRegistro.reset()
})
