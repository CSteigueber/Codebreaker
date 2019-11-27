function countLetters (str){
    let res=[];
    for (let i=0;i<26;i++){
        res[i]=0;
    }
    for (let i=0; i<str.length; i++){
        for (let j=0; j<26;j++){
            if (str[i]==abc[j]){
                res[j]++;
            }
        }
    }
    return res;
}
const findMax=(arr)=>{
    let max=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    return max
}

const ceasarCipher =(str,key)=>{
    let res="";
    for (let i=0; i<str.length;i++){
        let c=str[i];
        let num=c.charCodeAt(0);
        switch (true){
            case (((num>=65)&&(num+key<=90))||((num>=97)&&(num+key<=122))): 
                num+=key; 
                break;
            case (((num>=65)&&(num<=90))||((num>=97)&&(num<=122))): 
                num+=(key-26); 
                break;
        }
        res+=String.fromCharCode(num);
    }
    return res;
}
const appendTo=(content,id)=>{
    let node=document.createTextNode(content);
    let p=document.createElement("p");
    p.appendChild(node);
    document.getElementById(id).appendChild(p);
}
const abc="a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");

(function main(){
    document.getElementById("frequency").addEventListener("click",function(){
        document.getElementById("output").innerHTML="";
        const str=document.getElementById("input").value;
        let res=countLetters(str);
        shift=abc.indexOf("e")-res.indexOf(findMax(res));
        if (shift<0){
            shift+=26;
        }
        let arr=[];
        for (let i=0;i<res.length;i++){
            arr.push(`${abc[i]} : ${res[i]}`);
        }
        console.log(arr);
        appendTo("Check your console!","output");
        appendTo(`Estimated shift: ${shift}`,"output");
        let plain=ceasarCipher(str,shift);
        appendTo(plain,"output");
    })
    document.getElementById("brutus").addEventListener("click", function (){
        document.getElementById("output").innerHTML="";
        let cipher=document.getElementById("input").value;
        let plain=""
        for (let i=0;i<26;i++){
            plain=ceasarCipher(cipher,i);
            appendTo(`Shift=${i}:${plain}`,"output");
        }
    })

})();