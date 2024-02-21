import projectsData from "../Data/projects.js";
import intersData from "../Data/inter.js";
const pjData = projectsData.data.projects
const inData = intersData.data.inters

const projectsDiv = document.getElementById('projects');
const intersDiv = document.getElementById('inters');

const sectionsDiv = [projectsDiv, intersDiv];
const sectionsData = [pjData, inData];

for (var s = 0; s < sectionsDiv.length; s++) {
    var sectionSingle = sectionsDiv[s];
    var dataSingle = sectionsData[s];

    for (var i = 0; i < dataSingle.length; i++) {
        var pjSingle = dataSingle[i];
        // Create the text
        var projectText = document.createElement('div');
        projectText.className = 'project--text';
        projectText.innerHTML = '<h5>' + pjSingle.shortTitle + '</h5> <p>' +
            pjSingle.description + '</p>';

        // Create the image
        var image = document.createElement('img');
        if (pjSingle.heroImage == "") {
            image.src = '/Images/tv-static.png'
        } else {
            image.src = '/Images/' + pjSingle.heroImage;
        }
        image.addEventListener("error", function (event) {
            event.target.src = "/Images/tv-static.png"
            event.onerror = null
        })
        image.alt = 'A tv displaying ' + pjSingle.shortDescription;

        // Create the image container
        var projectImage = document.createElement('div');
        projectImage.className = 'project--image';
        projectImage.appendChild(image);

        // Create the main container element
        var projectContent = document.createElement('div');
        projectContent.className = 'project--content';

        // Append the content
        projectContent.appendChild(projectText);
        projectContent.appendChild(projectImage);

        // Create the horizontal line element
        var horizontalLine = document.createElement('div');
        horizontalLine.className = 'horizontal-line';

        // Create the overarching div
        var projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        // Append the content to the overarching div
        projectDiv.appendChild(projectContent);
        projectDiv.appendChild(horizontalLine);

        // Append this one to the section
        sectionSingle.appendChild(projectDiv);
    }
    i = 0;
}
