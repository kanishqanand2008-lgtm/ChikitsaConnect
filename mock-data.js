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
      abhaId: "ABHA-5521-9988-6621",
      registeredAt: "2026-09-06 09:00 AM",
      triageStatus: "Green",
      lastVitals: { bp: "130/80", pulse: "74", temp: "98.2 F", spO2: "99%" }
    }
  ],

  queue: [
    { token: "OPD-014", patientName: "Anand Kumar", department: "General OPD", doctor: "Dr. Sunitha Rao (MO)", room: "Room 1", status: "Serving", waitMins: 0 },
    { token: "OPD-015", patientName: "Saraswathi Bai", department: "NCD Clinic (Diabetes)", doctor: "Dr. K. Srinivas", room: "Room 3", status: "Waiting", waitMins: 5 },
    { token: "OPD-016", patientName: "Lakshmi Devi", department: "Maternity / ANC", doctor: "Dr. Parvathi (OBGYN)", room: "Room 2", status: "Waiting", waitMins: 12 },
    { token: "OPD-017", patientName: "Venkatesh Naik", department: "General OPD", doctor: "Dr. Sunitha Rao (MO)", room: "Room 1", status: "Waiting", waitMins: 20 },
    { token: "OPD-018", patientName: "Padma Kumari", department: "Fever Clinic", doctor: "Dr. Sunitha Rao (MO)", room: "Room 1", status: "Waiting", waitMins: 30 }
  ],

  referrals: [
    {
      id: "REF-2026-081",
      patientName: "Ramesh Reddy",
      fromFacility: "Kothapalli Sub-Centre (PHC Rampur)",
      toFacility: "Suryapet Community Health Centre (CHC)",
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
      toFacility: "PHC Rampur Maternity Ward",
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
      fromFacility: "PHC Rampur",
      toFacility: "District Hospital - Warangal",
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
      notes: "Initiate Chloroquine + Primaquine as per NVBDCP protocol"
    },
    {
      id: "TEST-402",
      patientName: "Lakshmi Devi",
      testType: "Hemoglobin (Hb Sahli's)",
      sampleCollected: "2026-09-05 10:00 AM",
      status: "Ready",
      result: "8.9 g/dL (Mild to Moderate Anemia)",
      severity: "borderline",
      notes: "Iron Folic Acid (IFA) tablets prescribed + Dietary counseling"
    },
    {
      id: "TEST-403",
      patientName: "Saraswathi Bai",
      testType: "Random Blood Sugar (Glucometer)",
      sampleCollected: "2026-09-06 09:15 AM",
      status: "Ready",
      result: "184 mg/dL (Elevated)",
      severity: "borderline",
      notes: "Metformin 500mg dose titrated, review after 15 days"
    },
    {
      id: "TEST-404",
      patientName: "Chinnaiah Goud",
      testType: "Sputum Smear for AFB (TB Screening)",
      sampleCollected: "2026-09-06 09:30 AM",
      status: "In-Lab",
      result: "Pending Staining",
      severity: "pending",
      notes: "Collected at CBNAAT kiosk, result expected by 2:00 PM"
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
      ashaContact: "Kavitha (9123488990)",
      nextFollowUp: "2026-09-09",
      status: "Hospital Follow-up",
      village: "Kothapalli"
    },
    {
      id: "HR-304",
      patientName: "Veera Swamy (54y)",
      category: "Tuberculosis (DOTS Category 1)",
      categoryTe: "క్షయ వ్యాధి (డాట్స్ ట్రీట్‌మెంట్)",
      categoryHi: "टीबी उपचार (डॉट्स श्रेणी 1)",
      riskFactor: "Month 2 DOTS compliance check pending",
      ashaContact: "Raju Health Worker (9988776655)",
      nextFollowUp: "2026-09-07",
      status: "Dose Due Today",
      village: "Bhimavaram"
    }
  ],

  facility: {
    hospitalName: "Primary Health Centre (PHC) - Rampur",
    district: "Telangana Rural Health Network",
    totalBeds: 24,
    occupiedBeds: 16,
    vacantBeds: 8,
    icuEmergencyBeds: { total: 4, occupied: 3, vacant: 1 },
    maternityBeds: { total: 8, occupied: 6, vacant: 2 },
    generalWardBeds: { total: 12, occupied: 7, vacant: 5 },
    oxygenCylinders: { total: 14, full: 11, low: 3 },
    essentialMeds: [
      { name: "Paracetamol 500mg", stock: "2,400 tabs", status: "Adequate" },
      { name: "ORS Packets", stock: "450 pkts", status: "Adequate" },
      { name: "Anti-Snake Venom (ASV)", stock: "8 vials", status: "Low Stock Alert" },
      { name: "Iron & Folic Acid (IFA)", stock: "1,800 tabs", status: "Adequate" },
      { name: "Amoxicillin 250mg", stock: "900 tabs", status: "Adequate" },
      { name: "Insulin Regular Vials", stock: "5 vials", status: "Critical" }
    ],
    staffOnDuty: [
      { role: "Medical Officer", name: "Dr. Sunitha Rao, MBBS", shift: "Morning (8 AM - 2 PM)", phone: "9440123999" },
      { role: "Staff Nurse", name: "Anitha Devi, GNM", shift: "Morning (8 AM - 2 PM)", phone: "9440123888" },
      { role: "Lab Technician", name: "Suresh Kumar, DMLT", shift: "General (9 AM - 4 PM)", phone: "9440123777" },
      { role: "108 Driver on Standby", name: "Mallesh G.", shift: "Emergency 24x7", phone: "9440123666" }
    ]
  }
};
