
var display_video = function(num)
{
    console.log( "in the surrender")
    console.log("logging the passed argument")
    console.log(num)
    console.log(End[1]["name"])
    var poses = ["IUqcLGOEzPw","yqgsm8wzcJw","-r15RxP8ZzE","5vIJX7SIiJo"]
    $.each(End, function(i, value){
        //console.log(i)
        //console.log(poses[i])
        // console.log(poses[1])
        // console.log(poses[2])
        //need to make html row and column for iframe where src section gets all poses
        //var row = $("<div class = 'row bottom_row_padding'>")
                     var col_entry = $("<div class = 'col-md-3 vest'>")
                //$(col_entry).append("<div id='name'> "+End[i]['name']+"</div>");
                //$(row).append(col_entry)
                console.log(End[i])
                console.log(End[i]['benefits'])
                console.log(End[i]['name'])
                //var col_entry = $("<div class = 'col-md-3'>")
                
                 $(col_entry).append("<div class = 'vid-container' <span id='"+End[i]["video_link"]+"'> <span id ='name'>"+End[i]['name']+"</span></span> <iframe class='video' id = '"+End[i]["benefits"]+"' width='150' height='100' src='https://www.youtube.com/embed/?playlist="+End[i]["video_link"]+"'></iframe> <button class ='btn btn-outline-secondary select_button " + item + "'>select</button></div>")
                 //$(row).append(col_entry)

                 

                var item = 0;


                 // var select_button = $("<button class ='btn btn-outline-secondary select_button " + item + "'>select</button>")

                  
                    
 
                 console.log(item)
                 
                
                $(".videoappend").append(col_entry)
                //$(".videoappend").append(select_button)

         })
        
        
    

}

//can put the whole video and button inside one div

$(document).ready(function(){
    var integer1 = -1;


    //SUPER IMPORTANT HOW TO MAKE THIS WORK~!!!!
    // localStorage.setItem('surrenderpose',"hello pretty genius");



    //display(database)
    // init();
    num = 0
    display_video(num)
    var selected_pose;
    // $(".vid-container").hover(function(){
    //     console.log("vid-container")                 

                                                                        // $(".select_button").click(function()
                                                                        // {
                                                                        //     console.log("clicked boolean select button")
                                                                        //     integer1 = integer1 * -1;
                                                                        //     console.log("THIS IS THE NAME:")
                                                                        //     //console.log("vid-container"["id"])
                                                                        //     console.log(this)

//     // })
// })
    
     // $(".change1").click(function(){
     //    //console.log("edit")
     //    display_video("1")
     //    num = "1"

     //    })
     // $(".change2").click(function(){
     //    //console.log("sdf")
     //    display_video("2")
     //    num = "2"
     //    })
     // $(".change3").click(function(){
     //    //console.log("whale")
     //    display_video("3")
     //    })
     // $(".change4").click(function(){
     //    //console.log("mouse")
     //    display_video(4)
     //    })
     // $(".change5").click(function(){
     //    console.log("edit")
     //    display_video(5)
     //    })
     // $(".change6").click(function(){
     //    console.log("edit")
     //    display_video(6)
     //    })
     // $(".change7").click(function(){
     //    console.log("edit")
     //    display_video(7)
     //    })
    // $("."+num+"").click(function(){
                    
    //         console.log("select!")
    //         //console.log(item)
                     
    //             })

var selected_pose;
   $(".select_button").click(function()
    {
        console.log("clicked boolean select button")
        integer1 = integer1 * -1;
        console.log("THIS IS THE NAME:")
        console.log(cur_pose)
        selected_pose = cur_pose;
        //console.log("vid-container"["id"])
        //console.log(this)
    });
    

    var cur_pose;

    $( ".vid-container" ).hover(
        function() {
            console.log("VIDEO CONTAINER ")
            console.log(this["id"]);
            cur_pose = this["id"];

    }, function() 
    {
        console.log("VIDEO CONTIANER UNHOVERED")
    }
    );
   

    // $( "#keyword" ).hover(
    //     function() {
    //         console.log("kewordhovered!")
    //         $("#keyword").append("<span id='keywordtext'> Surrender Series is the ending meditative state, the culmination and climax of your class. </span>");
    //         },function(){
    //             $( this ).find( "span:last" ).remove();
    //         }
    // ),
    // $( ".vid-container" ).hover(
    //     function() {
    //         // console.log("VIDEO!")
    //         $(this).addClass(".selecting")
    //         },function(){
    //             $( this ).find( "span:last" ).remove();
    //         }
    // ),
    //when the pusage loads, display all the muscles
    $(".navbar-brand").click(function(){  
        window.location.assign("/Home")
    })
    $(".create").click(function(){  
        window.location.assign("/Create")
    })
    $(".Next").click(function(){  
        if (integer1 > 0)
        {
            console.log("hi! your boolean is greater than 0")
    
            //this is the pose that was picked.
            //send that to be saved to make the class.
            //SEND selected_pose
             localStorage.setItem('surrenderpose',selected_pose);
            //surrenderpose=selected_pose;
            console.log("SURRENDER POSE")
            //console.log(surrenderpose)
            window.location.assign("/YogaClass")
        }else
        {
            console.log("boolean less than 0")
            window.alert("need to select one pose")
        }
    })
    $(".yours").click(function(){  
        window.location.assign("/Search")
    })
    $("#Submit").click(function(){  

        submit_entry() 
        
    })
            // display(database)     
})
