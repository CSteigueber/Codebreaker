const str="gluhtlishjrvbadvyyplkaohzvbyjpwolypzavvdlhrvuuleatlzzhnlzdpajoavcpnlulyljpwolyrlfdvykpzaolopkkluzftivsvmklhaoputfmhcvypalovsilpulukvwduwljudeehghyhubwklqjlfrxogilqgsohdvhuhwxuqdqbeoxhsulqwviruydxowdqgdodupghvljqedvhgrqzkifkedqnbrxghflghrqldpvhwwlqjxsvdihkrxvhhfr";

function countLetters (str){
    let abc="a b c d e f h i j k l m n o p q r s t u v w x y z".split(" ");
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
}

countLetters(str);