import projectsData from "../Data/projects.js";
import intersData from "../Data/inter.js";

var popup_id = -1;
var imageIndex = 0;


function slideshowClicked(direction) {

    let slides = document.getElementsByClassName("slideshow-image");

    if (slides.length == 0) {
        return;
    }

    let currImage = slides[imageIndex];
    currImage.classList.add("slide-hidden");

    // will need to fix this logic to not go beyond the limits

    // forwards
    if (direction === 1) {
        if (imageIndex + 1 === slides.length) {
            imageIndex = 0;
        } else {
            imageIndex++;
        }
    } else {
        // backwards
        if (imageIndex - 1 === -1) {
            imageIndex = slides.length - 1;
        } else {
            imageIndex--;
        }
    }

    currImage = slides[imageIndex];
    currImage.classList.remove("slide-hidden");

}

export function openPopup(project_id) {
    // if (popup_id != -1) {
    //     console.log("ERROR: popup_id was non-negative - two popups were clicked");
    //     return;
    // }

    let currData = projectsData.data.projects;
    let temp_project_id = project_id;

    if (temp_project_id <= currData.length) {
    } else {
        temp_project_id = temp_project_id - currData.length;
        currData = intersData.data.inters;
    }

    popup_id = project_id;

    let project = currData[temp_project_id - 1];

    // create close link 
    let projectPopupCloser = document.createElement('a');
    projectPopupCloser.className = "project--popup--x";
    projectPopupCloser.innerHTML = "x";
    projectPopupCloser.onclick = function () { closePopup() };

    // create image
    let projectTV = document.createElement('img');
    projectTV.src = '/Images/transparent-tv.png';
    projectTV.className = 'project--popup--tv';

    // create the slideshow
    let projectTVImage = document.createElement('div');
    projectTVImage.id = "project--tv--frame";
    projectTVImage.className = "slideshow-container"

    for (let i = 0; i < project.gallery.length; i++) {
        let imageDiv = document.createElement('div');
        imageDiv.className = "slideshow-slide";

        // insert the image
        let imageFile = document.createElement('img');
        if (project.gallery[i] == "") {
            imageFile.src = '/Images/tv-static.png'
        } else {
            imageFile.src = '/Images/' + project.gallery[i];
        }
        imageFile.addEventListener("error", function (event) {
            event.target.src = "/Images/tv-static.png";
            event.target.onerror = null;
        })
        imageFile.alt = 'A tv displaying ' + project.shortDescription;
        if (i == 0) {
            imageFile.className = "slideshow-image";
        } else {
            imageFile.className = "slideshow-image slide-hidden";
        }

        imageDiv.appendChild(imageFile);
        projectTVImage.appendChild(imageDiv);
    }

    // // create title
    // let projectPopupTitle = document.createElement('h1');
    // projectPopupTitle.className = "project--popup--title";
    // projectPopupTitle.innerHTML = project.shortTitle;

    // create the arrows
    let arrowBackwards = document.createElement('a');
    arrowBackwards.className = "button arrow-button";
    arrowBackwards.innerHTML = '<p>&#8592;</p>';
    arrowBackwards.onclick = function () { slideshowClicked(0) };

    let arrowForwards = document.createElement('a');
    arrowForwards.className = "button arrow-button";
    arrowForwards.innerHTML = '<p>&#8594;</p>';
    arrowForwards.onclick = function () { slideshowClicked(1) };

    let arrows = document.createElement('div');
    arrows.className = "arrow-buttons";
    arrows.appendChild(arrowBackwards);
    arrows.appendChild(arrowForwards);

    // create larger div
    let projectPopup = document.createElement('div');
    projectPopup.id = "project--popup";

    // create the view button
    if (project.siteLink != null) {
        let projectSiteButton = document.createElement('a');
        projectSiteButton.className = "button project--button";
        projectSiteButton.innerHTML = "<p>Go To Website</p>";
        projectSiteButton.href = project.siteLink;
        projectPopup.appendChild(projectSiteButton);
    }

    // append the children to the larger div
    projectPopup.appendChild(projectPopupCloser);
    projectPopup.appendChild(arrows);
    // projectPopup.appendChild(projectPopupTitle);
    projectPopup.appendChild(projectTV);
    projectPopup.appendChild(projectTVImage);


    // stop the page scrolling
    document.getElementById("body").className = "blocked";

    // add them to the popup div
    document.getElementById("popup").appendChild(projectPopup);

}

export function closePopup() {
    document.getElementById("body").className = "";

    let projectToClose = document.getElementById("project--popup");
    document.getElementById("popup").removeChild(projectToClose);
    popup_id = -1;



}