import skillsData from '../Data/skills.js'
const sData = skillsData.data.skills;

// Create overarching skills div
const skillsContainer = document.getElementById('skills');

// Create the skills grid
var skillsGrid = document.createElement('div');
skillsGrid.id = 'skills--grid';


for (var i = 0; i < sData.length; i++) {
    var sSingle = sData[i];

    // Create the skill div
    var skillDiv = document.createElement('div');
    skillDiv.className = 'skill';

    // Create the img div
    var image = document.createElement('img');
    image.className = 'skill--icon';
    image.src = '../Images/' + sSingle.url;
    image.alt = 'Logo of' + sSingle.name;

    // Create the title div
    var title = document.createElement('p');
    title.className = 'skill--title';
    title.innerHTML = '<p class="skill--title">' + sSingle.name + '</p>'

    // Create the progress bar
    var progress = document.createElement('div');
    progress.className = 'progress-container';
    progress.innerHTML = '<div class="progress" role="progressbar" aria-label="Skill progress bar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">' +
        '<div class="progress-bar" style="width: ' + sSingle.score * 10 + '%"></div>' + '</div>';

    // Put these inside the grid div
    skillDiv.appendChild(image);
    skillDiv.appendChild(title);
    skillDiv.appendChild(progress);

    // Append this skill to the skills grid
    skillsGrid.appendChild(skillDiv);
}

// Append the grid to the overarching div
skillsContainer.appendChild(skillsGrid);

// add a horizontal line at the end
var horizontalLine = document.createElement('div');
horizontalLine.className = 'horizontal-line';
skillsContainer.appendChild(horizontalLine);


