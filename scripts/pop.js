const popupOverlay = document.getElementById('popupOverlay');
//const popup1 = document.getElementById('popup1');
const closePopup = document.getElementById('closePopup');
const Fecha_v = document.getElementById('fecha_cal');
const html5QrCode = new Html5Qrcode(/* element id */ "qr-reader");
  document.getElementById('qr-boton').addEventListener('click',function(){
        // This method will trigger user permissions
    Html5Qrcode.getCameras().then(devices => {
    /**
     * devices would be an array of objects of type:
     * { id: "id", label: "label" }
     */
       if (devices && devices.length) {
            var cameraId;
            let camaraLabel;
            cameraId = devices[0].id; 
            camaraLabel = devices[0].label; 
           /* if(devices.length = 1){
               cameraId = devices[0].id; 
               camaraLabel = devices[0].label; 
            }
            else{
                if(devices.length>1){
                  cameraId = devices[1].id; 
                  camaraLabel = devices[1].label;   
                }
                else{
                    alert('camara no encontrada');
                }
                
            }*/
            let id_cam=document.getElementById('id_camara');
            id_cam.innerHTML=devices.length +"<>" + camaraLabel;
            console.log(devices);
            // .. use this to start scanning.
              //  const html5QrCode = new Html5Qrcode(/* element id */ "qr-reader");
                html5QrCode.start(
                cameraId, 
                {
                    fps: 10,    // Optional, frame per seconds for qr code scanning
                    qrbox: { width: 350, height: 350}  , // Optional, if you want bounded box UI
                    videoConstraints: {
                    //facingMode: "environment", // usa la cámara trasera si es móvil
                    advanced: [{ zoom: 3.0 }]  // solicita zoom 2x
                }
                },
                (decodedText, decodedResult) => {
                    // do something when code is read
                    //console.log(decodedText,decodedResult);
                    var info=decodedText.split(" ");
                    //console.log(info);
                   // ID_red.value= info[0];
                    var Fechas0= info[1].split("/");
                   // console.log(Fechas0);

                    const fecha_2=new Date(Fechas0[2],Fechas0[1],Fechas0[0]);
        
                    var dia=addZ(fecha_2.getDate());

                    var mes=addZ(fecha_2.getMonth());
                    var anio=fecha_2.getFullYear();
                    //console.log(dia, mes,anio);
                    Fecha_v.value=anio + "-" + mes + "-" + dia;
                    var search1 =document.querySelector('input[class="search-input"]');
                    search1.value=info[0];
                    search1.focus();
                    var opc;
                    setTimeout(() => {
                       opc=document.querySelectorAll('li[class="search-tip"]');
                        //console.log(opc); 
                        for (let i = 0; i < opc.length; i++) {
                            //console.log(opc[i].innerHTML);
                            if (search1.value==opc[i].innerHTML) {
                                opc[i].click();
                            }    
                        }
                        
                    }, "1000");
                    
                    let ico=document.querySelector('div[title='+search1.value+']')
                    console.log(ico);
                    ico.click();
                    IdShowV2(info[0]);
                    closePopupFunc();
                   
                    
                    html5QrCode.stop().then((ignore) => {
                    // QR Code scanning is stopped.
                    }).catch((err) => {
                        // Stop failed, handle it.
                        console.log(err);
                    });
                    
                },
                (errorMessage) => {
                    // parse error, ignore it.
                   // console.log(errorMessage);
                })
                .catch((err) => {
                // Start failed, handle it.
                });

                var stop=document.getElementById("closePopup");
                stop.addEventListener("click",function(){
                    html5QrCode.stop().then((ignore) => {
                    // QR Code scanning is stopped.
                    }).catch((err) => {
                    // Stop failed, handle it.
                    });
                })
        }
    }).catch(err => {
    // handle err
    });
   openPopup();
});

function openPopup() {
    popupOverlay.style.display = 'block';
}

function closePopupFunc() {

    popupOverlay.style.display = 'none';
}

closePopup.addEventListener('click', closePopupFunc);

popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
          html5QrCode.stop().then((ignore) => {
                    // QR Code scanning is stopped.
                    }).catch((err) => {
                        // Stop failed, handle it.
                        console.log(err);
                    });
            closePopupFunc();
        }
    });


function addZ(n){
    return n<10? '0'+n:''+n;
}


