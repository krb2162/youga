





$(document).ready(function(){
    //when the pusage loads, display all the muscles
    //work on this to make go to a page where can watch the associated video
    

    $(".View").click(function(){  
        console.log("clicked button begin")
        window.location.assign("/Search")
    })
    $("#Take").click(function(){  
        window.location.assign("/Watch")
    })
    $(".Create").click(function(){  
        window.location.assign("/Create")
    })
    
   
})