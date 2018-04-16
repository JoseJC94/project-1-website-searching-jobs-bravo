window.addEventListener('load', carregado);

var db = openDatabase("myDB", "1.0", "TiPS Database Example", 2 * 1024 * 1024);



function carregado(){    
    
    document.getElementById('btn-salvar').addEventListener('click', salvar);
    
    db.transaction(function(tx) {
        //tx.executeSql("DROP TABLE myTable" );
         tx.executeSql("CREATE TABLE IF NOT EXISTS myTable ( id INTEGER PRIMARY KEY,nombre TEXT,contrasenia TEXT)" );
        // tx.executeSql('INSERT INTO myTable ( nombre,contrasenia) VALUES ("b", "c")');
    });
    
   mostrar();
    
}   

function salvar(){
    var nombre = document.getElementById('field-name').value;
    var contrasenia = document.getElementById('field-pass').value;
    var repass = document.getElementById('field-repass').value;
    if(nombre === "" || contrasenia === ""){
        window.alert("No pueden quedar espacios vacíos");
    }
    else{
    if(contrasenia === repass){
    db.transaction(function(tx) {

            tx.executeSql('INSERT INTO myTable ( nombre,contrasenia) VALUES (?, ?)', [nombre,contrasenia]);
            window.alert("Se ha creado la cuenta correctamente"); 
    });

    mostrar();
    limpaCampo();
    inputSHOW(false);
    }
    else{
      window.alert("Las contraseñas no coinciden. Por favor, verifique los datos introducidos.");  
    }
    }
}

function mostrar(){        
    var table = document.getElementById('tbody-register');

    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM myTable', [], function (tx, resultado) {
            var rows = resultado.rows;
            var tr = '';
            for(var i = 0; i < rows.length; i++){
                    tr += '<tr>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].nombre + '</td>';
                    tr += '<td>' + rows[i].contrasenia + '</td>';
                    tr += '</tr>';                   
            }
                table.innerHTML = tr; 

        }, null);
    });
}

