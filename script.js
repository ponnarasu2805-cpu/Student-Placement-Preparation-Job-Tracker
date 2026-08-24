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

                                                                                                                                                                                                                                                                                                // PROFILE FUNCTIONS

                                                                                                                                                                                                                                                                                                function openProfile() {

                                                                                                                                                                                                                                                                                                    document.getElementById("profileModal").style.display = "flex";

                                                                                                                                                                                                                                                                                                    }


                                                                                                                                                                                                                                                                                                    function closeProfile() {

                                                                                                                                                                                                                                                                                                        document.getElementById("profileModal").style.display = "none";

                                                                                                                                                                                                                                                                                                        }


                                                                                                                                                                                                                                                                                                        function saveProfile() {

                                                                                                                                                                                                                                                                                                            const name =
                                                                                                                                                                                                                                                                                                                    document.getElementById("nameInput").value.trim();

                                                                                                                                                                                                                                                                                                                        const college =
                                                                                                                                                                                                                                                                                                                                document.getElementById("collegeInput").value.trim();

                                                                                                                                                                                                                                                                                                                                    const degree =
                                                                                                                                                                                                                                                                                                                                            document.getElementById("degreeInput").value.trim();

                                                                                                                                                                                                                                                                                                                                                const year =
                                                                                                                                                                                                                                                                                                                                                        document.getElementById("yearInput").value;

                                                                                                                                                                                                                                                                                                                                                            const goal =
                                                                                                                                                                                                                                                                                                                                                                    document.getElementById("goalInput").value.trim();


                                                                                                                                                                                                                                                                                                                                                                        if (name === "" || college === "") {

                                                                                                                                                                                                                                                                                                                                                                                alert("Please enter your name and college.");

                                                                                                                                                                                                                                                                                                                                                                                        return;

                                                                                                                                                                                                                                                                                                                                                                                            }


                                                                                                                                                                                                                                                                                                                                                                                                document.getElementById("studentName").textContent =
                                                                                                                                                                                                                                                                                                                                                                                                        name;

                                                                                                                                                                                                                                                                                                                                                                                                            document.getElementById("studentDegree").textContent =
                                                                                                                                                                                                                                                                                                                                                                                                                    degree + " • " + year;

                                                                                                                                                                                                                                                                                                                                                                                                                        document.getElementById("studentCollege").textContent =
                                                                                                                                                                                                                                                                                                                                                                                                                                college;


                                                                                                                                                                                                                                                                                                                                                                                                                                    localStorage.setItem("studentName", name);

                                                                                                                                                                                                                                                                                                                                                                                                                                        localStorage.setItem("studentCollege", college);

                                                                                                                                                                                                                                                                                                                                                                                                                                            localStorage.setItem("studentDegree", degree);

                                                                                                                                                                                                                                                                                                                                                                                                                                                localStorage.setItem("studentYear", year);

                                                                                                                                                                                                                                                                                                                                                                                                                                                    localStorage.setItem("placementGoal", goal);


                                                                                                                                                                                                                                                                                                                                                                                                                                                        closeProfile();

                                                                                                                                                                                                                                                                                                                                                                                                                                                            alert("Profile saved successfully! 🎉");

                                                                                                                                                                                                                                                                                                                                                                                                                                                            }


                                                                                                                                                                                                                                                                                                                                                                                                                                                            // LOAD SAVED PROFILE

                                                                                                                                                                                                                                                                                                                                                                                                                                                            window.addEventListener("load", function () {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                const name =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        localStorage.getItem("studentName");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            const college =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    localStorage.getItem("studentCollege");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const degree =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                localStorage.getItem("studentDegree");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const year =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            localStorage.getItem("studentYear");


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (name) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        document.getElementById("studentName").textContent =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    name;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (college) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    document.getElementById("studentCollege").textContent =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                college;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (degree && year) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                document.getElementById("studentDegree").textContent =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            degree + " • " + year;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });