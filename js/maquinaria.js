const maquinaria = [
    {
        nombre: "FLOTA DE VOLQUETAS INTERNATIONAL WORKSTARK 7600",
        imagen: "./images/volqueta.jpeg",
        disponible:true,
        especificaciones: [
          "Tipo de vehículo: Volqueta de servicio severo",
          "Configuración de ejes: 6x4 o 8x6 (dependiendo de la aplicación)",
          "Capacidad de carga útil: Hasta 26.200 kg",
          "Volumen de la tolva: 16,5 m³ (aproximadamente 16 ft³)",
          "Motor: Navistar N13 o Cummins L9, según configuración",
          "Potencia del motor: Entre 350 y 475 HP",
          "Torque máximo: Hasta 1.250 lb-ft",
          "Transmisión: Eaton Ultrashift de 10 velocidades o Allison automática de 5/6 velocidades",
          "Suspensión: HaulMaax o Hendrickson, según especificación",
          "Peso bruto vehicular (GVWR): Hasta 74.000 lbs (33.565 kg)",
          "Longitud de la tolva: 16 pies (4,88 metros)",
          "Tipo de descarga: Trasera, con opción de compuerta hidráulica",
          "Sistema de frenos: Aire con ABS",
          "Capacidad del tanque de combustible: 50 gal EE.UU. (189 L)",
          "Consumo estimado de combustible: Aproximadamente 6 a 8 gal/h (22,7 a 30,3 L/h), dependiendo de la operación"
        
      ]
    },
    {
        nombre: "Retroexcavadora Case 580N",
        imagen: "./images/retro.jpg",
        disponible:true,
        especificaciones: [
          "Motor: FPT F4GE9454K*J607 (Tier 3)",
          "Potencia neta (SAE J1349): 79 hp (59 kW) @ 2.200 rpm",
          "Potencia bruta (ISO 14396): 85 hp (63 kW) @ 2.200 rpm",
          "Peso operativo: 7.791 kg (17.196 lb)",
          "Capacidad del tanque de combustible: 34,9 gal EE.UU. (132 L)",
          "Caudal de la bomba hidráulica: 108 L/min a 231 bar",
          "Profundidad máxima de excavación: 4,51 m (14' 9\")",
          "Alcance máximo de excavación: 7,75 m",
          "Altura máxima de descarga: 2,78 m (9' 1,3\")",
          "Capacidad del cucharón cargador: 1,0 m³ (1,3 yd³)",
          "Fuerza de excavación del brazo: 29,5 kN (3.007 kgf)",
          "Fuerza de excavación del cucharón trasero: 50,4 kN (5.141 kgf)",
          "Velocidad máxima de desplazamiento: 42,8 km/h",
          "Transmisión: Powershuttle, 4 velocidades de avance y 3 de retroceso",
          "Consumo promedio de combustible: 2,5 a 3,5 gal/h en condiciones normales de operación"
      ]
    },
    {
        nombre: "Retroexcavadora Case 580M",
        imagen: "./images/retro2.jpg",
        disponible:true,
        especificaciones: [
          "Motor: CASE Family III 445TA/E, 4 cilindros, turboalimentado",
          "Potencia neta (SAE J1349): 78 hp (58 kW) @ 2.200 rpm",
          "Cilindrada: 4,5 L (274 in³)",
          "Par máximo: 305 Nm a 1.400 rpm",
          "Capacidad del tanque de combustible: 151 L (40 gal EE.UU.)",
          "Peso operativo: 7.800 kg (17.196 lb)",
          "Capacidad del cucharón cargador: 1,0 m³ (1,3 yd³)",
          "Profundidad máxima de excavación: 4,51 m (14' 9\")",
          "Alcance máximo de excavación: 7,75 m",
          "Altura máxima de descarga: 2,78 m (9' 1,3\")",
          "Fuerza de excavación del brazo: 29,5 kN (3.007 kgf)",
          "Fuerza de excavación del cucharón trasero: 50,4 kN (5.141 kgf)",
          "Consumo promedio de combustible: 2 a 2,5 gal/h (7,5 a 9,5 L/h) (depende del tipo de operación)"
      ]
    },
    {
        nombre: "Excavadora Hitachi ZX210LC-6",
        imagen: "./images/escavadora.jpg", 
        disponible:true,
        especificaciones: [
            "Motor: Isuzu 4HK1, 4 cilindros, turboalimentado",
            "Potencia neta (ISO 9249): 122,0 kW (164 hp) @ 2.000 rpm",
            "Peso operativo: 21.200 kg",
            "Capacidad del tanque de combustible: 106,5 gal EE.UU. (403 L)",
            "Capacidad del sistema hidráulico: 63,4 gal EE.UU. (240 L)",
            "Capacidad del tanque hidráulico: 35,6 gal EE.UU. (135 L)",
            "Sistema de enfriamiento: 7,44 gal EE.UU. (28 L)",
            "Aceite del motor: 6,1 gal EE.UU. (23 L)",
            "Velocidad de giro: 11,5 rpm",
            "Modos de operación: High Productivity (HP), Power (P), Economy (E)",
            "Profundidad máxima de excavación: 6,67 m",
            "Alcance máximo a nivel del suelo: 9,92 m",
            "Altura máxima de descarga: 6,91 m",
            "Capacidad del cucharón (estándar): 0,8 – 1,2 m³",
            "Consumo promedio de combustible: 4.5 gal/h (18,9 L/h) en condiciones normales de operación"
  ]
    },
    {
        nombre: "Excavadora Caterpillar 320D L",
        imagen: "./images/exca4.jpg", 
        disponible:false,
        especificaciones: [
          "Tipo de máquina: Excavadora hidráulica sobre orugas",
          "Peso operativo: 20.600 kg",
          "Motor: CAT C6.4 ACERT",
          "Potencia neta: 148 HP (110 kW) @ 2.000 rpm",
          "Capacidad del tanque de combustible: 410 litros (108 galones aprox.)",
          "Profundidad máxima de excavación: 6,68 m",
          "Alcance máximo a nivel del suelo: 9,66 m",
          "Altura máxima de descarga: 6,74 m",
          "Capacidad del balde (estándar): 1,0 m³ a 1,2 m³",
          "Presión máxima del sistema hidráulico: 35.000 kPa",
          "Consumo promedio de combustible: 3,8 a 4,5 gal/h (depende del tipo de operación)"
        ]
      },
      {
        nombre: "Excavadora Caterpillar 313 GC",
        imagen: "./images/exca3.jpg", 
        disponible:true,
        especificaciones: [
          "Motor: Cat® C3.6",
          "Potencia neta (ISO 9249): 70,6 kW (94,7 hp)",
          "Peso operativo: 13.800 kg",
          "Capacidad del tanque de combustible: 250 L (66 gal EE.UU.)",
          "Sistema hidráulico – Flujo máximo: 247 L/min (65 gal/min)",
          "Presión máxima del sistema hidráulico: 35.000 kPa",
          "Velocidad de giro: 11,5 rpm",
          "Modos de operación: Smart, Eco, Power",
          "Profundidad máxima de excavación: 5,9 m",
          "Alcance máximo a nivel del suelo: 8,7 m",
          "Altura máxima de descarga: 6,2 m",
          "Capacidad del cucharón (estándar): 0,53 m³",
          "Consumo promedio de combustible: 1,9 gal/h (7,2 L/h)"
        ]
      }
      
      
  ];
  
  const container = document.getElementById("maquinaria-container");
  
  maquinaria.forEach((item) => {
    const bloque = document.createElement("div");
    bloque.className = "bg-gray-900 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6";
  
    bloque.innerHTML = `
    <img src="${item.imagen}" alt="${item.nombre}" class="w-[450px] h-[280px] object-cover rounded-2xl shadow-xl" />
    <div class="w-full">
        <div class="flex justify-between items-center mb-2">
        <h2 class="text-xl text-orange-400 font-bold">${item.nombre}</h2>
        <span class="${item.disponible ? 'text-green-400' : 'text-red-500'} text-sm font-semibold">
            ${item.disponible ? 'Disponible' : 'No disponible'}
        </span>
        </div>
        <ul class="list-disc list-inside text-sm mb-4">
        ${item.especificaciones.map(esp => `<li>${esp}</li>`).join("")}
        </ul>
        <a href="index.html?maquina=${encodeURIComponent(item.nombre)}#contacto" target="_blank">
        <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold">
            Cotizar
        </button>
        </a>
    </div>
`;

  
    container.appendChild(bloque);
  });
  
  