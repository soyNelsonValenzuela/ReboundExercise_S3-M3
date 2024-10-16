const actividades = [
    {
        id: 1,
        nombre: 'Trekking',
        ubicacion: 'Volcan Villarrica',
        descripcion: 'Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional',
        imagen: './assets/img/foto_trekking.jpg'
    },
    {
        id: 2,
        nombre: 'Natación',
        ubicacion: 'Lago Cochrane',
        descripcion: 'Deporte o ejercicio que consiste en nadar. En las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.',
        imagen: './assets/img/foto_natacion.jpg'
    },
    {
        id: 3,
        nombre: 'Ferry',
        ubicacion: 'Lago Llanquihue',
        descripcion: 'Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros.',
        imagen: './assets/img/foto_ferry.jpg'
    }
];
let selectActividades = document.getElementById('select-actividades');
selectActividades.addEventListener('change', () => {
    const selectedActivity = actividades.find(activity => activity.id == selectActividades.value);
    if (selectedActivity) {
        const { nombre, ubicacion, descripcion, imagen } = selectedActivity;
        document.getElementById('card-container').innerHTML = `
            <div class="card m-auto" style="width: 18rem;" id="card">
                <div id='overlay' class="overlay">
                    <div class="text-overlay">
                        <h2 class="text-white text-center">${nombre.toUpperCase()}</h2>
                        <p class="text-white"><span>📍</span> ${ubicacion}</p>
                    </div>
                </div>
                <img id="card-img" src="${imagen}">
                <div class="card-body mt-3">
                    <p class="card-text">${descripcion}</p>
                    <a href="#">Conocer más.</a>
                    <p class="mt-3">Agendar actividad</p>
                </div>
            </div>
        `;
        const overlay = document.getElementById('overlay');
        const cardImg = document.getElementById('card-img');   
        cardImg.addEventListener('mouseenter', () => {
            overlay.classList.add('visible'); 
        });
        cardImg.addEventListener('mouseleave', () => {
            overlay.classList.remove('visible'); 
        });
    } else {
        document.getElementById('card-container').innerHTML = '';
    }
});