







$(document).ready(function(){
    // when the page loads, display all the names
    $("#Button1").click(function(){  
        window.location.assign("/Search")
    })
    $("#Button2").click(function(){  
        window.location.assign("/Add_item")
    })
    $(".navbar-brand").click(function(){  
        window.location.assign("/Search")
    })
    $(".create").click(function(){  
        window.location.assign("/Create")
    })

            // display(database)     
})