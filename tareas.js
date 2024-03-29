let fs = require('fs')

module.exports = moduloTareas = {
leerJSON : ()=>{
    let listaDeTareas= fs.readFileSync("./tareas.json"||"utf-8")
    return JSON.parse(listaDeTareas)
},
escribirJSON: (titulo, estado) =>{
    let nuevaTarea = {
        titulo : titulo,
        estado: estado
    }
    let tareasAnteriores = moduloTareas.leerJSON()

    tareasAnteriores.push(nuevaTarea)
    moduloTareas.guardarJSON(tareasAnteriores);

},
guardarJSON: (info) => {
let nuevoJSON = JSON.stringify(info)
fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')

},
deshacer: () =>{
  let desTarea =  moduloTareas.leerJSON()
  desTarea.pop()
  moduloTareas.guardarJSON(desTarea)
},
filtrarPorEstado: (estado) =>{
    let listaDeTareas =  moduloTareas.leerJSON()
    let tareasFiltradas = listaDeTareas.filter(tarea => {
        return tarea.estado.toLowerCase() === estado.toLowerCase()
    })
    return tareasFiltradas
} ,
filtrarPorTitulo: (titulo) =>{
    let listaDeTareas =  moduloTareas.leerJSON()
    let tareasFiltradas = listaDeTareas.filter(tarea => {
        return tarea.titulo.toLowerCase() === titulo.toLowerCase()
    })
    return tareasFiltradas
}
}



