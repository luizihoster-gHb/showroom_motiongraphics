if(isIEorEdge()){
    startAd();
}else{
    var request = new XMLHttpRequest();
        
    request.addEventListener('readystatechange', function(e) {
        if(request.readyState == 2 && request.status == 200) {
            // console.log("Download is being started")// Download is being started
        }
        else if(request.readyState == 3) {
            // console.log("Download is under progress")// Download is under progress
        }
        else if(request.readyState == 4) {
            // console.log("Downloading has finished")// Downloading has finished
     
            // request.response holds the binary data of the font
     
            var junction_font = new FontFace('XfinityBrownWeb-Light', request.response);
            junction_font.load().then(function(loaded_face) {
                document.fonts.add(loaded_face);
                  document.body.style.fontFamily = '"XfinityBrownWeb-Light", Arial';
                   startAd();
            }).catch(function(error) {
                // console.log("error occurred")// error occurred
            });

        }
    });
     
    request.addEventListener('progress', function(e) {
        var percent_complete = (e.loaded / e.total)*100;
        // console.log(percent_complete);
    });
     
    request.responseType = 'arraybuffer';
     
    // Downloading a font
    request.open('get', 'https://cdn.flashtalking.com/93411/fonts/74e41835de34c8deb73e1f979e66fe374ac4ccb9.woff'); 
     
    request.send();


};

function isIEorEdge() {
    var ua = window.navigator.userAgent;
    if (ua.indexOf("Trident/7.0") > -1){
        console.log('IE11');
        // return 11;
        return true;
    }/*else if (ua.indexOf("Trident/6.0") > -1){
        console.log('IE10');
        return 10;
    }else if (ua.indexOf("Trident/5.0") > -1){
        console.log('9');
        return 9;
    }else{
        console.log('NOT IE');
        return 0;  // not IE9, 10 or 11
    }*/

    else if (ua.indexOf('Edge/') > -1) {
        console.log('Edge');
        // return 17;
        return true;
    } else {
        console.log('Other Browser');
        return false;
    }
}  