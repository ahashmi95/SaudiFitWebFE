function toggleGoals() {
    const goal = document.getElementById("goal").value;
    const cuttingGoal = document.getElementById("cutting-goal");
    const bulkingGoal = document.getElementById("bulking-goal");
    const maintainGoal = document.getElementById("maintain-goal")

    cuttingGoal.style.display = "none";
bulkingGoal.style.display = "none";
maintainGoal.style.display = "none";

// Show the selected goal by changing its visibility
if (goal === "cutting") {
    cuttingGoal.style.display = "inline";
} else if (goal === "bulking") {
    bulkingGoal.style.display = "inline";
} else if (goal === "maintain") {
    maintainGoal.style.display = "inline";
}
}
// Add an event listener to the main goal select element
document.getElementById("goal").addEventListener("change", toggleGoals);
toggleGoals();

function calculateCalories() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const goal = document.getElementById("goal").value;
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value); // Use the activity value

    let tdee = 0;
    let calories = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;

    const requiredFieldsFilled = !isNaN(age) && !isNaN(height) && !isNaN(weight) && goal != "";

    if (gender === "male") {
        // Calculate TDEE for males (example formula, replace with your own)
        tdee = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender === "female") {
        // Calculate TDEE for females (example formula, replace with your own)
        tdee = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Adjust TDEE based on activity level
    tdee *= activity;

    if (goal === "cutting") {
        const cuttingGoalValue = parseFloat(document.querySelector('input[name="cutting-goal-radio"]:checked').value);
        // Calculate cutting calories based on weekly goal (example formula, replace with your own)
        calories = tdee - (cuttingGoalValue * 7700) / 7; // Convert weekly loss to daily
    } else if (goal === "bulking") {
        const bulkingGoalValue = parseFloat(document.querySelector('input[name="bulking-goal-radio"]:checked').value);
        // Calculate bulking calories based on weekly goal (example formula, replace with your own)
        calories = tdee + (bulkingGoalValue * 7700) / 7; // Convert weekly gain to daily
    } else if (goal === "maintain") {
        // Maintain calories are the same as TDEE
        calories = tdee;
    }

    // Calculate macros (example macros ratio, replace with your own)
    protein = (0.3 * calories) / 4; // Assuming 30% of calories from protein
    carbs = (0.5 * calories) / 4; // Assuming 50% of calories from carbs
    fat = (0.2 * calories) / 9; // Assuming 20% of calories from fat

    // Display results
    document.getElementById("result").textContent = calories.toFixed(2);
    document.getElementById("maintain-result").textContent = tdee.toFixed(2);
    document.getElementById("protein").textContent = protein.toFixed(2);
    document.getElementById("carb").textContent = carbs.toFixed(2);
    document.getElementById("fat").textContent = fat.toFixed(2);

    // Show the results container
    if (requiredFieldsFilled) {
        const resultContainer = document.getElementById("results-container");
        if (window.getComputedStyle(resultContainer).display === "none") {
            resultContainer.style.display = "flex";
        }
        const macrosContainer = document.getElementById("results-container-macros");
        if (window.getComputedStyle(macrosContainer).display === "none") {
            macrosContainer.style.display = "flex";
        }
    }
}

    document.addEventListener('alpine:init', () => {
        Alpine.store('accordion', {
          tab: 0
        });
        
        Alpine.data('accordion', (idx) => ({
          init() {
            this.idx = idx;
          },
          idx: -1,
          handleClick() {
            this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
          },
          handleRotate() {
            return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
          },
          handleToggle() {
            return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
          }
        }));
      })