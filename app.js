
//PERSONALIZADO-----------------------------------------------
// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCQCZOSbdhpPgMInD3-auzmHzVmv0fXF_8",
    authDomain: "data-cloud-c119e.firebaseapp.com",
    projectId: "data-cloud-c119e",
    storageBucket: "data-cloud-c119e.appspot.com",
    messagingSenderId: "366836690577",
    appId: "1:366836690577:web:09da30692f84da883b5930",
    measurementId: "G-V6CXJTSV1H"
};
//fin de codigo personalizado-------------------------------------

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Conexióna a firebase establecida correctamente");

document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const boleta = document.getElementById('boleta').value;
    const edad = document.getElementById('edad').value;
    const semestre = document.getElementById('semestre').value;
    const carrera = document.getElementById('carrera').value;

    try {
        await addDoc(collection(db, "students"), {
            name: name,
            boleta: boleta,
            edad: edad,
            semestre: semestre,
            carrera: carrera
        });
        document.getElementById('status').innerText = "Datos guardados correctamente";
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
    }
});
