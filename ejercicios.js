// Datos base
const productos = [
  { nombre: "Laptop", precio: 1200, cantidad: 5 },
  { nombre: "Mouse", precio: 25, cantidad: 20 },
  { nombre: "Teclado", precio: 45, cantidad: 15 },
  { nombre: "Monitor", precio: 300, cantidad: 7 },
  { nombre: "USB", precio: 10, cantidad: 50 }
];

// Helper para mostrar en la interfaz (Solo si existe el elemento)
function mostrarEnUI(elementId, mensaje, resultado) {
  console.log(mensaje, resultado); // Mantenemos el log original
  const container = document.getElementById(elementId);
  if (container) {
    const line = document.createElement("div");
    line.className = "console-line";
    line.innerHTML = `<span>${mensaje}</span> <pre class="d-inline text-info m-0">${JSON.stringify(resultado, null, 2)}</pre>`;
    container.appendChild(line);
  }
}

// Esperar a que el DOM cargue para ejecutar si estamos en el navegador
document.addEventListener("DOMContentLoaded", () => {
  // Ejercicio 1: Operaciones básicas
  const nombresMayuscula = productos.map(p => p.nombre.toUpperCase());
  mostrarEnUI("res-1", "Nombres en mayúscula:", nombresMayuscula);

  const productosBaratos = productos.filter(p => p.precio < 50);
  mostrarEnUI("res-1", "Productos con precio < 50:", productosBaratos);

  const monitor = productos.find(p => p.nombre === "Monitor");
  mostrarEnUI("res-1", "Producto Monitor:", monitor);

  const noExiste = productos.find(p => p.nombre === "NoExiste");
  mostrarEnUI("res-1", "Producto que no existe:", noExiste);

  // Ejercicio 2: Análisis del inventario
  const bajoStock = productos.filter(p => p.cantidad < 10);
  mostrarEnUI("res-2", "Productos con cantidad < 10:", bajoStock);

  const objetosValorTotal = bajoStock.map(p => ({ nombre: p.nombre, valorTotal: p.precio * p.cantidad }));
  mostrarEnUI("res-2", "Objetos con valor total:", objetosValorTotal);

  const valorTotalBajoStock = objetosValorTotal.reduce((acc, obj) => acc + obj.valorTotal, 0);
  mostrarEnUI("res-2", "Valor total bajo stock:", valorTotalBajoStock);

  // Ejercicio 3: Uso avanzado de reduce
  const valorTotalInventario = productos.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  mostrarEnUI("res-3", "Valor total del inventario:", valorTotalInventario);

  const productoMayorCantidad = productos.reduce((max, p) => p.cantidad > max.cantidad ? p : max);
  mostrarEnUI("res-3", "Producto con mayor cantidad:", productoMayorCantidad);

  const clasificados = productos.reduce((acc, p) => {
    if (p.precio > 100) {
      acc.caros.push(p);
    } else {
      acc.baratos.push(p);
    }
    return acc;
  }, { caros: [], baratos: [] });
  mostrarEnUI("res-3", "Productos clasificados:", clasificados);

  // Reto extra
  const nombresMas10 = productos.reduce((acc, p) => {
    if (p.cantidad > 10) {
      acc.push(p.nombre);
    }
    return acc;
  }, []);
  mostrarEnUI("res-extra", "Productos con más de 10 unidades:", nombresMas10);
});