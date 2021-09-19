export function decryptext(strText) {

    const cp1252 = '€ ‚ƒ„…†‡ˆ‰Š‹Œ Ž  ‘’“”•–—˜™š›œ žŸ ¡¢£¤¥¦§¨©ª«¬ ®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ';
    
    strText=strText.replace("\n","");
    strText=strText.replace("\r","");
    
    let buf = [];
    for (let i = 0; i < strText.length; i++) {
      let code = cp1252.indexOf(strText[i]);
      if (code >= 0) {
        code += 128;
      } else {
        code = strText.charCodeAt(i);
      }
      buf.push(code);// > 255 ? 32 : code);
    }
    //console.log(buf)
    return buf;  
}

export function encryptext(strText, strPwd = "MhcSA$2006#?.&") {
    strPwd = strPwd.toUpperCase()
    
    strText=strText.replace("\n","");
    strText=strText.replace("\r","");
    
    let x = 0, z = 1;
    let v = "";
    let buf = [];

    for ( let i = 1; i < strText.length + 1; i++ ) {

        if ( z == strPwd.length ) {
            z = 0;
        }

        v = (strText.substring(i, x)).charCodeAt(0);
        
        v = v + strPwd.substring((i % strPwd.length) + 1, z).charCodeAt(0);
        
        x++
        z++        

        buf.push(v)      
    }
    return buf;
}