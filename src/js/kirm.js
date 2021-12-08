
function kirim(){
         const tanya = confirm("sensor pH channa sudah baik");
 
         if(tanya === true) {
            pesan ="" ;
         }else{
            pesan = "";
         }
 
         document.getElementById("pesan").innerHTML = pesan;
      }