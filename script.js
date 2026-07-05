function checkPassword(){

    let password=document.getElementById("password").value;

    let strength=0;

    let feedback=[];

    if(password.length>=8){
        strength++;
    }else{
        feedback.push("✔ Password should be at least 8 characters.");
    }

    if(/[A-Z]/.test(password)){
        strength++;
    }else{
        feedback.push("✔ Add an uppercase letter.");
    }

    if(/[a-z]/.test(password)){
        strength++;
    }else{
        feedback.push("✔ Add a lowercase letter.");
    }

    if(/[0-9]/.test(password)){
        strength++;
    }else{
        feedback.push("✔ Add a number.");
    }

    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        strength++;
    }else{
        feedback.push("✔ Add a special character.");
    }

    let bar=document.getElementById("bar");
    let text=document.getElementById("strength");

    if(strength<=2){
        text.innerHTML="Weak Password";
        bar.style.width="30%";
        bar.style.background="red";
    }
    else if(strength==3 || strength==4){
        text.innerHTML="Medium Password";
        bar.style.width="70%";
        bar.style.background="orange";
    }
    else{
        text.innerHTML="Strong Password";
        bar.style.width="100%";
        bar.style.background="green";
    }

    document.getElementById("feedback").innerHTML=
    "<b>Suggestions:</b><br>"+feedback.join("<br>");

    document.getElementById("suggestion").innerHTML=
    "<br><b>Suggested Strong Password:</b><br>"+generatePassword();
}

function generatePassword(){

    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let numbers="0123456789";
    let symbols="@#$%&*!?";
    let all=upper+lower+numbers+symbols;

    let password="";

    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    for(let i=4;i<12;i++){
        password+=all[Math.floor(Math.random()*all.length)];
    }

    return password;
}