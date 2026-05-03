function generatePlan() {
  const age = Number(document.getElementById("age").value);
  const goal = document.getElementById("goal").value;
  const result = document.getElementById("result");

  if (!age || age <= 0) {
    result.style.display = "block";
    result.innerHTML = "<h2>Invalid Input</h2><p>Please enter a valid age.</p>";
    return;
  }

  let ageGroup = "";
  let basePlan = [];

  if (age <= 12) {
    ageGroup = "Children";
    basePlan = ["Milk or curd", "Fruits", "Dal/rice/roti", "Green vegetables", "Nuts in small quantity"];
  } else if (age <= 19) {
    ageGroup = "Teenagers";
    basePlan = ["Protein-rich breakfast", "Fruits", "Whole grains", "Paneer/egg/dal", "Vegetables"];
  } else if (age <= 40) {
    ageGroup = "Adults";
    basePlan = ["Balanced breakfast", "Seasonal fruits", "Dal/beans/paneer", "Roti/rice", "Salad"];
  } else if (age <= 60) {
    ageGroup = "Middle-Aged Adults";
    basePlan = ["High-fiber foods", "Low-oil meals", "Fruits", "Lean protein", "Light dinner"];
  } else {
    ageGroup = "Senior Citizens";
    basePlan = ["Soft food", "Calcium-rich diet", "Fruits", "Light meals", "Hydration"];
  }

  let goalTip = "";
  if (goal === "weight-loss") {
    goalTip = "Prefer low-oil food, more salads, fruits, and controlled portions.";
  } else if (goal === "weight-gain") {
    goalTip = "Add healthy calories such as banana, milk, nuts, paneer, and peanut butter.";
  } else if (goal === "active") {
    goalTip = "Include more protein, complex carbohydrates, and adequate water intake.";
  } else {
    goalTip = "Maintain a balanced diet with protein, carbohydrates, vitamins, and minerals.";
  }

  result.style.display = "block";
  result.innerHTML = `
    <h2>Recommended Plan for ${ageGroup}</h2>
    <ul>${basePlan.map(item => `<li>${item}</li>`).join("")}</ul>
    <p><strong>Goal Tip:</strong> ${goalTip}</p>
    <p><em>Disclaimer: This is a demo project and not medical advice.</em></p>
  `;
}
