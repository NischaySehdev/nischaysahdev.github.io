const customerManagementSystemLink = "https://github.com/NischaySehdev/CustomerManagementSystem";
const universityManagementSystemLink = "https://github.com/NischaySehdev/UniversityManagementSystem";
const aboutMePageContent = document.getElementById("aboutMePageContent");
const myPhoto = document.getElementById("photo");
const aboutMePageTitle = document.getElementById("aboutMePageTitle");
let aboutMePageContainer = document.getElementById("aboutMePage");
let topMargin = calculateMargin();
function calculateMargin() {
    if(window.outerHeight>1024){
        return 90;
    }
    else if(window.outerHeight<=1024){
        return 65;
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

document.getElementById("organization-button-next").addEventListener("click", ()=>{
    alert("Not next organization");
})

document.getElementById("more-projects-button").addEventListener("click", ()=>{
    alert("Currently, no further projects");
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

