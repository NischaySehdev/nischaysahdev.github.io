document.getElementById("aboutMe").addEventListener("click", ()=>{
    window.scrollBy(0, document.getElementById("aboutMePage").offsetTop);
})
document.getElementById("work").addEventListener("click", ()=>{
    window.scrollBy(0, document.getElementById("workPage").offsetTop);
})
document.getElementById("project").addEventListener("click", ()=>{
    window.scrollBy(0, document.getElementById("projectPage").offsetTop);
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