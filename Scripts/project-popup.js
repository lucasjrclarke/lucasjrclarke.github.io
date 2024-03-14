import projectsData from "../Data/projects.js";
import intersData from "../Data/inter.js";

var popup_id = -1;

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
    console.log("Opening project number", temp_project_id + '/' + project.id, project.shortTitle);

    // create close link 
    let projectPopupCloser = document.createElement('a');
    projectPopupCloser.className = "project--popup--x";
    projectPopupCloser.onclick = function () { closePopup() };

    // create title
    let projectPopupTitle = document.createElement('h1');
    projectPopupTitle.className = "project--popup--title";
    projectPopupTitle.innerHTML = project.shortTitle;

    // create larger div
    let projectPopup = document.createElement('div');
    projectPopup.id = "project--popup";

    // append the children to the larger div
    projectPopup.appendChild(projectPopupCloser);
    projectPopup.appendChild(projectPopupTitle);

    // add them to the popup div
    document.getElementById("popup").appendChild(projectPopup);

}

export function closePopup() {

    popup_id = -1;

}