var Dattos;
    fetch("https://opensheet.elk.sh/1ESTRSn1tCdvVGV3XdCvDzrrzDQD2zlMInhF4MiqY1dU/Registro")
                .then((res) => res.json())
                .then((data)=>{
                    
                    CargarElementosDeMapaconID(data)

                });


function MesLetra(vMesNumero){
            switch (vMesNumero) {
                case 1:
                    return "Enero"
                    break;
                case 2:
                    return "Febrero"
                    break;
                case 3:
                    return "Marzo"
                    break;
                case 4:
                    return "Abril"
                    break;
                case 5:
                    return "Mayo"
                    break;
                case 6:
                    return "Junio"
                    break;
                case 7:
                    return "Julio"
                    break;
                case 8:
                    return "Agosto"
                    break;
                case 9:
                    return "Septiembre"
                    break;
                case 10:
                    return "Octubre"
                    break;
                case 11:
                    return "Noviembre"
                    break;
                case 12:
                    return "Diciembre"
                    break;
                default:
                    break;
            }
}


function CargarElementosDeMapaconID(Datos){
            Dattos=Datos;
            for (i in Datos){
                if(Datos[i].UbicacionX==='1100'){
                }
                else{
                let fecha= new Date(Datos[i].fecha_cal);
                let vFechaCal=MesLetra(fecha.getMonth()+1)+ " " + fecha.getFullYear();

                
                var marker = new L.Marker(
                        new xy(Datos[i].UbicacionX,Datos[i].UbicacionY), 
                            {
                                icon:new L.NumberedDivIcon({number:Datos[i].gage_id,status:Datos[i].estatus}),title:Datos[i].gage_id,
                                tags:[Datos[i].estatus,Datos[i].tipo,vFechaCal]
                            }, 
                    ).addTo(map25);
                marker.bindPopup(html_info(Datos));
                markersLayer.addLayer(marker);        
                }
            }
          
}                



function html_info(Datos){
    let idLink;
    let linkG=Datos[i].link;
    
    if(typeof(linkG)==='undefined'){
        idLink='1Zjl3Jwg0Hlz3i3_Ym0jEo60a8mzNqmQH'
    }else{
        idLink=linkG.split("/")[5];
    }
   // 
    
    switch (Datos[i].estatus) {

          case '-Activo'://<---2025
            var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;

        case '-Activo / Falta de documentos'://<---2025
            var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;

        case '-No Activo / Baja'://<---2025
            var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;
        case '-Bloqueado'://<---2025
            var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;
        case '-Extraviado'://<---2025
            var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;
        case 'Activo':
            var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;

        case 'Activo / Falta de documentos':
        var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;

        case 'No Activo / Baja':
        var InfoHTML='<div style="text-align:center;font-size:22pt">'+Datos[i].gage_id+'</div>'+
            '<img src="https://lh3.googleusercontent.com/d/'+ idLink +'=w1000?authuser=0" alt="" width="150x" style="padding:3px" >'+
                    '<div style="text-align:center"><font size="1.5pt">  [ X: '+Datos[i].UbicacionX+' , Y: '+Datos[i].UbicacionY+' ]  </font>';
            break;
    
        default:
            break;
    }
    return InfoHTML;
};


