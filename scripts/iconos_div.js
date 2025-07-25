L.NumberedDivIcon = L.Icon.extend({
    options:{
        iconUrl:"/styles/imagenes/marcador2.png",
        number:'',
        status:'',
        shadowUrl:null,
        iconSize: new L.Point(10, 25),
        iconAnchor: new L.Point(12.5, 25),
        popupAnchor: new L.Point(0, -40),
        className: 'dev-de-icono'
    },
    createIcon: function(){
        var div = document.createElement('div');
        var img = this._createImg(this.options['iconUrl']);
        var numdiv = document.createElement('div');

        switch (this.options['status']) {
                    case '-Activo':
                        numdiv.setAttribute ( "class", "_Activo" );
                        numdiv.setAttribute("onclick","IdShow(this);");    
                        break;
                    case '-Activo / Falta de documentos':
                        numdiv.setAttribute ( "class", "_Pendiente" );
                        numdiv.setAttribute("onclick","IdShow(this);");
                        break;
                    case '-No Activo / Baja':
                        numdiv.setAttribute ( "class", "_NoActivo" );//<----<-<-<-<
                        numdiv.setAttribute("onclick","IdShow(this);");                   
                        break;
                    case '-Bloqueado':
                        numdiv.setAttribute ( "class", "_Bloqueado" );//<----<-<-<-<
                        numdiv.setAttribute("onclick","IdShow(this);");
                        break;
                    case '-Extraviado':
                        numdiv.setAttribute ( "class", "_Extraviado" );//<----<-<-<-<
                        numdiv.setAttribute("onclick","IdShow(this);");
                        break;
                    case 'Activo':
                        numdiv.setAttribute ( "class", "numero" );
                        numdiv.setAttribute("onclick","IdShow(this);"); 
                        break;
                    case 'Activo / Falta de documentos':
                        numdiv.setAttribute ( "class", "numeroPendiente" );
                        numdiv.setAttribute("onclick","IdShow(this);");
                        break;
                    case 'No Activo / Baja':
                        numdiv.setAttribute ( "class", "numeroBaja" );
                        numdiv.setAttribute("onclick","IdShow(this);");
                        break;


                    default:
                        break;
        }
        numdiv.innerHTML = this.options['number'] || ''; 
        div.appendChild ( img );
        div.appendChild ( numdiv );
        this._setIconStyles(div, 'icon');
        return div;

    },

        createShadow: function () {
        return null;
    }

});
