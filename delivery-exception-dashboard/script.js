document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#exceptionForm");
  const tableBody = document.querySelector("#tableBody");
  const filterIssue = document.querySelector("#filterIssue");
  const filterStatus = document.querySelector("#filterStatus");
  const openCountEl = document.querySelector("#openCount");
  const resolvedCountEl = document.querySelector("#resolvedCount");

  // In-memory store for issues
  const issues = [];

  function updateCounters() {
    let open = 0;
    let resolved = 0;

    issues.forEach((issue) => {
      if (issue.status === "Open") open += 1;
      if (issue.status === "Resolved") resolved += 1;
    });

    if (openCountEl) openCountEl.textContent = open;
    if (resolvedCountEl) resolvedCountEl.textContent = resolved;
  }

  function createRow(issue) {
    const row = document.createElement("tr");
    row.dataset.id = String(issue.id);
    row.setAttribute("data-issue", issue.issueType);
    row.setAttribute("data-status", issue.status);

    const isHighPriority = issue.priority === "High";

    row.innerHTML = `
      <td>${issue.deliveryId}</td>
      <td>${issue.customerName}</td>
      <td>${issue.issueType}</td>
      <td class="${isHighPriority ? "high-priority" : ""}">${issue.priority}</td>
      <td class="status">${issue.status}</td>
      <td>
        <button class="btn btn-resolve resolve"${issue.status === "Resolved" ? " disabled" : ""}>Resolve</button>
        <button class="btn btn-delete delete">Delete</button>
      </td>
    `;

    if (issue.status === "Resolved") {
      row.classList.add("resolved");
    }

    tableBody.appendChild(row);
  }

  function validateForm(values) {
    if (!values.deliveryId.trim()) {
      alert("Delivery ID is required");
      return false;
    }

    if (!values.customerName.trim()) {
      alert("Customer Name is required");
      return false;
    }

    if (!values.issueType) {
      alert("Please select an Issue Type");
      return false;
    }

    if (!values.priority) {
      alert("Please select a Priority");
      return false;
    }

    return true;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const deliveryId = document.querySelector("#deliveryId").value;
    const customerName = document.querySelector("#customerName").value;
    const issueType = document.querySelector("#issueType").value;
    const notes = document.querySelector("#notes").value;
    const priorityInput = document.querySelector('input[name="priority"]:checked');
    const priority = priorityInput ? priorityInput.value : "";

    const values = { deliveryId, customerName, issueType, priority };

    if (!validateForm(values)) {
      return;
    }

    const issue = {
      id: Date.now(),
      deliveryId: deliveryId.trim(),
      customerName: customerName.trim(),
      issueType,
      priority,
      notes: notes.trim(),
      status: "Open",
    };

    issues.push(issue);
    createRow(issue);
    updateCounters();
    form.reset();
  });

  // EVENT DELEGATION FOR ROW ACTIONS
  tableBody.addEventListener("click", function (e) {
    const target = e.target;
    const row = target.closest("tr");
    if (!row) return;

    const id = row.dataset.id;

    if (target.classList.contains("resolve")) {
      const issue = issues.find((item) => String(item.id) === id);
      if (!issue || issue.status === "Resolved") {
        return;
      }

      issue.status = "Resolved";
      row.classList.add("resolved");
      row.setAttribute("data-status", "Resolved");
      const statusCell = row.querySelector(".status");
      if (statusCell) {
        statusCell.textContent = "Resolved";
      }
      target.disabled = true;
      updateCounters();
    }

    if (target.classList.contains("delete")) {
      if (confirm("Are you sure you want to delete this record?")) {
        const index = issues.findIndex((item) => String(item.id) === id);
        if (index !== -1) {
          issues.splice(index, 1);
        }
        row.remove();
        updateCounters();
      }
    }
  });

  // FILTERS
  function applyFilters() {
    const issueValue = filterIssue.value;
    const statusValue = filterStatus.value;

    document.querySelectorAll("#tableBody tr").forEach((row) => {
      const issue = row.getAttribute("data-issue");
      const status = row.getAttribute("data-status");

      const issueMatch = issueValue === "All" || issue === issueValue;
      const statusMatch = statusValue === "All" || status === statusValue;

      row.style.display = issueMatch && statusMatch ? "" : "none";
    });
  }

  filterIssue.addEventListener("change", applyFilters);
  filterStatus.addEventListener("change", applyFilters);
});
