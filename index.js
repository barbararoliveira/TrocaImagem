const trocar = (evento) => {
    evento.preventDefault();

    let mudança = document.getElementById('guitarrista');
    mudança.src = 'foto2.jpeg';
};

const iniciar = () => {
    document.getElementById('troca').addEventListener('click', trocar);
};

document.addEventListener('DOMContentLoaded', iniciar);