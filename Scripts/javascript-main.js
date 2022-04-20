var intervalID =  window.setInterval(themefontcolor, 1000);


function themefontcolor(){
 
    if(window.innerWidth<=500){
        $(".home").addClass("home-null")
        $(".home").removeClass("home")

        $(".contact").addClass("contact-null")
        $(".contact").removeClass("contact")

        $(".about-us").addClass("about-us-null")
        $(".about-us").removeClass("about-us")

        $(".opinions").addClass("opinions-null")
        $(".opinions").removeClass("opinions")
        
    }
    else{
        if($("#button-theme").hasClass("button-theme-primary")){
            $(".home-null").addClass("home")
            $(".home-null").removeClass("home-null") 

            $(".contact-null").addClass("contact")
            $(".contact-null").removeClass("contact-null")
    
            $(".about-us-null").addClass("about-us")
            $(".about-us-null").removeClass("about-us-null")
    
            $(".opinions-null").addClass("opinions")
            $(".opinions-null").removeClass("opinions-null")

            $("button").css("color","black")
        }
        else{
            $("button").css("color","white")
        }

       
       
    }
    
}



$("#button-theme").click(function() { 
    if($("#button-theme").hasClass("button-theme-primary")){
        $("#button-theme").removeClass("button-theme-primary")
        $("#button-theme").addClass("button-theme-secondary")

        //Cambios del theme

       

        $("#body").css("background-color", "var(--bg-color-secondary-black)")
        $(".menu-box").css("background-color", "var(--bg-color-secondary-black)")
        $(".menu-theme-primary").addClass("menu-theme-secondary")
        $(".menu-theme-primary").removeClass("menu-theme-primary")
        $(".logo-main").css("background-image","url(../images/logo-theme-black.jpeg)")
        

    
    }
    else{
        $("#button-theme").removeClass("button-theme-secondary")
        $("#button-theme").addClass("button-theme-primary")

        //Theme default

        if(window.innerWidth<=500){
            $("button").css("color","var(--transparent)")
        }
        else{
            $("button").css("color","black")
        }
        

        $("#body").css("background-color", "var(--bg-color-white)")
        $(".menu-box").css("background-color", "var(--bg-color-main-white)")
        $(".menu-theme-secondary").addClass("menu-theme-primary")
        $(".menu-theme-secondary").removeClass("menu-theme-secondary")
        $(".logo-main").css("background-image","url(../images/logo-theme-white.jpeg)")
        

    }
 })