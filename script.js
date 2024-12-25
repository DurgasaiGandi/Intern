    // Add event listener to the image for displaying branch names
    const collegeImage = document.querySelector(".header img");
    const branches = [
        { name: "Asilmetta", video: "videos/asilmetta.mp4" },
        { name: "Rama Talkies", video: "videos/rama_talkies.mp4" },
        { name: "Ramnagar", video: "videos/ramnagar.mp4" },
        { name: "Gopalapatnam", video: "videos/gopalapatnam.mp4" }
    ];

    collegeImage.addEventListener("click", () => {
        showBranchModal();
    });

    function showBranchModal() {
        // Create modal for branch names
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        // Add branch names as clickable items
        branches.forEach(branch => {
            const branchItem = document.createElement("div");
            branchItem.textContent = branch.name;
            branchItem.style.color = "white";
            branchItem.style.fontSize = "1.5em";
            branchItem.style.margin = "10px";
            branchItem.style.cursor = "pointer";

            branchItem.addEventListener("click", () => {
                document.body.removeChild(modal); // Close the modal
                playBranchVideo(branch.video);
            });

            modal.appendChild(branchItem);
        });

        // Add close functionality
        modal.addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    }

    function playBranchVideo(videoSrc) {
        // Create a modal for video playback
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        // Create video element
        const video = document.createElement("video");
        video.src = videoSrc;
        video.controls = true;
        video.style.maxWidth = "90%";
        video.style.maxHeight = "90%";
        modal.appendChild(video);

        // Add close functionality
        modal.addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
        video.play();
    }

    // Dynamically load timetable data
    const timetable = [
        { day: "MONDAY", schedule: ["Maths-7", "HTML", "Break", "ML", "PHP", "Lunch", "Lab", "Break", "Maths-6", "IOT"] },
        { day: "TUESDAY", schedule: ["Maths-7", "HTML", "Break", "ML", "PHP", "Lunch", "Lab", "Break", "Maths-6", "IOT"] },
        { day: "WEDNESDAY", schedule: ["Maths-7", "HTML", "Break", "ML", "PHP", "Lunch", "Lab", "Break", "Maths-6", "IOT"] },
        { day: "THURSDAY", schedule: ["Maths-7", "HTML", "Break", "ML", "PHP", "Lunch", "CRT", "Break", "Maths-6", "IOT"] },
        { day: "FRIDAY", schedule: ["Maths-7", "HTML", "Break", "ML", "PHP", "Lunch", "CRT", "Break", "Maths-6", "IOT"] },
        { day: "SATURDAY", schedule: ["Maths-7", "HTML", "Break", "ML", "PHP", "Lunch", "CRT", "Break", "Maths-6", "IOT"] }
    ];

    const timetableBody = document.querySelector("#timetable tbody");

    timetable.forEach(row => {
        const tableRow = document.createElement("tr");

        // Day Column
        const dayCell = document.createElement("td");
        dayCell.textContent = row.day;
        tableRow.appendChild(dayCell);

        // Schedule Columns
        row.schedule.forEach(item => {
            const cell = document.createElement("td");
            cell.textContent = item;
            tableRow.appendChild(cell);
        });

        timetableBody.appendChild(tableRow);
    });

    // Teacher names for subjects
const teacherNames = {
    "Maths-7": "Aditya rao",
    "HTML": "Tanil",
    "ML": "Sandeep",
    "PHP": "B.V.L Sastry",
    "Lab": "Anila",
    "CRT": "Srinivas",
    "Maths-6": "Vinod",
    "IOT": "Chandu"
};

// Add tooltips to the timetable
const timetableCells = document.querySelectorAll("#timetable tbody td");

// Iterate through all timetable cells
timetableCells.forEach(cell => {
    const subject = cell.textContent.trim();

    if (teacherNames[subject]) {
        // Add a hover event to show the teacher's name
        cell.style.position = "relative"; // Ensure the tooltip positions correctly
        cell.style.cursor = "pointer";

        const tooltip = document.createElement("div");
        tooltip.textContent = teacherNames[subject];
        tooltip.style.position = "absolute";
        tooltip.style.bottom = "100%";
        tooltip.style.left = "50%";
        tooltip.style.transform = "translateX(-50%)";
        tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        tooltip.style.color = "white";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "4px";
        tooltip.style.whiteSpace = "nowrap";
        tooltip.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
        tooltip.style.fontSize = "0.9em";
        tooltip.style.zIndex = "10";
        tooltip.style.display = "none"; // Hidden by default

        // Add tooltip to the cell
        cell.appendChild(tooltip);

        // Show the tooltip on hover
        cell.addEventListener("mouseover", () => {
            tooltip.style.display = "block";
        });

        // Hide the tooltip when not hovering
        cell.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });
    }
});


    // Handle feedback form submission
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const feedback = document.getElementById("feedback").value;

        console.log("Feedback Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Feedback:", feedback);

        alert("Thank you for your feedback!");
        this.reset(); // Reset the form
    });
