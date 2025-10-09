// Simulación de base de datos con 5 DNIs de ejemplo (edita aquí para personalizar)
const usuariosAutorizados = {
    '111': { 
        nombre: 'Juan Riquelme', 
        kpis: { 
            rmd: '0', 
            ocupacionBodega: '80%', 
            excesosVelocidad: '5 incidentes', 
            AdherenciaChecklist: '70%',
            ComportamientosInseguros: 'No detectados',
            ausentismo: '2%' 
        } 
    },
    '222': { 
        nombre: 'Ludueña Gastón', 
        kpis: { 
            rmd: '85%', 
            ocupacionBodega: '90%', 
            excesosVelocidad: '3 incidentes', 
            ausentismo: '4%' 
        } 
    },
    '333': { 
        nombre: 'Acosta, Gaston', 
        kpis: { 
            rmd: '92%', 
            ocupacionBodega: '75%', 
            excesosVelocidad: '7 incidentes', 
            ausentismo: '1%' 
        } 
    },
    '444': { 
        nombre: 'Verdera David', 
        kpis: { 
            rmd: '70%', 
            ocupacionBodega: '95%', 
            excesosVelocidad: '10 incidentes', 
            ausentismo: '6%' 
        } 
    },
    '555': { 
        nombre: 'Pedro Rodríguez', 
        kpis: { 
            rmd: '98%', 
            ocupacionBodega: '60%', 
            excesosVelocidad: '1 incidente', 
            ausentismo: '0%' 
        } 
    }
    // Agrega más: '666': { nombre: '...', kpis: { ... } }
};

document.getElementById('dni-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const dni = document.getElementById('dni-input').value.trim();
    const errorMsg = document.getElementById('error-msg');

    if (usuariosAutorizados[dni]) {
        // Login exitoso - "Redirige" cambiando vista al dashboard del DNI
        const user = usuariosAutorizados[dni];
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';

        // Muestra KPIs específicos para este DNI (mismo formato para todos)
        const kpisDiv = document.getElementById('kpis');
        kpisDiv.innerHTML = `
            <h2>Hola, ${user.nombre}! (DNI: ${dni})</h2>
            <div class="kpi">
                <strong>RMD:</strong> ${user.kpis.rmd}
            </div>
            <div class="kpi">
                <strong>OCUPACIÓN DE BODEGA:</strong> ${user.kpis.ocupacionBodega}
            </div>
            <div class="kpi">
                <strong>EXCESOS DE VELOCIDAD:</strong> ${user.kpis.excesosVelocidad}
            </div>
            <div class="kpi">
                <strong>AUSENTISMO:</strong> ${user.kpis.ausentismo}
            </div>
        `;
    } else {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'DNI inválido o no autorizado.';
    }
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('dni-input').value = '';
    document.getElementById('error-msg').style.display = 'none';
});
