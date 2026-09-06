# ChikitsaConnect - Connecting You to Care

**ChikitsaConnect** (*"Connecting You to Care"*) has been designed and implemented as a rural-first, high-accessibility healthcare platform. It requires zero package installations and runs directly in any modern browser.

---

## 🗺️ Completed Requirements Overview

| Feature Requested | Implementation in ChikitsaConnect | Status |
|---|---|---|
| **Website Name: "ChikitsaConnect"** | Prominently displayed in English, Telugu (చికిత్స కనెక్ట్), and Hindi (चिकित्सा कनेक्ट). | ✅ Completed |
| **Language Selection (English / Telugu / Hindi)** | Initial modal on first launch + persistent switcher in header. Full dictionary for all modules and button prompts. | ✅ Completed |
| **Simple for Rural Area People** | High-contrast UI, large touch target buttons, clear iconography, and voice readouts (`🔊 Listen` with Text-to-Speech in Telugu, Hindi, English). | ✅ Completed |
| **Role Gate (Hospital Worker vs Patient)** | Modal prompt on open. If worker: captures **Worker Name**, **Hospital / PHC Name**, and **Department**. Quick "Switch Role" button in header. | ✅ Completed |
| **Facility Dashboard Restricted** | **Strictly hidden & disabled for Patients**. Only accessible when logged in as a Hospital Worker. | ✅ Completed |
| **Live Patient Records Sync** | As requested, when patient details are entered via "Register New Patient" or Digital Triage, they are **instantly synced** to localStorage and visible at the top of Patient Records without page reload. | ✅ Completed |
| **AI Hospital Guide (Button-Type)** | Floating assistant widget + modal. 100% button-driven decision tree (symptoms, tokens, emergency 108, pharmacy stock, records) with voice audio playback. | ✅ Completed |
| **All 9 Required Modules** | 1. Teleconsultation<br>2. Appointment & Queue<br>3. Digital Triage<br>4. Patient Records<br>5. Referral Tracking<br>6. Diagnostics<br>7. High-Risk Follow-up<br>8. Facility Dashboard *(Worker Only)*<br>9. Emergency Escalation | ✅ Completed |

---

## 🧪 Step-by-Step Testing & Verification Guide

### 1. Language Selection Flow
1. When opened for the first time, a language selection screen asks:
   - 🇬🇧 **English**
   - 🇮🇳 **తెలుగు (Telugu)**
   - 🇮🇳 **हिंदी (Hindi)**
2. Clicking **తెలుగు** instantly localizes all navigation buttons, banners, labels, and the AI assistant into Telugu.
3. You can switch back or change languages anytime using the switcher in the top-right corner.

---

### 2. Role Selection Flow (Worker vs Patient)
1. **Patient Test**:
   - Choose **"I am a Patient / నేను రోగిని"**.
   - Notice the header badge shows **Patient Mode**.
   - Inspect the navigation bar: **"Facility Dashboard" is completely hidden**.
2. **Worker Test**:
   - Click **"Switch Role"** in the header.
   - Choose **"I am a Hospital Worker / నేను ఆసుపత్రి కార్యకర్తను"**.
   - Enter your name (e.g. *Dr. Sunitha Rao*), Hospital Name (e.g. *PHC Rampur*), and Department (e.g. *Maternity & ANC*).
   - Click **Confirm & Access Staff Dashboard**.
   - Notice:
     - Header displays: `Staff: Dr. Sunitha Rao (PHC Rampur - Maternity & ANC)`.
     - **Facility Dashboard** appears in the navigation with a `Staff Only` badge.
     - You can now view live bed availability, admit/discharge patients, inspect oxygen cylinder stock, and view the duty roster!

---

### 3. Immediate Visibility in Patient Records
1. Go to the **Patient Records (రోగి రికార్డులు)** tab.
2. Click **➕ Register New Patient (కొత్త రోగిని నమోదు చేయండి)**.
3. Enter:
   - **Name**: *Balaram Naik*
   - **Age**: *42*
   - **Gender**: *Male*
   - **Mobile**: *9848012345*
   - **Village**: *Kothapalli Sub-centre*
   - **Condition**: *High fever with chills for 3 days*
   - **Triage**: *Yellow*
4. Click **Save & View In Records**.
5. **Immediate Sync**: The modal closes, and *Balaram Naik* immediately appears at the very top of the records table with generated ABHA ID, vitals, and a printable Health Card button!

---

### 4. Button-Driven AI Hospital Assistant
1. Click the floating **🤖 Contact Hospital / AI Guide** button at the bottom-right.
2. The AI greets you:
   > *"Namaste! I am Chikitsa AI, your 24/7 hospital assistant. How can I guide you today? Please tap a button below:"*
3. Tap **🩺 Check Symptoms & Triage**:
   - Sub-buttons appear: *[High Fever & Chills]*, *[Severe Breathlessness]*, *[Stomach Pain]*, *[Pregnancy Complications]*, *[Snakebite]*.
4. Tap **Snakebite or Severe Bleeding**:
   - Instant red-alert advice is provided with a direct button to **Call 108 Ambulance** or **Open Triage Desk**.
5. Tap **🔊 Listen** next to any response to hear the audio speech synthesized out loud!

---

### 5. Tour of All 9 Modules

- **🩺 Teleconsultation**: Simulated video room with Medical Officer Dr. Sunitha Rao, mic/cam toggles, 2G low-bandwidth mode, and digital prescription pad.
- **📅 Appointment & Queue**: Live token number board (`Now Serving: OPD-014`, `Your Token: OPD-019`), audio announcement button, and 1-click token generator.
- **🌡️ Digital Triage**: 6 large symptom buttons. Classifies into Green (Routine), Yellow (Urgent), or Red (Emergency).
- **📁 Patient Records**: Searchable database of health cards with print functionality.
- **🚑 Referral Tracking**: Multi-tier tracking from Sub-Centre to District Hospital with live status badges.
- **🔬 Diagnostics**: Rural lab test results (Malaria Rapid Antigen, Sputum TB, Hemoglobin, Blood Glucose) with color-coded severity.
- **⚠️ High-Risk Follow-up**: Registry for high-risk pregnancy, SAM children, hypertension, and TB DOTS with SMS/IVR reminder simulation.
- **🏢 Facility Dashboard (Worker Only)**: Live beds counter, +1 Admit / -1 Discharge buttons, oxygen cylinder status, and duty roster.
- **🚨 Emergency Escalation**: Giant 1-touch 108 SOS dispatch trigger and direct helpline cards (108, 104, 102, 112).

---

## 📂 Project Location
- **Directory**: `C:\Users\kanis\.gemini\antigravity\scratch\ChikitsaConnect\`
- **Files**:
  - [index.html](file:///C:/Users/kanis/.gemini/antigravity/scratch/ChikitsaConnect/index.html)
  - [styles.css](file:///C:/Users/kanis/.gemini/antigravity/scratch/ChikitsaConnect/styles.css)
  - [app.js](file:///C:/Users/kanis/.gemini/antigravity/scratch/ChikitsaConnect/app.js)
  - [mock-data.js](file:///C:/Users/kanis/.gemini/antigravity/scratch/ChikitsaConnect/mock-data.js)
  - [README.md](file:///C:/Users/kanis/.gemini/antigravity/scratch/ChikitsaConnect/README.md)
