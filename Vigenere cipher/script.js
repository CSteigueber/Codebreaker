function cipher(char,shift,direction){
    let num=char.charCodeAt(0);
    shift=shift.charCodeAt(0);
    switch (true){
        case (shift<=90): shift-=65; break;
        case (shift<=122):shift-=97; break;
    }
    console.log(num);
    console.log(shift);
    switch (true){
        case (((num>=65)&&(num+shift<=90))||((num>=97)&&(num+shift<=122)))&&(direction=="+"): 
            num+=shift; 
            break;
        case (((num-shift>=65)&&(num<=90))||((num-shift>=97)&&(num<=122)))&&(direction=="-"): 
            num-=shift; 
            break;
        case (((num>=65)&&(num<=90))||((num>=97)&&(num<=122)))&&(direction=="+"): 
            num+=(shift-26); 
            break;
        case (((num>=65)&&(num<=90))||((num>=97)&&(num<=122)))&&(direction=="-"): 
            num-=(shift-26); 
            break;
    }
    console.log(num);
    console.log("-----");
    return (String.fromCharCode(num));
}
function vigenere_cipher (text,key,direction){
    let str="";
    for (i=0;i<text.length;i++){
        let j=i%key.length;
        str+=cipher(text[i],key[j],direction);
    }
    return str;
}
(function(){
    document.getElementById("encipher").addEventListener("click", function encipher (){
        let plain=document.getElementById("plain").value;
        let key=document.getElementById("key").value;
        let cipher=vigenere_cipher(plain,key,"+");
        document.getElementById("cipher").value=cipher;
        document.getElementById("output").innerHTML=cipher;
    })
    document.getElementById("decipher").addEventListener("click", function decipher (){
        let cipher=document.getElementById("cipher").value;
        let key=document.getElementById("key").value;
        let plain=vigenere_cipher(cipher,key,"-");
        document.getElementById("plain").value=plain;
        document.getElementById("output").innerHTML=plain;
    })
})();