document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('yearGrid');
    const totalWeeks = 56; // 7 days * 8 weeks
    const activeWeeks = 52; // Number of active weeks in a year
    const currentWeek = getCurrentWeek();

    for (let week = 1; week <= totalWeeks; week++) {
        // Create a div element for each week
        let weekDiv = document.createElement('div');
        weekDiv.classList.add('w-14', 'h-14', 'rounded-lg', 'shadow', 'border', 'border-gray-300'); // Updated Tailwind classes

        // Color the past weeks red and active future weeks white
        if (week <= currentWeek) {
            weekDiv.classList.add('bg-red-500');
        } else if (week <= activeWeeks) {
            weekDiv.classList.add('bg-white');
        } else {
            // Grey out the unused weeks
            weekDiv.classList.add('bg-gray-300', 'opacity-50');
        }

        // Append the week div to the grid container
        gridContainer.appendChild(weekDiv);
    }
});

// Function to get the current week of the year
function getCurrentWeek() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = (now - start + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000));
    const oneWeek = 604800000; // milliseconds in a week
    return Math.floor(diff / oneWeek);
}
