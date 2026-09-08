// ChikitsaConnect - Mock Healthcare Data for Rural Health Centers
// Seed data used when localStorage is fresh

const DEFAULT_MOCK_DATA = {
  patients: [
    {
      id: "PAT-1001",
      name: "Lakshmi Devi",
      nameTe: "లక్ష్మీ దేవి",
      nameHi: "लक्ष्मी देवी",
      age: 26,
      gender: "Female",
      mobile: "9876543210",
      village: "Ramnagar, Mandal 4",
      condition: "Third Trimester Pregnancy (High Risk - Mild Anemia)",
      bloodGroup: "O+",
      token: "OPD-016",
      abhaId: "ABHA-9281-4401-8812",
      registeredAt: "2026-09-05 09:30 AM",
      triageStatus: "Yellow",
      lastVitals: { bp: "110/70", pulse: "78", temp: "98.4 F", spO2: "98%" }
    },
    {
      id: "PAT-1002",
      name: "Ramesh Reddy",
      nameTe: "రమేష్ రెడ్డి",
      nameHi: "रमेश रेड्डी",
      age: 48,
      gender: "Male",
      mobile: "9440112233",
      village: "Kothapalli Sub-centre",
      condition: "High Blood Pressure & Severe Dizziness",
      bloodGroup: "B+",
      token: "OPD-017",
      abhaId: "ABHA-4412-8876-1190",
      registeredAt: "2026-09-05 11:15 AM",
      triageStatus: "Red",
      lastVitals: { bp: "175/105", pulse: "92", temp: "99.1 F", spO2: "96%" }
    },
    {
      id: "PAT-1003",
      name: "Anand Kumar",
      nameTe: "ఆనంద్ కుమార్",
      nameHi: "आनंद कुमार",
      age: 8,
      gender: "Male",
      mobile: "9848123456",
      village: "Chenchu Colony",
      condition: "High Fever & Chills (Suspected Malaria)",
      bloodGroup: "A+",
      token: "OPD-014",
      abhaId: "ABHA-1109-7762-3344",
      registeredAt: "2026-09-06 08:20 AM",
      triageStatus: "Yellow",
      lastVitals: { bp: "100/65", pulse: "105", temp: "103.2 F", spO2: "97%" }
    },
    {
      id: "PAT-1004",
      name: "Saraswathi Bai",
      nameTe: "సరస్వతి బాయి",
      nameHi: "सरस्वती बाई",
      age: 62,
      gender: "Female",
      mobile: "9123456780",
      village: "Bhimavaram Post",
      condition: "Type 2 Diabetes Routine Checkup & Eye Blur",
      bloodGroup: "AB+",
      token: "OPD-015",
      abhaId: "ABHA-5521-9988-6621",
      registeredAt: "2026-09-06 09:00 AM",
      triageStatus: "Green",
      lastVitals: { bp: "130/80", pulse: "74", temp: "98.2 F", spO2: "99%" }
    }
  ],

  queue: [
    { token: "OPD-014", patientName: "Anand Kumar", department: "Paediatrics", doctor: "Dr. Kaarthikeya, MD", room: "Room 104", status: "Serving", waitMins: 0 },
    { token: "OPD-015", patientName: "Saraswathi Bai", department: "Cardiology", doctor: "Dr. Likith, DM", room: "Room 102", status: "Waiting", waitMins: 5 },
    { token: "OPD-016", patientName: "Lakshmi Devi", department: "Gynaecology", doctor: "Dr. Aadhya, MS", room: "Room 105", status: "Waiting", waitMins: 12 },
    { token: "OPD-017", patientName: "Ramesh Reddy", department: "Neurology", doctor: "Dr. Kanishq, MD", room: "Room 101", status: "Waiting", waitMins: 20 },
    { token: "OPD-018", patientName: "Balaram Naik", department: "Orthopaedics", doctor: "Dr. Harish, MS", room: "Room 103", status: "Waiting", waitMins: 30 }
  ],

  referrals: [
    {
      id: "REF-2026-081",
      patientName: "Ramesh Reddy",
      fromFacility: "Kothapalli Sub-Centre",
      toFacility: "ABCD HOSPITAL (Neurology Unit)",
      reason: "Severe Hypertensive Emergency with suspected TIA",
      urgency: "Immediate (Red)",
      transport: "108 Ambulance (Vehicle AP-29-TA-1088)",
      status: "In-Transit",
      referredTime: "2026-09-06 10:15 AM",
      ashaWorker: "Kavitha (ASHA 04)"
    },
    {
      id: "REF-2026-082",
      patientName: "Lakshmi Devi",
      fromFacility: "Ramnagar ASHA Unit",
      toFacility: "ABCD HOSPITAL (Maternity Wing)",
      reason: "High-risk ANC screening - Anemia & Twin pregnancy",
      urgency: "Routine (Yellow)",
      transport: "102 Janani Express",
      status: "Admitted",
      referredTime: "2026-09-05 02:00 PM",
      ashaWorker: "Sarojini (ASHA 12)"
    },
    {
      id: "REF-2026-083",
      patientName: "Balaram Naik",
      fromFacility: "Village Health Post",
      toFacility: "ABCD HOSPITAL (Orthopaedics)",
      reason: "Compound fracture of right tibia due to tractor accident",
      urgency: "Emergency (Red)",
      transport: "108 Ambulance",
      status: "Completed",
      referredTime: "2026-09-04 06:40 PM",
      ashaWorker: "Raju (Health Supervisor)"
    }
  ],

  diagnostics: [
    {
      id: "TEST-401",
      patientName: "Anand Kumar",
      testType: "Rapid Malaria Antigen (Pf/Pv)",
      sampleCollected: "2026-09-06 08:45 AM",
      status: "Ready",
      result: "Positive for P. vivax",
      severity: "abnormal",
      notes: "Dr. Kaarthikeya (Paediatrics): Chloroquine protocol initiated"
    },
    {
      id: "TEST-402",
      patientName: "Lakshmi Devi",
      testType: "Hemoglobin (Hb Sahli's)",
      sampleCollected: "2026-09-05 10:00 AM",
      status: "Ready",
      result: "8.9 g/dL (Mild to Moderate Anemia)",
      severity: "borderline",
      notes: "Dr. Aadhya (Gynaecology): IFA prescribed + Diet counseling"
    },
    {
      id: "TEST-403",
      patientName: "Saraswathi Bai",
      testType: "Random Blood Sugar (Glucometer)",
      sampleCollected: "2026-09-06 09:15 AM",
      status: "Ready",
      result: "184 mg/dL (Elevated)",
      severity: "borderline",
      notes: "Dr. Likith (Cardiology): Metformin dose adjusted"
    },
    {
      id: "TEST-404",
      patientName: "Veera Swamy",
      testType: "Sputum Smear for AFB (TB Screening)",
      sampleCollected: "2026-09-06 09:30 AM",
      status: "In-Lab",
      result: "Pending Staining",
      severity: "pending",
      notes: "Collected at CBNAAT kiosk, result expected today"
    }
  ],

  highRisk: [
    {
      id: "HR-301",
      patientName: "Lakshmi Devi",
      category: "High-Risk Pregnancy (ANC)",
      categoryTe: "అధిక ప్రమాద గర్భం (ANC)",
      categoryHi: "उच्च जोखिम गर्भावस्था (ANC)",
      riskFactor: "Severe Anemia (Hb 8.9), Gravida 2",
      doctorAssigned: "Dr. Aadhya (Gynaecology)",
      ashaContact: "Sarojini (9876541122)",
      nextFollowUp: "2026-09-12",
      status: "Due Soon",
      village: "Ramnagar"
    },
    {
      id: "HR-302",
      patientName: "Baby Charan (14 months)",
      category: "Severe Acute Malnutrition (SAM)",
      categoryTe: "తీవ్రమైన పోషకాహార లోపం (SAM)",
      categoryHi: "गंभीर तीव्र कुपोषण (SAM)",
      riskFactor: "MUAC < 11.5 cm, Underweight for age",
      doctorAssigned: "Dr. Kaarthikeya (Paediatrics)",
      ashaContact: "Manjula (9440887711)",
      nextFollowUp: "2026-09-08",
      status: "Urgent Home Visit",
      village: "Chenchu Colony"
    },
    {
      id: "HR-303",
      patientName: "Ramesh Reddy",
      category: "Uncontrolled Hypertension & Stroke Risk",
      categoryTe: "అదుపులేని అధిక రక్తపోటు (స్ట్రోక్ ముప్పు)",
      categoryHi: "अनियंत्रित उच्च रक्तचाप (स्ट्रोक का खतरा)",
      riskFactor: "BP 175/105 with recurrent dizziness",
      doctorAssigned: "Dr. Kanishq (Neurology)",
      ashaContact: "Kavitha (9123488990)",
      nextFollowUp: "2026-09-09",
      status: "Hospital Follow-up",
      village: "Kothapalli"
    },
    {
      id: "HR-304",
      patientName: "Veera Swamy (54y)",
      category: "Oncology & Chest Evaluation",
      categoryTe: "ఆంకాలజీ & శ్వాసకోశ పరీక్ష",
      categoryHi: "ऑन्कोलॉजी एवं छाती परीक्षण",
      riskFactor: "Persistent haemoptysis and chest mass evaluation",
      doctorAssigned: "Dr. Keerthi (Oncology)",
      ashaContact: "Raju Health Worker (9988776655)",
      nextFollowUp: "2026-09-10",
      status: "Consultation Due",
      village: "Bhimavaram"
    }
  ],

  facility: {
    hospitalName: "ABCD HOSPITAL",
    pinCode: "2026",
    district: "Central Healthcare Zone",
    totalBeds: 50,
    occupiedBeds: 34,
    vacantBeds: 16,
    icuEmergencyBeds: { total: 10, occupied: 7, vacant: 3 },
    maternityBeds: { total: 15, occupied: 11, vacant: 4 },
    generalWardBeds: { total: 25, occupied: 16, vacant: 9 },
    oxygenCylinders: { total: 30, full: 24, low: 6 },
    departments: [
      {
        id: "dept-neuro",
        name: "NEUROLOGY",
        nameTe: "న్యూరాలజీ (మెదడు & నరాల విభాగం)",
        nameHi: "न्यूरोलॉजी (तंत्रिका विज्ञान)",
        icon: "🧠",
        doctorName: "Dr. Kanishq",
        qualification: "MD, DM (Neurology)",
        room: "Room 101 (OPD Block A)",
        timings: "09:00 AM - 02:00 PM",
        status: "Available Today",
        activeCases: 12
      },
      {
        id: "dept-cardio",
        name: "CARDIOLOGY",
        nameTe: "కార్డియాలజీ (గుండె జబ్బుల విభాగం)",
        nameHi: "कार्डियोलॉजी (हृदय रोग विभाग)",
        icon: "❤️",
        doctorName: "Dr. Likith",
        qualification: "MD, DM (Cardiology)",
        room: "Room 102 (Cardiac Wing)",
        timings: "08:30 AM - 01:30 PM",
        status: "Available Today",
        activeCases: 18
      },
      {
        id: "dept-ortho",
        name: "ORTHOPAEDICS",
        nameTe: "ఆర్థోపెడిక్స్ (ఎముకలు & కీళ్ళ విభాగం)",
        nameHi: "ऑर्थोपेडिक्स (हड्डी एवं जोड़ रोग)",
        icon: "🦴",
        doctorName: "Dr. Harish",
        qualification: "MS (Orthopaedics)",
        room: "Room 103 (Trauma Centre)",
        timings: "09:00 AM - 03:00 PM",
        status: "Available Today",
        activeCases: 15
      },
      {
        id: "dept-paed",
        name: "PAEDIATRICS",
        nameTe: "పీడియాట్రిక్స్ (పిల్లల వైద్య విభాగం)",
        nameHi: "पीडियाट्रिक्स (बाल रोग विभाग)",
        icon: "👶",
        doctorName: "Dr. Kaarthikeya",
        qualification: "MD (Paediatrics), DCH",
        room: "Room 104 (Child Care Block)",
        timings: "08:00 AM - 01:00 PM",
        status: "Available Today",
        activeCases: 22
      },
      {
        id: "dept-gynae",
        name: "GYNAECOLOGY",
        nameTe: "గైనకాలజీ (స్త్రీ & ప్రసూతి విభాగం)",
        nameHi: "गाइनेकोलॉजी (स्त्री एवं प्रसूति रोग)",
        icon: "🤰",
        doctorName: "Dr. Aadhya",
        qualification: "MS (OBGYN), DGO",
        room: "Room 105 (Maternity Wing)",
        timings: "09:00 AM - 02:00 PM",
        status: "Available Today",
        activeCases: 19
      },
      {
        id: "dept-onco",
        name: "ONCOLOGY",
        nameTe: "ఆంకాలజీ (క్యాన్సర్ చికిత్సా విభాగం)",
        nameHi: "ऑन्कोलॉजी (कैंसर चिकित्सा विभाग)",
        icon: "🎗️",
        doctorName: "Dr. Keerthi",
        qualification: "MD, DNB (Medical Oncology)",
        room: "Room 106 (Day Care Block)",
        timings: "10:00 AM - 03:00 PM",
        status: "Available Today",
        activeCases: 8
      }
    ],
    essentialMeds: [
      { name: "Paracetamol 500mg", stock: "4,800 tabs", status: "Adequate" },
      { name: "ORS Packets", stock: "900 pkts", status: "Adequate" },
      { name: "Anti-Snake Venom (ASV)", stock: "24 vials", status: "Adequate" },
      { name: "Iron & Folic Acid (IFA)", stock: "3,200 tabs", status: "Adequate" },
      { name: "Ceftriaxone 1g Injections", stock: "140 vials", status: "Adequate" },
      { name: "Insulin Regular Vials", stock: "25 vials", status: "Adequate" }
    ],
    staffOnDuty: [
      { role: "Neurologist", name: "Dr. Kanishq", dept: "NEUROLOGY", shift: "Morning", phone: "9440123101" },
      { role: "Cardiologist", name: "Dr. Likith", dept: "CARDIOLOGY", shift: "Morning", phone: "9440123102" },
      { role: "Orthopaedic Surgeon", name: "Dr. Harish", dept: "ORTHOPAEDICS", shift: "Morning", phone: "9440123103" },
      { role: "Paediatrician", name: "Dr. Kaarthikeya", dept: "PAEDIATRICS", shift: "Morning", phone: "9440123104" },
      { role: "Gynaecologist", name: "Dr. Aadhya", dept: "GYNAECOLOGY", shift: "Morning", phone: "9440123105" },
      { role: "Oncologist", name: "Dr. Keerthi", dept: "ONCOLOGY", shift: "Morning", phone: "9440123106" }
    ]
  },

  // Centralized audit database where every input is logged
  database: [
    {
      id: "LOG-1001",
      timestamp: "2026-09-08 09:00:15",
      type: "WORKER_AUTH",
      actor: "Dr. Kanishq (Staff)",
      summary: "Healthcare Worker verified at ABCD HOSPITAL (Department: NEUROLOGY, PIN: 2026)",
      payload: { hospital: "ABCD HOSPITAL", staff: "KANISHQ", department: "NEUROLOGY", pin: "2026" }
    },
    {
      id: "LOG-1002",
      timestamp: "2026-09-08 09:15:20",
      type: "PATIENT_REGISTRATION",
      actor: "Patient Registration Desk",
      summary: "Patient Lakshmi Devi registered with ABHA-9281-4401-8812 and auto-assigned Token OPD-016",
      payload: { name: "Lakshmi Devi", age: 26, mobile: "9876543210", token: "OPD-016", triage: "Yellow", condition: "Third Trimester Pregnancy" }
    },
    {
      id: "LOG-1003",
      timestamp: "2026-09-08 09:30:45",
      type: "QUEUE_TOKEN",
      actor: "Token Dispenser System",
      summary: "New OPD Token OPD-014 generated for Anand Kumar (Department: Paediatrics, Room 104)",
      payload: { token: "OPD-014", patient: "Anand Kumar", doctor: "Dr. Kaarthikeya", waitMins: 0 }
    },
    {
      id: "LOG-1004",
      timestamp: "2026-09-08 09:45:10",
      type: "TRIAGE_CHECK",
      actor: "Digital Triage Kiosk",
      summary: "Triage completed for Ramesh Reddy: Severe Dizziness & BP 175/105 flagged as RED EMERGENCY",
      payload: { patient: "Ramesh Reddy", severity: "Red", symptoms: "Hypertensive Crisis", action: "Emergency Escalation" }
    },
    {
      id: "LOG-1005",
      timestamp: "2026-09-08 10:00:30",
      type: "BED_UPDATE",
      actor: "Dr. Harish (Staff)",
      summary: "Bed occupancy updated at ABCD HOSPITAL: Occupied: 34 / 50 (Vacant: 16)",
      payload: { totalBeds: 50, occupied: 34, vacant: 16 }
    }
  ]
};
