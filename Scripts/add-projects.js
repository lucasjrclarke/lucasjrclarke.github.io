import projectsData from "../Data/projects.js";
import intersData from "../Data/inter.js";
import { openPopup, closePopup } from '../Scripts/project-popup.js';
const pjData = projectsData.data.projects
const inData = intersData.data.inters

const projectsDiv = document.getElementById('projects');
const intersDiv = document.getElementById('inters');

const sectionsDiv = [projectsDiv, intersDiv];
const sectionsData = [pjData, inData];

for (let s = 0; s < sectionsDiv.length; s++) {
    let sectionSingle = sectionsDiv[s];
    let dataSingle = sectionsData[s];

    for (let i = 0; i < dataSingle.length; i++) {
        let pjSingle = dataSingle[i];
        // Create the text
        let projectText = document.createElement('div');
        projectText.className = 'project--text';
        projectText.innerHTML = '<h5>' + pjSingle.shortTitle + '</h5> <p>' +
            pjSingle.description + '</p>';

        // Create the image
        let image = document.createElement('img');
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
        let projectImage = document.createElement('div');
        projectImage.onclick = function () { openPopup(pjSingle.project_id) };
        projectImage.className = 'project--image';
        projectImage.appendChild(image);

        // Create the main container element
        let projectContent = document.createElement('div');
        projectContent.className = 'project--content';

        // Append the content
        projectContent.appendChild(projectText);
        projectContent.appendChild(projectImage);

        // Create the horizontal line element
        let horizontalLine = document.createElement('div');

        if (s === 0 && i === dataSingle.length - 1) {
            horizontalLine.id = 'skills-bar';
        }
        horizontalLine.className = 'horizontal-line';

        // Create the overarching div
        let projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        // Append the content to the overarching div
        projectDiv.appendChild(projectContent);
        projectDiv.appendChild(horizontalLine);

        // Append this one to the section
        sectionSingle.appendChild(projectDiv);
    }
}
