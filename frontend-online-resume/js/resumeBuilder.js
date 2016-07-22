var work={
	"jobs":[
		{
			"employer": "Chemex Modular",
			"title": "Project Engineer",
			"location": "New Waverly, TX",
			"dates": "September 2015 - March 2016",
			"description": "Created program for hydrotreater using Allen Bradley Studio 5000 and FactoryTalk for the HMI. Setup micrologix LE33R PLC and ran ladder logic programs on it. Assisted in wiring panel for hydrotreater as well as tested it for continuity. Worked alongside chemical and mechanical engineers to produce P&ID schematics.Created and maintained instrument list for hydrotreater project. "
		},
		{
			"employer":"Tenaris",
			"title": "Global Trainee",
			"location": "Bay City, TX",
			"dates": "July 2014-April 2015",
			"description": "Fully responsible for researching and applying safety standards for machinery in an industrial environment. (ISO 13849, ANSI B11.19-2010, NFPA 79, IEC 62061) Reviewed Internal Safety Standard document for hot rolling mill process against known standards in the industry. Attended courses on Siemens PLCs and drives. Attended trainings on seamless tube creation in USA, Argentina and Mexico."
		},
		{
			"employer": "Cisco Systems",
			"title": "Software Engineer Intern",
			"location": "Richardson, TX",
			"dates": "May 2013 - August 2013",
			"description":"Collaborated with multiple interns and full-time engineers at Cisco Systems to develop a new Junit testing framework, iTest, primarily using Java. Analyzed existing Java code to proceed with a refactor that would make the existing code more versatile and adaptable to new devices."
		}		
	]

}

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var projects={
	"projects":[
		{
			"title":"Portfolio",
			"dates":"June 2016-Present",
			"description":" Project to demonsrate my work as a Front-End Web Developer. Technologies used: HTML, CSS, Javascript, and Bootstrap",
			"images":["images/portfolio.png"],
			"url":"https://bosskey59.github.io/Udacity_Projects/Portfolio_Project/index.html"
		},
		{
			"title":"Diamond Weapons Safe",
			"dates":"August 2013 - May 2014",
			"description":"This was my senior design project at Texas A&M. I was responsible for the mechanical design of the project as well as some of the hardware/software design. Technologies used: C, SolidWorks, microcontroller, bluetooth, and TI's Code Composser",
			"images":["images/iso_2_up.PNG", "images/iso_front.jpg"],
			"url":"http://capstone.tamu.edu/Teams/Fall%20'13/XCS/"
		}		
	]

}

projects.display = function() {

    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(projectTitle.replace("#", projects.projects[project].url));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        for (image in projects.projects[project].images){
        	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));	
        }

        	
    }
};

projects.display();

var bio={
	"name":"Alejandro Aguilar Jr.",
	"role":"Front-End Web Engineer",
	"contacts":{
		"mobile":"956-319-0972",
		"email":"alejandro.aguilar.jr@gmail.com",
		"github":"https://github.com/bosskey59",
		"linkedin":"https://www.linkedin.com/in/alejandroaguilarjr",
		"location":"Houston, TX"
	},
	"welcomeMessage":"Hello, this is my online resume and my first project in which I heavily use javascript. Feel free to contact me with any questions or if you need more info.",
	"skills":["HTML","CSS","Javascript","Java","C","Bootstrap"],
	"biopic":"images/headshot.jpg",
}

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var headerName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(headerName);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);


    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(email.replace("#", bio.contacts.email));

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills:last").append(formattedSkill);
    }

    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMessage);

    $("#footerContacts").append(HTMLgitHub.replace("#", bio.contacts.github));
    $("#footerContacts").append(HTMLlinkedIn.replace("#", bio.contacts.linkedin));

};

bio.display();

var education={
	"schools":[
		{
			"name":"Texas A&M",
			"location":"College Station, TX",
			"degree":"B.S",
			"majors":["Electronics Engineering Technology"],
			"dates":"August 2009 - May 2014",
			"url":"https://www.tamu.edu/"
		}
	],
	"onlineCourses":[
		{
			"title":"Front-End Web Development",
			"school":"Udacity",
			"dates":"June 2016 - Present",
			"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

// function that displays college and online course info from education object on the page
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {

        var schoolNameDegree = HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry").append(schoolNameDegree.replace("#", education.schools[i].url));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineClassesStart);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var classTitleSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".onlineClasses-entry").append(classTitleSchool.replace("#", education.onlineCourses[i].url));

        $(".onlineClasses-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
    }
};

education.display();



$("#mapDiv").append(googleMap);

/*
This is empty on purpose! Your code to build the resume will go here.
 */