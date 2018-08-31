var prg="while(1)\n{\n\t print(\"Keep Smiling \");\n";
var lst="\tTakeCare();\n\tKeepSmiling();\n\tKeepCoding();\n}\n";

var str="\n Hello! Python man :).\n I am Doraemon v1.0 \n Happy Birthday to you\n Happy Birthday to you \nHappy Birthday to you\n Happy Birthday to you\n Wait I have a Program for you.\n-------Program Starting------- \n "+prg+"\n"+lst+"\n----------Program Finish---------- \nThanks();\n init 0";
var body = document.getElementById("doratext");
setInterval(add,120);
var i = 0;
var br="</br>";

function add()
{
    if(str[i] == "\n")
    {
        doratext.innerHTML += br+"<span style=\"color:red\"># </span>";
      
        i++;
    }
    if(str[i]=="\t")
    {
                doratext.innerHTML += '&nbsp;&nbsp;&nbsp;';
                i++;
        
    }
    if(i < str.length)
    {
        doratext.innerHTML+=str[i]; 
        i++;
    }
    if(i==str.length)
    {
        thanks();
        off();
    }
     
   
}
function off()
        {
                    var body = document.getElementById("on");
                    
                    on.innerHTML = "<span style=\"color:red\">Offline </span>";
                   
            
        }
function thanks()
        {
            responsiveVoice.speak("Thank You so much");
        }
