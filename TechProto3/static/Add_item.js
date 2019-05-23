

var display = function(database){
    console.log(database)
    console.log(database[1]["name"])
    document.getElementById('First_muscle').placeholder=database[0]["name"]
    var vidid = database[0]["pose3"]
    console.log(vidid)
    document.getElementById('video1').src="https://www.youtube.com/embed/?playlist="+database[0]["pose1"]+""
    document.getElementById('video2').src="https://www.youtube.com/embed/?playlist="+database[0]["pose2"]+""
    document.getElementById('video3').src="https://www.youtube.com/embed/?playlist="+database[0]["pose3"]+""
    document.getElementById('video4').src="https://www.youtube.com/embed/?playlist="+database[0]["pose4"]+""
    document.getElementById('video5').src="https://www.youtube.com/embed/?playlist="+database[0]["pose5"]+""
    document.getElementById('video6').src="https://www.youtube.com/embed/?playlist="+database[0]["pose6"]+""
    document.getElementById('video7').src="https://www.youtube.com/embed/?playlist="+database[0]["pose7"]+""
    document.getElementById('video8').src="https://www.youtube.com/embed/?playlist="+database[0]["pose8"]+""



     //console.log(database[database.length-1]["muscle"])


    // var row = $("<div class = 'row'>")
    // var col = $("<div class = 'col-md-12'>")
    // $(col).append("Sucess! '"+database[database.length-1]["name"]+"' added to list of players. Click on link above") 
    //     // +(database.length-1)["muscle"]+"Added")
    // $(row).append(col)
    // $("#check").prepend(row)
    // $("#check").prepend('<a href="Item/YourDataEntry">pusage</a>')
    //     '<div class="blue" id="YourDataEntry">Your Data Entry</div>')
    // $("#YourDataEntry").click(function(){
    //     console.log("hi")
    //     window.location.href = 'Item/YourDataEntry';
    // })


}






var save_entry = function(new_entry){

    database.unshift(new_entry)

    var data_to_save = new_entry
    $.ajax({
        type: "POST",
        url: "save_entry",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),

        success: function(result, results){
            
            console.log(result["stats"])
            var data = result["stats"]

            // display(data)

        },
        error: function(request, status, error){
            console.log("WHAT TF")
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
            var row = $("<div class = 'row'>")
            var col = $("<div class = 'col-md-12'>")
            $(col).append("Failed to add entry to database") 
                // +(database.length-1)["muscle"]+"Added")
            $(row).append(col)
            $("#check").prepend(row)
        }
    });
}


var submit_entry = function ()
{
    var name = $("#First_muscle").val()
    /*var Last = $("#Last_muscle").val()*/
    //ACTUALLY NEED SRC VALUES HERE
    var pose1 =document.getElementById('First_muscle').placeholder
    var pose1name=document.getElementById('First_muscle').placeholder
    var pose2 = document.getElementById('First_muscle').placeholder
    var pose2name= document.getElementById('First_muscle').placeholder
    var pose3 = document.getElementById('First_muscle').placeholder
    var pose3name = document.getElementById('First_muscle').placeholder
    var pose4 = document.getElementById('First_muscle').placeholder
    var pose4name=document.getElementById('First_muscle').placeholder
    //miracle thai food: 9173302839
    var data_entry = {
        "name": name,
        "pose1": pose1,
        "pose1name": pose1name,
        "pose2": pose2,
        "pose2name": pose2name,
        "pose3": pose3,
        "pose3name": pose3name,
        "pose4": pose4,
        "pose4name":pose4name
    }
    // new_entry = {
    //     "id": current_pose,
    //     "name":  name,
    //     "pose1": pose1,
    //     "pose1name":pose1name,
    //     "pose2": pose2,
    //     "pose2name": pose2name,
    //     "pose3": pose3,
    //     "pose3name": pose3name,
    //     "pose4": pose4,
    //     "pose4name": pose4name
    // }
    // console.log(data_entry["name"])
    // console.log(data_entry["pose1"])
    // console.log(data_entry["pose1name"])
    save_entry(data_entry);
       
        // var text = $("#enter_client").val();
        // var pusages = $("#enter_reams").val();

        // if(text==""){
        //     alert("No client muscle entered")
        //     $('#enter_client').attr("placeholder", "Clients").val("").focus();
        //     return;
        // }
        // if(pusages=="" ){
        //     alert("no ream number entered")
        //     $('#enter_reams').attr("placeholder", "#Reams").val("").focus();
        //     return;
        // }
        // if(!$.isNumeric(pusages)){
        //     alert("Did not enter a valid nummber")
        //     $('#enter_reams').attr("placeholder", "#Reams").focus();
        //     return;
        // }
        // if(pusages=="" ){
        //     alert("no ream number entered")
        //     $('#enter_reams').attr("placeholder", "#Reams").val("").focus();
        //     return;
        // }

    //save_entry(data_entry)
}

var display_video = function(num)
{
    console.log("logging the passed argument")
    console.log(num)
    var poses = ["-r15RxP8ZzE","-r15RxP8ZzE","hmZxKCXS0tY","yqgsm8wzcJw","k4qaVoAbeHM","IUqcLGOEzPw"]
    $.each(poses, function(i, value){
        //console.log(i)
        //console.log(poses[i])
        // console.log(poses[1])
        // console.log(poses[2])
        //need to make html row and column for iframe where src section gets all poses
        var row = $("<div class = 'row bottom_row_padding'>")
                var col_entry = $("<div class = 'col-md-3'>")
                
                 $(col_entry).append("<iframe id='video' width='150' height='100' src='https://www.youtube.com/embed/?playlist="+poses[i]+"'></iframe>")
                 $(row).append(col_entry)

                 var col_entry = $("<div class = 'col-md-3'>")
                var item = 0;


                 var select_button = $("<button class ='btn btn-outline-secondary select_button " + item + "'>select</button>")
                 $(select_button).click(function(){
                        console.log("gonna swap you")
                        //if you click on something know which thing you clicked on : butotns by number or even pose type on click that button says you 
                        //clicked that pose or number and then 

                        //click on thing to change in on click for that on click of the other stuff send that stuff as thing to replace make the new 
                        //thing with everything except on that number replace that one with the other thing clicked on.
                        var replace = ",hmZxKCXS0tY"
                        document.getElementById('video1').src="https://www.youtube.com/embed/?playlist="+replace+""

                 })
                    
    //         console.log("select!")
    //         //console.log(item)
                     
    //             })


                 console.log(item)
                 
                 
              
                // // var del = delete_sale(i)
                  
                // $(col_entry).append(edit_button)
                // $(row).append(col_entry)
                $(".videoappend").append(row)
                $(".videoappend").append(select_button)
         })
        
        
    

}

var swap = function ()
{
    //create html in add_item for other column
    //append videos from database with button to select
    //on click of a viedo's button
    //document.getElementById('videopicked').src="https://www.youtube.com/embed/eqVMAPM00DM?playlist=-r15RxP8ZzE"video selected

}

$(document).ready(function(){
    display(database)
    num = "0"
    $(".create").click(function(){  
        window.location.assign("/Create")
    })
     $(".change1").click(function(){
        //console.log("edit")
        display_video("1")
        num = "1"

        })
     $(".change2").click(function(){
        //console.log("sdf")
        display_video("2")
        num = "2"
        })
     $(".change3").click(function(){
        //console.log("whale")
        display_video("3")
        })
     $(".change4").click(function(){
        //console.log("mouse")
        display_video(4)
        })
     $(".change5").click(function(){
        console.log("edit")
        display_video(5)
        })
     $(".change6").click(function(){
        console.log("edit")
        display_video(6)
        })
     $(".change7").click(function(){
        console.log("edit")
        display_video(7)
        })
   
    //when the pusage loads, display all the muscles
    $(".navbar-brand").click(function(){  
        window.location.assign("/Search")
    })
    $("#Submit").click(function(){  

        submit_entry() 
        
    })
            // display(database)     
})









