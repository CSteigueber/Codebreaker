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
    for (c in str){
        let num=c.charCodeAt(0);
        switch (true){
            case (((num>=65)&&(num+key<=90))||((num>=97)&&(num+key<=122))): 
                num+=shift; 
                break;
            case (((num-key>=65)&&(num<=90))||((num-key>=97)&&(num<=122))): 
                num-=shift; 
                break;
            case (((num>=65)&&(num<=90))||((num>=97)&&(num<=122))): 
                num+=(shift-26); 
                break;
            case (((num>=65)&&(num<=90))||((num>=97)&&(num<=122))): 
                num-=(key-26); 
                break;
        }
        res+=String.fromCharCode(num);
    }
}

const abc="a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");

(function main(){
    document.getElementById("frequency").addEventListener("click",function(){
        const str=document.getElementById("input").value;
        let res=countLetters(str);
        shift=abc.indexOf("e")-res.indexOf(findMax(res));
        if (shift<0){
            shift+=26;

        }
        let node=document.createTextNode("Check your console!");
        let p=document.createElement("p");
        p.appendChild(node);
        document.getElementById("output").appendChild(p);
        node=document.createTextNode(`Estimated shift: ${shift}`);
        p=document.createElement("p");
        p.appendChild(node);
        document.getElementById("output").appendChild(p);
        let arr=[];
        for (let i=0;i<res.length;i++){
            arr.push(`${abc[i]} : ${res[i]}`);
        }
        console.log(arr);
    })

})();