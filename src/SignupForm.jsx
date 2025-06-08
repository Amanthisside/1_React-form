import './SignupForm.css';
import { useState } from 'react';

export default function SignupForm() {
  const [showResults, setShowResults] = useState(false);
  const countryCityData = {
    India: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
    Canada: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'London'],
    UK: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Sheffield', 'Edinburgh', 'Bristol', 'Leicester'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong'],
    Germany: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'],
    France: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'],
    Japan: ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kawasaki', 'Kyoto', 'Saitama'],
    Brazil: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Goiânia'],
    China: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Tianjin', 'Wuhan', 'Dongguan', 'Chengdu', 'Nanjing', 'Chongqing'],
    'South Korea': ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan', 'Changwon', 'Goyang'],
    Italy: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania'],
    Spain: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao'],
    Russia: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod', 'Kazan', 'Chelyabinsk', 'Omsk', 'Samara', 'Rostov-on-Don'],
    Mexico: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Juárez', 'Torreón', 'Querétaro', 'San Luis Potosí']
  };

  //states
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: ""
  });

  // Compute available cities based on selected country
  const availableCities = formData.country ? countryCityData[formData.country] || [] : [];

  const changeHandler = (evt) => {
    const changedField = evt.target.name;
    const changedValue = evt.target.value;
    setformData((currData) => {
      return { ...currData, [changedField]: changedValue }; //returning new object to trigger re-render
    });
  };

  const validateForm = () => {
  // Simple required fields validation
  if (
    !formData.firstName ||
    !formData.username ||
    !formData.password ||
    !formData.phone ||
    !formData.country ||
    !formData.city ||
    !formData.pan ||
    !formData.aadhar
  ) {
    alert("Please fill all required fields");
    return false;
  }

  // Check if phone is a valid 10-digit number
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Check if Aadhar is a valid 12-digit number
  const aadharRegex = /^[0-9]{12}$/;
  if (!aadharRegex.test(formData.aadhar)) {
    alert("Please enter a valid 12-digit Aadhar number.");
    return false;
  }

  return true;
};



  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowResults(true);
    }
  };

  const handleBackToForm = () => {
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="results-container">
        <div className="results-card">
          <div className="results-header">
            <h1>Registration Successful!</h1>
            <p>Here are your submitted details:</p>
          </div>

          <div className="results-content">
            <div className="results-section">
              <h3>Personal Information</h3>
              <div className="results-grid">
                <div className="result-item">
                  <span className="label">Full Name:</span>
                  <span className="value">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="result-item">
                  <span className="label">Username:</span>
                  <span className="value">{formData.username}</span>
                </div>
                <div className="result-item">
                  <span className="label">Email:</span>
                  <span className="value">{formData.email}</span>
                </div>
              </div>
            </div>

            <div className="results-section">
              <h3>Contact Information</h3>
              <div className="results-grid">
                <div className="result-item">
                  <span className="label">Phone:</span>
                  <span className="value">{formData.phone}</span>
                </div>
              </div>
            </div>

            <div className="results-section">
              <h3>Location</h3>
              <div className="results-grid">
                <div className="result-item">
                  <span className="label">Country:</span>
                  <span className="value">{formData.country}</span>
                </div>
                <div className="result-item">
                  <span className="label">City:</span>
                  <span className="value">{formData.city}</span>
                </div>
              </div>
            </div>

            <div className="results-section">
              <h3>Documents</h3>
              <div className="results-grid">
                <div className="result-item">
                  <span className="label">PAN:</span>
                  <span className="value">{formData.pan}</span>
                </div>
                <div className="result-item">
                  <span className="label">Aadhar:</span>
                  <span className="value">{formData.aadhar}</span>
                </div>
              </div>
            </div>
          </div>

          <button onClick={handleBackToForm} className="back-button">
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="form-wrapper">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Signup Form</h1>
            <p>Fill out the form below to get started</p>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="First Name"
              required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Last Name"
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Username"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Password"
              required
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={changeHandler}
              placeholder="Phone Number"
              required
            />
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={changeHandler}
              required
            >
              <option value="">Select your country</option>
              {Object.keys(countryCityData).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <label htmlFor="city">City</label>
            <select
              name="city"
              id="city"
              value={formData.city}
              onChange={changeHandler}
              required
              disabled={!formData.country}
            >
              <option value="">Select your city</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <label htmlFor="pan">PAN Number</label>
            <input
              type="text"
              name="pan"
              id="pan"
              value={formData.pan}
              onChange={changeHandler}
              placeholder="PAN Number"
              required
            />
            <label htmlFor="aadhar">Aadhar Number</label>
            <input
              type="text"
              name="aadhar"
              id="aadhar"
              value={formData.aadhar}
              onChange={changeHandler}
              placeholder="Aadhar Number"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      
    </>
  );
}
