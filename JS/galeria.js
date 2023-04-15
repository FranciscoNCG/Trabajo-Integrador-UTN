const imagenes = document.querySelectorAll('.img-galeria');
let imagenCompleta;
let indiceActual;

imagenes.forEach((imagen, indice) => {
    imagen.addEventListener('click', () => {
        // Elemento de imagen en tamaño completo
        imagenCompleta = document.createElement('img');
        imagenCompleta.src = imagen.src;
        imagenCompleta.alt = imagen.alt;
        imagenCompleta.classList.add('img-completa');

        // Botones de anterior y siguiente
        const btnAnterior = document.createElement('button');
        btnAnterior.innerHTML = '<i class="bx bx-chevron-left"></i>';
        btnAnterior.classList.add('btn-anterior');

        const btnSiguiente = document.createElement('button');
        btnSiguiente.innerHTML = '<i class="bx bx-chevron-right"></i>';
        btnSiguiente.classList.add('btn-siguiente');

        // Agrega eventos a botones de anterior y siguiente
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
                /*Verifica si es la última imagen */
                if (indiceActual === imagenes.length) {
                /* Quita la imagen */
                    document.body.removeChild(imagenCompleta);
                    document.body.removeChild(btnAnterior);
                    document.body.removeChild(btnSiguiente);
                }
                indiceActual = 0;
            }
            imagenCompleta.src = imagenes[indiceActual].src;
            imagenCompleta.alt = imagenes[indiceActual].alt;
        });

        // Agrega la imagen completa y los botones a la página
        document.body.appendChild(imagenCompleta);
        document.body.appendChild(btnAnterior);
        document.body.appendChild(btnSiguiente);

        // Guarda el índice actual
        indiceActual = indice;
    });
});

    

