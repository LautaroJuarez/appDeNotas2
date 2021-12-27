let moduloTareas = require('./tareas.js');
let process = require('process');
let comand = process.argv[2];

switch (comand){
    case "listar":
        let tareas = moduloTareas.leerJSON()
        if(tareas.length === 0){
            console.log("Tu lista de tareas está  vacía")
           
        }else {
            tareas.forEach(function(tarea){
                console.log("Título: " + tarea.titulo +  ", "+ "Estado: "+tarea.estado)
                })
         
        }
            break;

        case "crear":
            let titulo = process.argv[3];
            let estado = "pendiente"
            let nuevaTarea = {
                titulo : titulo,
                estado: estado
            }
            
           
            moduloTareas.escribirJSON(titulo, estado);
            break;

            case "filtrar" :
                let filtro = process.argv[3];
                let listaDeFiltros = moduloTareas.filtrarPorEstado(filtro)
                listaDeFiltros.map(function(filtro){
                    return console.log(filtro)
                })
                break;
          case "filtrarPorTitulo" :
                let filtroXtit = process.argv [3];
                let listaDeFiltrosXtit =  moduloTareas.filtrarPorTitulo(filtroXtit)
             listaDeFiltrosXtit.map(filtroXtit => console.log(filtroXtit))
            break;
        
    }
  