document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('yearGrid');
    gridContainer.classList.add('grid', 'md:grid-cols-2', 'grid-cols-2', 'gap-4');

    const activeWeeks = 52; // Number of active weeks in a year
    const currentWeek = getCurrentWeek();
    const currentDayOfWeek = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    const totalMonths = 12;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (let month = 1; month <= totalMonths; month++) {
        let monthDiv = document.createElement('div');
        monthDiv.classList.add('pt-4', 'pb-2', 'pl-2', 'pr-2', 'border', 'border-gray-400', 'rounded-lg', 'flex', 'justify-center', 'items-center', 'relative');

        // Create month label
        let monthLabel = document.createElement('div');
        monthLabel.classList.add('absolute', 'bg-white', 'border', 'border-gray-400', 'rounded-full', 'px-2', 'text-sm', 'transform', '-translate-x-1/2', '-translate-y-1/2');
        monthLabel.textContent = monthNames[month - 1];
        monthLabel.style.left = '50%';
        monthLabel.style.top = '0.1rem';
        monthDiv.appendChild(monthLabel);

        for (let week = 1; week <= 4; week++) {
            let weekNumber = (month - 1) * 4 + week;
            let weekDiv = document.createElement('div');
            weekDiv.classList.add('w-8', 'h-8', 'md:w-14', 'md:h-14', 'rounded-lg', 'shadow', 'border', 'border-gray-300', 'm-1');

            if (weekNumber < currentWeek) {
                weekDiv.classList.add('bg-red-500');
            } else if (weekNumber === currentWeek) {
                const opacityPercentage = (currentDayOfWeek === 0 ? 1 : (currentDayOfWeek / 7));
                weekDiv.style.backgroundColor = `rgba(239, 68, 68, ${opacityPercentage})`;
            } else {
                weekDiv.classList.add('bg-white');
                if (weekNumber > activeWeeks) {
                    weekDiv.classList.add('opacity-50');
                }
            }

            monthDiv.appendChild(weekDiv);
        }

        gridContainer.appendChild(monthDiv);
    }
});

function getCurrentWeek() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = (now - start + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000));
    const oneWeek = 604800000; // milliseconds in a week
    return Math.ceil(diff / oneWeek);
}
