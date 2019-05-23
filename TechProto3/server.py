from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

current_id= 1;
poses = [
	{
	"name": "Beginner Class",
	"pose1": "eqVMAPM00DM",
	"pose1mame": "fetal pose",
	"pose2": ",-r15RxP8ZzE",
	"pose2name": "childs pose",
	"pose3": ",hmZxKCXS0tY",
	"pose3name": "downward dog",
	"pose4": ",yqgsm8wzcJw",
	"pose4name": "childs pose",
	"pose5": ",k4qaVoAbeHM",
	"pose5name": "childs pose",
	"pose6": ",IUqcLGOEzPw",
	"pose6name": "childs pose",
	"pose7": ",5vIJX7SIiJo",
	"pose7name": "childs pose",
	"pose8": ",n-tkEKXKZDU",
	"pose8name": "childs pose",
	"pose9": ",VUoXdvODhws",
	"pose9name": "childs pose",
	"pose10":",Ahbws0nrMJg",
	"pose10name": "childs pose"
	}
]
database = [
	{
	"id": 1,
	"name": "Demo Class:",
	"pose1": ",eqVMAPM00DM",
	"pose1mame": "fetal pose",
	"pose2": ",-r15RxP8ZzE",
	"pose2name": "childs pose",
	"pose3": ",hmZxKCXS0tY",
	"pose3name": "downward dog",
	"pose4": ",yqgsm8wzcJw",
	"pose4name": "childs pose",
	"pose5": ",k4qaVoAbeHM",
	"pose5name": "childs pose",
	"pose6": ",IUqcLGOEzPw",
	"pose6name": "childs pose",
	"pose7": ",5vIJX7SIiJo",
	"pose7name": "childs pose",
	"pose8": ",n-tkEKXKZDU",
	"pose8name": "childs pose",
	"pose9": ",VUoXdvODhws",
	"pose9name": "childs pose",
	"pose10":",Ahbws0nrMJg",
	"pose10name": "childs pose"

	},

]
Lookup_matches=[

]

stats=[

]

warmupposes = [

	{
	"id": 1,
	"name": "Child's Pose",
	"video_link": ",eqVMAPM00DM",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Fetal Pose",
	"video_link": ",2MJGg-dUKh0",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Savasana",
	"video_link": ",qKvV67F0UcU",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	},
	{
	"id": 4,
	"name": "Breathing",
	"video_link": ",VaExzdCj3rk",
	"benefits": "Beginning the class with guided breathing will prepare your breath and rythm for the rest of class."
	},
	{
	"id": 5,
	"name": "Meditation",
	"video_link": ",4EaMJOo1jks",
	"benefits": "If you are looking to really ground down and clear your mind, beginning with guided meditaiton may be the right option for you."
	}

]

SunAflow = [

	{
	"id": 1,
	"name": "Low Energy",
	"video_link": ",73sjOu0g58M",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Simple",
	"video_link": ",nZC4qflcsgk",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "High Energy",
	"video_link": ",Lg_Ja-liVuQ",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	},
	{
	"id": 3,
	"name": "Long",
	"video_link": ",423P9nKanys",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}

]

SunBflow = [

	{
	"id": 1,
	"name": "Low Energy",
	"video_link": ",5vIJX7SIiJo",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Traditional",
	"video_link": ",S94_5zvx3MY",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Difficult",
	"video_link": ",R0DDYsHPfiE",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}

]

Core = [

	{
	"id": 1,
	"name": "20min Medium",
	"video_link": ",CRKmB-78elI",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "5min Easy",
	"video_link": ",JVwH-JsiwNI",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Boat Pose",
	"video_link": ",ooy4aOEmJgU",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	},
	{
	"id": 3,
	"name": "20min Hard!",
	"video_link": ",_ExaR5qCa5Q",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}


]

Arm = [

	{
	"id": 1,
	"name": "Crow Pose",
	"video_link": ",FBzWk1bx9P8",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Astavakrasana",
	"video_link": ",QDfqM33mVlg",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Grasshopper",
	"video_link": ",vXKR-cG2vnQ",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	},
	{
	"id": 3,
	"name": "Hurdlers",
	"video_link": ",FihEWMM5y_w",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}

]
Balance = [

	{
	"id": 1,
	"name": "Dancer's Pose",
	"video_link": ",Oxy2kgSqvrg",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Tree Pose",
	"video_link": ",WSgL6hbBYKc",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Challenge",
	"video_link": ",wfiRm0YJOEo",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}

]
Stretch0 = [

	{
	"id": 1,
	"name": "Downward Dog",
	"video_link": ",3K7hIITaSbE",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Rag-Doll Pose",
	"video_link": ",ZyumPhPJ1U8",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Thread Needle",
	"video_link": ",Ki7XvwNQAj0",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}

]
Stretch1 = [

	{
	"id": 1,
	"name": "Pigeon Pose",
	"video_link": ",w4M0ff9qH9g",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Forward Fold",
	"video_link": ",IreNmKl5o6U",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Splits",
	"video_link": ",kpLEi6eqonE",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}

]
Stretch2 = [

	{
	"id": 1,
	"name": "Supine Twist",
	"video_link": ",mKC3IeldPOc",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Plow Pose",
	"video_link": ",wDMoau3EDC8",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Happy Baby",
	"video_link": ",ScnGkvMW_us",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	}

]
End = [

	{
	"id": 1,
	"name": "Child's Pose",
	"video_link": ",eqVMAPM00DM",
	"benefits": "child's pose allows for internal focus, and a feeling of safety."
	},
	{
	"id": 2,
	"name": "Fetal Pose",
	"video_link": ",2MJGg-dUKh0",
	"benefits": "fetal pose allows for internal focus, and a feeling of safety, more than even child's pose."
	},
	{
	"id": 3,
	"name": "Savasana",
	"video_link": ",qKvV67F0UcU",
	"benefits": "Savasana, corpse pose, is traditionally an ending pose, since it's benefits come from clearing the mind completely.  This pose can be used to calm, ground, and open up before a class, if you are ready to meditate.  "
	},
	{
	"id": 4,
	"name": "Breathing",
	"video_link": ",VaExzdCj3rk",
	"benefits": "Beginning the class with guided breathing will prepare your breath and rythm for the rest of class."
	},
	{
	"id": 5,
	"name": "Meditation",
	"video_link": ",4EaMJOo1jks",
	"benefits": "If you are looking to really ground down and clear your mind, beginning with guided meditaiton may be the right option for you."
	}

]

yogaclasses = []
stats=[]


@app.route('/Add_item', methods=['GET', 'POST'])
def Add_item(database=database):
    return render_template('Add_item.html', database=database, poses=poses)



# @app.route('/save_entry', methods=['GET', 'POST'])
# def save_entry():
	
# 	global database
# 	global current_pose
# 	global stats
# 	stats.clear()

# 	json_data = request.get_json()
# 	name=json_data["name"]
# 	pose1=json_data["pose1"]
# 	pose1name=json_data["pose1name"]
# 	pose2=json_data["pose2"]
# 	pose2name=json_data["pose2name"]
# 	pose3=json_data["pose3"]
# 	pose3name=json_data["pose3name"]
# 	pose4=json_data["pose4"]
# 	pose4name=json_data["pose4name"]
# 	current_pose += 1
# 	new_pose = current_pose 
# 	new_entry = {
#     	"id": current_pose,
#         "name":  name,
#         "pose1": pose1,
#         "pose1name":pose1name,
#         "pose2": pose2,
#         "pose2name": pose2name,
#         "pose3": pose3,
#         "pose3name": pose3name,
#         "pose4": pose4,
#         "pose4name": pose4name
#     }

# 	if name not in database:
# 		database.append(new_entry)
# 		stats.append(new_entry)
# 	return jsonify(database = database, stats=stats, poses=poses)



@app.route('/Search')
def Search(database=database):
    return render_template('Search.html', database=database, poses= poses)

@app.route('/match', methods=['GET', 'POST'])
def match():
	global database
	global Lookup_matches
	Lookup_matches.clear()
	json_data = request.get_json()
	Lookup=json_data["Lookup"]
	x=0;

	# while (x<len(database)):
	# 	# if Lookup.lower() in database[x]["pose2"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup.lower() in database[x]["pose3"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup.lower() in database[x]["pose4"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif str(Lookup) in str(database[x]["pose5"]):
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup in database[x]["pose6"]:
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup in database[x]["pose7"]:
	# 		Lookup_matches.append(database[x]);
	# 	elif str(Lookup) in str(database[x]["pose8"]):
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup in database[x]["pose9"]:
	# 		Lookup_matches.append(database[x]);
	x=x+1;
	return jsonify(Lookup_matches = Lookup_matches, poses=poses)


@app.route('/Watch')
def Watch(database=database):
    return render_template('Watch.html', database=database)

@app.route('/Play', methods=['GET', 'POST'])
def Play():
	global database
	global Lookup_matches
	Lookup_matches.clear()
	json_data = request.get_json()
	Lookup=json_data["Lookup"]
	#x=0;

	# while (x<len(database)):
	# 	# if Lookup.lower() in database[x]["pose2"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup.lower() in database[x]["pose3"].lower():
	# 		Lookup_matches.append(database[x]);
	
	#x=x+1;
	return jsonify(database=database)
@app.route('/Watch2')
def Watch2(database=database):
    return render_template('Watch2.html', database=database)

@app.route('/Play2', methods=['GET', 'POST'])
def Play2():
	global database
	global Lookup_matches
	Lookup_matches.clear()
	json_data = request.get_json()
	Lookup=json_data["Lookup"]
	#x=0;

	# while (x<len(database)):
	# 	# if Lookup.lower() in database[x]["pose2"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup.lower() in database[x]["pose3"].lower():
	# 		Lookup_matches.append(database[x]);
	
	#x=x+1;
	return jsonify(database=database)

@app.route('/Create')
def Create(database=database, warmupposes=warmupposes):
    return render_template('Create.html', database=database, warmupposes=warmupposes)

@app.route('/New', methods=['GET', 'POST'])
def New():
	global database
	global Lookup_matches
	global warmupposes
	Lookup_matches.clear()
	json_data = request.get_json()
	Lookup=json_data["Lookup"]
	#x=0;

	# while (x<len(database)):
	# 	# if Lookup.lower() in database[x]["pose2"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup.lower() in database[x]["pose3"].lower():
	# 		Lookup_matches.append(database[x]);
	
	#x=x+1;
	return jsonify(database=database, warmupposes=warmupposes)

@app.route('/Home')
def Home():
    return render_template('Home.html')

@app.route('/Homeroute')
def Homeroute():
	
	return jsonify()


# @app.route('/Integration')
# def Integration():
#     return render_template('Integration.html')

# @app.route('/Integrationroute')
# def Integrationroute():
	
# 	return jsonify()

@app.route('/Integration')
def Integration(database=database, Stretch0=Stretch0):
    return render_template('Integration.html', database=database, Stretch0=Stretch0)

@app.route('/Integrationroute', methods=['GET', 'POST'])
def Integrationroute():
	global database
	global Lookup_matches
	global warmupposes
	Lookup_matches.clear()
	json_data = request.get_json()
	Lookup=json_data["Lookup"]
	#x=0;

	# while (x<len(database)):
	# 	# if Lookup.lower() in database[x]["pose2"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup.lower() in database[x]["pose3"].lower():
	# 		Lookup_matches.append(database[x]);
	
	#x=x+1;
	return jsonify(database=database, warmupposes=warmupposes, Stretch0=Stretch0)


@app.route('/SunA')
def SunA(SunAflow=SunAflow):
    return render_template('SunA.html', SunAflow=SunAflow)

@app.route('/SunAroute', methods=['GET', 'POST'])
def SunAroute():
	return jsonify(SunAflow=SunAflow)

@app.route('/Stretch2')
def Stretch2(Stretch2=Stretch2):
    return render_template('Stretch2.html', Stretch2=Stretch2)

@app.route('/Stretch2route', methods=['GET', 'POST'])
def Stretch2route():
	return jsonify(Stretch2=Stretch2)

@app.route('/Core')
def Core(Core=Core):
    return render_template('Core.html', Core=Core)

@app.route('/Coreroute', methods=['GET', 'POST'])
def Coreroute():
	return jsonify(Core=Core)

@app.route('/Balance')
def Balance(Balance=Balance):
    return render_template('Balance.html', Balance=Balance)

@app.route('/Balanceroute', methods=['GET', 'POST'])
def Balanceroute():
	return jsonify(Balance=Balance)

@app.route('/SunB')
def SunB(SunBflow=SunBflow):
    return render_template('SunB.html', SunBflow=SunBflow)

@app.route('/SunBroute', methods=['GET', 'POST'])
def SunBroute():
	return jsonify(SunBflow=SunBflow)

@app.route('/Arm')
def Arm(Arm=Arm):
    return render_template('Arm.html', Arm=Arm)

@app.route('/Armroute', methods=['GET', 'POST'])
def Armroute():
	return jsonify(Arm=Arm)

@app.route('/Stretch')
def Stretch(Stretch1=Stretch1):
    return render_template('Stretch.html', Stretch1=Stretch1)

@app.route('/Stretchroute', methods=['GET', 'POST'])
def Stretchroute():
	return jsonify(Stretch1=Stretch1)

@app.route('/Surrender')
def Surrender(database=database, End=End):
    return render_template('Surrender.html', database=database, End=End)

@app.route('/Surrenderroute', methods=['GET', 'POST'])
def Surrenderroute():
	global surrenderpose
	global database
	global Lookup_matches
	global warmupposes
	# json_data = request.get_json()
	surrenderpose = request.args.get('surrenderpose', 0)
	# surrenderpose=json_data["surrenderpose"]
	# surrenderpose.append(surrenderpose)
	#x=0;

	# while (x<len(database)):
	# 	# if Lookup.lower() in database[x]["pose2"].lower():
	# 		Lookup_matches.append(database[x]);
	# 	elif Lookup.lower() in database[x]["pose3"].lower():
	# 		Lookup_matches.append(database[x]);
	
	#x=x+1;
	return jsonify(database=database, End=End)



# @app.route('/Core')
# def Core():
#     return render_template('Core.html')

# @app.route('/Coreroute')
# def Coreroute():
	
# 	return jsonify()

# @app.route('/Balance')
# def Balance():
#     return render_template('Balance.html')

# @app.route('/Balanceroute')
# def Balanceroute():
	
# 	return jsonify()

# @app.route('/WarmDown')
# def WarmDown():
#     return render_template('WarmDown.html')

# @app.route('/WarmDownroute')
# def WarmDownroute():
	
# 	return jsonify()

# @app.route('/Closing')
# def Closing():
#     return render_template('Closing.html')

# @app.route('/Closingroute')
# def Closingroute():
	
# 	return jsonify()



@app.route('/info', methods=['GET', 'POST'])
def info():
	global database
	global stats
	stats.clear()
	json_data = request.get_json()
	x=json_data["x"]
	stats.append(database[x]);


	return jsonify(stats)

@app.route('/Item/<pose1>')
def Item(pose1, stats=stats):
    return render_template('Item.html', pose1=pose1, stats=stats, poses=poses)


@app.route('/YogaClass')
def YogaClass(database=database, warmupposes=warmupposes):
	return render_template('YogaClass.html', database=database, warmupposes=warmupposes)

@app.route('/save_entry', methods=['GET', 'POST'])
def save_entry():
    global database
    global current_id
    global stats
    stats.clear()

    json_data = request.get_json() 
    
    name=json_data["name"] 
    pose1=json_data["pose1"] 
    pose2=json_data["pose2"]
    pose3=json_data["pose3"] 
    pose4=json_data["pose4"] 
    pose5=json_data["pose5"]
    pose6=json_data["pose6"] 
    pose7=json_data["pose7"]
    pose8=json_data["pose8"] 
    pose9=json_data["pose9"]
    pose10=json_data["pose10"]


    # # add new entry to array with 
    # # a new id and the muscle the user sent in JSON
    
    current_id += 1

    new_entry = {
        
        "id": current_id,
        "name": name,
        "pose1": pose1,
        "pose1mame": "we",
        "pose2": pose2,
        "pose2name": "have",
        "pose3": pose3,
        "pose3name": "a",
        "pose4": pose4,
        "pose4name":"shared",
        "pose5": pose5,
        "pose5name": "love",
        "pose6": pose6,
        "pose6name": "of",
        "pose7": pose7,
        "pose7name": "yoga",
        "pose8": pose8,
        "pose8name": "inside",
        "pose9": pose9,
        "pose9name": "and",
        "pose10": pose10,
        "pose10naem": "icecream"
    }
    database.append(new_entry)
    # stats.append(new_entry)
    return jsonify(database=database, warmupposes=warmupposes)

if __name__ == '__main__':
   app.run(debug = True)




