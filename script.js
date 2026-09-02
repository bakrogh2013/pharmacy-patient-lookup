const patients = [
  // ------------------------------------------------------------
  // SCENARIO PATIENTS
  // ------------------------------------------------------------
  {
    id: "1001",
    firstName: "John",
    lastName: "Buttars",
    dob: "08/20/1980",
    medications: [
      {
        name: "Amoxicillin 500 mg",
        rx: "601248",
        status: "Ready",
        insurance: "Covered",
        cost: "$8.00",
        quantity: "30 capsules",
        refills: "0 remaining",
        sig: "Take 1 capsule by mouth three times daily for 10 days.",
        technicianInfo:
          "The prescription for Amoxicillin is completely filled and ready to be picked up at any time."
      },
      {
        name: "Ibuprofen 600 mg",
        rx: "595114",
        status: "Active",
        insurance: "Covered",
        cost: "$4.00",
        quantity: "20 tablets",
        refills: "1 remaining",
        sig: "Take 1 tablet by mouth every 6 hours as needed for pain.",
        technicianInfo:
          "This is an active prescription on the patient's profile."
      },
      {
        name: "Fluticasone Nasal Spray",
        rx: "591880",
        status: "Active",
        insurance: "Covered",
        cost: "$12.00",
        quantity: "1 bottle",
        refills: "3 remaining",
        sig: "Use 2 sprays in each nostril once daily.",
        technicianInfo:
          "This medication remains active on the patient's profile."
      }
    ]
  },
 
  {
    id: "1002",
    firstName: "Henry",
    lastName: "Jacobson",
    dob: "07/17/1947",
    medications: [
      {
        name: "Lisinopril 20 mg",
        rx: "582140",
        status: "Out of Stock",
        insurance: "Covered",
        cost: "$5.00",
        quantity: "30 tablets",
        refills: "2 remaining",
        sig: "Take 1 tablet by mouth once daily.",
        technicianInfo:
          "The prescription has been called in by the patient's doctor, but the pharmacy does not have the medication in stock. It is expected to be back in stock in 3 days."
      },
      {
        name: "Atorvastatin 40 mg",
        rx: "579336",
        status: "Ready",
        insurance: "Covered",
        cost: "$10.00",
        quantity: "90 tablets",
        refills: "1 remaining",
        sig: "Take 1 tablet by mouth every evening.",
        technicianInfo:
          "This prescription is filled and ready for pickup."
      },
      {
        name: "Metformin 500 mg",
        rx: "576214",
        status: "Active",
        insurance: "Covered",
        cost: "$6.00",
        quantity: "180 tablets",
        refills: "2 remaining",
        sig: "Take 1 tablet by mouth twice daily with meals.",
        technicianInfo:
          "This medication remains active on the patient's profile."
      }
    ]
  },
 
  {
    id: "1003",
    firstName: "Jenny",
    lastName: "Harding",
    dob: "06/04/1999",
    medications: [
      {
        name: "Insulin Glargine",
        rx: "604918",
        status: "Ready",
        insurance: "Processed",
        cost: "Included in $432 monthly total",
        quantity: "30-day supply",
        refills: "3 remaining",
        sig: "Inject as directed once daily.",
        technicianInfo:
          "Insurance has been billed and processed correctly."
      },
      {
        name: "Insulin Lispro",
        rx: "604919",
        status: "Ready",
        insurance: "Processed",
        cost: "Included in $432 monthly total",
        quantity: "30-day supply",
        refills: "3 remaining",
        sig: "Inject as directed with meals.",
        technicianInfo:
          "Insurance has been billed and processed correctly."
      },
      {
        name: "Continuous Glucose Monitor Sensors",
        rx: "604920",
        status: "Ready",
        insurance: "Processed",
        cost: "Included in $432 monthly total",
        quantity: "Monthly supply",
        refills: "5 remaining",
        sig: "Use as directed.",
        technicianInfo:
          "The patient's prescriptions and supplies will cost $432 per month after insurance has been billed and processed correctly."
      },
      {
        name: "Glucagon Emergency Kit",
        rx: "599310",
        status: "Active",
        insurance: "Covered",
        cost: "$25.00",
        quantity: "1 kit",
        refills: "1 remaining",
        sig: "Use for severe low blood sugar as directed.",
        technicianInfo:
          "This prescription remains active on the patient's profile."
      }
    ]
  },
 
  {
    id: "1004",
    firstName: "Barbara",
    lastName: "Fisher",
    dob: "09/23/1975",
    medications: [
      {
        name: "Oseltamivir (Tamiflu) 75 mg",
        rx: "605221",
        status: "In Process",
        insurance: "Covered",
        cost: "$18.00",
        quantity: "10 capsules",
        refills: "0 remaining",
        sig: "Take 1 capsule by mouth twice daily for 5 days.",
        technicianInfo:
          "The prescription has been called in, but the pharmacy is very busy and has not filled it yet. It should be ready in about 20 minutes."
      },
      {
        name: "Albuterol Inhaler",
        rx: "593408",
        status: "Ready",
        insurance: "Covered",
        cost: "$15.00",
        quantity: "1 inhaler",
        refills: "2 remaining",
        sig: "Inhale 2 puffs every 4 to 6 hours as needed.",
        technicianInfo:
          "This prescription is filled and ready for pickup."
      },
      {
        name: "Cetirizine 10 mg",
        rx: "588714",
        status: "Active",
        insurance: "Covered",
        cost: "$7.00",
        quantity: "30 tablets",
        refills: "4 remaining",
        sig: "Take 1 tablet by mouth once daily.",
        technicianInfo:
          "This medication remains active on the patient's profile."
      }
    ]
  },
 
  {
    id: "1005",
    firstName: "Jacob",
    lastName: "Atkinson",
    dob: "02/06/2000",
    medications: [
      {
        name: "Sertraline (Zoloft) 50 mg",
        rx: "598120",
        status: "No Refills",
        insurance: "Covered",
        cost: "Not available",
        quantity: "30 tablets",
        refills: "0 remaining",
        sig: "Take 1 tablet by mouth once daily.",
        technicianInfo:
          "The patient needs a refill, but the Zoloft prescription on file has no refills remaining."
      },
      {
        name: "Hydroxyzine 25 mg",
        rx: "594774",
        status: "Ready",
        insurance: "Covered",
        cost: "$6.00",
        quantity: "30 tablets",
        refills: "1 remaining",
        sig: "Take 1 tablet by mouth as needed for anxiety.",
        technicianInfo:
          "This prescription is filled and ready for pickup."
      },
      {
        name: "Omeprazole 20 mg",
        rx: "587411",
        status: "Active",
        insurance: "Covered",
        cost: "$4.00",
        quantity: "30 capsules",
        refills: "2 remaining",
        sig: "Take 1 capsule by mouth every morning.",
        technicianInfo:
          "This medication remains active on the patient's profile."
      }
    ]
  },
 
  // ------------------------------------------------------------
  // FILLER / DECOY PATIENTS
  // These records intentionally include similar names and DOBs.
  // ------------------------------------------------------------
  { id: "2001", firstName: "James", lastName: "Buttars", dob: "08/20/1980", medications: fillerMeds() },
  { id: "2002", firstName: "John", lastName: "Buttars", dob: "11/03/1962", medications: fillerMeds() },
  { id: "2003", firstName: "John", lastName: "Butters", dob: "08/20/1980", medications: fillerMeds() },
  { id: "2004", firstName: "Julie", lastName: "Buttars", dob: "04/15/1988", medications: fillerMeds() },
 
  { id: "2005", firstName: "Martha", lastName: "Jacobson", dob: "07/17/1947", medications: fillerMeds() },
  { id: "2006", firstName: "Henry", lastName: "Jacobson", dob: "03/14/1968", medications: fillerMeds() },
  { id: "2007", firstName: "Henry", lastName: "Jacobsen", dob: "07/17/1947", medications: fillerMeds() },
  { id: "2008", firstName: "Helen", lastName: "Jacobson", dob: "12/08/1950", medications: fillerMeds() },
 
  { id: "2009", firstName: "Jennifer", lastName: "Harding", dob: "06/04/1999", medications: fillerMeds() },
  { id: "2010", firstName: "Jenny", lastName: "Harding", dob: "06/04/1979", medications: fillerMeds() },
  { id: "2011", firstName: "Jenny", lastName: "Hardin", dob: "06/04/1999", medications: fillerMeds() },
  { id: "2012", firstName: "Jason", lastName: "Harding", dob: "10/21/1992", medications: fillerMeds() },
 
  { id: "2013", firstName: "Beverly", lastName: "Fisher", dob: "09/23/1975", medications: fillerMeds() },
  { id: "2014", firstName: "Barbara", lastName: "Fisher", dob: "01/30/1951", medications: fillerMeds() },
  { id: "2015", firstName: "Barbara", lastName: "Fischer", dob: "09/23/1975", medications: fillerMeds() },
  { id: "2016", firstName: "Brenda", lastName: "Fisher", dob: "05/12/1984", medications: fillerMeds() },
 
  { id: "2017", firstName: "Jason", lastName: "Atkinson", dob: "02/06/2000", medications: fillerMeds() },
  { id: "2018", firstName: "Jacob", lastName: "Atkinson", dob: "09/11/1978", medications: fillerMeds() },
  { id: "2019", firstName: "Jacob", lastName: "Atkins", dob: "02/06/2000", medications: fillerMeds() },
  { id: "2020", firstName: "Jamie", lastName: "Atkinson", dob: "07/25/1996", medications: fillerMeds() },
 
  { id: "2021", firstName: "Samuel", lastName: "Reed", dob: "02/06/2000", medications: fillerMeds() },
  { id: "2022", firstName: "Angela", lastName: "Morales", dob: "06/04/1999", medications: fillerMeds() },
  { id: "2023", firstName: "Thomas", lastName: "Fisher", dob: "08/20/1980", medications: fillerMeds() },
  { id: "2024", firstName: "Melissa", lastName: "Jacobson", dob: "09/23/1975", medications: fillerMeds() }
];
 
function fillerMeds() {
  return [
    {
      name: "Levothyroxine 50 mcg",
      rx: String(Math.floor(510000 + Math.random() * 80000)),
      status: "Active",
      insurance: "Covered",
      cost: "$7.00",
      quantity: "30 tablets",
      refills: "2 remaining",
      sig: "Take 1 tablet by mouth once daily.",
      technicianInfo: "This is a filler patient record for lookup practice."
    },
    {
      name: "Amlodipine 5 mg",
      rx: String(Math.floor(510000 + Math.random() * 80000)),
      status: "Ready",
      insurance: "Covered",
      cost: "$5.00",
      quantity: "30 tablets",
      refills: "1 remaining",
      sig: "Take 1 tablet by mouth once daily.",
      technicianInfo: "This is a filler patient record for lookup practice."
    }
  ];
}
 
const form = document.getElementById("patient-search-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const dobInput = document.getElementById("dob");
const clearButton = document.getElementById("clear-search");
const messageArea = document.getElementById("message-area");
const patientResult = document.getElementById("patient-result");
 
function normalizeName(value) {
  return value.trim().toLowerCase();
}
 
function formatDobInput(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 8);
 
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 4) return numbers.slice(0, 2) + "/" + numbers.slice(2);
  return (
    numbers.slice(0, 2) +
    "/" +
    numbers.slice(2, 4) +
    "/" +
    numbers.slice(4)
  );
}
 
dobInput.addEventListener("input", () => {
  dobInput.value = formatDobInput(dobInput.value);
});
 
form.addEventListener("submit", (event) => {
  event.preventDefault();
 
  const firstName = normalizeName(firstNameInput.value);
  const lastName = normalizeName(lastNameInput.value);
  const dob = dobInput.value.trim();
 
  messageArea.innerHTML = "";
  patientResult.innerHTML = "";
 
  if (!firstName && !lastName && !dob) {
    showNotFound(
      "Enter at least a first name, last name, or date of birth before searching."
    );
    return;
  }
 
  const matches = patients.filter((record) => {
    const firstMatches =
      !firstName || normalizeName(record.firstName) === firstName;
 
    const lastMatches =
      !lastName || normalizeName(record.lastName) === lastName;
 
    const dobMatches =
      !dob || record.dob === dob;
 
    return firstMatches && lastMatches && dobMatches;
  });
 
  if (matches.length === 0) {
    showNotFound(
      "No patients match the information entered. Verify the patient's information and try again."
    );
    return;
  }
 
  if (firstName && lastName && dob && matches.length === 1) {
    renderPatient(matches[0]);
    return;
  }
 
  renderPatientMatches(matches);
});
 
clearButton.addEventListener("click", () => {
  form.reset();
  messageArea.innerHTML = "";
  patientResult.innerHTML = "";
  firstNameInput.focus();
});
 
function showNotFound(message) {
  messageArea.innerHTML = `
    <div class="message-card error">
      <h2>Patient Not Found</h2>
      <p>${message}</p>
    </div>
  `;
}
 
function statusClass(status) {
  const normalized = status.toLowerCase();
 
  if (normalized.includes("ready")) return "status-ready";
  if (
    normalized.includes("out of stock") ||
    normalized.includes("no refills")
  ) {
    return "status-danger";
  }
  if (normalized.includes("process")) return "status-warning";
 
  return "status-info";
}
 
function renderPatientMatches(matches) {
  const rows = matches
    .map(
      (patient) => `
        <tr>
          <td>
            <strong>${patient.firstName} ${patient.lastName}</strong>
          </td>
          <td>${patient.dob}</td>
          <td>${patient.id}</td>
          <td>
            <button
              type="button"
              class="view-button"
              data-patient-id="${patient.id}"
            >
              Open Patient
            </button>
          </td>
        </tr>
      `
    )
    .join("");
 
  patientResult.innerHTML = `
    <article class="patient-card">
      <div class="patient-header">
        <div>
          <span class="patient-found">Search Results</span>
          <h2>
            ${matches.length}
            Patient${matches.length === 1 ? "" : "s"} Found
          </h2>
          <p class="patient-meta">
            Verify the patient's name and date of birth before opening the record.
          </p>
        </div>
      </div>
 
      <div class="medication-section">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Date of Birth</th>
                <th>Patient ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  `;
 
  patientResult
    .querySelectorAll("[data-patient-id]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const patient = patients.find(
          (record) => record.id === button.dataset.patientId
        );
 
        if (patient) {
          renderPatient(patient);
        }
      });
    });
}
 
function renderPatient(patient) {
  const medicationRows = patient.medications
    .map(
      (medication, index) => `
        <tr>
          <td>
            <span class="med-name">${medication.name}</span>
            <span class="rx-number">Rx #${medication.rx}</span>
          </td>
          <td>
            <span class="status-badge ${statusClass(medication.status)}">
              ${medication.status}
            </span>
          </td>
          <td>${medication.insurance}</td>
          <td>${medication.cost}</td>
          <td>
            <button
              type="button"
              class="view-button"
              data-medication-index="${index}"
            >
              View
            </button>
          </td>
        </tr>
      `
    )
    .join("");
 
  patientResult.innerHTML = `
    <article class="patient-card">
      <div class="patient-header">
        <div>
          <span class="patient-found">Patient Found</span>
          <h2>${patient.firstName} ${patient.lastName}</h2>
          <p class="patient-meta">
            DOB: ${patient.dob} &nbsp; • &nbsp; Patient ID: ${patient.id}
          </p>
        </div>
      </div>
 
      <div class="medication-section">
        <h3>Medications on File</h3>
        <p class="medication-instruction">
          Select the medication the patient is calling about.
        </p>
 
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Status</th>
                <th>Insurance</th>
                <th>Patient Cost</th>
                <th><span class="visually-hidden">Action</span></th>
              </tr>
            </thead>
            <tbody>
              ${medicationRows}
            </tbody>
          </table>
        </div>
      </div>
    </article>
 
    <div id="medication-detail"></div>
  `;
 
  patientResult.querySelectorAll("[data-medication-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.medicationIndex);
      renderMedicationDetail(patient.medications[index]);
    });
  });
}
 
function renderMedicationDetail(medication) {
  const detailArea = document.getElementById("medication-detail");
 
  detailArea.innerHTML = `
    <article class="detail-card">
      <div class="detail-top">
        <div>
          <h3>${medication.name}</h3>
          <p class="detail-sig">${medication.sig}</p>
        </div>
 
        <span class="status-badge ${statusClass(medication.status)}">
          ${medication.status}
        </span>
      </div>
 
      <div class="detail-grid">
        <div class="detail-field">
          <span>Quantity</span>
          <strong>${medication.quantity}</strong>
        </div>
 
        <div class="detail-field">
          <span>Refills</span>
          <strong>${medication.refills}</strong>
        </div>
 
        <div class="detail-field">
          <span>Insurance</span>
          <strong>${medication.insurance}</strong>
        </div>
 
        <div class="detail-field">
          <span>Patient Cost</span>
          <strong>${medication.cost}</strong>
        </div>
      </div>
 
      <div class="tech-note">
        <strong>Technician Information</strong>
        ${medication.technicianInfo}
      </div>
    </article>
  `;
 
  detailArea.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

