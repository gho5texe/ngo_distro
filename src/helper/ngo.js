const mongoose = require('mongoose');
const ngoSchema = require('../models/ngoModel');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://0.0.0.0:27017/ngo');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB @ 27017');
})

let ngoData = [
    {
        "firstName": "Helping Hands Foundation",
        "lastName": "Trust",
        "email": "helpinghands@gmail.com",
        "phone__no": 9876543210,
        "gender": "NGO",
        "state": "Maharashtra",
        "city": "Mumbai",
        "dob": "1980-05-15",
        "linkedin": "linkedin.com/helpinghands",
        "description": "We strive to provide education to underprivileged children.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Empower Women India",
        "lastName": "Organization",
        "email": "empowerwomen@gmail.com",
        "phone__no": 8765432109,
        "gender": "NGO",
        "state": "Delhi",
        "city": "New Delhi",
        "dob": "1975-10-20",
        "linkedin": "linkedin.com/empowerwomen",
        "description": "Working towards women's rights and empowerment.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Green Earth Society",
        "lastName": "Foundation",
        "email": "greenearth@gmail.com",
        "phone__no": 7654321098,
        "gender": "NGO",
        "state": "Karnataka",
        "city": "Bangalore",
        "dob": "1988-03-25",
        "linkedin": "linkedin.com/greenearth",
        "description": "Dedicated to environmental conservation and sustainability.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Hope for All",
        "lastName": "Foundation",
        "email": "hopeforall@gmail.com",
        "phone__no": 6543210987,
        "gender": "NGO",
        "state": "Tamil Nadu",
        "city": "Chennai",
        "dob": "1990-07-12",
        "linkedin": "linkedin.com/hopeforall",
        "description": "Providing relief and support to disaster-affected communities.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Education First",
        "lastName": "Trust",
        "email": "educationfirst@gmail.com",
        "phone__no": 5432109876,
        "gender": "NGO",
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "dob": "1972-12-08",
        "linkedin": "linkedin.com/educationfirst",
        "description": "Committed to providing quality education to all children.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Healthcare Aid",
        "lastName": "Foundation",
        "email": "healthcareaid@gmail.com",
        "phone__no": 4321098765,
        "gender": "NGO",
        "state": "Punjab",
        "city": "Chandigarh",
        "dob": "1985-06-30",
        "linkedin": "linkedin.com/healthcareaid",
        "description": "Providing healthcare services to remote and underserved areas.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Rural Development",
        "lastName": "Foundation",
        "email": "ruraldevelopment@gmail.com",
        "phone__no": 3210987654,
        "gender": "NGO",
        "state": "Rajasthan",
        "city": "Jaipur",
        "dob": "1982-09-18",
        "linkedin": "linkedin.com/ruraldevelopment",
        "description": "Focusing on sustainable development in rural areas.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Animal Welfare",
        "lastName": "Society",
        "email": "animalwelfare@gmail.com",
        "phone__no": 2109876543,
        "gender": "NGO",
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "dob": "1994-04-05",
        "linkedin": "linkedin.com/animalwelfare",
        "description": "Dedicated to the welfare and protection of animals.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Clean Water Initiative",
        "lastName": "Foundation",
        "email": "cleanwater@gmail.com",
        "phone__no": 1098765432,
        "gender": "NGO",
        "state": "Gujarat",
        "city": "Ahmedabad",
        "dob": "1978-11-22",
        "linkedin": "linkedin.com/cleanwater",
        "description": "Working to provide clean and safe drinking water to communities.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Tech for Good",
        "lastName": "Foundation",
        "email": "techforgood@gmail.com",
        "phone__no": 9876543210,
        "gender": "NGO",
        "state": "Telangana",
        "city": "Hyderabad",
        "dob": "1986-08-14",
        "linkedin": "linkedin.com/techforgood",
        "description": "Utilizing technology for social impact and community development.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Art for Change",
        "lastName": "Organization",
        "email": "artforchange@gmail.com",
        "phone__no": 8765432109,
        "gender": "NGO",
        "state": "West Bengal",
        "city": "Kolkata",
        "dob": "1991-02-17",
        "linkedin": "linkedin.com/artforchange",
        "description": "Promoting social change through art and creativity.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Youth Empowerment",
        "lastName": "Association",
        "email": "youthempowerment@gmail.com",
        "phone__no": 7654321098,
        "gender": "NGO",
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "dob": "1983-06-29",
        "linkedin": "linkedin.com/youthempowerment",
        "description": "Empowering young people to create positive change in society.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Senior Citizens",
        "lastName": "Support Group",
        "email": "seniorcitizens@gmail.com",
        "phone__no": 6543210987,
        "gender": "NGO",
        "state": "Assam",
        "city": "Guwahati",
        "dob": "1970-03-10",
        "linkedin": "linkedin.com/seniorcitizens",
        "description": "Providing support and services to elderly individuals.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Disability Rights",
        "lastName": "Foundation",
        "email": "disabilityrights@gmail.com",
        "phone__no": 5432109876,
        "gender": "NGO",
        "state": "Bihar",
        "city": "Patna",
        "dob": "1976-09-27",
        "linkedin": "linkedin.com/disabilityrights",
        "description": "Advocating for the rights and inclusion of people with disabilities.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Eco-friendly Living",
        "lastName": "Foundation",
        "email": "ecofriendlyliving@gmail.com",
        "phone__no": 4321098765,
        "gender": "NGO",
        "state": "Odisha",
        "city": "Bhubaneswar",
        "dob": "1989-04-08",
        "linkedin": "linkedin.com/ecofriendlyliving",
        "description": "Promoting sustainable and eco-friendly lifestyles.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Child Rights",
        "lastName": "Foundation",
        "email": "childrights@gmail.com",
        "phone__no": 3210987654,
        "gender": "NGO",
        "state": "Haryana",
        "city": "Chandigarh",
        "dob": "1992-11-14",
        "linkedin": "linkedin.com/childrights",
        "description": "Protecting the rights and well-being of children.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Hunger Relief",
        "lastName": "Foundation",
        "email": "hungerrelief@gmail.com",
        "phone__no": 2109876543,
        "gender": "NGO",
        "state": "Jharkhand",
        "city": "Ranchi",
        "dob": "1974-07-21",
        "linkedin": "linkedin.com/hungerrelief",
        "description": "Providing food assistance to those in need.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Mental Health Awareness",
        "lastName": "Foundation",
        "email": "mentalhealthawareness@gmail.com",
        "phone__no": 1098765432,
        "gender": "NGO",
        "state": "Uttarakhand",
        "city": "Dehradun",
        "dob": "1984-02-02",
        "linkedin": "linkedin.com/mentalhealthawareness",
        "description": "Raising awareness and promoting mental health education.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    },
    {
        "firstName": "Empower Rural Women",
        "lastName": "Organization",
        "email": "empowerruralwomen@gmail.com",
        "phone__no": 9876543210,
        "gender": "NGO",
        "state": "Chhattisgarh",
        "city": "Raipur",
        "dob": "1981-08-03",
        "linkedin": "linkedin.com/empowerruralwomen",
        "description": "Empowering rural women through skill development and support.",
        "profile": "ngo.jpg",
        "password": "password123",
        "created_at": "2024-05-09T00:00:00.000Z"
    }
]

ngoData.forEach((ngo) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(ngo.password, salt, (err, hash) => {
            if (err) throw err;
            ngo.password = hash;
            const newNgo = new ngoSchema(ngo);
            newNgo.save()
                .then(ngo => {
                    console.log('Record created successfully');
                })
                .catch(err => {
                    console.log(err);
                })

        })
    })
})

