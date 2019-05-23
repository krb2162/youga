
var save_video = function(name)
{
    var surrenderpose=localStorage.getItem('surrenderpose');
        var integrationpose=localStorage.getItem('integrationpose');
        var warmuppose=localStorage.getItem('warmuppose');
        var armpose=localStorage.getItem('armpose');
        var balance=localStorage.getItem('balance');
        var stretch=localStorage.getItem('stretch');
        var sunB=localStorage.getItem('sunB');
        var sunA=localStorage.getItem('sunA');
        var core=localStorage.getItem('core');
        var stretch2=localStorage.getItem('stretch2');
      var data_entry = 
           {
                "id": 1,
                "name": name,
                "pose1": warmuppose,
                "pose1mame": "fetal pose",
                "pose2": integrationpose,
                "pose2name": "childs pose",
                "pose3": sunA,
                "pose3name": "downward dog",
                "pose4": core,
                "pose4name": "childs pose",
                "pose5": armpose,
                "pose5name": "childs pose",
                "pose6": sunB,
                "pose6name": "childs pose",
                "pose7": balance,
                "pose7name": "childs pose",
                "pose8": stretch,
                "pose8name": "childs pose",
                "pose9": stretch2,
                "pose9name": "childs pose",
                "pose10": surrenderpose,
                "pose10name": "childs pose"
            }

        $.ajax({
        type: "POST",
        url: "save_entry",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_entry),
        success: function(result){
            console.log(result["stats"])
            console.log( "success!")
            var data = result["stats"]

            // display(data)

        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
            // var row = $("<div class = 'row'>")
            // var col = $("<div class = 'col-md-12'>")
            // $(col).append("Failed to add entry to database") 
            //     // +(database.length-1)["muscle"]+"Added")
            // $(row).append(col)
            // $("#check").prepend(row)
        }
    });

}

$(document).ready(function(){
    $(".create").click(function(){  
        window.location.assign("/Create")
    })
    $(".yours").click(function(){  
        window.location.assign("/Search")
    })
     $(".navbar-brand").click(function(){  
        window.location.assign("/Home")
    })
     //onclick submit button console log the value --> put that into data entry
     $(".Save").click(function(){
        //get value

        console.log("SUbmit hit!");
        var name=$("#myText").val();
        console.log(name);
        save_video(name);
        window.location.assign("/Search")

     })
     //onclick cancel go to home nav bar homepage
     $(".Cancel").click(function(){
        window.location.assign("/Home")
     })
    console.log(surrenderpose);
        $(".wassup").append(surrenderpose);
        var surrenderpose=localStorage.getItem('surrenderpose');
        var integrationpose=localStorage.getItem('integrationpose');
        var warmuppose=localStorage.getItem('warmuppose');
        var armpose=localStorage.getItem('armpose');
        var balance=localStorage.getItem('balance');
        var stretch=localStorage.getItem('stretch');
        var sunB=localStorage.getItem('sunB');
        var sunA=localStorage.getItem('sunA');
        var core=localStorage.getItem('core');
        var stretch2=localStorage.getItem('stretch2');






        console.log(surrenderpose)
        console.log(integrationpose)
        console.log(warmuppose)
        console.log("sunA")
        console.log(sunA)
        console.log(balance)
        console.log(stretch)

        // console.log(number);

        var playlist = "https://www.youtube.com/embed/?playlist="+warmuppose+","+integrationpose+","+sunA+","+core+","+armpose+","+sunB+","+balance+","+stretch+","+stretch2+","+surrenderpose+""
        var html = '<iframe id="video" width="300" height="300" src='+playlist+'></iframe>'
        $(".video").append(html)



         



        //use the variables to make the yoga class to play
        //OR can make the thing to send back that matches the other stuff and then that can play and append and stuff
    })


//     var data_entry = {
//         "muscle": First,
//         "importance_level": importance_level,
//         "Pains": Pains,
//         "pose_easy": pose_easy,
//         "pose_medium": pose_medium,
//         "pose_advanced": pose_advanced,
//         "usage": usage,
//         "Summary": Summary,
//         "pic":pic
//     }

