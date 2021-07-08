// fk every body
var first1 = false;
while(first1 == false){
    const out1 = document.querySelector('.out1');
    var st1 = out1.textContent.split("");
    out1.setAttribute("style", "visibility: hidden;");
    // Get it's position in the viewport
    var x1 = setInterval(tocheck, 100);
    var placeA = false;
    function tocheck(){
        var bounding = out1.getBoundingClientRect();
        if(bounding.top == 0 && placeA == false){
            out1.setAttribute("style", "visibility: none;");
            out1.innerHTML = "";
            for(let i=0; i < st1.length;){
                out1.innerHTML += "<span>" + st1[i] + "</span>";
                i++;
            };

            var timer = setInterval(addclasses, 100);
            var clas = 0;


            function addclasses(){
                var spans = out1.querySelectorAll("span")[clas];
                spans.classList.add("func1");
                clas = clas + 1;
                if(clas == st1.length){
                    clearInterval(timer);
                }
            }
            placeA = true;
        }else if(placeA == true){
            clearInterval(x1);
            
        }
    }
    first1 = true;
}


// ramadan
var first2 = false;
while(first2 == false){
    const con2 = document.querySelector('.con2');
    const out2 = document.querySelector('.out2');
    var st2 = out2.textContent.split("");
    out2.setAttribute("style", "visibility: hidden;");
    var x2 = setInterval(tocheck, 10);
    var placeA2 = false;
    var i2= 0;
    out2.innerHTML = "";
    function tocheck(){
        var bounding2 = con2.getBoundingClientRect();
        if(bounding2.top < 10 || bounding2.bottom  <= 0 && placeA2 == false){
            out2.setAttribute("style", "visibility: none;");
            out2.innerHTML += "<span>" + st2[i2] + "</span>";
            i2 = i2 + 1;
            if(i2 == st2.length){
                placeA2 = true;
            }

        }else if(placeA2 == true){
            clearInterval(x2);
        }}
    first2 = true;
}