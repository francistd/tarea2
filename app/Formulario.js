function cargarEstudiantes(){
            var tabla = "";
            var tablaEstudiante = $("#tablaEstudiante");
            tabla += '<table border="1">';
            tabla += '<tr>';
            tabla += '<th>Nombre</th>';
            tabla += '<th>Matricula</th>';
            tabla += '<th>Identificacion</th>';
            tabla += '<th>................................ </th>';
            tabla += '</tr>';
            for (var i=0; i<localStorage.length; i++){
                var matricula = localStorage.key(i);
                var estudiante = $.parseJSON(localStorage.getItem(matricula));
                tabla += '<tr>';
                tabla += '<td>'+estudiante.nombre+'</td>';
                tabla += '<td>'+estudiante.matricula+'</td>';
                tabla += '<td>'+estudiante.identificacion+'</td>';
                tabla += '<div class="row"><div class="col-xs-4"><td><button id="btnEditar" class="btn btn-primary btn-sm"  onclick="editarEstudiante(\''+estudiante.matricula+'\');">Editar</button> <button id="btnQuitar" class = "btn btn-danger btn-sm" onclick="removerEstudiante(\''+estudiante.matricula+'\');">Quitar</button> </td></div></div>';
                tabla += '</tr>';
            }
            tabla += '</table>';
            $(tablaEstudiante).html(tabla);
        }
        function editarEstudiante(matricula){
            var estudiante;
            for (var i = 0; i<localStorage.length; i++){
                var clave = localStorage.key(i);
                if (clave == matricula) {
                    estudiante = $.parseJSON(localStorage.getItem(clave));
                    $("#nombre").val(estudiante.nombre);
                    $("#matricula").val(estudiante.matricula);
                    $("#identificacion").val(estudiante.identificacion);
                }
            }
        }
    
    function removerEstudiante(matricula){
    if (!confirm("Do you want to delete")){
      return false;
    }
    localStorage.removeItem(matricula);
    cargarEstudiantes();
    Limpiar();
    }
    
    
function validarEstudiante(matricula){
var estudiante;
for(var i = 0; i<localStorage.length; i++){
    var clave = localStorage.key(i);
    if (clave == matricula) {
        estudiante = $.parseJSON(localStorage.getItem(clave));
        if (estudiante == matricula) {
            estudiante.push(matricula);
            localStorage.setItem("items" , JSON.stringify(estudiante));
        }
        alert("Actualizado");
    }
} 
}
        $(document).ready(function(){
            $("#btnGuardar").click(function(){
                var nombre = $("#nombre").val();
                var matricula = $("#matricula").val();
                var identificacion = $("#identificacion").val();
                var estudiante = {
                    matricula : matricula,
                    nombre : nombre,
                    identificacion : identificacion
                };
                if(nombre !== "" && matricula !== "" && identificacion !== ""){
                    if (estudiante.matricula !== validarEstudiante(matricula)) {
                    localStorage.setItem(matricula,JSON.stringify(estudiante));
                    cargarEstudiantes();
                    Limpiar();
                }
                }else
                {
                    alert("Campos Vacios");
                }
            });
            function Limpiar(){
                $("#nombre").val("");
                $("#matricula").val("");
                $("#identificacion").val("");
            }
            cargarEstudiantes();
            $("#matricula").val();
        });

