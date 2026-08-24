let skillsCompleted = 0;
let tasksCompleted = 0;
let companiesAdded = 0;


// START BUTTON

document.getElementById("startBtn").addEventListener("click", function () {

    document.getElementById("skills").scrollIntoView({
            behavior: "smooth"
                });

                });


                // COMPLETE SKILL

                function completeSkill(button) {

                    if (button.disabled) {
                            return;
                                }

                                    button.textContent = "Completed ✓";
                                        button.disabled = true;

                                            button.parentElement.style.opacity = "0.6";

                                                skillsCompleted++;

                                                    updateDashboard();
                                                    }


                                                    // ADD COMPANY

                                                    function addCompany() {

                                                        const input = document.getElementById("companyInput");

                                                            const companyName = input.value.trim();

                                                                if (companyName === "") {
                                                                        alert("Please enter a company name.");
                                                                                return;
                                                                                    }

                                                                                        const companyList =
                                                                                                document.getElementById("companyList");

                                                                                                    const company = document.createElement("div");

                                                                                                        company.className = "company";

                                                                                                            company.innerHTML = `
                                                                                                                    <span>🏢 ${companyName}</span>

                                                                                                                            <button onclick="removeCompany(this)">
                                                                                                                                        Remove
                                                                                                                                                </button>
                                                                                                                                                    `;

                                                                                                                                                        companyList.appendChild(company);

                                                                                                                                                            input.value = "";

                                                                                                                                                                companiesAdded++;

                                                                                                                                                                    updateDashboard();
                                                                                                                                                                    }


                                                                                                                                                                    // REMOVE COMPANY

                                                                                                                                                                    function removeCompany(button) {

                                                                                                                                                                        button.parentElement.remove();

                                                                                                                                                                            companiesAdded--;

                                                                                                                                                                                updateDashboard();
                                                                                                                                                                                }


                                                                                                                                                                                // COMPLETE TASK

                                                                                                                                                                                function completeTask(button) {

                                                                                                                                                                                    if (button.disabled) {
                                                                                                                                                                                            return;
                                                                                                                                                                                                }

                                                                                                                                                                                                    button.textContent = "Completed ✓";
                                                                                                                                                                                                        button.disabled = true;

                                                                                                                                                                                                            button.parentElement.style.opacity = "0.6";

                                                                                                                                                                                                                tasksCompleted++;

                                                                                                                                                                                                                    updateDashboard();
                                                                                                                                                                                                                    }


                                                                                                                                                                                                                    // UPDATE DASHBOARD

                                                                                                                                                                                                                    function updateDashboard() {

                                                                                                                                                                                                                        document.getElementById("skillCount").textContent =
                                                                                                                                                                                                                                skillsCompleted;

                                                                                                                                                                                                                                    document.getElementById("companyCount").textContent =
                                                                                                                                                                                                                                            companiesAdded;

                                                                                                                                                                                                                                                document.getElementById("taskCount").textContent =
                                                                                                                                                                                                                                                        tasksCompleted;


                                                                                                                                                                                                                                                            const totalItems = 5 + 4;

                                                                                                                                                                                                                                                                const completedItems =
                                                                                                                                                                                                                                                                        skillsCompleted + tasksCompleted;

                                                                                                                                                                                                                                                                            const progress =
                                                                                                                                                                                                                                                                                    Math.round((completedItems / totalItems) * 100);

                                                                                                                                                                                                                                                                                        document.getElementById("progressCount").textContent =
                                                                                                                                                                                                                                                                                                progress + "%";
                                                                                                                                                                                                                                                                                                }