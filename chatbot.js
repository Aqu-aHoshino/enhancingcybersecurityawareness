function typeMessage(text){

let chatbox=document.getElementById("chatbox");

let p=document.createElement("p");
p.className="bot";
chatbox.appendChild(p);

let i=0;

let typing=setInterval(function(){

p.innerHTML+=""+text.charAt(i);
i++;

if(i>=text.length){
clearInterval(typing);
}

},25);

}

function sendMessage(){

let input=document.getElementById("userInput").value.toLowerCase();
let chatbox=document.getElementById("chatbox");

chatbox.innerHTML+="<p class='user'>You: "+input+"</p>";

let response="I don't recognize that question yet.";

if(input.includes("phishing")){
response="Phishing is a cyberattack where attackers trick users into revealing passwords or personal information through fake emails or websites.";
}

else if(input.includes("malware")){
response="Malware is malicious software that damages or gains unauthorized access to computer systems.";
}

else if(input.includes("password")){
response="Strong passwords should include numbers, symbols, and upper and lowercase letters.";
}

else if(input.includes("cyberbullying")){
response="Cyberbullying occurs when digital platforms are used to harass or threaten individuals.";
}

else if(input.includes("protect")){
response="You can stay safe online by avoiding suspicious links, using strong passwords, and enabling two-factor authentication.";
}

typeMessage("CyVoid: "+response);

document.getElementById("userInput").value="";

}