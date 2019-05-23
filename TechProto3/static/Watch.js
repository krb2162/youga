

var display_video = function(database){
    console.log("play video")

    var playlist = "https://www.youtube.com/embed/eqVMAPM00DM?playlist=-r15RxP8ZzE,hmZxKCXS0tY,yqgsm8wzcJw,k4qaVoAbeHM,IUqcLGOEzPw,5vIJX7SIiJo,n-tkEKXKZDU,VUoXdvODhws,Ahbws0nrMJg,Ahbws0nrMJg,3hT2H0mMHNQ,AiVLtDdO_kw,FVlX5HNKamw,AiVLtDdO_kw,hTeoG3H0vsM,ClE1necHjUs,WTFCMfmjnaw"
    var html = '<iframe id="video" width="900" height="700" src='+playlist+'></iframe>'
    $(".video").append(html)


    // console.log("hi")
    //     $.each(database, function(i, entry){
    //         //pass name of thing looking for

    //         // if name.equals(entry["name"]){
    //             // console.log(name)


    //             // console.log(entry)
                
                
    //             // console.log(entry["name"])
    //             //asign that video to the current playlist in playbutton

    //             }

    //             // var del = delete_sale(i)
                
    //      })
    // }
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
