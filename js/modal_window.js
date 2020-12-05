
    var btn = document.getElementById("myBtn");
    btn.onclick = function() {
        var modal = document.getElementById('myModal');
        var modal2 = document.getElementById('myModal2');
        var infoprice = document.getElementById('para2').innerHTML;
        var infoname = document.getElementById('para1').innerHTML;
        var infoemail = document.getElementById('inputemail').value;
        if(infoprice && infoname!='The name / The genre' && infoemail){
            var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
        else{
            var span2 = document.getElementsByClassName("close2")[0];
            modal2.style.display = "block";
            span2.onclick = function() {
                modal2.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal2) {
                    moda2l.style.display = "none";
                }
            }
        }
    }
    