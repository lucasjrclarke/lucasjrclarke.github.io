import projectsData from "../Data/projects.js";
import intersData from "../Data/inter.js";

let currData = projectsData.data.projects;

var popup_id = -1;

export function openPopup(project_id) {

    if (project_id <= currData.length) {
    } else {
        currData = intersData.data.inters;
    }

    popup_id = project_id;

    let project = currData[project_id - 1];
    console.log("Opening project", project.shortTitle);

}

export function closePopup() {

}