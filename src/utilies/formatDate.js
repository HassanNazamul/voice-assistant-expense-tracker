// Function to format date as year-month-day
const formatDate = (date) => {
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    // Add leading zero to month if needed
    if (month.length < 2) {
        month = `0${month}`;
    }

    // Add leading zero to day if needed
    if (day.length < 2) {
        day = `0${day}`;
    }

    // Return formatted date
    return [year, month, day].join('-');
}

export default formatDate;