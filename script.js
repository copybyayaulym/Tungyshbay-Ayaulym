function calculateSalary() {

    // Store inputs
    let name = document.getElementById("name").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let taxRate = parseFloat(document.getElementById("tax").value);

    // Input validation
    if (!name || salary <= 0 || taxRate < 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid information in all fields.";
        return;
    }

    // Calculate tax amount
    let taxAmount = salary * (taxRate / 100);

    // Calculate net salary
    let netSalary = salary - taxAmount;

    let category;

    // Income classification (adjusted for KZT values)
    if (netSalary < 300000) {
        category = "Low income";
    } else if (netSalary >= 300000 && netSalary < 800000) {
        category = "Middle income";
    } else {
        category = "High income";
    }

    // Format numbers with thousands separator
    let formattedTax = taxAmount.toLocaleString("en-US");
    let formattedNet = netSalary.toLocaleString("en-US");

    // Display result
    document.getElementById("result").innerHTML =
        `Hello, ${name}! <br>
         Tax amount: ${formattedTax} ₸ <br>
         Net salary: ${formattedNet} ₸ <br>
         Income category: ${category}`;

