# Full-Stack AI-Powered Health & Wellness Assistant

An intelligent, AI-driven chatbot application designed to promote healthier lifestyles through personalized recommendations and insightful conversations. This project combines the power of modern web technologies and artificial intelligence to deliver an engaging and impactful health assistant for users.

---

## Features
- Interactive chatbot to gather health data (age, gender, height, weight, dietary preferences, etc.).
- Calculates essential health metrics like BMI and provides actionable suggestions.
- Tailored food and fitness advice, taking into account dietary choices (e.g., vegan, vegetarian).
- Dual-pane layout: Chat window and response box for clear, interactive communication.
- Modern, vibrant UI with a healthy lifestyle-themed background.
- AI-powered conversations using OpenAI’s GPT-3.5 Turbo.
- Fully responsive design for desktop, tablet, and mobile devices.

---

## Tech Stack

### Frontend
- React.js for building an interactive and responsive user interface.
- CSS to create a visually engaging and modern design.
- Fetch API for seamless communication with the backend.

### Backend
- Flask as a lightweight Python framework for APIs.
- Flask-CORS to enable secure communication between the frontend and backend.
- OpenAI API to power the chatbot with intelligent conversation capabilities.

---

## How It Works
1. Users engage with the chatbot, sharing health details such as age, gender, dietary preferences, and past health issues.
2. The assistant calculates BMI and other health insights.
3. Tailored food and fitness recommendations are displayed dynamically in the chat window and response box.

---

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/raghuramg666/Full-Stack-AI-Powered-Health-Wellness-Assistant.git
cd Full-Stack-AI-Powered-Health-Wellness-Assistant
```

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   - On Windows:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set your OpenAI API key in a `.env` file:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
5. Start the Flask server:
   ```bash
   python main.py
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---

## Access the Application
1. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)
2. Start interacting with the AI-powered health assistant!

---

## Screenshots
![image](https://github.com/user-attachments/assets/23a1ed54-bec6-4c18-b367-0a2e671a6f80)


---

## Future Enhancements
- Add user authentication to enable profiles and save health data.
- Incorporate advanced health metrics like calorie tracking, hydration levels, and step goals.
- Expand the chatbot's capabilities to support multiple languages.
- Sync health data from fitness trackers or smartwatches.

---

## Project Structure
```
Full-Stack-AI-Powered-Health-Wellness-Assistant/
├── backend/
│   ├── main.py             # Flask app logic
│   ├── requirements.txt    # Python dependencies
│   ├── .env                # API key (excluded from Git)
├── frontend/
│   ├── public/             # Static assets
│   │   ├── background.jpg  # Background image
│   ├── src/                # React source files
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styling for the app
│   │   ├── components/     # Individual UI components
```

---

## Contributions
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements
- OpenAI for the GPT-3.5 Turbo API.
- React.js for the powerful frontend framework.
- Flask for the lightweight backend solution.
