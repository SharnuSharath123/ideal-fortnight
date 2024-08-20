document.addEventListener('DOMContentLoaded', () => {
    // Display current date and time
    function updateDateTime() {
        const now = new Date();
        const dateTimeStr = now.toLocaleString();
        document.getElementById('datetime').textContent = dateTimeStr;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Fetch data from server
    document.getElementById('fetchData').addEventListener('click', () => {
        fetch('/data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('serverResponse').textContent = JSON.stringify(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
