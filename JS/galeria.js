const imagenes = document.querySelectorAll('.img-galeria');
let imagenCompleta;
let indiceActual;

        // Elemento de imagen en tamaño completo
imagenes.forEach((imagen, indice) => {
    imagen.addEventListener('click', () => {
        imagenCompleta = document.createElement('img');
        imagenCompleta.src = imagen.src;
        imagenCompleta.alt = imagen.alt;
        imagenCompleta.classList.add('img-completa');

        const btnAnterior = document.createElement('button');
        btnAnterior.innerHTML = '<i class="bx bx-chevron-left"></i>';
        btnAnterior.classList.add('btn-anterior');

        const btnSiguiente = document.createElement('button');
        btnSiguiente.innerHTML = '<i class="bx bx-chevron-right"></i>';
        btnSiguiente.classList.add('btn-siguiente');


        btnAnterior.addEventListener('click', () => {
            indiceActual--;
            if (indiceActual < 0) {
                indiceActual = imagenes.length - 1;
            }
            imagenCompleta.src = imagenes[indiceActual].src;
            imagenCompleta.alt = imagenes[indiceActual].alt;
        });

        btnSiguiente.addEventListener('click', () => {
            indiceActual++;
            if (indiceActual >= imagenes.length) {

                if (indiceActual === imagenes.length) {

                    document.body.removeChild(imagenCompleta);
                    document.body.removeChild(btnAnterior);
                    document.body.removeChild(btnSiguiente);
                }
                indiceActual = 0;
            }
            imagenCompleta.src = imagenes[indiceActual].src;
            imagenCompleta.alt = imagenes[indiceActual].alt;
        });


        document.body.appendChild(imagenCompleta);
        document.body.appendChild(btnAnterior);
        document.body.appendChild(btnSiguiente);


        indiceActual = indice;
    });
});

    

