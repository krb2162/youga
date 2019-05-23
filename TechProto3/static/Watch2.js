

var display_video = function(database){
    //get the variable
    var getstuff=localStorage.getItem('DataWant');
    $("#head").append(database[getstuff-1]["name"])
    console.log(database[getstuff-1]["name"]);
    console.log(getstuff)
    //console.log(database)
    //console.log(database[getstuff-1]["pose1"])
    var playlist = "https://www.youtube.com/embed/?playlist="+database[getstuff-1]["pose1"]+","+database[getstuff-1]["pose2"]+","+database[getstuff-1]["pose3"]+","+database[getstuff-1]["pose4"]+","+database[getstuff-1]["pose5"]+","+database[getstuff-1]["pose6"]+","+database[getstuff-1]["pose7"]+","+database[getstuff-1]["pose8"]+","+database[getstuff-1]["pose9"]+","+database[getstuff-1]["pose10"]+""
        var html = '<iframe id="video" width="900" height="700" src='+playlist+'></iframe>'
        $(".video").append(html)
    
}





$(document).ready(function(){
    //when the pusage loads, display all the muscles
    //work on this to make go to a page where can watch the associated video
    display_video(database)
    $(".create").click(function(){  
        window.location.assign("/Create")
    })
    $(".navbar-brand").click(function(){  
        window.location.assign("/Home")
    })
    $(".create").click(function(){  
        window.location.assign("/Create")
    })
    $(".yours").click(function(){  
        window.location.assign("/Search")
    })

    //button to play warrior class
   
   
})
