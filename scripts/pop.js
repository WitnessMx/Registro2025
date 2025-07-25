const popupOverlay = document.getElementById('popupOverlay');
//const popup1 = document.getElementById('popup1');
const closePopup = document.getElementById('closePopup');
const Fecha_v = document.getElementById('fecha_cal');
const html5QrCode = new Html5Qrcode(/* element id */ "qr-reader");
  document.getElementById('qr-boton').addEventListener('click',function(){
  const html5QrCode = new Html5Qrcode("qr-reader");
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          /* handle success */
      };
      const config = { fps: 10, qrbox: { width: 350, height: 350 } };
      
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


