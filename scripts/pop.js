const popupOverlay = document.getElementById('popupOverlay');
//const popup1 = document.getElementById('popup1');
const closePopup = document.getElementById('closePopup');
const Fecha_v = document.getElementById('fecha_cal');
const html5QrCode = new Html5Qrcode(/* element id */ "qr-reader");
  document.getElementById('qr-boton').addEventListener('click',function(){
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */

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
                    
                   // let ico=document.querySelector('div[title='+search1.value+']')
                    //console.log(ico);
                    //ico.click();
                    IdShowV2(info[0]);
                    closePopupFunc();
                   
                    
                    html5QrCode.stop().then((ignore) => {
                    // QR Code scanning is stopped.
                    }).catch((err) => {
                        // Stop failed, handle it.
                        console.log(err);
                    });
                    
     
               

   
    
};
const config = { fps: 10, qrbox: {  width: 350, height: 350},
    videoConstraints: {
    facingMode: "environment", // usa la cámara trasera si es móvil
    advanced: [{ zoom: 2.0}]  // solicita zoom 2x
  }};
      
      // If you want to prefer back camera
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
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

 var stop=document.getElementById("closePopup");
                stop.addEventListener("click",function(){
                    html5QrCode.stop().then((ignore) => {
                    // QR Code scanning is stopped.
                    }).catch((err) => {
                    // Stop failed, handle it.
                    });
                })


