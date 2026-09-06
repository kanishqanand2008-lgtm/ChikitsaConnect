# ChikitsaConnect - Connecting You to Care

A comprehensive, rural-first healthcare web portal designed for ease of use by rural citizens and healthcare workers. It includes tri-lingual support (English, Telugu, Hindi), role-based access control (Patient vs. Healthcare Worker), button-driven AI hospital assistant ("Chikitsa AI"), and all 9 essential clinical and administrative modules.

---

## User Review Required

> [!IMPORTANT]
> **No External Node/Python Runtime Required**: The platform will be built as a self-contained, responsive Single-Page Application (SPA) using HTML5, modern CSS, and modular ES6 JavaScript with persistent browser storage (`localStorage`). This allows it to run instantly in any web browser (Chrome, Edge, Firefox, Mobile browsers) without needing npm/node installation.

> [!NOTE]
> **Role-Based Access Control**:
> - **Patient Mode**: Simple, high-contrast, large-button interface. The **Facility Dashboard is strictly hidden**.
> - **Healthcare Worker Mode**: Requires entering Hospital Name and Department. Grants full access to all 9 modules, including the **Facility Dashboard**, Bed Occupancy, Triage Escalations, and Referral Management.

---

## Proposed Modules & Architecture

### 1. Welcome & Onboarding Flow
- **Language Selector Modal**: Prompt upon opening: **English**, **తెలుగు (Telugu)**, or **हिंदी (Hindi)**. Seamless language switcher always accessible in the top navigation.
- **Role Selection Gate**:
  - **I am a Patient / నేను రోగిని / मैं मरीज हूँ**: Direct access to patient services.
  - **I am a Hospital Worker / నేను ఆసుపత్రి కార్యకర్తను / मैं अस्पताल कार्यकर्ता हूँ**: Prompts for Worker Name, Hospital/PHC Name (e.g., *PHC Rampur*, *CHC Suryapet*), and Department (General Medicine, Maternity/ANC, Emergency, Pediatrics, Diagnostics, ASHA/ANM).

---

### 2. Core 9 Healthcare Modules

| # | Module | Key Features & Rural-Friendly Design |
|---|---|---|
| 1 | **Teleconsultation** | Virtual doctor consultation room simulation with video/audio toggles, network-resilient low-bandwidth mode (2G/3G friendly), doctor prescription pad, and appointment scheduling. |
| 2 | **Appointment & Queue** | 1-click token generation, live visual token status board ("Now Serving", "Your Token", "Est. Wait Time"), audio token call-out ("టోకెన్ 14..."). |
| 3 | **Digital Triage** | Button-based symptom checklist (Fever, Breathing issue, Severe pain, Maternal emergency, Injury/Bite). Visual color-coded severity: 🟢 Green (Routine OPD), 🟡 Yellow (Urgent care), 🔴 Red (Immediate Emergency Escalation). |
| 4 | **Patient Records** | New patient registration form (Name, Age, Gender, Village, Phone, Medical History). **Live instant sync**: Any patient entered is immediately visible in the Records database with health card view & print/export. |
| 5 | **Referral Tracking** | Multi-tier transfer tracking: Sub-Centre / ASHA ➔ Primary Health Centre (PHC) ➔ Community Health Centre (CHC) ➔ District Hospital. Live transfer status (Pending, In-Transit, Admitted, Completed). |
| 6 | **Diagnostics** | Lab tests tracking (Hemoglobin/Anemia, Blood Glucose, Malaria Rapid Test, Sputum TB, Dengue, Urine test). Visual indicator of test results with normal vs abnormal alert flags. |
| 7 | **High-Risk Follow-up** | Active surveillance registry for high-risk rural groups: High-Risk Pregnancy (ANC), Severe Acute Malnutrition (SAM/MAM), Uncontrolled Hypertension, Diabetes, and TB (DOTS). Schedule reminders and ASHA home visit tracking. |
| 8 | **Facility Dashboard** *(Workers Only)* | Real-time bed occupancy (General, Maternity, ICU, Emergency), oxygen & essential drug inventory, today's OPD metrics, incoming referrals, and emergency case board. |
| 9 | **Emergency Escalation** | 1-touch 108 Ambulance SOS simulation, instant red-alert trigger to emergency desk, 108/104/102 rural helpline quick dialers, and village GPS coordinate locator. |

---

### 3. Button-Driven AI Hospital Assistant ("Sanjeevani AI")
- Accessible via a floating assistant button or the "Contact Hospital" menu.
- **100% Button-Type Interactive Guided Flow** (with voice readout in Telugu, Hindi, and English):
  - 🩺 *Check Symptoms & Triage* (Fever, Cough, Injury, Stomach Pain, Pregnancy pain)
  - 📅 *Book a Token / Queue Status*
  - 🚨 *Emergency Help & Ambulance 108*
  - 💊 *Medicine & Pharmacy Availability*
  - 📞 *Speak / Connect to On-Duty Nurse/Doctor*
  - 📋 *Find My Medical Records*

---

## Proposed Project Structure

```
C:\Users\kanis\.gemini\antigravity\scratch\rural-health-portal\
├── index.html          # Main application structure, modular screens, accessibility helpers
├── styles.css          # High-contrast, rural-friendly CSS (large buttons, responsive cards, clean typography)
├── app.js             # Core reactive app logic:
│                       #  - Localization engine (English, Telugu, Hindi)
│                       #  - Role-based access control (Worker vs Patient)
│                       #  - LocalStorage database (Records, Tokens, Referrals, Triage)
│                       #  - Speech Synthesis (Audio guidance in Telugu/Hindi/English)
│                       #  - Button-driven AI Assistant engine
├── mock-data.js       # Pre-seeded rural healthcare data (records, tokens, beds, referrals)
└── README.md          # User manual with setup & test walk-through
```

---

## Verification Plan

### Automated / Syntax Check
- Verify JavaScript code syntax and validity using PowerShell / browser execution test.

### Manual Verification
1. **Language Switching**: Test initial selection modal and header switcher for English, Telugu (తెలుగు), and Hindi (हिंदी). Verify UI text and speech synthesis readouts.
2. **Role Gating**:
   - Log in as **Patient**: Verify that **Facility Dashboard** is completely hidden and inaccessible.
   - Switch/Log in as **Healthcare Worker**: Verify prompt for Hospital Name and Department, and verify full access to Facility Dashboard with real-time bed metrics.
3. **Patient Registration & Instant Record Visibility**:
   - Register a new patient in "Patient Records" or "Digital Triage".
   - Confirm the record immediately appears in the Patient Records list without needing a page refresh.
4. **Interactive AI Assistant**:
   - Click "Contact Hospital / AI Assistant".
   - Test button-type guided triage, booking token, and emergency guidance.
5. **Emergency Escalation**:
   - Click 108 SOS button and verify priority alert propagation.
