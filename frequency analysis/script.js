const str="vwduwljudeehghyhubwklqjlfrxogilqgsohdvhuhwxuqdqbeoxhsulqwviruydxowdqgdodupghvljqedvhgrqzklfkedqnbrxghflghrqldpvhwwlqjxsvdihkrxvhfr";

function countLetters (str){
    let res=[];
    for (let i=0;i<26;i++){
        res[i]=0;
    }
    for (let i=0; i<str.length; i++){
        for (let j=0; j<26;j++){
            if (str[i]==abc[j]){
                res[j]++
            }
        }
    }
    console.log(abc);
    console.log(res);
    return res.join(" ");
}
const abc="a b c d e f h i j k l m n o p q r s t u v w x y z".split(" ");

(function main(){
    document.getElementById("run").addEventListener("click",function(){
        ;
        let node=document.createTextNode(countLetters(str));
        let p=document.createElement("p");
        p.appendChild(node);
        document.getElementById("output").appendChild(p);
        node=document.createTextNode(abc.join(" "));
        p=document.createElement("p");
        p.appendChild(node);
        document.getElementById("output").appendChild(p);
    })

})();