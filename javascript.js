const customerManagementSystemLink = "https://github.com/NischaySehdev/CustomerManagementSystem";
const universityManagementSystemLink = "https://github.com/NischaySehdev/UniversityManagementSystem";
const aboutMePageContent = document.getElementById("aboutMePageContent");
const myPhoto = document.getElementById("photo");
const aboutMePageTitle = document.getElementById("aboutMePageTitle");
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
    window.scrollBy(0, document.getElementById("aboutMePage").offsetTop - topMargin);
})
document.getElementById("work").addEventListener("click", ()=>{
    window.scrollBy(0, document.getElementById("workPage").offsetTop- topMargin*4);
})
document.getElementById("project").addEventListener("click", ()=>{
    window.scrollBy(0, document.getElementById("projectPage").offsetTop - topMargin/2);
})
document.getElementById("contact").addEventListener("click", ()=>{
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

document.getElementById("organization-button-next").addEventListener("click", ()=>{
    changeJobDescription(1)    
})
document.getElementById("organization-button-previous").addEventListener("click", ()=>{
    changeJobDescription(-1)
})

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
    dialogBox.style.marginRight = "100px"; 
    dialogBox.children[1].innerText = "Test only";
    window.dialog.showModal();
}
document.getElementById("responsiveNavbar").addEventListener("click",()=>{
    let navbarContainer = document.getElementById("navbarContainer");
    if(navbarContainer.style.height != "420px"){
        document.getElementsByClassName("description")[0].setAttribute("class", "blur description");
        document.getElementsByClassName("TwoRowGrid")[0].setAttribute("class", "blur TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[1].setAttribute("class", "blur TwoRowGrid");
        document.getElementsByClassName("TwoRowGrid")[2].setAttribute("class", "blur TwoRowGrid");
        document.getElementsByClassName("loadbutton")[0].setAttribute("class", "blur loadbutton");
        document.getElementsByClassName("FourRowGrid")[0].setAttribute("class", "blur FourRowGrid");
        navbarContainer.style.visibility = "visible"
        navbarContainer.style.width = "120px";
        navbarContainer.style.height = "420px";
        navbarContainer.style.float = "right"
        navbarContainer.style.marginLeft = "900px"
        navbarContainer.style.display = "grid";
        navbarContainer.style.marginTop = "0vh"
        navbarContainer.style.marginLeft = "255px"
        navbarContainer.style.backgroundColor = "#051936"
        navbarContainer.style.justifyContent = "center"
        navbarContainer.style.zIndex = "1"
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
        let navLink = document.getElementById("aboutMe");
        navLink.style.display = "block";
        navLink.style.visibility = "visible"
        navLink.style.float = "left"
        navLink.style.marginTop = "20px"
        navLink.style.fontSize = "1rem"
        navLink = document.getElementById("work");
        navLink.style.display = "block";
        navLink.style.visibility = "visible"
        navLink.style.float = "left"
        navLink.style.marginTop = "2vh"
        navLink.style.fontSize = "1rem"
        navLink = document.getElementById("project");
        navLink.style.display = "block";
        navLink.style.visibility = "visible"
        navLink.style.float = "left"
        navLink.style.marginTop = "2vh"
        navLink.style.fontSize = "1rem"
        navLink = document.getElementById("contact");
        navLink.style.display = "block";
        navLink.style.visibility = "visible"
        navLink.style.float = "left"
        navLink.style.marginTop = "2vh"
        navLink.style.fontSize = "1rem"
        navLink = document.getElementById("resume");
        navLink.style.display = "block";
        navLink.style.visibility = "visible"
        navLink.style.float = "left"
        navLink.style.marginTop = "2vh"
        navLink.style.fontSize = "1rem"
        socialLinks[0] = document.createElement("li");
        socialLinks[0].style.fontSize = "1.0rem";
        socialLinks[0].style.color = "#51c0a4";
        socialLinks[0].style.display = "block";
        socialLinks[0].style.float="left";
        socialLinks[0].style.marginTop = "10vh";
        socialLinks[0].style.marginLeft = "21px";
        socialLinks[0].innerText = "LinkedIn"
        socialLinks[1] = document.createElement("li");
        socialLinks[1].style.fontSize = "1.0rem";
        socialLinks[1].style.color = "#51c0a4";
        socialLinks[1].style.display = "block";
        socialLinks[1].style.float="left";
        socialLinks[1].style.marginLeft = "21px";
        socialLinks[1].style.marginTop = "2vh";
        socialLinks[1].innerText = "Github"
        socialLinks[2] = document.createElement("li");
        socialLinks[2].style.fontSize = "1.0rem";
        socialLinks[2].style.color = "#51c0a4";
        socialLinks[2].style.display = "block";
        socialLinks[2].style.float="left";
        socialLinks[2].style.marginTop = "2vh";
        socialLinks[2].style.marginLeft = "21px";
        socialLinks[2].innerText = "Facebook"
        socialLinks[3] = document.createElement("li");
        socialLinks[3].style.fontSize = "1.0rem";
        socialLinks[3].style.color = "#51c0a4";
        socialLinks[3].style.display = "block";
        socialLinks[3].style.float="left";
        socialLinks[3].style.marginLeft = "21px";
        socialLinks[3].style.marginTop = "2vh";
        socialLinks[3].innerText = "Instagram"
        socialLinks[4] = document.createElement("li");
        socialLinks[4].style.fontSize = "1.0rem";
        socialLinks[4].style.color = "#51c0a4";
        socialLinks[4].style.display = "block";
        socialLinks[4].style.float="left";
        socialLinks[4].style.marginLeft = "21px";
        socialLinks[4].style.marginTop = "2vh";
        socialLinks[4].innerText = "Twitter"
        // document.getElementById("navbarContainer").setAttribute("class", "unblur");
        // console.log(document.getElementById("navbarContainer"));
        document.getElementById("navlinkContainerList").appendChild(socialLinks[0]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[1]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[2]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[3]);
        document.getElementById("navlinkContainerList").appendChild(socialLinks[4]);
    }
    else{
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


