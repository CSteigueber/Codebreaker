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

const abc="a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");

(function main(){
    document.getElementById("frequency").addEventListener("click",function(){
        let str=document.getElementById("input").value;
        str=countLetters(str);
        shift=abc.indexOf("e")-str.indexOf(Math.max(str));
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
        for (let i=0;i<str.length;i++){
            arr.push(`${abc[i]} : ${str[i]}`);
        }
        console.log(arr);
    })

})();