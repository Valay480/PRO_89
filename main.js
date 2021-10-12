function addUser() {

    var math_1=document.getElementById("math_1_input").value;
    var math_2=document.getElementById("math_2_input").value;
    
    localStorage.setItem("math_1_name",math_1);
    localStorage.setItem("math_2_name",math_2);
    
    window.location="math.html";
    }