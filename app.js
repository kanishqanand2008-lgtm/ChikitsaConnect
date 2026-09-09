// ChikitsaConnect - Rural Healthcare Platform
// Core Application Logic: Tri-lingual localization, Role-based access, Button-driven AI Assistant, and 9 Modules

// TRANSLATIONS DICTIONARY (English, Telugu, Hindi)
const I18N = {
  en: {
    siteTitle: "ChikitsaConnect",
    siteTagline: "Connecting You to Care",
    patientMode: "Patient Mode",
    workerMode: "Hospital Staff",
    switchRole: "Switch Role",
    changeLang: "Language",
    emergencySOS: "Emergency 108",
    navTelecon: "Teleconsultation",
    navQueue: "Appointments & Queue",
    navTriage: "Digital Triage",
    navRecords: "Patient Records",
    navReferrals: "Referral Tracking",
    navDiagnostics: "Diagnostics",
    navHighRisk: "High-Risk Follow-up",
    navFacility: "Facility & Doctors",
    navEmergency: "Emergency Escalation",
    navDatabase: "Central Database",
    workerOnly: "Staff Only",
    aiAssistantTitle: "Chikitsa AI - Hospital Guide",
    aiHelpBtn: "Contact Hospital / AI Guide",
    aiGreeting: "Namaste! I am Chikitsa AI, your 24/7 hospital assistant. How can I guide you today? Please tap a button below:",
    listenAudio: "Listen",
    nowServing: "Now Serving",
    yourToken: "Your Token",
    estWait: "Est. Wait Time",
    peopleAhead: "People Ahead",
    generateToken: "Take New OPD Token",
    registerPatient: "Register New Patient",
    searchPatient: "Search by Name or ABHA ID...",
    callAmbulance: "Call 108 Ambulance",
    hospitalWorkerPromptTitle: "Healthcare Worker Verification",
    workerNameLabel: "Your Full Name:",
    hospitalNameLabel: "Hospital / PHC Name:",
    deptLabel: "Department / Role:",
    saveWorkerBtn: "Confirm and Submit",
    selectRoleTitle: "Welcome to ChikitsaConnect",
    selectRoleSubtitle: "Please choose how you are using this platform:",
    rolePatientDesc: "I need doctor consultation, token, symptoms check, or test records",
    roleWorkerDesc: "I work in a PHC, Sub-Centre, Hospital, or ASHA network",
    iAmPatient: "I am a Patient",
    iAmWorker: "I am a Hospital Worker",
    triageDesc: "Rural symptom assessment to determine if your condition is mild, urgent, or an emergency.",
    triageScoreMild: "Mild (Green) - Routine Care",
    triageScoreUrgent: "Urgent (Yellow) - Needs PHC Doctor Visit",
    triageScoreEmergency: "EMERGENCY (Red) - Immediate Hospitalization / 108",
    closeBtn: "Close",
    submitBtn: "Submit",
    confirmAndSubmit: "Confirm and Submit",
    cancelBtn: "Cancel",
    saveSuccess: "Saved successfully!"
  },
  te: {
    siteTitle: "చికిత్స కనెక్ట్",
    siteTagline: "Connecting You to Care (మిమ్మల్ని వైద్య సంరక్షణతో అనుసంధానిస్తుంది)",
    patientMode: "రోగి మోడ్",
    workerMode: "ఆసుపత్రి సిబ్బంది",
    switchRole: "రోల్ మార్చండి",
    changeLang: "భాష",
    emergencySOS: "అత్యవసరం 108",
    navTelecon: "టెలికన్సల్టేషన్",
    navQueue: "టోకెన్లు & క్యూ",
    navTriage: "డిజిటల్ ట్రియాజ్",
    navRecords: "రోగి రికార్డులు",
    navReferrals: "రిఫరల్ ట్రాకింగ్",
    navDiagnostics: "పరీక్షలు & ల్యాబ్",
    navHighRisk: "అధిక ప్రమాద పర్యవేక్షణ",
    navFacility: "సౌకర్యాలు & వైద్యులు",
    navEmergency: "అత్యవసర స్పందన",
    navDatabase: "కేంద్ర డేటాబేస్",
    workerOnly: "సిబ్బందికి మాత్రమే",
    aiAssistantTitle: "చికిత్స AI - ఆసుపత్రి సహాయకుడు",
    aiHelpBtn: "ఆసుపత్రిని సంప్రదించండి / AI గైడ్",
    aiGreeting: "నమస్కారం! నేను మీ చికిత్స AI సహాయకుడిని. మీకు ఎలాంటి సహాయం కావాలి? దయచేసి క్రింది బటన్ నొక్కండి:",
    listenAudio: "వినండి",
    nowServing: "ప్రస్తుతం చూస్తున్న టోకెన్",
    yourToken: "మీ టోకెన్",
    estWait: "నిరీక్షణ సమయం",
    peopleAhead: "ముందున్న వ్యక్తులు",
    generateToken: "కొత్త OPD టోకెన్ తీసుకోండి",
    registerPatient: "కొత్త రోగిని నమోదు చేయండి",
    searchPatient: "పేరు లేదా ABHA ID ద్వారా వెతకండి...",
    callAmbulance: "108 అంబులెన్స్‌కు కాల్ చేయండి",
    hospitalWorkerPromptTitle: "ఆసుపత్రి సిబ్బంది ధృవీకరణ",
    workerNameLabel: "మీ పూర్తి పేరు:",
    hospitalNameLabel: "ఆసుపత్రి / PHC పేరు:",
    deptLabel: "విభాగం / హోదా:",
    saveWorkerBtn: "ధృవీకరించి సమర్పించండి (Confirm and Submit)",
    selectRoleTitle: "చికిత్స కనెక్ట్‌కు స్వాగతం",
    selectRoleSubtitle: "మీరు ఈ వెబ్‌సైట్‌ను ఎలా ఉపయోగించాలనుకుంటున్నారు?",
    rolePatientDesc: "నాకు డాక్టర్ సలహా, టోకెన్, జబ్బు తనిఖీ లేదా రిపోర్టులు కావాలి",
    roleWorkerDesc: "నేను PHC, సబ్-సెంటర్, ఆసుపత్రి లేదా ఆశా కార్యకర్తగా పనిచేస్తున్నాను",
    iAmPatient: "నేను రోగిని",
    iAmWorker: "నేను ఆసుపత్రి కార్యకర్తను",
    triageDesc: "మీ అనారోగ్యం సాధారణమైనదా, తక్షణ చికిత్స అవసరమా లేదా అత్యవసరమా అని సులభంగా తెలుసుకోండి.",
    triageScoreMild: "సాధారణం (ఆకుపచ్చ) - ప్రాథమిక సంరక్షణ",
    triageScoreUrgent: "జాగ్రత్త (పసుపు) - PHC డాక్టర్‌ను కలవాలి",
    triageScoreEmergency: "అత్యవసరం (ఎరుపు) - వెంటనే ఆసుపత్రికి వెళ్లాలి / 108",
    closeBtn: "మూసివేయి",
    submitBtn: "సమర్పించు",
    confirmAndSubmit: "ధృవీకరించి సమర్పించండి (Confirm and Submit)",
    cancelBtn: "రద్దు",
    saveSuccess: "విజయవంతంగా భద్రపరచబడింది!"
  },
  hi: {
    siteTitle: "चिकित्सा कनेक्ट",
    siteTagline: "Connecting You to Care (स्वास्थ्य देखभाल से आपका जुड़ाव)",
    patientMode: "मरीज मोड",
    workerMode: "अस्पताल स्टाफ",
    switchRole: "रोल बदलें",
    changeLang: "भाषा",
    emergencySOS: "आपातकालीन 108",
    navTelecon: "टेलीपरामर्श",
    navQueue: "अपॉइंटमेंट और कतार",
    navTriage: "डिजिटल ट्राइएज",
    navRecords: "मरीज रिकॉर्ड",
    navReferrals: "रेफरल ट्रैकिंग",
    navDiagnostics: "जांच और टेस्ट",
    navHighRisk: "उच्च जोखिम निगरानी",
    navFacility: "सुविधा व डॉक्टर्स",
    navEmergency: "आपातकालीन सहायता",
    navDatabase: "केंद्रीय डेटाबेस",
    workerOnly: "केवल स्टाफ",
    aiAssistantTitle: "चिकित्सा AI - अस्पताल गाइड",
    aiHelpBtn: "अस्पताल से संपर्क करें / AI गाइड",
    aiGreeting: "नमस्ते! मैं चिकित्सा AI हूँ, आपकी 24/7 अस्पताल सहायक। आज मैं आपकी क्या मदद कर सकती हूँ? कृपया नीचे दिए गए बटन पर टैप करें:",
    listenAudio: "सुनें",
    nowServing: "वर्तमान टोकन नंबर",
    yourToken: "आपका टोकन",
    estWait: "अनुमानित प्रतीक्षा समय",
    peopleAhead: "आगे लोग",
    generateToken: "नया OPD टोकन लें",
    registerPatient: "नए मरीज का पंजीकरण करें",
    searchPatient: "नाम या ABHA ID से खोजें...",
    callAmbulance: "108 एम्बुलेंस को कॉल करें",
    hospitalWorkerPromptTitle: "अस्पताल कार्यकर्ता सत्यापन",
    workerNameLabel: "आपका पूरा नाम:",
    hospitalNameLabel: "अस्पताल / PHC का नाम:",
    deptLabel: "विभाग / पद:",
    saveWorkerBtn: "पुष्टि करें और जमा करें (Confirm and Submit)",
    selectRoleTitle: "चिकित्सा कनेक्ट में आपका स्वागत है",
    selectRoleSubtitle: "कृपया चुनें कि आप इस पोर्टल का उपयोग किस रूप में कर रहे हैं:",
    rolePatientDesc: "मुझे डॉक्टर की सलाह, टोकन, लक्षण जांच या टेस्ट रिपोर्ट चाहिए",
    roleWorkerDesc: "मैं प्राथमिक स्वास्थ्य केंद्र (PHC), अस्पताल या आशा कार्यकर्ता हूँ",
    iAmPatient: "मैं एक मरीज हूँ",
    iAmWorker: "मैं अस्पताल कार्यकर्ता हूँ",
    triageDesc: "लक्षणों की जांच करें और जानें कि आपकी स्थिति सामान्य है, गंभीर है या तुरंत अस्पताल जाने की जरूरत है।",
    triageScoreMild: "सामान्य (हरा) - घर पर आराम / सामान्य OPD",
    triageScoreUrgent: "सावधानी (पीला) - 24 घंटे में डॉक्टर को दिखाएं",
    triageScoreEmergency: "आपातकालीन (लाल) - तुरंत अस्पताल जाएं / 108 बुलाएं",
    closeBtn: "बंद करें",
    submitBtn: "जमा करें",
    confirmAndSubmit: "पुष्टि करें और जमा करें (Confirm and Submit)",
    cancelBtn: "रद्द करें",
    saveSuccess: "सफलतापूर्वक सहेजा गया!"
  }
};

// APPLICATION STATE
class ChikitsaApp {
  constructor() {
    // ALWAYS reset language and role on every opening as requested:
    // "everytime after opening the weblink it must ask the language and the whether he/she is a worker or a patient"
    this.lang = "en";
    this.role = null;
    this.workerInfo = {
      name: "",
      hospital: "",
      department: ""
    };

    // Logged-in doctors registry (Doctor must log in for details & availability to be seen by patients)
    this.loggedInDoctors = JSON.parse(localStorage.getItem("chikitsa_logged_in_doctors")) || [];

    // Load or initialize Data
    this.data = {
      patients: JSON.parse(localStorage.getItem("chikitsa_patients")) || DEFAULT_MOCK_DATA.patients,
      queue: JSON.parse(localStorage.getItem("chikitsa_queue")) || DEFAULT_MOCK_DATA.queue,
      referrals: JSON.parse(localStorage.getItem("chikitsa_referrals")) || DEFAULT_MOCK_DATA.referrals,
      diagnostics: JSON.parse(localStorage.getItem("chikitsa_diagnostics")) || DEFAULT_MOCK_DATA.diagnostics,
      highRisk: JSON.parse(localStorage.getItem("chikitsa_highrisk")) || DEFAULT_MOCK_DATA.highRisk,
      facility: JSON.parse(localStorage.getItem("chikitsa_facility")) || DEFAULT_MOCK_DATA.facility,
      database: JSON.parse(localStorage.getItem("chikitsa_central_database")) || DEFAULT_MOCK_DATA.database
    };

    this.activeTab = "queue";
    this.userToken = localStorage.getItem("chikitsa_my_token") || "OPD-019";
    this.synth = window.speechSynthesis || null;

    this.init();
  }

  saveData(key) {
    if (this.data[key]) {
      const storageKey = key === "database" ? "chikitsa_central_database" : `chikitsa_${key}`;
      localStorage.setItem(storageKey, JSON.stringify(this.data[key]));
    }
  }

  init() {
    // Initialise UI strings with base language
    this.setLanguage(this.lang, false);

    // Show Role Selection Modal immediately on launch (with language choices at top)
    this.showRoleModal();

    this.bindGlobalEvents();
    this.bindPatientTriageAI();
    this.renderActiveTab();
    this.renderQueueBoard();
    this.renderPatientRecords();
    this.renderReferrals();
    this.renderDiagnostics();
    this.renderHighRisk();
    this.renderFacilityDashboard();
    this.renderDatabaseTable();
    this.setupAIAssistant();
  }


  setLanguage(langCode, reloadViews = true) {
    this.lang = langCode;

    // Update active lang buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === langCode);
    });

    // Update static i18n text on page
    const t = I18N[this.lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.dataset.i18nPh;
      if (t[key]) {
        el.placeholder = t[key];
      }
    });

    this.updateRoleBadgeUI();

    if (reloadViews) {
      this.renderActiveTab();
      this.renderQueueBoard();
      this.renderPatientRecords();
      this.renderReferrals();
      this.renderDiagnostics();
      this.renderHighRisk();
      this.renderFacilityDashboard();
      this.renderDatabaseTable();
      this.refreshAIChatGreeting();
    }
  }

  setRole(roleType, workerDetails = null) {
    this.role = roleType;

    if (roleType === "worker" && workerDetails) {
      this.workerInfo = workerDetails;
    }

    this.applyRolePermissions();
    this.updateRoleBadgeUI();
    this.renderFacilityDashboard();
  }

  applyRolePermissions() {
    const facilityNavTab = document.getElementById("tab-nav-facility");
    const workerBedControls = document.getElementById("worker-bed-controls");
    const patientBedNotice = document.getElementById("patient-bed-notice");

    // Both patients and workers can access the Facility Dashboard to view department doctors
    if (facilityNavTab) facilityNavTab.style.display = "inline-flex";

    if (this.role === "worker") {
      if (workerBedControls) workerBedControls.style.display = "block";
      if (patientBedNotice) patientBedNotice.style.display = "none";
    } else {
      if (workerBedControls) workerBedControls.style.display = "none";
      if (patientBedNotice) patientBedNotice.style.display = "block";
    }
  }

  updateRoleBadgeUI() {
    const t = I18N[this.lang] || I18N.en;
    const badgeEl = document.getElementById("active-role-badge");
    const infoEl = document.getElementById("role-info-text");

    if (!badgeEl) return;

    if (this.role === "worker") {
      badgeEl.className = "role-badge worker";
      badgeEl.textContent = t.workerMode;
      infoEl.textContent = `${this.workerInfo.name} (${this.workerInfo.hospital} - ${this.workerInfo.department})`;
    } else {
      badgeEl.className = "role-badge patient";
      badgeEl.textContent = t.patientMode;
      infoEl.textContent = this.lang === 'te' ? 'పౌర సంరక్షణ' : this.lang === 'hi' ? 'नागरिक स्वास्थ्य' : 'Citizen Care';
    }
  }

  showLanguageModal() {
    const modal = document.getElementById("modal-language");
    if (modal) modal.style.display = "flex";
  }

  closeLanguageModal() {
    const modal = document.getElementById("modal-language");
    if (modal) modal.style.display = "none";
  }

  showRoleModal() {
    const modal = document.getElementById("modal-role");
    if (modal) modal.style.display = "flex";
  }

  closeRoleModal() {
    const modal = document.getElementById("modal-role");
    if (modal) modal.style.display = "none";
  }

  showWorkerDetailsModal() {
    const modal = document.getElementById("modal-worker-details");
    if (modal) {
      const hospEl = document.getElementById("worker-hospital-input");
      const nameEl = document.getElementById("worker-name-input");
      const deptEl = document.getElementById("worker-dept-input");
      const pinEl = document.getElementById("worker-pin-input");
      const errBox = document.getElementById("worker-auth-error");

      if (hospEl) hospEl.value = "";
      if (nameEl) nameEl.value = "";
      if (deptEl) deptEl.value = "";
      if (pinEl) pinEl.value = "";
      if (errBox) {
        errBox.style.display = "none";
        errBox.innerHTML = "";
      }
      modal.style.display = "flex";
    }
  }

  closeWorkerDetailsModal() {
    const modal = document.getElementById("modal-worker-details");
    if (modal) modal.style.display = "none";
    if (!this.role) {
      this.showRoleModal();
    }
  }

  switchTab(tabId) {
    this.activeTab = tabId;

    // Update Nav buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });

    // Update views
    document.querySelectorAll(".module-view").forEach(view => {
      view.classList.toggle("active", view.id === `view-${tabId}`);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  speakText(text) {
    if (!this.synth) {
      alert("Text-to-speech is not supported on this browser.");
      return;
    }
    this.synth.cancel(); // Stop ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.lang === "te") {
      utterance.lang = "te-IN";
    } else if (this.lang === "hi") {
      utterance.lang = "hi-IN";
    } else {
      utterance.lang = "en-IN";
    }
    utterance.rate = 0.9; // Slightly slower for clarity in rural setups
    this.synth.speak(utterance);
  }

  // GLOBAL EVENTS
  bindGlobalEvents() {
    // Language buttons in header
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.setLanguage(btn.dataset.lang, true);
      });
    });

    // Language modal selection
    document.querySelectorAll(".select-lang-choice").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        this.setLanguage(lang, true);
        this.closeLanguageModal();
        if (!this.role) {
          this.showRoleModal();
        }
      });
    });


    // Role selection choices in modal
    const choosePatientBtn = document.getElementById("btn-choose-patient");
    if (choosePatientBtn) {
      choosePatientBtn.addEventListener("click", () => {
        this.setRole("patient");
        this.closeRoleModal();
      });
    }

    const chooseWorkerBtn = document.getElementById("btn-choose-worker");
    if (chooseWorkerBtn) {
      chooseWorkerBtn.addEventListener("click", () => {
        this.closeRoleModal();
        this.showWorkerDetailsModal();
      });
    }

    // Worker Form Submission with Strict Authentication Rules
    const workerForm = document.getElementById("worker-details-form");
    if (workerForm) {
      workerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const hospInput = document.getElementById("worker-hospital-input");
        const nameInput = document.getElementById("worker-name-input");
        const deptInput = document.getElementById("worker-dept-input");
        const pinInput = document.getElementById("worker-pin-input");
        const errBox = document.getElementById("worker-auth-error");

        const hospital = (hospInput ? hospInput.value : "").trim().toUpperCase();
        const rawName = (nameInput ? nameInput.value : "").trim();
        const nameUpper = rawName.toUpperCase();
        const dept = (deptInput ? deptInput.value : "").trim().toUpperCase();
        const pin = (pinInput ? pinInput.value : "").trim();

        if (errBox) {
          errBox.style.display = "none";
          errBox.innerHTML = "";
        }

        // Strict Department Mapping as specified:
        // KANISHQ -> NEUROLOGY
        // LIKITH -> CARDIOLOGY
        // HARISH -> ORTHOPAEDICS / ORTHOPAEDICES
        // KAARTHIKEYA -> PAEDIATRICS
        // AADHYA -> GYNAECOLOGY
        // KEERTHI -> ONCOLOGY
        const VALID_STAFF_MAP = {
          "KANISHQ": ["NEUROLOGY"],
          "LIKITH": ["CARDIOLOGY"],
          "HARISH": ["ORTHOPAEDICS", "ORTHOPAEDICES"],
          "KAARTHIKEYA": ["PAEDIATRICS"],
          "AADHYA": ["GYNAECOLOGY"],
          "KEERTHI": ["ONCOLOGY"]
        };

        const allowedDepts = VALID_STAFF_MAP[nameUpper];
        const isHospitalValid = hospital === "ABCD HOSPITAL";
        const isPinValid = pin === "2026";
        const isStaffValid = !!allowedDepts;
        const isDeptValid = isStaffValid && allowedDepts.includes(dept);

        // Secure verification without leaking names, departments, or PIN
        if (!isHospitalValid || !isPinValid || !isStaffValid || !isDeptValid) {
          if (errBox) {
            errBox.innerHTML = `⚠️ <strong>Authentication Failed:</strong> Invalid credentials. Please verify your hospital name, staff doctor name, assigned department, and 4-digit security PIN.`;
            errBox.style.display = "block";
          }
          return;
        }

        // Authentication Successful!
        const capitalizedName = "Dr. " + nameUpper.charAt(0) + nameUpper.slice(1).toLowerCase();
        this.setRole("worker", {
          name: capitalizedName,
          hospital: "ABCD HOSPITAL",
          department: dept
        });

        // Mark this doctor as logged in so patient can see they are available!
        this.markDoctorLoggedIn(nameUpper, dept);

        // Log to Central Database
        this.logToDatabase(
          "WORKER_AUTH",
          `${capitalizedName} (Staff)`,
          `Healthcare Worker verified and signed in at ABCD HOSPITAL (Dept: ${dept})`,
          {
            hospital: "ABCD HOSPITAL",
            staff: nameUpper,
            department: dept,
            verifiedAt: new Date().toLocaleString()
          }
        );

        // Close all onboarding modals completely and immediately open website
        document.querySelectorAll(".modal-backdrop").forEach(m => {
          m.style.display = "none";
        });
        // Open website and switch to ABCD HOSPITAL Facility Dashboard
        this.switchTab("facility");
      });
    }

    // Tab Navigation
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.switchTab(btn.dataset.tab);
      });
    });

    // SOS Emergency Button in header
    const sosBtn = document.getElementById("header-sos-btn");
    if (sosBtn) {
      sosBtn.addEventListener("click", () => {
        this.switchTab("emergency");
      });
    }

    // Register Patient Modal Open/Close
    const openAddPatientBtn = document.getElementById("btn-open-add-patient");
    if (openAddPatientBtn) {
      openAddPatientBtn.addEventListener("click", () => {
        const m = document.getElementById("modal-add-patient");
        if (m) m.style.display = "flex";
      });
    }

    const closeAddPatientBtn = document.getElementById("btn-close-add-patient");
    if (closeAddPatientBtn) {
      closeAddPatientBtn.addEventListener("click", () => {
        const m = document.getElementById("modal-add-patient");
        if (m) m.style.display = "none";
      });
    }

    // Add Patient Form Submit (Instant live update in records)
    const addPatientForm = document.getElementById("add-patient-form");
    if (addPatientForm) {
      addPatientForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleCreatePatient();
      });
    }

    // Patient Search filter
    const searchInput = document.getElementById("patient-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.renderPatientRecords(e.target.value.trim().toLowerCase());
      });
    }

    // Queue Token Generator
    const btnGetToken = document.getElementById("btn-get-token");
    if (btnGetToken) {
      btnGetToken.addEventListener("click", () => {
        this.handleGenerateToken();
      });
    }

    // Audio announcement of current token
    const btnAnnounceToken = document.getElementById("btn-announce-token");
    if (btnAnnounceToken) {
      btnAnnounceToken.addEventListener("click", () => {
        const currentToken = document.getElementById("current-queue-number").textContent;
        const msg = this.lang === 'te' ? `టోకెన్ నంబర్ ${currentToken}, దయచేసి డాక్టర్ గది నంబర్ ఒకటికి రండి.` :
                    this.lang === 'hi' ? `टोकन नंबर ${currentToken}, कृपया डॉक्टर के कमरा नंबर एक में आएं।` :
                    `Token number ${currentToken}, please proceed to Doctor Consultation Room 1.`;
        this.speakText(msg);
      });
    }

    // Digital Triage Buttons
    this.setupTriageEngine();

    // AI Hospital Assistant Drawer / Modal
    const openAIBtn = document.getElementById("open-ai-fab");
    if (openAIBtn) {
      openAIBtn.addEventListener("click", () => {
        this.openAIChat();
      });
    }

    const closeAIChat = document.getElementById("btn-close-ai-chat");
    if (closeAIChat) {
      closeAIChat.addEventListener("click", () => {
        document.getElementById("modal-ai-chat").style.display = "none";
      });
    }

    // Teleconsultation controls
    this.setupTeleconsultation();
  }

  // MODULE 1: TELECONSULTATION
  setupTeleconsultation() {
    const btnMute = document.getElementById("tele-mic-toggle");
    const btnCam = document.getElementById("tele-cam-toggle");
    const btnLowBandwidth = document.getElementById("tele-bandwidth-toggle");
    const btnEndCall = document.getElementById("tele-end-call");
    const docNoteInput = document.getElementById("tele-doc-notes");
    const btnSaveRx = document.getElementById("tele-save-rx");

    if (btnMute) {
      btnMute.addEventListener("click", () => {
        btnMute.classList.toggle("danger");
        const isMuted = btnMute.classList.contains("danger");
        btnMute.innerHTML = isMuted ? "🔇" : "🎤";
      });
    }

    if (btnCam) {
      btnCam.addEventListener("click", () => {
        btnCam.classList.toggle("danger");
        const isCamOff = btnCam.classList.contains("danger");
        btnCam.innerHTML = isCamOff ? "🚫" : "📹";
        const selfScreen = document.getElementById("patient-cam-view");
        if (selfScreen) {
          selfScreen.style.background = isCamOff ? "#000" : "#1e293b";
        }
      });
    }

    if (btnLowBandwidth) {
      btnLowBandwidth.addEventListener("click", () => {
        btnLowBandwidth.classList.toggle("active");
        const is2G = btnLowBandwidth.classList.contains("active");
        alert(is2G ? 
          (this.lang === 'te' ? "గ్రామీణ 2G/3G తక్కువ బ్యాండ్‌విడ్త్ మోడ్ ఆన్ చేయబడింది (ఆడియో ప్రాధాన్యత)." : "Rural 2G/3G Low-Bandwidth Mode Activated (Audio-first).") : 
          (this.lang === 'te' ? "సాధారణ HD వీడియో మోడ్ పునరుద్ధరించబడింది." : "Normal HD Video Mode Restored."));
      });
    }

    if (btnSaveRx && docNoteInput) {
      btnSaveRx.addEventListener("click", () => {
        const text = docNoteInput.value.trim();
        if (!text) {
          alert("Please enter doctor prescription or advice first.");
          return;
        }
        alert(this.lang === 'te' ? "ఈ-ప్రిస్క్రిప్షన్ సేవ్ చేయబడింది & రోగి రికార్డుకు జోడించబడింది!" : "E-Prescription saved and attached to patient health card!");
        
        // Log to Central Database
        this.logToDatabase(
          "TELE_PRESCRIPTION",
          this.role === "worker" ? `${this.workerInfo.name || 'Doctor'} (${this.workerInfo.department || 'Consultation'})` : "Dr. Sunitha Rao (MO)",
          `E-Prescription generated for Token OPD-014: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`,
          { token: "OPD-014", prescription: text, recordedAt: new Date().toLocaleString() }
        );

        docNoteInput.value = "";
      });
    }
  }

  // MODULE 2: APPOINTMENT & QUEUE
  renderQueueBoard() {
    const listEl = document.getElementById("queue-tokens-list");
    if (!listEl) return;

    listEl.innerHTML = "";
    this.data.queue.forEach((item, idx) => {
      const isServing = item.status === "Serving";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${item.token}</strong></td>
        <td>${item.patientName}</td>
        <td>${item.department}</td>
        <td>${item.doctor}</td>
        <td>${item.room}</td>
        <td>
          <span class="badge ${isServing ? 'badge-green' : 'badge-yellow'}">
            ${isServing ? (this.lang === 'te' ? 'సేవలో ఉంది' : this.lang === 'hi' ? 'प्रगति पर' : 'Serving') : 
                          (this.lang === 'te' ? 'వేచి ఉంది' : this.lang === 'hi' ? 'प्रतीक्षारत' : 'Waiting')}
          </span>
        </td>
        <td>${item.waitMins === 0 ? '-' : `~${item.waitMins} min`}</td>
      `;
      listEl.appendChild(tr);
    });

    const servingItem = this.data.queue.find(q => q.status === "Serving") || this.data.queue[0];
    const currentQueueNumEl = document.getElementById("current-queue-number");
    if (currentQueueNumEl && servingItem) {
      currentQueueNumEl.textContent = servingItem.token;
    }

    const myTokenEl = document.getElementById("my-token-display");
    if (myTokenEl) {
      myTokenEl.textContent = this.userToken;
    }
  }

  handleGenerateToken() {
    const patientName = prompt(this.lang === 'te' ? "రోగి పేరు నమోదు చేయండి:" : this.lang === 'hi' ? "मरीज का नाम दर्ज करें:" : "Enter patient name for new token:") || "Rural Patient";
    const nextNum = this.data.queue.length + 15;
    const newTokenId = `OPD-0${nextNum}`;
    const wait = (this.data.queue.length - 1) * 7;

    const newEntry = {
      token: newTokenId,
      patientName: patientName,
      department: "General OPD",
      doctor: "Dr. Sunitha Rao (MO)",
      room: "Room 1",
      status: "Waiting",
      waitMins: wait
    };

    this.data.queue.push(newEntry);
    this.userToken = newTokenId;
    localStorage.setItem("chikitsa_my_token", newTokenId);
    this.saveData("queue");
    this.renderQueueBoard();

    // Log to Central Database
    this.logToDatabase(
      "QUEUE_TOKEN",
      "OPD Token Kiosk",
      `New OPD Token generated: ${newTokenId} for "${patientName}" (Wait: ~${wait}m, Room: Room 1)`,
      newEntry
    );

    const successMsg = this.lang === 'te' ? 
      `మీ టోకెన్ ${newTokenId} విజయవంతంగా జనరేట్ అయ్యింది! సుమారు నిరీక్షణ సమయం: ${wait} నిమిషాలు.` : 
      `Your token ${newTokenId} has been generated! Estimated wait: ~${wait} mins.`;
    alert(successMsg);
    this.speakText(successMsg);
  }

  // MODULE 3: DIGITAL TRIAGE
  setupTriageEngine() {
    const symptomBtns = document.querySelectorAll(".triage-symptom-btn");
    const resultBox = document.getElementById("triage-result-card");
    const scoreTitle = document.getElementById("triage-score-title");
    const scoreBadge = document.getElementById("triage-score-badge");
    const scoreDesc = document.getElementById("triage-score-desc");
    const btnAction = document.getElementById("triage-action-btn");

    let selectedSeverity = "green";

    symptomBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        symptomBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const severity = btn.dataset.severity; // 'green', 'yellow', 'red'
        selectedSeverity = severity;
        const symptom = btn.dataset.symptom;

        if (resultBox) resultBox.style.display = "block";

        if (severity === "red") {
          scoreTitle.textContent = this.lang === 'te' ? "అత్యవసర పరిస్థితి (రెడ్ అలర్ట్)" : 
                                  this.lang === 'hi' ? "आपातकालीन स्थिति (रेड अलर्ट)" : "Critical Emergency (Red Alert)";
          scoreBadge.className = "badge badge-red";
          scoreBadge.textContent = "EMERGENCY";
          scoreDesc.textContent = this.lang === 'te' ? 
            "ఈ లక్షణాలు ప్రాణాంతకం కావచ్చు. వెంటనే 108 అంబులెన్స్‌ని పిలవండి లేదా సమీప ప్రభుత్వ ఆసుపత్రి ఎమర్జెన్సీ విభాగానికి వెళ్ళండి!" :
            this.lang === 'hi' ?
            "ये लक्षण जानलेवा हो सकते हैं। कृपया तुरंत 108 एम्बुलेंस बुलाएं या नजदीकी सरकारी अस्पताल पहुंचें!" :
            "These symptoms require immediate emergency intervention. Dispatch 108 Ambulance or rush to nearest PHC Emergency Ward!";
          
          btnAction.textContent = this.lang === 'te' ? "🚨 108 అంబులెన్స్ పిలవండి" : "🚨 Call 108 Ambulance";
          btnAction.className = "btn btn-danger btn-lg";
          btnAction.onclick = () => { this.switchTab("emergency"); };

          this.speakText(this.lang === 'te' ? "అత్యవసరం! వెంటనే ఆసుపత్రికి వెళ్ళండి." : "Emergency! Please seek immediate medical help.");
        } else if (severity === "yellow") {
          scoreTitle.textContent = this.lang === 'te' ? "జాగ్రత్త అవసరం (ఎల్లో కేర్)" : 
                                  this.lang === 'hi' ? "सावधानी की आवश्यकता (येलो केयर)" : "Urgent Doctor Review (Yellow Care)";
          scoreBadge.className = "badge badge-yellow";
          scoreBadge.textContent = "URGENT";
          scoreDesc.textContent = this.lang === 'te' ? 
            "ఈ లక్షణాలకు 24 గంటలలోపు డాక్టర్ పరీక్ష అవసరం. మీ OPD టోకెన్ తీసుకోండి లేదా టెలికన్సల్టేషన్ ప్రారంభించండి." :
            this.lang === 'hi' ?
            "इन लक्षणों के लिए 24 घंटे के भीतर डॉक्टर की जांच जरूरी है। कृपया OPD टोकन लें या टेलीकंसल्टेशन करें।" :
            "Requires doctor evaluation within 24 hours. Take an OPD token or initiate a Teleconsultation.";

          btnAction.textContent = this.lang === 'te' ? "📅 OPD టోకెన్ పొందండి" : "📅 Get OPD Token";
          btnAction.className = "btn btn-primary btn-lg";
          btnAction.onclick = () => { this.switchTab("queue"); };
        } else {
          scoreTitle.textContent = this.lang === 'te' ? "సాధారణ పరిస్థితి (గ్రీన్ కేర్)" : 
                                  this.lang === 'hi' ? "सामान्य स्थिति (ग्रीन केयर)" : "Mild Symptoms (Green Care)";
          scoreBadge.className = "badge badge-green";
          scoreBadge.textContent = "ROUTINE";
          scoreDesc.textContent = this.lang === 'te' ? 
            "సాధారణ విశ్రాంతి, స్వచ్ఛమైన నీరు తాగడం, మరియు ప్రాథమిక జాగ్రత్తలు సరిపోతాయి. సమస్య ఎక్కువైతే సంప్రదించండి." :
            this.lang === 'hi' ?
            "आराम करें, ओआरएस व पर्याप्त पानी पिएं। समस्या बढ़ने पर डॉक्टर को दिखाएं।" :
            "Mild symptoms manageable with rest, hydration, and primary care. Consult if symptoms persist.";

          btnAction.textContent = this.lang === 'te' ? "🩺 డాక్టర్‌తో మాట్లాడండి" : "🩺 Connect with Doctor";
          btnAction.className = "btn btn-secondary btn-lg";
          btnAction.onclick = () => { this.switchTab("telecon"); };
        }

        // Log to Central Database
        this.logToDatabase(
          "TRIAGE_CHECK",
          "Digital Triage Kiosk",
          `Symptom evaluation for "${symptom}": Result ${severity.toUpperCase()} (${scoreTitle.textContent})`,
          {
            symptom: symptom,
            severity: severity,
            guidance: scoreDesc.textContent,
            action: scoreTitle.textContent,
            evaluatedAt: new Date().toLocaleString()
          }
        );
      });
    });
  }

  // MODULE 4: PATIENT RECORDS (Live updates & instant visibility)
  renderPatientRecords(searchFilter = "") {
    const listEl = document.getElementById("patient-records-list");
    const countEl = document.getElementById("total-patients-count");
    if (!listEl) return;

    listEl.innerHTML = "";

    const filtered = this.data.patients.filter(p => {
      if (!searchFilter) return true;
      const combined = `${p.name} ${p.village} ${p.condition} ${p.abhaId} ${p.mobile}`.toLowerCase();
      return combined.includes(searchFilter);
    });

    if (countEl) {
      countEl.textContent = this.data.patients.length;
    }

    if (filtered.length === 0) {
      listEl.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:#64748b;">
        ${this.lang === 'te' ? 'ఏ రోగి రికార్డులు కనిపించలేదు' : this.lang === 'hi' ? 'कोई मरीज रिकॉर्ड नहीं मिला' : 'No patient records found matching search.'}
      </td></tr>`;
      return;
    }

    filtered.forEach(p => {
      const triageBadge = p.triageStatus === "Red" ? "badge-red" : p.triageStatus === "Yellow" ? "badge-yellow" : "badge-green";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <strong>${p.id}</strong>
          ${p.token ? `<br><span class="badge badge-blue" style="margin-top:2px;">🎟️ ${p.token}</span>` : ''}
          <br><small style="color:#64748b;">${p.abhaId || ''}</small>
        </td>
        <td><strong>${p.name}</strong><br><small>${p.age}y / ${p.gender}</small></td>
        <td>${p.mobile}<br><small style="color:#64748b;">${p.village}</small></td>
        <td>${p.condition}</td>
        <td><span class="badge ${triageBadge}">${p.triageStatus || 'Normal'}</span></td>
        <td>
          <small>BP: ${p.lastVitals ? p.lastVitals.bp : '120/80'} | SpO2: ${p.lastVitals ? p.lastVitals.spO2 : '98%'}</small>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="window.chikitsaApp.viewPatientCard('${p.id}')">
            📋 ${this.lang === 'te' ? 'కార్డ్' : this.lang === 'hi' ? 'कार्ड' : 'Card'}
          </button>
        </td>
      `;
      listEl.appendChild(tr);
    });
  }

  handleCreatePatient() {
    const name = document.getElementById("pat-name").value.trim();
    const age = document.getElementById("pat-age").value.trim();
    const gender = document.getElementById("pat-gender").value;
    const mobile = document.getElementById("pat-mobile").value.trim();
    const village = document.getElementById("pat-village").value.trim();
    const condition = document.getElementById("pat-condition").value.trim();
    const bloodGroup = document.getElementById("pat-bloodgroup").value;

    if (!name || !age || !mobile) {
      alert("Please fill required fields (Name, Age, Mobile).");
      return;
    }

    // AI-Driven Automated Triage from presenting symptoms / reason
    const aiAssessment = this.evaluateReasonTriage(condition);
    const triageStatus = aiAssessment.level;
    const assignedDept = aiAssessment.department;
    const assignedDoc = aiAssessment.doctor;
    const assignedRoom = aiAssessment.room;

    // Calculate automatic Token and Queue assignment
    const nextQueueNum = this.data.queue.length + 15;
    const newTokenId = `OPD-0${nextQueueNum}`;
    const waitMins = triageStatus === "Red" ? 0 : Math.max(5, (this.data.queue.length - 1) * 7);

    const nextId = `PAT-${1000 + this.data.patients.length + 1}`;
    const newPat = {
      id: nextId,
      name: name,
      age: parseInt(age),
      gender: gender,
      mobile: mobile,
      village: village || "Rural Sub-centre",
      condition: condition || "General Health Checkup",
      bloodGroup: bloodGroup,
      token: newTokenId,
      queuePosition: this.data.queue.length + 1,
      abhaId: `ABHA-${Math.floor(1000+Math.random()*9000)}-${Math.floor(1000+Math.random()*9000)}-${Math.floor(1000+Math.random()*9000)}`,
      registeredAt: new Date().toLocaleString(),
      triageStatus: triageStatus,
      lastVitals: { bp: "120/80", pulse: "76", temp: "98.6 F", spO2: "99%" }
    };

    // Prepend new patient so it's instantly visible at the very top!
    this.data.patients.unshift(newPat);
    this.saveData("patients");

    // Automatically add to Queue roster
    const queueEntry = {
      token: newTokenId,
      patientName: name,
      department: assignedDept,
      doctor: assignedDoc,
      room: assignedRoom,
      status: "Waiting",
      waitMins: waitMins
    };
    this.data.queue.push(queueEntry);
    this.userToken = newTokenId;
    localStorage.setItem("chikitsa_my_token", newTokenId);
    this.saveData("queue");

    // Log to Central Database
    this.logToDatabase(
      "PATIENT_REGISTRATION",
      this.role === "worker" ? `${this.workerInfo.name || 'Staff'} (${this.workerInfo.department || 'Registration'})` : "OPD Registration Desk",
      `New Patient Registered: "${name}" (${nextId}, ${age}y, ${gender}, ${village || 'Rural'}) with Auto Token ${newTokenId} (Dept: ${assignedDept}, ${assignedRoom})`,
      {
        patientId: nextId,
        name: name,
        age: age,
        gender: gender,
        mobile: mobile,
        village: village,
        token: newTokenId,
        department: assignedDept,
        doctor: assignedDoc,
        room: assignedRoom,
        triageStatus: triageStatus,
        registeredAt: newPat.registeredAt
      }
    );

    // Re-render records and queue immediately
    this.renderPatientRecords();
    this.renderQueueBoard();

    // Reset and close modal
    document.getElementById("add-patient-form").reset();
    document.getElementById("modal-add-patient").style.display = "none";

    const alertMsg = this.lang === 'te' ? 
      `✅ రోగి "${name}" (${nextId}) విజయవంతంగా నమోదు చేయబడింది!\n\n🎟️ స్వయంచాలకంగా కేటాయించిన టోకెన్: ${newTokenId}\n📍 క్యూ స్థానం: #${queueEntry.waitMins > 0 ? this.data.queue.length : 1}\n⏱️ సుమారు నిరీక్షణ సమయం: ~${waitMins} నిమిషాలు\n👨‍⚕️ డాక్టర్: ${assignedDoc} (${assignedRoom})` :
      this.lang === 'hi' ?
      `✅ मरीज "${name}" (${nextId}) सफलतापूर्वक पंजीकृत!\n\n🎟️ स्वचालित रूप से आवंटित टोकन: ${newTokenId}\n📍 कतार में स्थान: #${this.data.queue.length}\n⏱️ अनुमानित प्रतीक्षा समय: ~${waitMins} मिनट\n👨‍⚕️ डॉक्टर: ${assignedDoc} (${assignedRoom})` :
      `✅ Patient "${name}" (${nextId}) Registered Successfully!\n\n🎟️ Automatically Assigned Token: ${newTokenId}\n📍 Queue Position: #${this.data.queue.length}\n⏱️ Est. Wait Time: ~${waitMins} mins\n👨‍⚕️ Assigned Doctor: ${assignedDoc} (${assignedRoom})`;

    alert(alertMsg);

    // Speak out token assignment for rural accessibility
    const spokenVoiceMsg = this.lang === 'te' ? 
      `రోగి వివరాలు నమోదయ్యాయి. మీకు కేటాయించిన టోకెన్ నంబర్ ${newTokenId}. నిరీక్షణ సమయం సుమారు ${waitMins} నిమిషాలు.` :
      this.lang === 'hi' ?
      `मरीज का विवरण दर्ज हो गया है। आपका टोकन नंबर ${newTokenId} है। प्रतीक्षा समय लगभग ${waitMins} मिनट है।` :
      `Patient details registered. Your assigned OPD token number is ${newTokenId}. Estimated wait is ${waitMins} minutes.`;
    this.speakText(spokenVoiceMsg);

    // Switch to records tab so user directly sees the updated record and token
    this.switchTab("records");
  }

  // AI-DRIVEN CLINICAL TRIAGE ENGINE
  evaluateReasonTriage(conditionText) {
    const text = (conditionText || "").toLowerCase();

    // Red Keywords: Critical Emergency & Resuscitation
    const redKeywords = [
      "chest pain", "heart attack", "cardiac", "stroke", "paralysis", "unconscious",
      "breathing", "breathlessness", "dyspnea", "asthma attack", "severe bleeding", 
      "hemorrhage", "haemoptysis", "snake bite", "snakebite", "poison", "poisoning",
      "seizure", "convulsion", "fits", "head injury", "trauma", "labor pain", "labour",
      "eclampsia", "cyanosis", "shock", "choking", "severe accident", "collapse"
    ];

    // Yellow Keywords: Urgent Doctor Review
    const yellowKeywords = [
      "high fever", "fever", "malaria", "dengue", "typhoid", "vomiting", "diarrhea",
      "loose motion", "dehydration", "fracture", "severe pain", "abdominal pain",
      "stomach pain", "appendix", "hypertension", "high bp", "diabetes", "high sugar",
      "pregnancy", "swelling", "infection", "wound", "burn", "urinary infection", "stones",
      "joint pain", "jaundice", "skin rash"
    ];

    for (const kw of redKeywords) {
      if (text.includes(kw)) {
        return {
          level: "Red",
          badgeText: "🔴 Critical Emergency (Red)",
          badgeClass: "badge-red",
          rationale: `AI Detection: Critical presentation detected ("${kw}"). Immediate trauma/emergency intervention required.`,
          department: "Emergency & Trauma",
          doctor: "Dr. K. Srinivas (Emergency MO)",
          room: "Trauma Room"
        };
      }
    }

    for (const kw of yellowKeywords) {
      if (text.includes(kw)) {
        return {
          level: "Yellow",
          badgeText: "🟡 Urgent Doctor Review (Yellow)",
          badgeClass: "badge-yellow",
          rationale: `AI Detection: Acute condition detected ("${kw}"). Requires clinical examination at OPD within 24 hours.`,
          department: "Acute Care Clinic",
          doctor: "Dr. Sunitha Rao (MO)",
          room: "Room 1"
        };
      }
    }

    return {
      level: "Green",
      badgeText: "🟢 Routine / Mild (Green)",
      badgeClass: "badge-green",
      rationale: "AI Detection: Standard outpatient consultation. Routine checkup and primary care management.",
      department: "General OPD",
      doctor: "Dr. Sunitha Rao (MO)",
      room: "Room 1"
    };
  }

  bindPatientTriageAI() {
    const conditionInput = document.getElementById("pat-condition");
    const badgeEl = document.getElementById("ai-live-triage-badge");
    const rationaleEl = document.getElementById("ai-live-triage-rationale");
    const hiddenInput = document.getElementById("pat-triage-hidden");

    if (!conditionInput) return;

    const updateLiveTriage = () => {
      const assessment = this.evaluateReasonTriage(conditionInput.value);
      if (badgeEl) {
        badgeEl.className = `badge ${assessment.badgeClass}`;
        badgeEl.textContent = assessment.badgeText;
      }
      if (rationaleEl) {
        rationaleEl.innerHTML = `<strong>${assessment.level.toUpperCase()} Priority:</strong> ${assessment.rationale} &bull; <em>Auto-assigned: ${assessment.department} (${assessment.room})</em>`;
      }
      if (hiddenInput) {
        hiddenInput.value = assessment.level;
      }
    };

    conditionInput.addEventListener("input", updateLiveTriage);
    conditionInput.addEventListener("change", updateLiveTriage);
  }

  // DOCTOR AVAILABILITY & SIGN-IN MANAGEMENT
  isDoctorLoggedIn(deptName) {
    const normDept = (deptName || "").toUpperCase();
    return this.loggedInDoctors.some(d => d.toUpperCase() === normDept);
  }

  markDoctorLoggedIn(staffName, deptName) {
    const normDept = (deptName || "").toUpperCase();
    if (!this.loggedInDoctors.includes(normDept)) {
      this.loggedInDoctors.push(normDept);
      localStorage.setItem("chikitsa_logged_in_doctors", JSON.stringify(this.loggedInDoctors));
    }
    this.renderFacilityDashboard();
  }

  toggleDoctorLogin(deptName) {
    const normDept = (deptName || "").toUpperCase();
    const idx = this.loggedInDoctors.indexOf(normDept);
    if (idx >= 0) {
      this.loggedInDoctors.splice(idx, 1);
    } else {
      this.loggedInDoctors.push(normDept);
    }
    localStorage.setItem("chikitsa_logged_in_doctors", JSON.stringify(this.loggedInDoctors));
    this.renderFacilityDashboard();
  }

  viewPatientCard(patientId) {
    const patient = this.data.patients.find(p => p.id === patientId);
    if (!patient) return;

    const modal = document.getElementById("modal-patient-card");
    const content = document.getElementById("patient-card-content");
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="border: 2px solid #0d9488; border-radius: 12px; padding: 20px; background: #f0fdfa;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
          <div>
            <h3 style="color:#0f766e; margin:0;">ChikitsaConnect - Rural Health Card</h3>
            <small>Government Rural Health Network</small>
          </div>
          <div style="text-align:right;">
            <strong style="font-size:1.1rem; color:#0d9488;">${patient.id}</strong><br>
            ${patient.token ? `<span class="badge badge-blue" style="font-size:0.9rem;">🎟️ Token: ${patient.token}</span><br>` : ''}
            <small>${patient.abhaId || ''}</small>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 16px;">
          <div><strong>Name:</strong> ${patient.name}</div>
          <div><strong>Age / Gender:</strong> ${patient.age}y / ${patient.gender}</div>
          <div><strong>Mobile:</strong> ${patient.mobile}</div>
          <div><strong>Village/Town:</strong> ${patient.village}</div>
          <div><strong>Blood Group:</strong> ${patient.bloodGroup || 'O+'}</div>
          <div><strong>Triage Severity:</strong> <span class="badge ${patient.triageStatus === 'Red' ? 'badge-red' : 'badge-green'}">${patient.triageStatus || 'Green'}</span></div>
        </div>

        <div style="margin-top:14px; padding:10px; background:#fff; border-radius:8px; border:1px solid #cbd5e1;">
          <strong>Clinical Condition:</strong> ${patient.condition}<br>
          <strong>Vitals on Record:</strong> BP: ${patient.lastVitals?.bp || '120/80'} | Pulse: ${patient.lastVitals?.pulse || '76'} bpm | Temp: ${patient.lastVitals?.temp || '98.6 F'}
        </div>

        <div style="margin-top:16px; text-align:center;">
          <button class="btn btn-primary" onclick="window.print()">🖨️ ${this.lang === 'te' ? 'కార్డ్ ముద్రించండి' : this.lang === 'hi' ? 'कार्ड प्रिंट करें' : 'Print Health Card'}</button>
          <button class="btn btn-secondary" style="margin-left:8px;" onclick="document.getElementById('modal-patient-card').style.display='none'">
            ${this.lang === 'te' ? 'మూసివేయి' : this.lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    `;

    modal.style.display = "flex";
  }

  // MODULE 5: REFERRAL TRACKING
  renderReferrals() {
    const listEl = document.getElementById("referrals-list");
    if (!listEl) return;

    listEl.innerHTML = "";
    this.data.referrals.forEach(ref => {
      const isRed = ref.urgency.includes("Red") || ref.urgency.includes("Emergency");
      const badgeClass = ref.status === "In-Transit" ? "badge-yellow" : ref.status === "Admitted" ? "badge-green" : "badge-blue";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${ref.id}</strong></td>
        <td><strong>${ref.patientName}</strong></td>
        <td>${ref.fromFacility} ➔ <br><strong>${ref.toFacility}</strong></td>
        <td>${ref.reason}</td>
        <td><span class="badge ${isRed ? 'badge-red' : 'badge-yellow'}">${ref.urgency}</span></td>
        <td>${ref.transport}</td>
        <td><span class="badge ${badgeClass}">${ref.status}</span></td>
      `;
      listEl.appendChild(tr);
    });
  }

  // MODULE 6: DIAGNOSTICS
  renderDiagnostics() {
    const listEl = document.getElementById("diagnostics-list");
    if (!listEl) return;

    listEl.innerHTML = "";
    this.data.diagnostics.forEach(test => {
      const isAbnormal = test.severity === "abnormal";
      const isBorderline = test.severity === "borderline";
      const badgeClass = isAbnormal ? "badge-red" : isBorderline ? "badge-yellow" : "badge-green";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${test.id}</strong></td>
        <td>${test.patientName}</td>
        <td><strong>${test.testType}</strong></td>
        <td>${test.sampleCollected}</td>
        <td><span class="badge ${test.status === 'Ready' ? 'badge-green' : 'badge-yellow'}">${test.status}</span></td>
        <td><span class="badge ${badgeClass}">${test.result}</span></td>
        <td><small>${test.notes}</small></td>
      `;
      listEl.appendChild(tr);
    });
  }

  // MODULE 7: HIGH RISK FOLLOW-UP
  renderHighRisk() {
    const listEl = document.getElementById("highrisk-list");
    if (!listEl) return;

    listEl.innerHTML = "";
    this.data.highRisk.forEach(hr => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${hr.id}</strong></td>
        <td><strong>${hr.patientName}</strong><br><small>${hr.village}</small></td>
        <td><span class="badge badge-yellow">${this.lang === 'te' ? hr.categoryTe : this.lang === 'hi' ? hr.categoryHi : hr.category}</span></td>
        <td>${hr.riskFactor}</td>
        <td>${hr.ashaContact}</td>
        <td><strong>${hr.nextFollowUp}</strong></td>
        <td><span class="badge badge-red">${hr.status}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="alert('SMS and IVR Call reminder simulated to patient and ASHA worker!')">
            📲 Remind
          </button>
        </td>
      `;
      listEl.appendChild(tr);
    });
  }

  // MODULE 8: FACILITY DASHBOARD & DOCTORS DIRECTORY (ABCD HOSPITAL)
  renderFacilityDashboard() {
    const fac = this.data.facility;
    const totBedsEl = document.getElementById("fac-total-beds");
    const occBedsEl = document.getElementById("fac-occ-beds");
    const vacBedsEl = document.getElementById("fac-vac-beds");
    const icuBedsEl = document.getElementById("fac-icu-beds");
    const oxyEl = document.getElementById("fac-oxy-cylinders");
    const medsListEl = document.getElementById("fac-meds-list");
    const staffListEl = document.getElementById("fac-staff-list");
    const doctorsGridEl = document.getElementById("facility-dept-doctors-grid");
    const countBadge = document.getElementById("facility-active-count-badge");
    const sidebarDocStatus = document.getElementById("sidebar-doc-status");

    if (totBedsEl) totBedsEl.textContent = fac.totalBeds;
    if (occBedsEl) occBedsEl.textContent = fac.occupiedBeds;
    if (vacBedsEl) vacBedsEl.textContent = fac.vacantBeds;
    if (icuBedsEl) icuBedsEl.textContent = `${fac.icuEmergencyBeds.vacant} / ${fac.icuEmergencyBeds.total}`;
    if (oxyEl) oxyEl.textContent = `${fac.oxygenCylinders.full} / ${fac.oxygenCylinders.total}`;

    const totalDepts = fac.departments ? fac.departments.length : 6;
    const activeDocCount = fac.departments ? fac.departments.filter(d => this.isDoctorLoggedIn(d.name)).length : 0;

    if (countBadge) {
      countBadge.textContent = `${activeDocCount} of ${totalDepts} Specialists Active`;
      countBadge.className = activeDocCount > 0 ? "badge badge-green" : "badge badge-yellow";
    }
    if (sidebarDocStatus) {
      sidebarDocStatus.textContent = `👨‍⚕️ ${activeDocCount} / ${totalDepts} Doctors Active`;
    }

    // Render Department Doctors Grid for Patients & Workers
    // IN PATIENT MODE:
    // 1. ONLY VISIBLE WHICH DOCTOR IS AVAILABLE!
    // 2. ABSOLUTELY NO OPTION TO SIGN IN / SIGN OUT!
    if (doctorsGridEl && fac.departments) {
      doctorsGridEl.innerHTML = "";
      const isPatient = this.role !== "worker";

      if (isPatient) {
        // Patient Mode: Only show specialist doctors who are available / signed in
        const availableDepts = fac.departments.filter(dept => this.isDoctorLoggedIn(dept.name));

        if (availableDepts.length === 0) {
          const emptyCard = document.createElement("div");
          emptyCard.className = "card";
          emptyCard.style.gridColumn = "1 / -1";
          emptyCard.style.textAlign = "center";
          emptyCard.style.padding = "36px 20px";
          emptyCard.style.background = "#f8fafc";
          emptyCard.style.border = "2px dashed #cbd5e1";
          emptyCard.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 12px;">🩺</div>
            <h3 style="color: #475569; margin-bottom: 8px;">No Specialist Doctors Currently Available</h3>
            <p style="color: #64748b; max-width: 540px; margin: 0 auto 16px auto; font-size: 0.95rem;">
              Only doctors currently on duty appear here for patients. You can connect with on-call Medical Officers in <strong>Teleconsultation</strong> or take an <strong>OPD Queue Token</strong> anytime 24x7.
            </p>
            <span class="badge badge-yellow" style="font-size: 0.9rem;">Awaiting Specialist Doctor Sign-In</span>
          `;
          doctorsGridEl.appendChild(emptyCard);
        } else {
          availableDepts.forEach(dept => {
            const card = document.createElement("div");
            card.className = "card";
            card.style.border = "1px solid #10b981";
            card.style.borderTop = "4px solid #10b981";
            card.style.background = "#ffffff";
            card.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
            card.innerHTML = `
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span style="font-size: 2.2rem;">${dept.icon || '👨‍⚕️'}</span>
                <span class="badge badge-green">🟢 Available Today</span>
              </div>
              <h4 style="margin:0 0 2px 0; color:#0369a1; font-size:1.15rem;">${dept.name}</h4>
              <div style="font-size:0.82rem; color:#64748b; margin-bottom:8px;">${this.lang === 'te' ? (dept.nameTe || '') : this.lang === 'hi' ? (dept.nameHi || '') : ''}</div>
              <p style="margin:0; font-weight:700; font-size:1.05rem; color:#0f172a;">${dept.doctorName}</p>
              <p style="margin:0 0 8px 0; font-size:0.85rem; color:#059669; font-weight:600;">${dept.qualification}</p>
              <div style="background:#f0fdf4; padding:10px 12px; border-radius:8px; font-size:0.85rem; margin-top:8px; border:1px solid #bbf7d0;">
                <div>📍 <strong>OPD Room:</strong> ${dept.room}</div>
                <div>⏱️ <strong>Duty Hours:</strong> ${dept.timings}</div>
                <div>👥 <strong>Active OPD Cases:</strong> ${dept.activeCases || 12}</div>
              </div>
              <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.8rem; color:#059669; font-weight:600;">● Active on Duty</span>
                <button class="btn btn-primary btn-sm" onclick="chikitsaApp.switchTab('telecon')">
                  📞 Consult Now
                </button>
              </div>
            `;
            // NOTE: ABSOLUTELY NO sign in or sign out button for patients!
            doctorsGridEl.appendChild(card);
          });
        }
      } else {
        // Worker Mode: Hospital staff can see full department status
        fac.departments.forEach(dept => {
          const isLoggedIn = this.isDoctorLoggedIn(dept.name);
          const card = document.createElement("div");
          card.className = "card";
          card.style.border = isLoggedIn ? "1px solid #10b981" : "1px solid #e2e8f0";
          card.style.borderTop = isLoggedIn ? "4px solid #10b981" : "4px solid #94a3b8";
          card.style.background = isLoggedIn ? "#ffffff" : "#f8fafc";
          card.style.transition = "all 0.2s ease";

          if (isLoggedIn) {
            card.innerHTML = `
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span style="font-size: 2.2rem;">${dept.icon || '👨‍⚕️'}</span>
                <span class="badge badge-green">🟢 Active On Duty (Signed In)</span>
              </div>
              <h4 style="margin:0 0 2px 0; color:#0369a1; font-size:1.1rem;">${dept.name}</h4>
              <div style="font-size:0.8rem; color:#64748b; margin-bottom:8px;">${this.lang === 'te' ? (dept.nameTe || '') : this.lang === 'hi' ? (dept.nameHi || '') : ''}</div>
              <p style="margin:0; font-weight:700; font-size:1.05rem; color:#0f172a;">${dept.doctorName}</p>
              <p style="margin:0 0 8px 0; font-size:0.85rem; color:#059669; font-weight:600;">${dept.qualification}</p>
              <div style="background:#f0fdf4; padding:8px 10px; border-radius:6px; font-size:0.85rem; margin-top:8px; border:1px solid #bbf7d0;">
                <div>📍 <strong>OPD Room:</strong> ${dept.room}</div>
                <div>⏱️ <strong>Duty Hours:</strong> ${dept.timings}</div>
                <div>👥 <strong>Active OPD Cases:</strong> ${dept.activeCases || 12}</div>
              </div>
              <div style="margin-top: 10px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size: 0.78rem; color:#059669; font-weight:600;">● Online for Consultation</span>
                <button class="btn btn-secondary btn-sm" onclick="window.chikitsaApp.toggleDoctorLogin('${dept.name}')" title="End Specialist Shift">
                  🚪 End Shift
                </button>
              </div>
            `;
          } else {
            card.innerHTML = `
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span style="font-size: 2.2rem; filter: grayscale(80%);">${dept.icon || '👨‍⚕️'}</span>
                <span class="badge badge-secondary" style="background:#f1f5f9; color:#64748b; border:1px solid #cbd5e1;">⚪ Offline</span>
              </div>
              <h4 style="margin:0 0 2px 0; color:#475569; font-size:1.1rem;">${dept.name}</h4>
              <div style="font-size:0.8rem; color:#94a3b8; margin-bottom:8px;">${this.lang === 'te' ? (dept.nameTe || '') : this.lang === 'hi' ? (dept.nameHi || '') : ''}</div>
              <p style="margin:0; font-weight:600; font-size:0.95rem; color:#94a3b8;">${dept.doctorName}</p>
              <p style="margin:0 0 8px 0; font-size:0.82rem; color:#94a3b8;">${dept.qualification}</p>
              <div style="background:#f1f5f9; padding:8px 10px; border-radius:6px; font-size:0.82rem; margin-top:8px; border:1px dashed #cbd5e1; color:#64748b;">
                🔒 Doctor Offline - Awaiting official sign-in
              </div>
            `;
          }
          doctorsGridEl.appendChild(card);
        });
      }
    }

    if (medsListEl) {
      medsListEl.innerHTML = "";
      fac.essentialMeds.forEach(m => {
        const isCritical = m.status.includes("Critical") || m.status.includes("Alert");
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.padding = "8px 0";
        li.style.borderBottom = "1px solid #f1f5f9";
        li.innerHTML = `
          <span><strong>${m.name}</strong> (${m.stock})</span>
          <span class="badge ${isCritical ? 'badge-red' : 'badge-green'}">${m.status}</span>
        `;
        medsListEl.appendChild(li);
      });
    }

    if (staffListEl) {
      staffListEl.innerHTML = "";
      fac.staffOnDuty.forEach(s => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.padding = "8px 0";
        li.style.borderBottom = "1px solid #f1f5f9";
        li.innerHTML = `
          <div><strong>${s.role}:</strong> ${s.name} <br><small style="color:#64748b;">${s.dept || ''} - ${s.shift} Shift</small></div>
          <div>📞 <a href="tel:${s.phone}" style="color:var(--primary); font-weight:700;">${s.phone}</a></div>
        `;
        staffListEl.appendChild(li);
      });
    }
  }

  updateBedOccupancy(change) {
    if (this.data.facility.occupiedBeds + change < 0 || this.data.facility.occupiedBeds + change > this.data.facility.totalBeds) {
      return;
    }
    this.data.facility.occupiedBeds += change;
    this.data.facility.vacantBeds = this.data.facility.totalBeds - this.data.facility.occupiedBeds;
    this.saveData("facility");
    this.renderFacilityDashboard();

    // Log to Central Database
    this.logToDatabase(
      "BED_UPDATE",
      this.role === "worker" ? `${this.workerInfo.name || 'Staff'} (${this.workerInfo.department || 'Ward'})` : "Hospital Administration",
      `Bed Occupancy modified by ${change > 0 ? '+1 (Admit)' : '-1 (Discharge)'}. Current Occupancy: ${this.data.facility.occupiedBeds} / ${this.data.facility.totalBeds} Beds`,
      {
        totalBeds: this.data.facility.totalBeds,
        occupiedBeds: this.data.facility.occupiedBeds,
        vacantBeds: this.data.facility.vacantBeds,
        change: change,
        timestamp: new Date().toLocaleString()
      }
    );
  }

  // MODULE 10: CENTRAL DATABASE LOGGING & AUDIT REPOSITORY
  logToDatabase(type, actor, summary, payload = {}) {
    if (!this.data.database) {
      this.data.database = [];
    }
    const logId = `LOG-${1000 + this.data.database.length + 1}`;
    const timestamp = new Date().toLocaleString();
    const entry = {
      id: logId,
      timestamp: timestamp,
      type: type,
      actor: actor,
      summary: summary,
      payload: payload
    };
    this.data.database.unshift(entry);
    this.saveData("database");
    this.renderDatabaseTable();
  }

  renderDatabaseTable() {
    const listEl = document.getElementById("database-records-list");
    const countEl = document.getElementById("db-total-count");
    if (!listEl) return;

    const filterCategory = document.getElementById("db-filter-category")?.value || "ALL";
    const searchTerm = (document.getElementById("db-search-input")?.value || "").toLowerCase().trim();

    if (!this.data.database) {
      this.data.database = (typeof DEFAULT_MOCK_DATA !== 'undefined' && DEFAULT_MOCK_DATA.database) ? DEFAULT_MOCK_DATA.database : [];
    }

    const filtered = this.data.database.filter(item => {
      const matchCategory = filterCategory === "ALL" || item.type === filterCategory;
      const jsonStr = JSON.stringify(item).toLowerCase();
      const matchSearch = !searchTerm || jsonStr.includes(searchTerm);
      return matchCategory && matchSearch;
    });

    if (countEl) {
      countEl.textContent = this.data.database.length;
    }

    listEl.innerHTML = "";
    if (filtered.length === 0) {
      listEl.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:24px; color:#64748b;">No database records match your search criteria.</td></tr>`;
      return;
    }

    filtered.forEach(log => {
      const tr = document.createElement("tr");
      const badgeClass = log.type === "WORKER_AUTH" ? "badge-blue" :
                         log.type === "PATIENT_REGISTRATION" ? "badge-green" :
                         log.type === "QUEUE_TOKEN" ? "badge-yellow" :
                         log.type === "TRIAGE_CHECK" ? "badge-red" : "badge-blue";

      tr.innerHTML = `
        <td><strong style="color:var(--primary);">${log.id}</strong></td>
        <td><small style="color:#64748b;">${log.timestamp}</small></td>
        <td><span class="badge ${badgeClass}">${log.type}</span></td>
        <td><strong>${log.actor}</strong></td>
        <td>
          <div style="font-size:0.9rem; margin-bottom:4px;">${log.summary}</div>
          <details style="cursor:pointer; font-size:0.75rem; color:#64748b;">
            <summary>View Log Payload Data</summary>
            <pre style="background:#f1f5f9; padding:6px; border-radius:4px; margin-top:4px; overflow-x:auto;">${JSON.stringify(log.payload, null, 2)}</pre>
          </details>
        </td>
      `;
      listEl.appendChild(tr);
    });
  }

  exportDatabaseJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data.database, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `chikitsa_central_database_${Date.now()}.json`);
    dlAnchor.click();
  }

  copyDatabaseJSON() {
    navigator.clipboard.writeText(JSON.stringify(this.data.database, null, 2))
      .then(() => alert("✅ Complete Central Database JSON copied to clipboard!"))
      .catch(() => alert("Failed to copy JSON."));
  }

  // BUTTON-DRIVEN AI HOSPITAL ASSISTANT
  setupAIAssistant() {
    this.chatHistory = [];
    this.refreshAIChatGreeting();
  }

  refreshAIChatGreeting() {
    const t = I18N[this.lang] || I18N.en;
    const chatContainer = document.getElementById("ai-chat-messages");
    if (!chatContainer) return;

    chatContainer.innerHTML = "";
    this.addAIMessage(t.aiGreeting, this.getRootActionButtons());
  }

  openAIChat() {
    const modal = document.getElementById("modal-ai-chat");
    if (modal) modal.style.display = "flex";
  }

  getRootActionButtons() {
    if (this.lang === "te") {
      return [
        { text: "🩺 లక్షణాలు తనిఖీ చేయండి", action: () => this.handleAIAction("symptoms") },
        { text: "📅 డాక్టర్ టోకెన్ తీసుకోండి", action: () => this.handleAIAction("token") },
        { text: "🚨 అత్యవసర పరిస్థితి (108)", danger: true, action: () => this.handleAIAction("emergency") },
        { text: "💊 మందుల లభ్యత తెలుసుకోండి", action: () => this.handleAIAction("pharmacy") },
        { text: "📋 నా రోగి రికార్డులు చూడండి", action: () => this.handleAIAction("records") },
        { text: "👩‍⚕️ డ్యూటీ డాక్టర్‌తో మాట్లాడండి", action: () => this.handleAIAction("doctor") }
      ];
    } else if (this.lang === "hi") {
      return [
        { text: "🩺 बीमारी के लक्षण जांचें", action: () => this.handleAIAction("symptoms") },
        { text: "📅 डॉक्टर टोकन प्राप्त करें", action: () => this.handleAIAction("token") },
        { text: "🚨 आपातकालीन सहायता (108)", danger: true, action: () => this.handleAIAction("emergency") },
        { text: "💊 दवाइयों की जानकारी", action: () => this.handleAIAction("pharmacy") },
        { text: "📋 मेरा मरीज रिकॉर्ड देखें", action: () => this.handleAIAction("records") },
        { text: "👩‍⚕️ ड्यूटी डॉक्टर से संपर्क", action: () => this.handleAIAction("doctor") }
      ];
    } else {
      return [
        { text: "🩺 Check Symptoms & Triage", action: () => this.handleAIAction("symptoms") },
        { text: "📅 Get Doctor Token / Queue", action: () => this.handleAIAction("token") },
        { text: "🚨 Emergency SOS / 108", danger: true, action: () => this.handleAIAction("emergency") },
        { text: "💊 Medicine Availability", action: () => this.handleAIAction("pharmacy") },
        { text: "📋 View My Health Records", action: () => this.handleAIAction("records") },
        { text: "👩‍⚕️ Speak with Duty Doctor", action: () => this.handleAIAction("doctor") }
      ];
    }
  }

  handleAIAction(actionKey) {
    if (actionKey === "symptoms") {
      const promptText = this.lang === 'te' ? 
        "మీకు ఏ రకమైన సమస్య లేదా లక్షణాలు ఉన్నాయి? దయచేసి ఎంచుకోండి:" :
        this.lang === 'hi' ? 
        "आपको किस तरह के लक्षण महसूस हो रहे हैं? कृपया चुनें:" :
        "Which symptom or issue are you experiencing? Please select:";

      const subButtons = this.lang === 'te' ? [
        { text: "తీవ్రమైన జ్వరం & చలి", action: () => this.handleAISymptomSelected("fever") },
        { text: "శ్వాస తీసుకోవడంలో ఇబ్బంది", danger: true, action: () => this.handleAISymptomSelected("breathing") },
        { text: "కడుపు నొప్పి లేదా విరేచనాలు", action: () => this.handleAISymptomSelected("stomach") },
        { text: "గర్భధారణ సమస్యలు / నొప్పులు", danger: true, action: () => this.handleAISymptomSelected("pregnancy") },
        { text: "పాము కాటు లేదా తీవ్ర గాయం", danger: true, action: () => this.handleAISymptomSelected("snakebite") }
      ] : this.lang === 'hi' ? [
        { text: "तेज बुखार और ठंड लगना", action: () => this.handleAISymptomSelected("fever") },
        { text: "सांस लेने में गंभीर तकलीफ", danger: true, action: () => this.handleAISymptomSelected("breathing") },
        { text: "पेट दर्द या दस्त", action: () => this.handleAISymptomSelected("stomach") },
        { text: "गर्भावस्था में दर्द या समस्या", danger: true, action: () => this.handleAISymptomSelected("pregnancy") },
        { text: "सांप का काटना या गंभीर चोट", danger: true, action: () => this.handleAISymptomSelected("snakebite") }
      ] : [
        { text: "High Fever & Chills", action: () => this.handleAISymptomSelected("fever") },
        { text: "Severe Breathlessness", danger: true, action: () => this.handleAISymptomSelected("breathing") },
        { text: "Stomach Pain or Diarrhea", action: () => this.handleAISymptomSelected("stomach") },
        { text: "Maternal Complications / Labor", danger: true, action: () => this.handleAISymptomSelected("pregnancy") },
        { text: "Snakebite or Severe Bleeding", danger: true, action: () => this.handleAISymptomSelected("snakebite") }
      ];

      this.addAIMessage(promptText, subButtons);
    } else if (actionKey === "token") {
      const text = this.lang === 'te' ? 
        `మీ ప్రస్తుత టోకెన్ ${this.userToken}. ప్రస్తుత నిరీక్షణ సమయం సుమారు 10 నిమిషాలు. మీరు నియామకం & క్యూ విభాగంలో ప్రత్యక్ష స్థితిని చూడవచ్చు.` :
        this.lang === 'hi' ? 
        `आपका वर्तमान टोकन ${this.userToken} है। अनुमानित प्रतीक्षा समय लगभग 10 मिनट है।` :
        `Your active token is ${this.userToken}. Estimated wait is ~10 minutes. You can track live queue status in the Appointments tab.`;

      const buttons = [
        { text: this.lang === 'te' ? "కొత్త టోకెన్ పొందండి" : "Generate New Token", action: () => { this.handleGenerateToken(); } },
        { text: this.lang === 'te' ? "క్యూ బోర్డు చూడండి" : "Open Queue Board", action: () => { document.getElementById("modal-ai-chat").style.display='none'; this.switchTab('queue'); } }
      ];
      this.addAIMessage(text, buttons);
    } else if (actionKey === "emergency") {
      const text = this.lang === 'te' ? 
        "🚨 అత్యవసర సహాయం: 108 అంబులెన్స్ సర్వీస్ 24 గంటలూ ఉచితంగా అందుబాటులో ఉంటుంది. కాల్ చేయడానికి క్రింది బటన్ నొక్కండి లేదా SOS పంపండి!" :
        this.lang === 'hi' ? 
        "🚨 आपातकालीन सहायता: 108 एम्बुलेंस सेवा 24 घंटे निःशुल्क उपलब्ध है। कॉल करने के लिए नीचे दिए गए बटन पर टैप करें!" :
        "🚨 Emergency Care: 108 Ambulance service is available 24x7 free of cost. Tap below to initiate emergency response!";

      const buttons = [
        { text: "📞 108 Ambulance Call", danger: true, action: () => { window.location.href="tel:108"; } },
        { text: this.lang === 'te' ? "🚨 SOS రెస్పాన్స్ తెరవండి" : "Open Emergency Desk", danger: true, action: () => { document.getElementById("modal-ai-chat").style.display='none'; this.switchTab('emergency'); } }
      ];
      this.addAIMessage(text, buttons);
    } else if (actionKey === "pharmacy") {
      const text = this.lang === 'te' ? 
        "ఆసుపత్రి ఫార్మసీలో పారాసిటమాల్, ఓఆర్ఎస్ ప్యాకెట్లు, ఐరన్ మాత్రలు మరియు యాంటీబయాటిక్స్ తగినంత నిల్వలో ఉన్నాయి. ఉదయం 8 నుండి సాయంత్రం 4 వరకు ఉచితంగా పొందవచ్చు." :
        this.lang === 'hi' ? 
        "अस्पताल फार्मेसी में पैरासिटामोल, ओआरएस पैकेट, आयरन की गोलियां और एंटीबायोटिक्स पर्याप्त मात्रा में उपलब्ध हैं।" :
        "PHC Pharmacy currently has Paracetamol, ORS packets, IFA tablets, and general antibiotics in adequate stock. Open 8 AM to 4 PM.";
      this.addAIMessage(text, this.getRootActionButtons());
    } else if (actionKey === "records") {
      const text = this.lang === 'te' ? 
        `మీ నమోదు చేయబడిన రోగి రికార్డులు సురక్షితంగా ఉన్నాయి. మీ ABHA కార్డ్ లేదా మునుపటి ప్రిస్క్రిప్షన్ చూడటానికి 'రోగి రికార్డులు' క్లిక్ చేయండి.` :
        `Your clinical records are synced. Tap below to navigate directly to the Patient Records repository.`;
      const buttons = [
        { text: this.lang === 'te' ? "రికార్డులు తెరవండి" : "Open Patient Records", action: () => { document.getElementById("modal-ai-chat").style.display='none'; this.switchTab('records'); } }
      ];
      this.addAIMessage(text, buttons);
    } else if (actionKey === "doctor") {
      const text = this.lang === 'te' ? 
        "డ్యూటీ మెడికల్ ఆఫీసర్: డాక్టర్ సునీత రావు (MBBS). టెలికన్సల్టేషన్ ద్వారా వీడియో కాల్‌లో మాట్లాడవచ్చు." :
        "On Duty Medical Officer: Dr. Sunitha Rao (MBBS). Connect via video/audio consultation now.";
      const buttons = [
        { text: this.lang === 'te' ? "వీడియో కాల్ ప్రారంభించండి" : "Start Video Consult", action: () => { document.getElementById("modal-ai-chat").style.display='none'; this.switchTab('telecon'); } }
      ];
      this.addAIMessage(text, buttons);
    }
  }

  handleAISymptomSelected(symptomType) {
    if (symptomType === "breathing" || symptomType === "pregnancy" || symptomType === "snakebite") {
      const alertText = this.lang === 'te' ? 
        "⚠️ ఇది తీవ్రమైన లేదా అత్యవసర పరిస్థితి కావచ్చు! వెంటనే PHC అత్యవసర విభాగానికి వెళ్ళండి లేదా 108 కి కాల్ చేయండి." :
        "⚠️ This is potentially a critical emergency! Please call 108 Ambulance or proceed directly to the nearest hospital Emergency Room.";
      const buttons = [
        { text: "🚨 Call 108 Ambulance", danger: true, action: () => { window.location.href="tel:108"; } },
        { text: this.lang === 'te' ? "డిజిటల్ ట్రియాజ్ తెరవండి" : "Open Triage Desk", action: () => { document.getElementById("modal-ai-chat").style.display='none'; this.switchTab('triage'); } }
      ];
      this.addAIMessage(alertText, buttons);
      this.speakText(alertText);
    } else {
      const adviceText = this.lang === 'te' ? 
        "ఈ లక్షణాలకు రక్త పరీక్ష లేదా డాక్టర్ సలహా అవసరం కావచ్చు. దయచేసి OPD టోకెన్ తీసుకోండి మరియు పుష్కలంగా నీరు త్రాగండి." :
        "These symptoms require clinical evaluation and basic blood/urine tests. Please take an OPD token and consult the Medical Officer.";
      const buttons = [
        { text: this.lang === 'te' ? "OPD టోకెన్ తీసుకోండి" : "Take OPD Token", action: () => { document.getElementById("modal-ai-chat").style.display='none'; this.switchTab('queue'); } },
        { text: this.lang === 'te' ? "ప్రధాన మెనూకి వెళ్ళండి" : "Back to Main Menu", action: () => { this.refreshAIChatGreeting(); } }
      ];
      this.addAIMessage(adviceText, buttons);
      this.speakText(adviceText);
    }
  }

  addAIMessage(text, buttons = []) {
    const chatContainer = document.getElementById("ai-chat-messages");
    if (!chatContainer) return;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble ai";

    const textSpan = document.createElement("div");
    textSpan.textContent = text;
    bubble.appendChild(textSpan);

    // Speaker button for rural voice guidance
    const audioBtn = document.createElement("button");
    audioBtn.className = "btn-speech";
    audioBtn.title = "Listen to response";
    audioBtn.innerHTML = "🔊";
    audioBtn.onclick = () => this.speakText(text);
    textSpan.appendChild(audioBtn);

    if (buttons.length > 0) {
      const btnWrapper = document.createElement("div");
      btnWrapper.className = "chat-buttons-container";
      buttons.forEach(btnInfo => {
        const b = document.createElement("button");
        b.className = `chat-quick-btn ${btnInfo.danger ? 'danger' : ''}`;
        b.textContent = btnInfo.text;
        b.onclick = () => {
          this.addUserMessage(btnInfo.text);
          btnInfo.action();
        };
        btnWrapper.appendChild(b);
      });
      bubble.appendChild(btnWrapper);
    }

    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  addUserMessage(text) {
    const chatContainer = document.getElementById("ai-chat-messages");
    if (!chatContainer) return;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble user";
    bubble.textContent = text;
    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  renderActiveTab() {
    this.switchTab(this.activeTab);
  }
}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.chikitsaApp = new ChikitsaApp();
});
