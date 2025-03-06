

/* Event Listeners for Project List, Skill List, and Current Date */
document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("projectList");
    const skillsList = document.getElementById("skillsList");
    const currentDate = document.getElementById("currentDate");
});

/* Project Array */
/**  Consists of 
* stdate (Project Starting Date)
* endate (Project End Date)
* title
* desc (Include link if published on github)
*/

const projects = [
    { stdate: "December 20, 2024", endate: "May 9, 2024", title: "Proposed Website for J and P Pares and Mami", desc: "A website made for J & P Pares and Mami for completion of requirements for graduation in Senior High School using HTML, CSS and Javascript. A collaboration done with other thesis group members (https://www.github.com/gmaria260/J-P-Home)"},
    { stdate: "February 20, 2025", endate: "February 20,2025", title: "Random Quote Generator", desc: "Generate random quotes from various historical individuals and writers (https://gmaria260.github.io/random_quote.gen/)." },
    { stdate: "March 3, 2025", endate: "March 6,2025", title: "Porfolio Website", desc: "Personal Portfolio website that includes projects and skills(https://gmaria260.github.io/random_quote.gen/)." },
    { stdate: "October 21, 2025", endate: "October 25, 2025", title: "To-Do List App", desc: "A simple task management app that shows a list of kept things to do with Local Storage support."},
    { stdate: "December 21, 2025", endate: "December 30, 2025", title: "Calculator", desc: "A basic arithmetic calculator built with HTML, CSS, and JavaScript."},
];


/* Creates each corresponding html element for each part of the projects */

projects.forEach((project, index) => {
    const li = document.createElement("li");
    const title = document.createElement("em");
    title.textContent = project.title;
    

    const button = document.createElement("button");
    button.textContent = "Read More";
    button.className = "showDesc";
    button.setAttribute("data-index", index);
    /*Code above attaches the data from the array to the elements */

    const desc = document.createElement("p");
    desc.textContent = project.desc;
    desc.className = "project-description";
    desc.style.display = "none";
    desc.id = "desc-" + index;

    const hr = document.createElement("hr");
    hr.id = "pr-hr";

    const stdate = document.createElement("u");
    stdate.textContent = "Project Start Date: " + project.stdate;
    stdate.className = "start-date";
    stdate.style.display = "none";
    stdate.id  = "stdate-"+ index;

    const endate = document.createElement("u");
    endate.textContent = "Project End Date: " + project.endate;
    endate.className = "end-date";
    endate.style.display = "none";
    endate.id  = "endate-"+ index;



    /* Appends all elements above to list element. Elements are displayed in this order*/
    li.appendChild(button);
    li.appendChild(title);
    li.appendChild(stdate);
    li.appendChild(endate);
    li.appendChild(desc);
    li.appendChild(hr);
    projectList.appendChild(li);
});

/* Allows the description elements to be displayed if button is clicked */

document.querySelectorAll(".showDesc").forEach(button => {
    button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        const stdate = document.getElementById("stdate-" + index);
        const endate = document.getElementById("endate-" + index);
        const desc = document.getElementById("desc-" + index);
        
     

        desc.style.display = desc.style.display === "none" ? "block" : "none";
        stdate.style.display = stdate.style.display === "none" ? "block" : "none";
        endate.style.display = endate.style.display === "none" ? "block" : "none";
        
        
        
        this.textContent = desc.style.display === "none" ? "Read More" : "Read Less";

    });
});



//For skills
const skills = [
    "Experienced in HTML",
    "Experienced in CSS",
    "Intermediate Knowledge in Javascript",
    "Experienced in Responsive Design",
    "Experienced in Graphic Design",
    "Rudimentary Knowledge on Apex Oracle",

];

const skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

//For contact form validation


    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                formMessage.textContent = "Thank you for your message!";
                formMessage.style.color = "green";
                contactForm.reset();
            } else {
                formMessage.textContent = "Please fill out all fields.";
                formMessage.style.color = "red";
            }
        });
    }


 /*Toggles Dark Mode, displays "Toggle Light Mode if it currently Dark Mode"*/

function toggleDarkMode() {
   document.body.classList.toggle("dark-mode");

   if  (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Toggle Light Mode";
} else {
    themeToggle.textContent = "Toggle Dark Mode";
}
}


/* Gets current date on System Locale */
const date = new Date();
currentDate.textContent = date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
});


