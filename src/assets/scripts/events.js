// https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg

const events__form = document.getElementById('events__form');
const events__name = document.getElementById('events__name');
const events__date = document.getElementById('events__date');
const events__time = document.getElementById('events__time');
const events__image = document.getElementById('events__image');
const events__location = document.getElementById('events__location');
const events__description = document.getElementById('events__description');

events__form.addEventListener('submit', (e) => {
    e.preventDefault();
    let eventData = {
        eventName: events__name.value,
        eventDate: events__date.value,
        eventTime: events__time.value,
        eventImage: events__image.value,
        eventLocation: events__location.value,
        eventDescription: events__description.value,
    }
    axios.post('http://localhost:8080/create-event', eventData)
        .then(res => {
            if (res.status === 200) {
                alert('Event created successfully')
                window.location.href = '/events'
            }
        })
        .catch(err => {
            alert('Error creating event')
        })
})