var inputname=document.getElementById("inputname");
            var inputdate=document.getElementById("inputdate");
            var inputpeople=document.getElementById("inputpeople");
            var inputtime=document.getElementById("inputtime");

            function booking(){
                if(inputname.value == ""){
                alert("Enter name!!");
                }
                if(inputpeople.value == ""){
                alert("Enter no.of.peoples!!");
                }
                if(inputdate.value == ""){
                alert("Enter Date!!");
                }
                else{
                    alert(`Enjoy your ${inputtime.value}`);
                }
            }
