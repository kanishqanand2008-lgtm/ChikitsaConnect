# ChikitsaConnect: Project Template & System Specification
## Tagline: *Connecting You to Care*

---

## 1. Executive Summary & Problem Statement

### 1.1 The Challenge
In rural and remote regions, access to specialized healthcare is constrained by:
- Geographic distance from tertiary hospitals.
- High doctor-to-patient ratios at Primary Health Centres (PHCs) and Sub-Centres.
- Language and digital literacy barriers among rural citizens.
- Delays in identifying high-risk emergency cases (maternal complications, snakebites, severe trauma).
- Lack of real-time visibility into bed occupancy and critical medical supplies.

### 1.2 The Solution: ChikitsaConnect
A high-accessibility, tri-lingual rural telemedicine and health operations platform that empowers both citizens and frontline health workers (Doctors, Nurses, ANMs, ASHA workers) through:
- 100% button-driven navigation and AI triage.
- Native multi-language support (English, Telugu, Hindi) with built-in voice assistance (Text-to-Speech).
- Role-based security ensuring sensitive hospital facility data is restricted to authorized healthcare workers.

---

## 2. System Architecture & Tech Stack

```
+-------------------------------------------------------------------------+
|                           CHIKITSACONNECT                               |
|                     "Connecting You to Care"                            |
+-------------------------------------------------------------------------+
                                   |
           +-----------------------+-----------------------+
           |                                               |
     [PATIENT MODE]                              [HOSPITAL WORKER MODE]
     - Large touch targets                       - Requires Name, Hospital,
     - Voice Readout (Telugu/Hindi/Eng)            Department Verification
     - Facility Dashboard HIDDEN                 - Unlocks Facility Dashboard
           |                                               |
           +-----------------------+-----------------------+
                                   |
      +----------------------------+----------------------------+
      |               9 CORE CLINICAL & ADMIN MODULES           |
      +----------------------------+----------------------------+
      |  1. Teleconsultation       |  6. Diagnostics & Lab      |
      |  2. Appointments & Queue   |  7. High-Risk Follow-up    |
      |  3. Digital Triage         |  8. Facility Dashboard*    |
      |  4. Live Patient Records   |  9. Emergency Escalation   |
      |  5. Referral Tracking      |     (*Staff Only)          |
      +----------------------------+----------------------------+
                                   |
         +-------------------------+-------------------------+
         |                                                   |
   [BUTTON-DRIVEN AI GUIDE]                        [LOCAL PERSISTENCE]
   - Guided Decision Tree                          - LocalStorage Sync
   - Audio Speech Synthesis                        - Zero Runtime Dependency
```

### Technology Stack:
- **Frontend / Client UI**: HTML5 Semantic Architecture, CSS3 Responsive Grid & Flexbox, Vanilla ES6+ JavaScript.
- **Accessibility Layer**: Web Speech API (`SpeechSynthesisUtterance`) for Telugu (`te-IN`), Hindi (`hi-IN`), and English (`en-IN`).
- **Data & State Management**: Reactive LocalStorage state with pre-seeded mock registry.
- **Portability**: Zero external runtime requirements (runs natively in Microsoft Edge, Google Chrome, Safari, and Mobile Browsers).

---

## 3. Role-Based Access Control (RBAC) Matrix

| Module / Feature | Patient Role | Hospital Worker Role | Notes |
|---|:---:|:---:|---|
| **Language Selection** | ✅ | ✅ | English, Telugu, Hindi |
| **Teleconsultation** | ✅ (Join/Consult) | ✅ (Conduct/Prescribe) | Virtual Clinic + E-Prescription |
| **Appointments & Queue** | ✅ (View/Generate) | ✅ (Manage Queue) | Live Token Board + Sound |
| **Digital Triage** | ✅ | ✅ | Green/Yellow/Red Classification |
| **Patient Records** | ✅ (Personal View) | ✅ (Full Database) | Instant Live Sync on Registration |
| **Referral Tracking** | ✅ (Track Transfer) | ✅ (Issue/Admit) | Sub-Centre ➔ PHC ➔ CHC ➔ District |
| **Diagnostics** | ✅ (View Reports) | ✅ (Order/Update) | Rapid tests with color badges |
| **High-Risk Follow-up** | ✅ (Check Dates) | ✅ (Manage Registry) | ANC, SAM, Hypertension, TB |
| **Facility Dashboard** | ❌ **STRICTLY HIDDEN** | ✅ **FULL ACCESS** | Bed counts, oxygen, meds inventory |
| **Emergency Escalation**| ✅ | ✅ | 108 Ambulance SOS + 104/102 dials |
| **AI Hospital Assistant**| ✅ | ✅ | 100% Button-driven guided flow |

---

## 4. Detailed Specification of the 9 Modules

### Module 1: Teleconsultation (టెలికన్సల్టేషన్ / टेलीपरामर्श)
- **Objective**: Provide virtual clinical consultation connecting remote villages to PHC Medical Officers.
- **Key Components**:
  - Live consultation simulation (Doctor video stream + Patient camera toggle).
  - Microphone mute/unmute and camera toggles.
  - **Rural 2G Mode**: Audio-first low-bandwidth toggle for remote areas with poor 4G connectivity.
  - **E-Prescription Pad**: Allows the Medical Officer to type medicines, dosages, and test advice, with 1-click save to Patient Records.

### Module 2: Appointment & Queue (నియామకం & క్యూ / अपॉइंटमेंट और कतार)
- **Objective**: Eliminate unorganized physical crowding at rural OPD counters.
- **Key Components**:
  - 1-Click OPD Token Generator (`OPD-014`, `OPD-015`, etc.).
  - Visual Queue Board: Displays "Now Serving", "Your Token", and "Estimated Wait Time".
  - **Audio Callout**: Tap `🔊 Voice Announcement` to hear token numbers spoken aloud in Telugu, Hindi, or English.

### Module 3: Digital Triage (డిజిటల్ ట్రియాజ్ / डिजिटल ट्राइएज)
- **Objective**: Button-based rural symptom checker to classify clinical urgency.
- **Symptom Categories**:
  1. *Mild Cold & Cough* ➔ 🟢 **Green (Routine)**: Hydration & home care.
  2. *High Fever & Chills* ➔ 🟡 **Yellow (Urgent)**: Needs doctor evaluation within 24h.
  3. *Chest Pain / Severe Breathlessness* ➔ 🔴 **Red (Emergency)**: Immediate hospital transfer.
  4. *Severe Diarrhea / Vomiting* ➔ 🟡 **Yellow (Urgent)**: Dehydration risk, ORS + PHC visit.
  5. *Pregnancy Complications / Labor Pain* ➔ 🔴 **Red (Emergency)**: Immediate 102/108 dispatch.
  6. *Snakebite / Poison* ➔ 🔴 **Red (Emergency)**: Critical antivenom requirement.

### Module 4: Patient Records (రోగి రికార్డులు / मरीज रिकॉर्ड)
- **Objective**: Real-time digital repository for rural citizens and health workers.
- **Key Components**:
  - **Instant Live Sync**: Entering patient details automatically saves and places the record at the top of the table without refreshing.
  - Generates an ABHA-compatible digital ID (`ABHA-XXXX-XXXX-XXXX`).
  - Search by Patient Name, Mobile, Village, or ID.
  - Printable Rural Health Card with vitals, presenting illness, and blood group.

### Module 5: Referral Tracking (రిఫరల్ ట్రాకింగ్ / रेफरल ट्रैकिंग)
- **Objective**: Transparent tracking across the 4-tier public healthcare continuum.
- **Tiers**:
  `Sub-Centre / ASHA` ➔ `Primary Health Centre (PHC)` ➔ `Community Health Centre (CHC)` ➔ `District Hospital`
- **Statuses**: `Referred` ➔ `In-Transit (Ambulance 108/102)` ➔ `Admitted` ➔ `Completed`.

### Module 6: Diagnostics (రోగనిర్ధారణ పరీక్షలు / जांच और टेस्ट)
- **Objective**: Track point-of-care rapid testing and primary laboratory findings.
- **Tests Supported**:
  - Rapid Malaria Antigen (Pf/Pv)
  - Hemoglobin (Hb Anemia check)
  - Random Blood Glucose (Glucometer)
  - Sputum Smear for AFB (Tuberculosis)
  - Dengue NS1 & Urine Albumin
- **Color Codes**: Green = Normal, Amber = Borderline, Red = Abnormal/Alert.

### Module 7: High-Risk Follow-up (అధిక ప్రమాద రోగులు / उच्च जोखिम निगरानी)
- **Objective**: Active surveillance of vulnerable rural populations.
- **Target Registries**:
  - High-Risk Pregnancy (Severe Anemia, Twin gestation, Pre-eclampsia)
  - Severe Acute Malnutrition (SAM children with MUAC < 11.5cm)
  - Uncontrolled Hypertension & Stroke risk
  - Tuberculosis under DOTS Category 1
- Action: Simulated SMS and automated IVR voice reminder trigger to ASHA workers and patients.

### Module 8: Facility Dashboard (సౌకర్యాల డాష్‌బోర్డ్ - సిబ్బందికి మాత్రమే)
- **Objective**: Real-time bed and inventory control for hospital staff (*Strictly hidden for patients*).
- **Key Components**:
  - Bed Occupancy: Total Beds, Occupied, Vacant, ICU/Emergency, and Maternity Ward beds.
  - Live 1-Click Bed Counter: `+1 Admit` and `-1 Discharge` buttons.
  - Critical Supplies: Oxygen cylinders (Full/Low), Anti-Snake Venom (ASV), ORS, IFA tablets, Insulin.
  - Staff On-Duty Roster with direct phone call links.

### Module 9: Emergency Escalation (అత్యవసర స్పందన / आपातकालीन सहायता)
- **Objective**: Zero-delay emergency response for rural emergencies.
- **Key Components**:
  - Giant Red 108 SOS Dispatch button with simulated ambulance ETA and vehicle allocation.
  - 1-Touch Rural Helplines:
    - 📞 **108** - Emergency Ambulance
    - 📞 **104** - Medical Officer Tele-Advice
    - 📞 **102** - Mother & Child Drop-Back Vehicle
    - 📞 **112** - National Emergency

---

## 5. Button-Driven AI Hospital Assistant Decision Tree

```
[Start: Floating "Contact Hospital / AI Guide" Button]
   |
   +---> [Greeting in User's Language + Audio Speaker Icon]
   |
   +---> PRIMARY BUTTON CHOICES:
         |
         +--> [🩺 Check Symptoms & Triage]
         |       |
         |       +--> [Fever & Chills] ---------> Advice + [Take OPD Token]
         |       +--> [Breathlessness] (Red) ---> Alert + [Call 108 Ambulance]
         |       +--> [Stomach Pain / Diarrhea] -> Advice + [Hydration Tips]
         |       +--> [Pregnancy Pain] (Red) ---> Alert + [Call 102/108]
         |       +--> [Snakebite] (Red) --------> Alert + [Dispatch 108 SOS]
         |
         +--> [📅 Get Doctor Token / Queue]
         |       |
         |       +--> Returns Active Token Status, Est. Wait Time + [Take Token]
         |
         +--> [🚨 Emergency SOS (108)]
         |       |
         |       +--> Direct Call 108 + Open Emergency Escalation Desk
         |
         +--> [💊 Medicine Availability]
         |       |
         |       +--> PHC Pharmacy stock summary (Paracetamol, ORS, IFA, ASV)
         |
         +--> [📋 View Patient Records]
         |       |
         |       +--> Direct redirect to Patient Health Cards database
         |
         +--> [👩‍⚕️ Speak with Duty Doctor]
                 |
                 +--> Direct redirect to Teleconsultation Room
```

---

## 6. Data Model / Schema Specification (JSON)

### Patient Record Schema
```json
{
  "id": "PAT-1001",
  "name": "Lakshmi Devi",
  "nameTe": "లక్ష్మీ దేవి",
  "nameHi": "लक्ष्मी देवी",
  "age": 26,
  "gender": "Female",
  "mobile": "9876543210",
  "village": "Ramnagar, Mandal 4",
  "condition": "Third Trimester Pregnancy (High Risk - Mild Anemia)",
  "bloodGroup": "O+",
  "abhaId": "ABHA-9281-4401-8812",
  "registeredAt": "2026-09-05 09:30 AM",
  "triageStatus": "Yellow",
  "lastVitals": {
    "bp": "110/70",
    "pulse": "78",
    "temp": "98.4 F",
    "spO2": "98%"
  }
}
```

### Queue Token Schema
```json
{
  "token": "OPD-014",
  "patientName": "Anand Kumar",
  "department": "General OPD",
  "doctor": "Dr. Sunitha Rao (MO)",
  "room": "Room 1",
  "status": "Serving",
  "waitMins": 0
}
```

### Hospital Worker Profile Schema
```json
{
  "name": "Dr. Sunitha Rao",
  "hospital": "Primary Health Centre (PHC) - Rampur",
  "department": "General Medicine"
}
```

---

## 7. Ready-to-Use 10-Slide Presentation Deck Outline

If you need to present **ChikitsaConnect** for an academic submission, hackathon, or stakeholder pitch, use this 10-slide template:

- **Slide 1: Title Slide**
  - Project: *ChikitsaConnect*
  - Tagline: *Connecting You to Care*
  - Subtitle: *Rural Health & Emergency Tele-Care Portal*
- **Slide 2: The Problem**
  - Healthcare inequity in rural areas, language barriers, delayed triage, and non-transparent referral transfers.
- **Slide 3: The Solution**
  - A tri-lingual, button-driven rural web platform with role gating, real-time patient syncing, and AI guidance.
- **Slide 4: Target Users & Role-Based Access**
  - Patient Mode (Accessible, large buttons, facility data hidden) vs. Hospital Worker Mode (Beds, oxygen, referrals).
- **Slide 5: Tri-Lingual & Accessibility Innovation**
  - English, Telugu, and Hindi UI + Web Speech API audio playback for semi-literate citizens.
- **Slide 6: Clinical Modules (1 - 4)**
  - Teleconsultation (2G Mode), OPD Queue Board, Digital Triage (Green/Yellow/Red), Live Patient Records.
- **Slide 7: Operations & Logistics Modules (5 - 8)**
  - 4-Tier Referral Pipeline, Rural Diagnostics, High-Risk Surveillance Registry, Facility Bed & Supply Dashboard.
- **Slide 8: Emergency Escalation & Button-Driven AI Guide**
  - 108 SOS dispatch, 104/102 helplines, conversational guided button chatbot.
- **Slide 9: Technical Architecture & Feasibility**
  - Client-side zero-dependency architecture, localStorage persistence, lightning-fast loading on rural low-bandwidth devices.
- **Slide 10: Future Roadmap & Impact**
  - Integration with national Ayushman Bharat Digital Mission (ABDM), WhatsApp bot integration, and offline PWA caching.
