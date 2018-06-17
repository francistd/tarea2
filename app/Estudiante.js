
function cargarEstudiantes(){

            var tabla = "";
            var tablaEstudiante = $("#tablaEstudiante");

            tabla += '<table border="1">';
            tabla += '<tr>';
            tabla += '<th>Nombre</th>';
            tabla += '<th>Matricula</th>';
            tabla += '<th>Identificacion</th>';
            tabla += '<th>...</th>';
            tabla += '</tr>';

            for (var i=0; i<localStorage.length; i++){
                var matricula = localStorage.key(i);
                var estudiante = $.parseJSON(localStorage.getItem(matricula));

                tabla += '<tr>';
                tabla += '<td>'+estudiante.nombre+'</td>';
                tabla += '<td>'+estudiante.matricula+'</td>';
                tabla += '<td>'+estudiante.identificacion+'</td>';
                tabla += '<td><button onclick="editarEstudiante(\''+estudiante.matricula+'\');">Editar</button></td>';
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


        $(document).ready(function(){

            $("#btnGuardar").click(function(){
                var nombre = $("#nombre").val();
                var matricula = $("#matricula").val();
                var identificacion = $("#identificacion").val();


                var estudiante = {
                    matricula : matricula,
                    nombre : nombre,
                    identificacion : identificacion
                }

                if(nombre !== "" && matricula !== "" && identificacion !== ""){

                    localStorage.setItem(matricula,JSON.stringify(estudiante));
                    cargarEstudiantes();
                    restablecer();
                }else
                {
                    alert("Campos Vacios");
                }

            });


            function restablecer(){
                $("#nombre").val("");
                $("#matricula").val("");
                $("#identificacion").val("");
            }

            cargarEstudiantes();
            $("#matricula").val();
        })


        localStorage.removeItem(codigo);