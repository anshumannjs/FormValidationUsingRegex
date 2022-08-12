let firstName=document.getElementById("first");
let lastName=document.getElementById("last");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let address=document.getElementById("address");
let message=document.getElementById("message");
let button=document.getElementById("submit");

let b1=false;
let b2=false;
let b3=false;
let b4=false;
let b5=false;
let b6=false;

function clearFirst(str){
    let h6=document.getElementById("firstwarn");
    h6.innerText=str;
    h6.style.color="black";
}

function clearLast(str){
    let h6=document.getElementById("lastwarn");
    h6.innerText=str;
    h6.style.color="black";
}

firstName.addEventListener("input",(event)=>{
    let reg=/ /;
    let a=event.target.value;
    let str="enter your name in this format : First Middle Last";
    let h6=document.getElementById("firstwarn");
    reg=/^[A-Z][a-z]+$|\s[A-Z][a-z]+$/;
    let a7=!reg.test(a);
    if (a7){
        h6.innerText="capital is allowed only in beggining and after space";
        h6.style.color="red";
    }
    reg=/^[A-Z]/;
    let a1=reg.test(a)==false;
    if (a1){
        h6.innerText="first letter should start with capital";
        h6.style.color="red";
    }
    let a2=a=="";
    if (a2){
        h6.innerText="first name cannot be empty";
        h6.style.color="red";
    }
    reg=/[0-9]/;
    let a3=reg.test(a);
    if (a3){
        h6.innerText="only alphabets are allowed";
        h6.style.color="red";
    }
    reg=/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\|\\\;\:\'\"\<\,\>\.\?\/]/;
    let a4=reg.test(a);
    if (a4){
        h6.innerText="only alphabets are allowed";
        h6.style.color="red";
    }
    reg=/\s/;
    let a6;
    if (reg.test(a)){
        let nreg=/\s[A-Z]/;
        a6=!nreg.test(a);
    }
    if (a6){
        h6.innerText="write in capital after space";
        h6.style.color="red";
    }
    reg=/\s$/;
    let a5=reg.test(a);
    if (a5){
        h6.innerText="space is not allowed at the end";
        h6.style.color="red";
    }

    if (!(a1 || a2 || a3 || a4 || a5 || a6 || a7)){
        clearFirst(str);
    }
    b1=!(a1 || a2 || a3 || a4 || a5 || a6 || a7);
});

lastName.addEventListener("input",(event)=>{
    let reg=/ /;
    let a=event.target.value;
    let str="enter your name in this format : First Middle Last";
    let h6=document.getElementById("lastwarn");
    reg=/^[A-Z][a-z]+$|\s[A-Z][a-z]+$/;
    let a7=!reg.test(a);
    if (a7){
        h6.innerText="capital is allowed only in beggining and after space";
        h6.style.color="red";
    }
    reg=/^[A-Z]/;
    let a1=reg.test(a)==false;
    if (a1){
        h6.innerText="first letter should start with capital";
        h6.style.color="red";
    }
    let a2=a=="";
    if (a2){
        h6.innerText="Last name cannot be empty";
        h6.style.color="red";
    }
    reg=/[0-9]/;
    let a3=reg.test(a);
    if (a3){
        h6.innerText="only alphabets are allowed";
        h6.style.color="red";
    }
    reg=/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\|\\\;\:\'\"\<\,\>\.\?\/]/;
    let a4=reg.test(a);
    if (a4){
        h6.innerText="only alphabets are allowed";
        h6.style.color="red";
    }
    reg=/\s/;
    let a6;
    if (reg.test(a)){
        let nreg=/\s[A-Z]/;
        a6=!nreg.test(a);
    }
    if (a6){
        h6.innerText="write in capital after space";
        h6.style.color="red";
    }
    reg=/\s$/;
    let a5=reg.test(a);
    if (a5){
        h6.innerText="space is not allowed at the end";
        h6.style.color="red";
    }

    if (!(a1 || a2 || a3 || a4 || a5 || a6 || a7)){
        clearLast(str);
    }
    b2=!(a1 || a2 || a3 || a4 || a5 || a6 || a7);
});

phone.addEventListener("input",(event)=>{
    let reg=/^[0-9]+$/;
    let a=event.target.value;
    let p=document.getElementById("phonewarn");
    let a1=!(a.length==10);
    if (a1){
        p.innerText="enter a valid number";
        p.style.color="red";
    }
    let a2=!reg.test(a);
    if (a2){
        p.innerText="only numbers are allowed";
        p.style.color="red";
    }
    let a3=a.length==0;
    if (a3){
        p.innerText="number cannot be empty";
        p.style.color="red";
    }
    if (!(a1 || a2 || a3)){
        p.innerText=null;
    }
    b3=!(a1 || a2 || a3);
});

address.addEventListener("input",(event)=>{
    let reg=/^[0-9]+$/;
    let add=document.getElementById("addwarn");
    let a=event.target.value;
    let a1=reg.test(a);
    if (a1){
        add.innerText="only numbers are not allowed";
        add.style.color="red";
    }
    reg=/[^\,\.\/\:\'\(\)\|A-Za-z0-9]/;
    let a2=reg.test(a);
    if (a2){
        add.innerText="these characters are not allowed";
        add.style.color="red";
    }
    let a3=a.length==0;
    if (a3){
        add.innerText="this field cannot be empty";
        add.style.color="red";
    }
    if (!(a1 || a2 || a3)){
        add.innerText=null;
    }
    b4=!(a1 || a2 || a3);
});

email.addEventListener("input",(event)=>{
    if (event.target.value.length==0){
        b5=false;
    }
    else{
        b5=true;
    }
});

message.addEventListener("input",(event)=>{
    if (event.target.value.length==0){
        b6=false;
    }
    else{
        b6=true;
    }
});

button.addEventListener("click",(event)=>{
    let a=(b1 && b2 && b3 && b4 && b5 && b6);
    if (a){
        let div=document.createElement("div");
        div.style.backgroundColor="green";
        div.innerText="succesfully done the process";
        document.body.prepend(div);
        firstName.value=null;
        lastName.value=null;
        address.value=null;
        email.value=null;
        phone.value=null;
        message.value=null;
        setTimeout(function (){
            document.body.removeChild(div);
        },1000);
    }
    else {
        let div=document.createElement("div");
        div.style.backgroundColor="red";
        div.innerText="fill the form correctly";
        document.body.prepend(div);
        setTimeout(function (){
            document.body.removeChild(div);
        },1000);
    }
});