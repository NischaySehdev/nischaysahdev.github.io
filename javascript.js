const customerManagementSystemLink = "https://github.com/NischaySehdev/CustomerManagementSystem";
const universityManagementSystemLink = "https://github.com/NischaySehdev/UniversityManagementSystem";
const aboutMePageContent = document.getElementById("aboutMePageContent");
const myPhoto = document.getElementById("photo");
const aboutMePageTitle = document.getElementById("aboutMePageTitle");
const githubLink = "https://github.com/NischaySehdev";
const facebookLink = "https://www.facebook.com/nischay.sehdev";
const instagramLink = "https://www.instagram.com/nischay_sehdev/";
const linkedInLink = "https://www.linkedin.com/in/nischay-sehdev";
const twitterLink = "https://twitter.com/SehdevNischay";
let isNavBarShow = false;
let aboutMePageContainer = document.getElementById("aboutMePage");
let topMargin = calculateMargin();
let jobDescription = "";
let projectList = "";
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonData = JSON.parse(this.responseText);
        jobDescription = jsonData.worKExperience;
        projectList = jsonData.projectList;
    }
}
httpRequest.open("GET", "php/getData.php", true);
httpRequest.send();
function calculateMargin() {
    if (window.outerHeight > 1024) {
        return 50;
    }
    else if (window.outerHeight <= 1024) {
        return 40;
    }
}
document.getElementById("aboutMeNavLink").addEventListener("click", () => {
    removeresponsiveNavbarImage(true);
    window.scrollBy(0, document.getElementById("aboutMePage").offsetTop - topMargin);

})
document.getElementById("workNavLink").addEventListener("click", () => {
    removeresponsiveNavbarImage(true);
    window.scrollBy(0, document.getElementById("workPage").offsetTop - topMargin);
})
document.getElementById("projectNavLink").addEventListener("click", () => {
    removeresponsiveNavbarImage(true);
    window.scrollBy(0, document.getElementById("projectPage").offsetTop - topMargin);
})
document.getElementById("contactNavLink").addEventListener("click", () => {
    removeresponsiveNavbarImage(true);
    window.scrollBy(0, document.getElementById("contactPage").offsetTop);
})
function messageTo() {
    window.location.href = "mailto:nischaysahdevoo8@gmail.com?subject = Feedback&body = Message";
}
document.getElementById("more-projects-button").addEventListener("click", () => {
    let projectTable = document.getElementById("projectTable");
    let lastProject = projectTable.children[projectTable.childElementCount - 1].children[0].innerHTML;
    let projectId = getProjectId(lastProject);
    while (true) {
        if (projectList.hasOwnProperty(++projectId)) {
            let project = document.createElement('div');
            project.className = "project";
            project.id = projectList[projectId].projectTitle;
            let projectTitle = document.createElement("div");
            projectTitle.className = "projectTitle";
            projectTitle.innerText = projectList[projectId].projectTitle;
            project.appendChild(projectTitle);
            let projectDescription = document.createElement("div");
            projectDescription.className = "projectDescription";
            projectDescription.innerText = projectList[projectId].projectDescription;
            console.log(projectList[projectId]);
            project.appendChild(projectDescription);
            let projectStack = document.createElement("div");
            let techList = document.createElement("ul");
            let techStack = projectList[projectId].projectTechStack;
            techStack = techStack.split(", ");
            let techStackInnerHtml = "";
            techStack.forEach(tech => {
                techStackInnerHtml += "<li class=\"tech\">" + tech + ", </li>";
            });
            techList.innerHTML = techStackInnerHtml;
            projectStack.appendChild(techList);
            project.appendChild(projectStack);
            projectTable.appendChild(project);
        } else {
            let dialogBox = document.getElementById("dialog");
            dialogBox.children[1].innerHTML = "More projects will be listed very soon.."
            window.dialog.showModal();
            break;
        }
    }
})

document.getElementById("customerManagementSystemTitle").addEventListener("click", () => {
    window.location.href = customerManagementSystemLink;
})
document.getElementById("universityManagementSystemTitle").addEventListener("click", () => {
    window.location.href = universityManagementSystemLink;
})
document.getElementById("ignouAnOfficialApplicationTitle").addEventListener("click", () => {
    // window.location.href = customerManagementSystemLink;
})
document.getElementById("messengerTitle").addEventListener("click", () => {
    // window.location.href = customerManagementSystemLink;
})
document.getElementById("keepCloneTitle").addEventListener("click", () => {
    // window.location.href = customerManagementSystemLink;
})
document.getElementById("movieCatalogTitle").addEventListener("click", () => {
    // window.location.href = customerManagementSystemLink;
})

// Responsiveness -- Ipad mini
if (window.outerWidth <= 820) {
    aboutMePageContainer.removeChild
    aboutMePageContainer.appendChild(aboutMePageTitle);
    aboutMePageContainer.appendChild(aboutMePageContent);
}

function changeJobDescription(index) {
    let dialogBox = document.getElementById("dialog");
    let currentOrganization = document.getElementById("organization-title").children[0].innerHTML;
    let organizationId = Number(getOrganizationId(currentOrganization));
    if (!jobDescription.hasOwnProperty(organizationId + index)) {
        if (index == -1) {
            dialogBox.children[1].innerHTML = "<b>" + jobDescription[organizationId].title + "</b>" + " was my first organization.."
        }
        else {
            dialogBox.children[1].innerHTML = "<b>" + jobDescription[organizationId].title + "</b>" + " is my last organization.."
        }
        window.dialog.showModal();
    }
    else {
        document.getElementById("organization-title").innerHTML = "<a href=\"#\">" + jobDescription[organizationId + index].title + "</a>" + jobDescription[organizationId + index].duration
        document.getElementById("jobDescriptionPoints").innerHTML = "";
        let jobDescriptionIndex = 1;
        let jobDescriptionPoints = "";
        jobDescription[organizationId + index].description.forEach(point => {
            jobDescriptionPoints += "<li><div class=\"navnumber\">0" + (jobDescriptionIndex++) + ".</div>" + point + ".</li>"
        });
        document.getElementById("jobDescriptionPoints").innerHTML = jobDescriptionPoints;
    }
}

function getOrganizationId(organizationName) {
    for (let [organizationId, organization] of Object.entries(jobDescription)) {
        if (organization.title == organizationName) {
            return organizationId;
        }
    }
}
function getProjectId(lastProject) {
    for (let [id, project] of Object.entries(projectList)) {
        if (project.projectTitle == lastProject) {
            return id;
        }
    }
}
function closeDialog() {
    window.dialog.close();
}

function clickOnNavbar() {
    let dialogBox = document.getElementById("dialog");
    // dialogBox.style.marginRight = "100px"; 
    dialogBox.children[1].innerText = "Test only";
    window.dialog.showModal();
}
document.getElementById("responsiveNavbarImage").addEventListener("click", () => {
    let navbarContainer = document.getElementById("navbarContainer");
    if (!isNavBarShow) {
        document.getElementsByClassName("frontPageContent")[0].setAttribute("class", "blur frontPageContent");
        document.getElementsByClassName("TwoRowGrid")[0].setAttribute("class", "blur TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[1].setAttribute("class", "blur TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[2].setAttribute("class", "blur TwoRowGrid");
        document.getElementsByClassName("loadbutton")[0].setAttribute("class", "blur loadbutton");
        document.getElementsByClassName("FourRowGrid")[0].setAttribute("class", "blur FourRowGrid");
        navbarContainer.style.visibility = "visible"
        navbarContainer.style.width = "35vw";
        isNavBarShow = true;
        navbarContainer.style.height = "70vh";
        navbarContainer.style.float = "right"
        navbarContainer.style.display = "grid";
        navbarContainer.style.marginLeft = "235px"
        navbarContainer.style.justifyContent = "center"
        navbarContainer.style.zIndex = 10
        navbarContainer.style.position = "absolute"
        navbarContainer.style.borderColor = "white"
        navbarContainer.style.borderWidth = "1px"
        navbarContainer.style.borderStyle = "solid"
        let navLinkNumberList = document.getElementsByClassName("navnumber")
        navLinkNumberList[0].style.visibility = "hidden";
        navLinkNumberList[1].style.visibility = "hidden";
        navLinkNumberList[2].style.visibility = "hidden";
        navLinkNumberList[3].style.visibility = "hidden";
        navLinkNumberList[4].style.visibility = "hidden";
        let aboutMePage = document.getElementById("aboutMeNavLink");
        aboutMePage.style.display = "block";
        aboutMePage.style.visibility = "visible"
        aboutMePage.style.float = "left"
        aboutMePage.style.marginTop = "20px"
        aboutMePage.style.fontSize = "1rem"
        let workPage = document.getElementById("workNavLink");
        workPage.style.display = "block";
        workPage.style.visibility = "visible"
        workPage.style.float = "left"
        workPage.style.marginTop = "2vh"
        workPage.style.fontSize = "1rem"
        let projectPage = document.getElementById("projectNavLink");
        projectPage.style.display = "block";
        projectPage.style.visibility = "visible"
        projectPage.style.float = "left"
        projectPage.style.marginTop = "2vh"
        projectPage.style.fontSize = "1rem"
        let contactPage = document.getElementById("contactNavLink");
        contactPage.style.display = "block";
        contactPage.style.visibility = "visible"
        contactPage.style.float = "left"
        contactPage.style.marginTop = "2vh"
        contactPage.style.fontSize = "1rem"
        let resumeLink = document.getElementById("resumeNavLink");
        resumeLink.style.display = "block";
        resumeLink.style.visibility = "visible"
        resumeLink.style.float = "left"
        resumeLink.style.marginTop = "2vh"
        resumeLink.style.fontSize = "1rem"
        socialLinksContainer[0] = document.createElement("li");
        let anchorTag = document.createElement("a");
        anchorTag.innerHTML = "LinkedIn";
        anchorTag.href = linkedInLink;
        anchorTag.style.color = "#51c0a4";
        socialLinksContainer[0].appendChild(anchorTag);
        socialLinksContainer[0].style.fontSize = "1.0rem";
        socialLinksContainer[0].style.color = "#51c0a4";
        socialLinksContainer[0].style.display = "block";
        socialLinksContainer[0].style.float = "left";
        socialLinksContainer[0].style.marginTop = "10vh";
        socialLinksContainer[0].style.marginLeft = "21px";
        socialLinksContainer[1] = document.createElement("li");
        let anchorTagGithub = document.createElement("a");
        anchorTagGithub.innerHTML = "GitHub";
        anchorTagGithub.href = githubLink;
        anchorTagGithub.style.color = "#51c0a4";
        socialLinksContainer[1].appendChild(anchorTagGithub);
        socialLinksContainer[1].style.fontSize = "1.0rem";
        socialLinksContainer[1].style.color = "#51c0a4";
        socialLinksContainer[1].style.display = "block";
        socialLinksContainer[1].style.float = "left";
        socialLinksContainer[1].style.marginLeft = "21px";
        socialLinksContainer[1].style.marginTop = "2vh";
        socialLinksContainer[2] = document.createElement("li");
        let anchorTagFacebook = document.createElement("a");
        anchorTagFacebook.innerHTML = "Facebook";
        anchorTagFacebook.href = facebookLink;
        anchorTagFacebook.style.color = "#51c0a4";
        socialLinksContainer[2].appendChild(anchorTagFacebook);
        socialLinksContainer[2].style.fontSize = "1.0rem";
        socialLinksContainer[2].style.color = "#51c0a4";
        socialLinksContainer[2].style.display = "block";
        socialLinksContainer[2].style.float = "left";
        socialLinksContainer[2].style.marginTop = "2vh";
        socialLinksContainer[2].style.marginLeft = "21px";
        socialLinksContainer[3] = document.createElement("li");
        let anchorTagInstragram = document.createElement("a");
        anchorTagInstragram.innerHTML = "Instagram";
        anchorTagInstragram.href = instagramLink;
        anchorTagInstragram.style.color = "#51c0a4";
        socialLinksContainer[3].appendChild(anchorTagInstragram);
        socialLinksContainer[3].style.fontSize = "1.0rem";
        socialLinksContainer[3].style.color = "#51c0a4";
        socialLinksContainer[3].style.display = "block";
        socialLinksContainer[3].style.float = "left";
        socialLinksContainer[3].style.marginLeft = "21px";
        socialLinksContainer[3].style.marginTop = "2vh";
        socialLinksContainer[4] = document.createElement("li");
        let anchorTagTwitter = document.createElement("a");
        anchorTagTwitter.innerHTML = "Twitter";
        anchorTagTwitter.href = instagramLink;
        anchorTagTwitter.style.color = "#51c0a4";
        socialLinksContainer[4].appendChild(anchorTagTwitter);
        socialLinksContainer[4] = document.createElement("li");
        socialLinksContainer[4].style.fontSize = "1.0rem";
        socialLinksContainer[4].style.color = "#51c0a4";
        socialLinksContainer[4].style.display = "block";
        socialLinksContainer[4].style.float = "left";
        socialLinksContainer[4].style.marginLeft = "21px";
        socialLinksContainer[4].style.marginTop = "2vh";
        document.getElementById("navlinkContainerList").appendChild(socialLinksContainer[0]);
        document.getElementById("navlinkContainerList").appendChild(socialLinksContainer[1]);
        document.getElementById("navlinkContainerList").appendChild(socialLinksContainer[2]);
        document.getElementById("navlinkContainerList").appendChild(socialLinksContainer[3]);
        document.getElementById("navlinkContainerList").appendChild(socialLinksContainer[4]);
    }
    else {
        isNavBarShow = false
        document.getElementById("container").removeAttribute("class");
        let navLink = document.getElementById("aboutMeNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("workNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("projectNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("contactNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("resumeNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navbarContainer.style.width = "";
        navbarContainer.style.height = "";
        navbarContainer.style.backgroundColor = ""
        let childNodes = document.getElementById("navlinkContainerList").childNodes;
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        navbarContainer.style.visibility = "hidden"
        document.getElementsByClassName("frontPageContent")[0].setAttribute("class", "frontPageContent");
        document.getElementsByClassName("TwoRowGrid")[0].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[1].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[2].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("loadbutton")[0].setAttribute("class", "loadbutton");
        document.getElementsByClassName("FourRowGrid")[0].setAttribute("class", "FourRowGrid");
    }
});

document.getElementById("container").addEventListener("click", function (event) {
    let willNavbarBeShown = event.clientX < document.getElementById("navbarContainer").offsetLeft;
    removeresponsiveNavbarImage(willNavbarBeShown);
});

function removeresponsiveNavbarImage(willNavbarBeShown) {
    if (isNavBarShow && willNavbarBeShown) {
        document.getElementById("frontPageBanner").style.zIndex = 1
        isNavBarShow = false;
        document.getElementById("container").removeAttribute("class");
        let navLink = document.getElementById("aboutMeNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("workNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("projectNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("contactNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("resumeNavLink");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navbarContainer.style.width = "";
        navbarContainer.style.height = "";
        navbarContainer.style.backgroundColor = ""
        let childNodes = document.getElementById("navlinkContainerList").childNodes;
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        document.getElementById("navlinkContainerList").removeChild(document.getElementById("navlinkContainerList").lastChild);
        navbarContainer.style.visibility = "hidden"
        document.getElementsByClassName("frontPageContent")[0].setAttribute("class", "frontPageContent");
        document.getElementsByClassName("TwoRowGrid")[0].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[1].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[2].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("loadbutton")[0].setAttribute("class", "loadbutton");
        document.getElementsByClassName("FourRowGrid")[0].setAttribute("class", "FourRowGrid");
    }
}
// Animations
let iconImages = document.getElementsByClassName("iconImage");
for (const iconImage of iconImages) {
    iconImage.addEventListener("mouseenter", () => {
        iconImage.className = "slide-top";
        setTimeout('', 5000);
    })
    iconImage.addEventListener("mouseleave", () => {
        iconImage.className = "";
        setTimeout('', 5000);
    })
}

let projectTitles = document.getElementsByClassName("projectTitle");
for (const projectTitle of projectTitles) {
    projectTitle.addEventListener("mouseenter", () => {
        projectTitle.classList.toggle("slide-top");
        setTimeout('', 5000);
    })
    projectTitle.addEventListener("mouseleave", () => {
        projectTitle.classList.toggle("slide-top");
        setTimeout('', 5000);
    })
}
let navLinks = ["#aboutMeNavLink", "#workNavLink", "#projectNavLink", "#contactNavLink", "#resumeNavLink"];
for (const navLink of navLinks) {
    let navLinkELement = document.querySelector(navLink);
    navLinkELement.addEventListener("mouseenter", () => {
        navLinkELement.classList.toggle("slide-top");
        setTimeout('', 5000);
    })
    console.log(navLinkELement.classList);

    navLinkELement.addEventListener("mouseleave", () => {
        setTimeout('', 5000);
        navLinkELement.classList.toggle("slide-top");
    })
}

document.getElementById("websiteURlSideBar").addEventListener("mouseenter", () => {
    document.getElementById("websiteURlSideBar").className = "slide-top";
})

document.getElementById("websiteURlSideBar").addEventListener("mouseleave", () => {
    document.getElementById("websiteURlSideBar").className = "";
})

document.getElementById("organization-title").addEventListener("mouseenter", () => {
    document.getElementById("organization-title").className = "slide-top";
})
document.getElementById("organization-title").addEventListener("mouseleave", () => {
    document.getElementById("organization-title").className = "";
})

document.getElementById("organization-title").addEventListener("mouseenter", () => {
    document.getElementById("organization-title").className = "slide-top";
})
document.getElementById("organization-title").addEventListener("mouseleave", () => {
    document.getElementById("organization-title").className = "";
})


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }

        else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();
let loadMoreContentMap = {
    "loadMoreContentCMS": ["customerManagementSystemDescription", "customerManagementSystemTitle", "customerManagementSystemProjectStack", "customerManagementSystem"],
    "loadMoreContentUMS": ["universityManagementSystemDescription", "universityManagementSystemTitle", "universityManagementSystemProjectStack", "universityManagementSystem"],
    "loadMoreContentIGNOU": ["ignouAnOfficialApplicationDescription", "ignouAnOfficialApplicationTitle", "customerManagementSystemProjectStack", "ignouAnOfficialApplication"],
    "loadMoreContentMessenger": ["messengerDescription", "messengerTitle", "messengerProjectStack", "messenger"],
    "loadMoreContentKeepClone": ["keepCloneDescription", "keepCloneTitle", "keepCloneProjectStack", "keepClone"],
    "loadMoreContentMovieCatalog": ["movieCatalogDescription", "movieCatalogTitle", "movieCatalogProjectStack", "movieCatalog"]
}

function addSlideTopAnimation(loadMoreContentButtonId) {
    document.getElementById(loadMoreContentButtonId).addEventListener("mouseenter", () => {
        document.getElementById(loadMoreContentButtonId).classList.toggle("slide-top");
    })
    document.getElementById(loadMoreContentButtonId).addEventListener("mouseleave", () => {
        document.getElementById(loadMoreContentButtonId).classList.toggle("slide-top")
    })
}