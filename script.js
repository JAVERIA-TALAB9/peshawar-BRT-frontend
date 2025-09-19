const stations = [
            'Chamkani', 'Sardar Garhi', 'Chughal Pura', 'Faisal Colony', 'Old Haji Camp',
            'Lahore Adda', 'Gulbahar Chowk', 'Hashtnagri', 'Malik Saad Shaheed',
            'Khyber Bazar', 'Shoba Bazar', 'Dabgari Gardens', 'Railway Station',
            'FC Chowk', 'Saddar Bazar', 'Mall Road', 'Tehkal Payyan', 'Tehkal Bala',
            'Abdara Road', 'University Town', 'University of Peshawar', 'Islamia College',
            'Board Bazar', 'Mall of Hayatabad', 'Bab-e-Peshawar', 'Hayatabad Phase 3',
            'Tatara Park', 'PDA', 'Hospital Chowk', 'Karkhano Market', 'Kohat Road',
            'Ring Road', 'Hayatabad Phase 1', 'Phase 6'
        ];

        const busSchedule = [
            {
                route: 'ER-01 (Main Corridor)',
                origin: 'Chamkani',
                destination: 'Karkhano Market',
                firstBus: '6:30 AM',
                lastBus: '10:00 PM',
                frequencyPeak: '4-6 min',
                frequencyOffPeak: '8-10 min'
            },
            {
                route: 'SR-02 (Feeder Route)',
                origin: 'Saddar Bazar',
                destination: 'University of Peshawar',
                firstBus: '6:45 AM',
                lastBus: '9:30 PM',
                frequencyPeak: '5-7 min',
                frequencyOffPeak: '10-15 min'
            },
            {
                route: 'CR-03 (Cantt Route)',
                origin: 'Mall Road',
                destination: 'Railway Station',
                firstBus: '7:00 AM',
                lastBus: '9:00 PM',
                frequencyPeak: '7-9 min',
                frequencyOffPeak: '12-15 min'
            },
            {
                route: 'HR-04 (Hayatabad Route)',
                origin: 'Bab-e-Peshawar',
                destination: 'Hayatabad Phase 6',
                firstBus: '6:30 AM',
                lastBus: '10:30 PM',
                frequencyPeak: '5-8 min',
                frequencyOffPeak: '10-12 min'
            },
            {
                route: 'UR-05 (University Route)',
                origin: 'University Town',
                destination: 'Mall of Hayatabad',
                firstBus: '7:00 AM',
                lastBus: '10:00 PM',
                frequencyPeak: '6-8 min',
                frequencyOffPeak: '10-15 min'
            },
            {
                route: 'FR-06 (Fort Route)',
                origin: 'FC Chowk',
                destination: 'Saddar Bazar',
                firstBus: '6:00 AM',
                lastBus: '9:00 PM',
                frequencyPeak: '10-12 min',
                frequencyOffPeak: '15-20 min'
            },
            {
                route: 'DR-07 (Dabgari Route)',
                origin: 'Dabgari Gardens',
                destination: 'Old Haji Camp',
                firstBus: '7:15 AM',
                lastBus: '8:45 PM',
                frequencyPeak: '8-10 min',
                frequencyOffPeak: '15-20 min'
            },
            {
                route: 'KR-08 (Kohat Route)',
                origin: 'Kohat Road',
                destination: 'Shoba Bazar',
                firstBus: '6:00 AM',
                lastBus: '9:00 PM',
                frequencyPeak: '6-8 min',
                frequencyOffPeak: '10-15 min'
            },
            {
                route: 'RR-09 (Ring Road Feeder)',
                origin: 'Ring Road',
                destination: 'Lahore Adda',
                firstBus: '6:15 AM',
                lastBus: '9:45 PM',
                frequencyPeak: '7-9 min',
                frequencyOffPeak: '12-18 min'
            },
            {
                route: 'SR-10 (Shoba Feeder)',
                origin: 'Shoba Bazar',
                destination: 'Hashtnagri',
                firstBus: '7:30 AM',
                lastBus: '8:30 PM',
                frequencyPeak: '10-15 min',
                frequencyOffPeak: '20-25 min'
            },
            {
                route: 'GR-11 (Gulbahar Route)',
                origin: 'Gulbahar Chowk',
                destination: 'Khyber Bazar',
                firstBus: '6:00 AM',
                lastBus: '10:00 PM',
                frequencyPeak: '5-8 min',
                frequencyOffPeak: '10-15 min'
            },
            {
                route: 'HR-12 (Hospital Route)',
                origin: 'Hospital Chowk',
                destination: 'Railway Station',
                firstBus: '6:45 AM',
                lastBus: '9:00 PM',
                frequencyPeak: '8-10 min',
                frequencyOffPeak: '15-20 min'
            },
            {
                route: 'TR-13 (Tatara Route)',
                origin: 'Tatara Park',
                destination: 'Hayatabad Phase 3',
                firstBus: '7:00 AM',
                lastBus: '9:30 PM',
                frequencyPeak: '7-10 min',
                frequencyOffPeak: '12-18 min'
            },
            {
                route: 'PR-14 (Phase 1 Feeder)',
                origin: 'Hayatabad Phase 1',
                destination: 'Malik Saad Shaheed',
                firstBus: '6:30 AM',
                lastBus: '10:00 PM',
                frequencyPeak: '6-8 min',
                frequencyOffPeak: '10-15 min'
            },
            {
                route: 'BR-15 (Board Bazar Route)',
                origin: 'Board Bazar',
                destination: 'Sardar Garhi',
                firstBus: '7:15 AM',
                lastBus: '9:45 PM',
                frequencyPeak: '8-12 min',
                frequencyOffPeak: '15-20 min'
            },
            {
                route: 'AR-16 (Abdara Route)',
                origin: 'Abdara Road',
                destination: 'University of Peshawar',
                firstBus: '6:00 AM',
                lastBus: '10:00 PM',
                frequencyPeak: '5-7 min',
                frequencyOffPeak: '10-15 min'
            },
            {
                route: 'MR-17 (Mall Route)',
                origin: 'Mall Road',
                destination: 'Tehkal Bala',
                firstBus: '7:00 AM',
                lastBus: '9:00 PM',
                frequencyPeak: '8-10 min',
                frequencyOffPeak: '15-20 min'
            },
            {
                route: 'FR-18 (Faisal Route)',
                origin: 'Faisal Colony',
                destination: 'Chughal Pura',
                firstBus: '6:30 AM',
                lastBus: '9:30 PM',
                frequencyPeak: '6-9 min',
                frequencyOffPeak: '12-18 min'
            },
            {
                route: 'LR-19 (Lahore Route)',
                origin: 'Lahore Adda',
                destination: 'Old Haji Camp',
                firstBus: '6:00 AM',
                lastBus: '10:00 PM',
                frequencyPeak: '5-8 min',
                frequencyOffPeak: '10-15 min'
            },
            {
                route: 'IR-20 (Islamia Route)',
                origin: 'Islamia College',
                destination: 'FC Chowk',
                firstBus: '7:30 AM',
                lastBus: '9:30 PM',
                frequencyPeak: '7-10 min',
                frequencyOffPeak: '15-20 min'
            }
        ];

        function populateStationDropdowns() {
            const originSelect = document.getElementById('origin');
            const destinationSelect = document.getElementById('destination');

            stations.forEach(station => {
                const originOption = document.createElement('option');
                originOption.value = station;
                originOption.textContent = station;
                originSelect.appendChild(originOption);

                const destinationOption = document.createElement('option');
                destinationOption.value = station;
                destinationOption.textContent = station;
                destinationSelect.appendChild(destinationOption);
            });
        }

        function populateBusSchedule() {
            const tableBody = document.getElementById('bus-schedule-table');
            tableBody.innerHTML = '';
            busSchedule.forEach(route => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${route.route}</td>
                    <td>${route.origin}</td>
                    <td>${route.destination}</td>
                    <td>${route.firstBus}</td>
                    <td>${route.lastBus}</td>
                    <td>${route.frequencyPeak}</td>
                    <td>${route.frequencyOffPeak}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        function calculateFare(origin, destination) {
            // A simple, mock fare calculation based on station index distance
            const originIndex = stations.indexOf(origin);
            const destinationIndex = stations.indexOf(destination);
            const distance = Math.abs(originIndex - destinationIndex);
            
            // Fares are generally based on distance, so we simulate this
            let fare = 15; // Minimum fare
            if (distance > 5) {
                fare = 25;
            }
            if (distance > 10) {
                fare = 40;
            }
            if (distance > 15) {
                fare = 50;
            }
            return fare;
        }

        function handleTicketPurchase(event) {
            event.preventDefault();

            const origin = document.getElementById('origin').value;
            const destination = document.getElementById('destination').value;
            const numTickets = parseInt(document.getElementById('tickets').value);
            const messageBox = document.getElementById('message-box');

            if (origin === destination) {
                messageBox.textContent = 'Origin and destination cannot be the same. Please select different stations.';
                messageBox.className = 'message-box error';
                messageBox.style.display = 'block';
                return;
            }
            if (numTickets <= 0 || isNaN(numTickets)) {
                 messageBox.textContent = 'Number of tickets must be a positive number.';
                 messageBox.className = 'message-box error';
                 messageBox.style.display = 'block';
                 return;
            }
            
            const farePerTicket = calculateFare(origin, destination);
            const totalCost = farePerTicket * numTickets;
            const bookingId = `BRT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

            messageBox.innerHTML = `
                <p><strong>Success!</strong> Your tickets for the journey from <strong>${origin}</strong> to <strong>${destination}</strong> have been purchased.</p>
                <p>Total Cost: <strong>PKR ${totalCost}</strong></p>
                <p>Booking ID: <strong>${bookingId}</strong></p>
            `;
            messageBox.className = 'message-box success';
            messageBox.style.display = 'block';
        }

        function handleComplaintSubmission(event) {
            event.preventDefault();

            const email = document.getElementById('complaint-email').value;
            const message = document.getElementById('complaint-message').value;
            const messageBox = document.getElementById('complaint-message-box');

            if (!email || !message) {
                 messageBox.textContent = 'Please fill out all required fields.';
                 messageBox.className = 'message-box error';
                 messageBox.style.display = 'block';
                 return;
            }
            
            // This is a placeholder for a real submission.
            // In a real application, you would send this data to a backend server.
            console.log("Complaint Submitted:", {
                name: document.getElementById('complaint-name').value,
                email: email,
                message: message
            });

            messageBox.innerHTML = `
                <p><strong>Thank you for your feedback!</strong> Your complaint has been submitted successfully.</p>
                <p>A confirmation has been sent to <strong>${email}</strong>.</p>
            `;
            messageBox.className = 'message-box success';
            messageBox.style.display = 'block';

            // Clear the form fields after submission
            document.getElementById('complaint-form').reset();
        }

        window.onload = function() {
            populateStationDropdowns();
            populateBusSchedule();
            
            const ticketForm = document.getElementById('ticket-form');
            ticketForm.addEventListener('submit', handleTicketPurchase);

            const complaintForm = document.getElementById('complaint-form');
            complaintForm.addEventListener('submit', handleComplaintSubmission);
        };