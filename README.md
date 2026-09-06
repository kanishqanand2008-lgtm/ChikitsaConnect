# ChikitsaConnect
### Connecting You to Care

ChikitsaConnect is a rural-first healthcare web application designed specifically for rural citizens and rural healthcare workers (doctors, nurses, ANMs, and ASHA workers).

---

## 🌟 Key Features

### 1. Tri-Lingual Support (English / తెలుగు / हिंदी)
- Initial prompt upon opening to choose **English**, **తెలుగు (Telugu)**, or **हिंदी (Hindi)**.
- Easily toggle languages at any time from the top navigation bar.
- Voice Assistance (Text-to-Speech) available for semi-literate or illiterate rural patients with a single tap on the 🔊 icon.

### 2. Role-Based Access Gate (Patient vs. Healthcare Worker)
- **Patient Mode**:
  - Simplified, clean, high-contrast, large-button navigation.
  - **Facility Dashboard is strictly hidden** to protect hospital administration data.
  - Quick access to Teleconsultation, Queue Tokens, Digital Triage, Patient Records, and Emergency Escalation.
- **Hospital Worker Mode**:
  - Prompts for **Worker Name**, **Hospital / PHC Name**, and **Department** (General Medicine, Maternity/OBGYN, Emergency, Pediatrics, Diagnostics, ASHA/ANM, Pharmacy).
  - Unlocks full administrative access, including the **Facility Dashboard** with real-time bed counts, oxygen levels, medicine stocks, and staff rosters.
  - Easy 1-click "Switch Role" button in the top navigation bar for testing.

### 3. Button-Driven AI Hospital Assistant ("Chikitsa AI")
- Accessible via the floating action button (`Contact Hospital / AI Guide`) or dedicated actions.
- 100% button-driven interactive decision tree:
  - 🩺 *Check Symptoms & Triage* (Fever, Breathing, Stomach pain, Pregnancy pain, Snakebite)
  - 📅 *Take OPD Token / Check Queue*
  - 🚨 *108 Ambulance SOS*
  - 💊 *Medicine & Pharmacy Stock check*
  - 📋 *View Patient Records*
  - 👩‍⚕️ *Contact Duty Doctor*
- Includes voice readout (`🔊 Listen`) for every response in English, Telugu, and Hindi!

### 4. Complete 9 Healthcare Modules

1. **Teleconsultation (టెలికన్సల్టేషన్)**:
   - Live video feed simulation connecting rural patients to PHC doctors.
   - Low-bandwidth 2G/3G audio-first mode for weak network connectivity in remote villages.
   - Doctor's digital prescription pad with instant saving to the patient's record.

2. **Appointment & Queue (క్యూ & టోకెన్)**:
   - 1-click OPD token generator.
   - Live queue status display (`Now Serving`, `Your Token`, `Est. Wait Time`).
   - Voice token announcement button (`టోకెన్ 14...`).

3. **Digital Triage (డిజిటల్ ట్రియాజ్)**:
   - Large, simple symptom buttons for rural patients.
   - Instant color-coded severity:
     - 🟢 **Green (Routine)**: Home rest and standard OPD.
     - 🟡 **Yellow (Urgent)**: Needs doctor evaluation within 24 hours.
     - 🔴 **Red (Emergency)**: Triggers immediate 108 Ambulance escalation.

4. **Patient Records (రోగి రికార్డులు)**:
   - Immediate live sync: Any newly registered patient appears immediately in the table.
   - Search by Name, Village, Mobile, or ABHA ID.
   - View & print rural health cards.

5. **Referral Tracking (రిఫరల్ ట్రాకింగ్)**:
   - Pipeline tracking: Sub-Centre ➔ PHC ➔ CHC ➔ District Hospital.
   - Active status monitoring (`In-Transit`, `Admitted`, `Completed`) with transport type.

6. **Diagnostics (రోగనిర్ధారణ పరీక్షలు)**:
   - Rural lab test results (Rapid Malaria, Blood Glucose, Hemoglobin, Sputum TB, Urine).
   - Visual color indicators for normal, borderline, and abnormal lab findings.

7. **High-Risk Follow-up (అధిక ప్రమాద రోగులు)**:
   - Active surveillance for high-risk maternal health (ANC), severe child malnutrition (SAM/MAM), hypertension, and tuberculosis (DOTS).
   - Follow-up dates and simulated SMS/IVR call reminders to ASHA workers.

8. **Facility Dashboard (సౌకర్యాల డాష్‌బోర్డ్ - సిబ్బందికి మాత్రమే)**:
   - **Worker-only access**: Live bed occupancy, ICU beds, oxygen cylinder inventory, and essential medicines stock.
   - 1-click buttons to admit or discharge patients in real time.

9. **Emergency Escalation (అత్యవసర స్పందన)**:
   - Giant 1-touch 108 SOS dispatch with simulated ambulance arrival time.
   - Direct helpline dials: **108** (Ambulance), **104** (Medical Advice), **102** (Mother & Child Transport), **112** (National Emergency).

---

## 🚀 How to Run

1. Open `index.html` directly in any web browser:
   - Double-click `index.html`, or
   - In PowerShell, run:
     ```powershell
     Start-Process "C:\Users\kanis\.gemini\antigravity\scratch\ChikitsaConnect\index.html"
     ```
2. No installation of Node.js or Python packages is required!
