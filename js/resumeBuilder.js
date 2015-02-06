var work = {
	"jobs" : [
	{
	"employer" : "Athens 2004",
	"title" : "Workstation technician" ,
	"location" : "Amarousion",
	"date" : "2004",
	 "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	
	
	},
	{
	"employer" : "Hellenic Telecommunication Organization",
	"title" : "Technician" ,
	"location" : "Athens",
	"date" : "2005",
	 "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	},
	{
	"employer" : "Monogram Travel S.A.",
	"title" : "IT Analyst" ,
	"location" : "Athens",
	"date" : "2006",
	 "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	},
	{
	"employer" : "Toppan Printing S.A.",
	"title" : "Hardware Engineer" ,
	"location" : "Kaisariani",
	"date" : "2006 - 2011",
	 "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	},
	{
	"employer" : "Freelance ",
	"title" : "Web Developer" ,
	"location" : "Galatsi",
	"date" : "2012 - 2013",
	 "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	},
	{
	"employer" : "TRIAENA TOURS & CONGRESS S.A.",
	"title" : "Senior IT Analyst" ,
	"location" : "Athens",
	"date" : "2013 - present",
	 "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	}
	
	],
	 displayWork: function(){	
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
			$(".work-entry:last").append(formattedDate);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		};
}


};

var projects = {
	"projects" : [
		{
		"title" :"www.triaenatours.gr",
		"dates" : "2015",
		"description" : "B2B travel agent website",
		"images" : [
		"../resume/images/triaenatours.jpg" 
		]
		
		},
		{
		"title" :"Conferences",
		"dates" : "2015",
		"description" : "Conference websites",
		"images" : [
		"../resume/images/AIVC 2015.png" ,
		"../resume/images/eke2015.png" 
		
		]
		}
	],
	displayProject: function(){
		for (item in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
			$(".project-entry:last").append(formattedprojectTitle);
			var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
			$(".project-entry:last").append(formattedprojectDates);
			var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
			$(".project-entry:last").append(formattedprojectDescription);
			for (i=0; i < projects.projects[item].images.length; i++){
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[i]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}
	
	}
};

var bio = {
	"name" : "Nikolaos Aneziris",
	"role" : "Web Developer",
	"contacts" : {
	"mobile": "6973552842",
	"email" :"naneziris@gmail.com",
	"github": "naneziris",
    "twitter": "naneziris", 
	"location" : "Athens, Greece"
	},
	"welcomeMessage" : "Welcome to my resume page",
	"skills" : ["Web Development","PHP","CSS","HTML5","Bootstrap","Git","Github","MySQL","Web Services","HTML"],
	"bioPic" : "https:media.licdn.com/mpr/mpr/shrink_200_200/p/7/005/010/260/1707d82.jpg",
	
	display: function(){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		  $("#header").prepend(formattedName);
			
		  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		  $("#topContacts").append(formattedMobile);
		  $("#topContacts").append(formattedEmail);
		  $("#topContacts").append(formattedGithub);
		  $("#topContacts").append(formattedTwitter);
		  $("#topContacts").append(formattedLocation);
		  $("#footerContacts").append(formattedMobile);
		  $("#footerContacts").append(formattedEmail);
		  $("#footerContacts").append(formattedGithub);
		  $("#footerContacts").append(formattedTwitter);
		  $("#footerContacts").append(formattedLocation);
			
		  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		  $("#header").append(formattedMessage);
			
		  var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);	
		  $("#header").append(formattedImage);

		  //replace and display skills
		  $("#header").append(HTMLskillsStart);
		  for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skillsH3").append(formattedSkill);
		  }
		}
};

var education = {
	"schools": 	{
	"name" : "TEI LAMIAS",
	"location" : "Lamia",
	"degree" : "Bachelor",
	"major" : "Computer and Informatics",
	"dates" : "2001 - 2006",
	"url" : "www.teilam.gr"
	},
	
	"onlineCourses": [
	{
	"title": "FrontEnd WebDeveloper Nanodegree",
	"school": "Udacity",
	"dates": "2015",
	"url": "www.udacity.com"
	
	},
	{
	"title": "Creative, Serious and Playful Science of Android Apps ",
	"school": "Coursera",
	"dates": "2014",
	"url": "www.coursera.com"
	
	}
	],
	display: function() {

		  
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
			formattedSchoolName = formattedSchoolName.replace("%url%", education.schools.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolNameDegree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
			$(".education-entry:last").append(formattedschoolDates);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
			$(".education-entry:last").append(formattedschoolLocation);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools.major);
			$(".education-entry:last").append(formattedschoolMajor);
			
			$("#education").append(HTMLonlineClasses);
			  for (course in education.onlineCourses) {
				$("#education").append(HTMLonlineStart);
				
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.onlineCourses[course].url);
				var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
				$(".online-entry:last").append(formattedOnlineTitleSchool);
					
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				$(".online-entry:last").append(formattedOnlineDates);
					
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				formattedOnlineURL = formattedOnlineURL.replace("%url%", education.onlineCourses[course].url);
				$(".online-entry:last").append(formattedOnlineURL);

				$(".online-entry:last").append("<br><div><hr class='section-hr'></div>");
			  }
	
		
		}
};

work.displayWork();
bio.display();
projects.displayProject();
education.display();
$("#mapDiv").append(googleMap);
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1];
 }
