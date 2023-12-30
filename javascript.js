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
    if(window.outerHeight>1024){
        return 50;
    }
    else if(window.outerHeight<=1024){
        return 40;
    }
}
document.getElementById("aboutMe").addEventListener("click", ()=>{
    removeResponsiveNavbar(true);
    window.scrollBy(0, document.getElementById("aboutMePage").offsetTop - topMargin);

})
document.getElementById("work").addEventListener("click", ()=>{
    removeResponsiveNavbar(true);
    window.scrollBy(0, document.getElementById("workPage").offsetTop- topMargin*4);
})
document.getElementById("project").addEventListener("click", ()=>{
    removeResponsiveNavbar(true);
    window.scrollBy(0, document.getElementById("projectPage").offsetTop - topMargin/2);
})
document.getElementById("contact").addEventListener("click", ()=>{
    removeResponsiveNavbar(true);
    window.scrollBy(0, document.getElementById("contactPage").offsetTop);
})    
function messageTo() {
    window.location.href = "mailto:nischaysahdevoo8@gmail.com?subject = Feedback&body = Message";
}
document.getElementById("more-projects-button").addEventListener("click", ()=>{
    let projectTable = document.getElementById("projectTable");
    let lastProject = projectTable.children[projectTable.childElementCount-1].children[0].innerHTML;
    let projectId = getProjectId(lastProject);
    while (true) {
        if(projectList.hasOwnProperty(++projectId)){
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
                techStackInnerHtml+="<li class=\"tech\">"+tech+", </li>";
            }); 
            techList.innerHTML = techStackInnerHtml;
            projectStack.appendChild(techList);
            project.appendChild(projectStack);
            projectTable.appendChild(project);
        }else{
            let dialogBox = document.getElementById("dialog");
            dialogBox.children[1].innerHTML = "More projects will be listed very soon.."
            window.dialog.showModal();
            break;
        }
    }
})

document.getElementById("customerManagementSystem").addEventListener("click", ()=>{
    window.location.href = customerManagementSystemLink;
})  
document.getElementById("universityManagementSystem").addEventListener("click", ()=>{
    window.location.href = universityManagementSystemLink;
})  
document.getElementById("ignouAnOfficialApplication").addEventListener("click", ()=>{
    // window.location.href = customerManagementSystemLink;
})  
document.getElementById("messenger").addEventListener("click", ()=>{
    // window.location.href = customerManagementSystemLink;
})  
document.getElementById("movieCatalog").addEventListener("click", ()=>{
    // window.location.href = customerManagementSystemLink;
})  
document.getElementById("keepClone").addEventListener("click", ()=>{
    // window.location.href = customerManagementSystemLink;
})  

// Responsiveness -- Ipad mini
if(window.outerWidth<=820){
aboutMePageContainer.removeChild
aboutMePageContainer.appendChild(aboutMePageTitle);
aboutMePageContainer.appendChild(myPhoto);
aboutMePageContainer.appendChild(aboutMePageContent);
}

function changeJobDescription(index) {
    let dialogBox = document.getElementById("dialog");
    let currentOrganization = document.getElementById("organization-title").children[0].innerHTML;
    let organizationId = Number(getOrganizationId(currentOrganization));
    if(!jobDescription.hasOwnProperty(organizationId+index)){
        if(index == -1){
            dialogBox.children[1].innerHTML = "<b>"+jobDescription[organizationId].title+"</b>"+ " was my first organization.."
        }
        else{
            dialogBox.children[1].innerHTML = "<b>"+jobDescription[organizationId].title+"</b>"+ " is my last organization.."
        }
        window.dialog.showModal();
    }
    else{
        document.getElementById("organization-title").innerHTML = "<a href=\"#\">"+jobDescription[organizationId+index].title+"</a>"+ jobDescription[organizationId+index].duration
        document.getElementById("jobDescriptionPoints").innerHTML = "";
        let jobDescriptionIndex = 1;
        let jobDescriptionPoints = "";
        jobDescription[organizationId+index].description.forEach(point => {
            jobDescriptionPoints += "<li><div class=\"navnumber\">0"+(jobDescriptionIndex++)+".</div>"+point+".</li>"
        });
        document.getElementById("jobDescriptionPoints").innerHTML = jobDescriptionPoints;
    }
}

function getOrganizationId(organizationName) {
    for (let [organizationId, organization] of Object.entries(jobDescription)) {
        if(organization.title == organizationName){
            return organizationId;
        }
    }
}
function getProjectId(lastProject) {
    for (let [id, project] of Object.entries(projectList)) {
        if(project.projectTitle == lastProject){
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
document.getElementById("responsiveNavbar").addEventListener("click",()=>{
    let navbarContainer = document.getElementById("navbarContainer");
    if(!isNavBarShow){
        document.getElementsByClassName("description")[0].setAttribute("class", "blur description");
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
        let aboutMePage = document.getElementById("aboutMe");
        aboutMePage.style.display = "block";
        aboutMePage.style.visibility = "visible"
        aboutMePage.style.float = "left"
        aboutMePage.style.marginTop = "20px"
        aboutMePage.style.fontSize = "1rem"
        let workPage = document.getElementById("work");
        workPage.style.display = "block";
        workPage.style.visibility = "visible"
        workPage.style.float = "left"
        workPage.style.marginTop = "2vh"
        workPage.style.fontSize = "1rem"
        let projectPage = document.getElementById("project");
        projectPage.style.display = "block";
        projectPage.style.visibility = "visible"
        projectPage.style.float = "left"
        projectPage.style.marginTop = "2vh"
        projectPage.style.fontSize = "1rem"
        let contactPage = document.getElementById("contact");
        contactPage.style.display = "block";
        contactPage.style.visibility = "visible"
        contactPage.style.float = "left"
        contactPage.style.marginTop = "2vh"
        contactPage.style.fontSize = "1rem"
        let resumeLink = document.getElementById("resume");
        resumeLink.style.display = "block";
        resumeLink.style.visibility = "visible"
        resumeLink.style.float = "left"
        resumeLink.style.marginTop = "2vh"
        resumeLink.style.fontSize = "1rem"
        socialLinks[0] = document.createElement("li");
        let anchorTag = document.createElement("a");
        anchorTag.innerHTML = "LinkedIn";
        anchorTag.href = linkedInLink;
        anchorTag.style.color = "#51c0a4";
        socialLinks[0].appendChild(anchorTag);
        socialLinks[0].style.fontSize = "1.0rem";
        socialLinks[0].style.color = "#51c0a4";
        socialLinks[0].style.display = "block";
        socialLinks[0].style.float="left";
        socialLinks[0].style.marginTop = "10vh";
        socialLinks[0].style.marginLeft = "21px";
        socialLinks[1] = document.createElement("li");
        let anchorTagGithub = document.createElement("a");
        anchorTagGithub.innerHTML = "GitHub";
        anchorTagGithub.href = githubLink;
        anchorTagGithub.style.color = "#51c0a4";
        socialLinks[1].appendChild(anchorTagGithub);
        socialLinks[1].style.fontSize = "1.0rem";
        socialLinks[1].style.color = "#51c0a4";
        socialLinks[1].style.display = "block";
        socialLinks[1].style.float="left";
        socialLinks[1].style.marginLeft = "21px";
        socialLinks[1].style.marginTop = "2vh";
        socialLinks[2] = document.createElement("li");
        let anchorTagFacebook = document.createElement("a");
        anchorTagFacebook.innerHTML = "Facebook";
        anchorTagFacebook.href = facebookLink;
        anchorTagFacebook.style.color = "#51c0a4";
        socialLinks[2].appendChild(anchorTagFacebook);
        socialLinks[2].style.fontSize = "1.0rem";
        socialLinks[2].style.color = "#51c0a4";
        socialLinks[2].style.display = "block";
        socialLinks[2].style.float="left";
        socialLinks[2].style.marginTop = "2vh";
        socialLinks[2].style.marginLeft = "21px";
        socialLinks[3] = document.createElement("li");
        let anchorTagInstragram = document.createElement("a");
        anchorTagInstragram.innerHTML = "Instagram";
        anchorTagInstragram.href = instagramLink;
        anchorTagInstragram.style.color = "#51c0a4";
        socialLinks[3].appendChild(anchorTagInstragram);
        socialLinks[3].style.fontSize = "1.0rem";
        socialLinks[3].style.color = "#51c0a4";
        socialLinks[3].style.display = "block";
        socialLinks[3].style.float="left";
        socialLinks[3].style.marginLeft = "21px";
        socialLinks[3].style.marginTop = "2vh";
        socialLinks[4] = document.createElement("li");
        let anchorTagTwitter = document.createElement("a");
        anchorTagTwitter.innerHTML = "Twitter";
        anchorTagTwitter.href = instagramLink;
        anchorTagTwitter.style.color = "#51c0a4";
        socialLinks[4].appendChild(anchorTagTwitter);
        socialLinks[4] = document.createElement("li");
        socialLinks[4].style.fontSize = "1.0rem";
        socialLinks[4].style.color = "#51c0a4";
        socialLinks[4].style.display = "block";
        socialLinks[4].style.float="left";
        socialLinks[4].style.marginLeft = "21px";
        socialLinks[4].style.marginTop = "2vh";
        document.getElementById("navlinkContainerList").appendChild(socialLinks[0]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[1]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[2]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[3]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[4]);
    }
    else{
        isNavBarShow = false
        document.getElementById("container").removeAttribute("class");
        let navLink = document.getElementById("aboutMe");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("work");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("project");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("contact");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("resume");
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
        document.getElementsByClassName("description")[0].setAttribute("class", "description");
        document.getElementsByClassName("TwoRowGrid")[0].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[1].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[2].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("loadbutton")[0].setAttribute("class", "loadbutton");
        document.getElementsByClassName("FourRowGrid")[0].setAttribute("class", "FourRowGrid");
    }
});

document.getElementById("container").addEventListener("click", function(event) {
    let willNavbarBeShown = event.clientX<document.getElementById("navbarContainer").offsetLeft; 
    removeResponsiveNavbar(willNavbarBeShown);
});

function removeResponsiveNavbar(willNavbarBeShown) {
    if(isNavBarShow && willNavbarBeShown){  
        document.getElementById("frontPage").style.zIndex = 1
        isNavBarShow = false;
        document.getElementById("container").removeAttribute("class");
        let navLink = document.getElementById("aboutMe");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("work");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("project");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("contact");
        navLink.style.display = "inline";
        navLink.style.visibility = "hidden"
        navLink = document.getElementById("resume");
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
        document.getElementsByClassName("description")[0].setAttribute("class", "description");
        document.getElementsByClassName("TwoRowGrid")[0].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[1].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[2].setAttribute("class", "TwoRowGrid");
        document.getElementsByClassName("loadbutton")[0].setAttribute("class", "loadbutton");
        document.getElementsByClassName("FourRowGrid")[0].setAttribute("class", "FourRowGrid");
    } 
}
