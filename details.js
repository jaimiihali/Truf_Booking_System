document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
  
    if (date && time && people) {
      document.getElementById('bookingMessage').textContent = `Turf available on ${date} at ${time} for ${people} people.`;
    } else {
      document.getElementById('bookingMessage').textContent = 'Please fill out all fields.';
    }
  });
  