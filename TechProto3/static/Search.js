

var display_sales_list = function(database){
    console.log("hi")
    var count = 0;
    $(".class1").empty()
    if(database.length == 0){
             console.log("Hey")
            var row = $("<div class = 'row classrow'>")
            var col_client = $("<div class = 'col-md-4'>")
            $(col_client).append("No Classes")
            $("#class1").append(row)
    }else{
        console.log("not empty")
        $.each(database, function(i, entry){
            var name = entry["name"]
            console.log(name)
            count +=1;

            
                console.log(entry)
                //console.log("moving")
                var row = $("<div class = 'row bottom_row_padding'>")
                var col_entry = $("<div class = 'col-md-5 displayclass'>")
                console.log(entry["name"])
                $(col_entry).append(entry["name"])
                $(row).append(col_entry)

                // var col_client = $("<div class = 'col-md-3'>")
                // $(col_client).append(entry["pose1"])
                // $(row).append(col_client)

                // var col_reams = $("<div class = 'col-md-3'>")
                // $(col_reams).append(entry["pose2"])
                // $(row).append(col_reams)
                var col_entry = $("<div class = 'col-md-3'>")
                var play_button = $("<button id = '"+count+"' class ='btn btn-outline-primary play_button'>begin</button>")
                //var edit_button = $("<button class ='btn btn-outline-secondary edit_button'>edit</button>")
                 $(".play_button").click(function(){
                      console.log("play!")
                //      var playlist = "https://www.youtube.com/embed/eqVMAPM00DM?playlist=-r15RxP8ZzE,hmZxKCXS0tY,yqgsm8wzcJw,k4qaVoAbeHM,IUqcLGOEzPw,5vIJX7SIiJo,n-tkEKXKZDU,VUoXdvODhws,Ahbws0nrMJg,Ahbws0nrMJg,3hT2H0mMHNQ,AiVLtDdO_kw,FVlX5HNKamw,AiVLtDdO_kw,hTeoG3H0vsM,ClE1necHjUs,WTFCMfmjnaw"
                //      var html = '<iframe id="video" width="400" height="300" src='+playlist+'></iframe>'
                //      $(".class1").append(html)
                        window.location.assign("/Watch")

               
                 })
                
                $(col_entry).append(play_button)
                //$(col_entry).append(edit_button)
                $(row).append(col_entry)
                $(".class1").append(row)
         })
    }
}


$(document).ready(function(){
    //when the pusage loads, display all the muscles
    //work on this to make go to a page where can watch the associated video
    display_sales_list(database)
     $(".play_button").click(function(){

                     //we get which button/database entry we want
                     console.log(this["id"])
                     localStorage.setItem('DataWant',this["id"]);

                     window.location.assign("/Watch2")
                     
                   
                })

    $("#Button1").click(function(){  
        console.log("clicked button begin")
        window.location.assign("/Item/<pose1>")
    })
    $(".create").click(function(){  
        window.location.assign("/Create")
    })
    $(".Button2").click(function(){  
        window.location.assign("/Add_item")
    })
    $("#edit").click(function(){  
        window.location.assign("/Add_item")
    })
    $(".navbar-brand").click(function(){  
        window.location.assign("/Home")
    })
    $(".yours").click(function(){  
        window.location.assign("/Search")
    })
    //button to play warrior class
    $(".btn").click(function(){
            
                    console.log("sweeet")

                })
    $(".create").click(function(){
            
                    window.location.assign("/Create")

                })
   
})
