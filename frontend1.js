<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Train Schedule App</title>
    <!-- Include a CSS library for styling (e.g., Bootstrap) -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
    <h1>Train Schedule</h1>
    <div id="trains-list"></div>
</div>

<script>
    // Function to fetch and display train schedules
    async function fetchTrains() {
        const apiUrl = 'http://20.244.56.144:80/train/trains';

        try {
            const response = await fetch(apiUrl);
            const trains = await response.json();

            const trainsList = document.getElementById('trains-list');

            trainsList.innerHTML = trains.map(train => `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${train.trainName}</h5>
                        <p class="card-text">Departure Time: ${train.departureTime.Hours}:${train.departureTime.Minutes}</p>
                        <p class="card-text">Sleeper Seats Available: ${train.seatsAvailable.sleeper}</p>
                        <p class="card-text">AC Seats Available: ${train.seatsAvailable.AC}</p>
                        <p class="card-text">Price (Sleeper): $${train.price.sleeper}</p>
                        <p class="card-text">Price (AC): $${train.price.AC}</p>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error fetching train data:', error);
        }
    }

    // Call the fetchTrains function on page load
    fetchTrains();
</script>

</body>
</html>
 <p class="card-text">Price (AC): $${train.price.AC}</p>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error fetching train data:', error);
        }
    }

    // Call the fetchTrains function on page load
    fetchTrains();
</script>

</body>
</html>
