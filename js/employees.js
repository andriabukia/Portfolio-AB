// ==========================================================================
// Employees Page Logic - Basic JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    const employeesContainer = document.getElementById('employees-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const employeeForm = document.getElementById('add-employee-form');
    const searchInput = document.getElementById('search-input');
    const employeeCountBadge = document.getElementById('employee-count-badge');
    const formFeedback = document.getElementById('form-feedback');

    // In-memory array of employees
    let employeesList = [];

    // 1. Fetch Users from jsonplaceholder API
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('ქსელის შეცდომა: ' + response.status);
            }
            return response.json();
        })
        .then(function (users) {
            // Hide loading spinner
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }

            employeesList = users;
            renderEmployees(employeesList);
        })
        .catch(function (error) {
            console.error('მონაცემების ჩატვირთვა ვერ მოხერხდა:', error);
            if (loadingSpinner) {
                loadingSpinner.innerHTML = `
                    <div class="text-center py-12 text-red-400">
                        <svg class="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="font-semibold">მონაცემების ჩატვირთვა ვერ მოხერხდა</p>
                        <p class="text-xs text-gray-400 mt-1">გთხოვთ შეამოწმოთ ინტერნეტ-კავშირი ან სცადოთ მოგვიანებით.</p>
                    </div>
                `;
            }
        });

    // 2. Function to Render Employee Cards
    function renderEmployees(users) {
        if (!employeesContainer) return;

        employeesContainer.innerHTML = '';

        if (employeeCountBadge) {
            employeeCountBadge.textContent = users.length + ' თანამშრომელი';
        }

        if (users.length === 0) {
            employeesContainer.innerHTML = `
                <div class="col-span-full text-center py-12 text-gray-400">
                    <p class="text-base font-medium">თანამშრომელი ვერ მოიძებნა</p>
                    <p class="text-xs text-neutral-textMuted mt-1">სცადეთ სხვა საძიებო სიტყვა</p>
                </div>
            `;
            return;
        }

        users.forEach(function (user) {
            const card = createEmployeeCard(user);
            employeesContainer.appendChild(card);
        });
    }

    // 3. Helper to create a single employee card element
    function createEmployeeCard(user) {
        const div = document.createElement('div');
        div.className = 'bg-neutral-card rounded-2xl border border-neutral-border p-6 flex flex-col justify-between hover:border-primary/50 transition duration-300 shadow-card-glow hover:-translate-y-1';

        // Extract initials for avatar
        const initials = user.name
            .split(' ')
            .map(function (n) { return n[0]; })
            .slice(0, 2)
            .join('')
            .toUpperCase();

        const companyName = user.company ? (typeof user.company === 'string' ? user.company : user.company.name) : 'IT Company';
        const companyPhrase = user.company && user.company.catchPhrase ? user.company.catchPhrase : 'Software Development & Design';
        const cityName = user.address ? (typeof user.address === 'string' ? user.address : user.address.city) : 'Tbilisi';

        div.innerHTML = `
            <div>
                <!-- Card Header: Avatar & Basic Info -->
                <div class="flex items-start justify-between gap-4 mb-4">
                    <div class="flex items-center space-x-3.5">
                        <div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-bold font-mono text-base shadow-neon-cyan flex-shrink-0">
                            ${initials}
                        </div>
                        <div>
                            <h3 class="font-bold text-base text-white hover:text-primary transition">
                                ${user.name}
                            </h3>
                            <span class="text-xs font-mono text-secondary">
                                @${user.username || 'user'}
                            </span>
                        </div>
                    </div>
                    <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-surface border border-neutral-border text-primary">
                        #${user.id}
                    </span>
                </div>

                <!-- Company & Role -->
                <div class="mb-4 pb-4 border-b border-neutral-border border-opacity-60">
                    <div class="text-xs font-semibold text-gray-200 flex items-center space-x-1.5">
                        <svg class="w-4 h-4 text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>${companyName}</span>
                    </div>
                    <p class="text-[11px] text-neutral-textMuted italic mt-1 pl-5">
                        "${companyPhrase}"
                    </p>
                </div>

                <!-- Contact Details -->
                <div class="space-y-2 text-xs text-gray-300">
                    <!-- Email -->
                    <div class="flex items-center space-x-2.5 truncate">
                        <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:${user.email}" class="hover:text-primary transition truncate">${user.email}</a>
                    </div>

                    <!-- Phone -->
                    <div class="flex items-center space-x-2.5">
                        <svg class="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span class="font-mono text-[11px] text-gray-300">${user.phone}</span>
                    </div>

                    <!-- City -->
                    <div class="flex items-center space-x-2.5">
                        <svg class="w-4 h-4 text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>${cityName}</span>
                    </div>

                    <!-- Website -->
                    <div class="flex items-center space-x-2.5">
                        <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <a href="https://${user.website}" target="_blank" class="text-primary hover:underline font-mono text-[11px]">${user.website}</a>
                    </div>
                </div>
            </div>

            <!-- Card Bottom Action -->
            <div class="mt-5 pt-4 border-t border-neutral-border border-opacity-60 flex items-center justify-between">
                <span class="inline-flex items-center space-x-1.5 text-[11px] font-mono text-secondary">
                    <span class="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                    <span>აქტიური</span>
                </span>
                <a href="mailto:${user.email}" class="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-neutral transition">
                    <span>დაკავშირება</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        `;

        return div;
    }

    // 4. Search & Filter Input Handler
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.toLowerCase().trim();

            const filtered = employeesList.filter(function (emp) {
                const name = emp.name ? emp.name.toLowerCase() : '';
                const username = emp.username ? emp.username.toLowerCase() : '';
                const email = emp.email ? emp.email.toLowerCase() : '';
                const company = emp.company ? (typeof emp.company === 'string' ? emp.company.toLowerCase() : emp.company.name.toLowerCase()) : '';
                const city = emp.address ? (typeof emp.address === 'string' ? emp.address.toLowerCase() : emp.address.city.toLowerCase()) : '';

                return name.includes(query) ||
                    username.includes(query) ||
                    email.includes(query) ||
                    company.includes(query) ||
                    city.includes(query);
            });

            renderEmployees(filtered);
        });
    }

    // 5. Add Employee Form Submission Handler
    if (employeeForm) {
        employeeForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const nameInput = document.getElementById('emp-name');
            const usernameInput = document.getElementById('emp-username');
            const emailInput = document.getElementById('emp-email');
            const phoneInput = document.getElementById('emp-phone');
            const companyInput = document.getElementById('emp-company');
            const cityInput = document.getElementById('emp-city');
            const websiteInput = document.getElementById('emp-website');

            const newEmployee = {
                id: employeesList.length > 0 ? Math.max.apply(Math, employeesList.map(function (u) { return u.id; })) + 1 : 1,
                name: nameInput.value.trim(),
                username: usernameInput.value.trim() || nameInput.value.trim().toLowerCase().replace(/\s+/g, '_'),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim() || '+995 555 000 000',
                website: websiteInput.value.trim() || 'example.ge',
                address: {
                    city: cityInput.value.trim() || 'თბილისი'
                },
                company: {
                    name: companyInput.value.trim() || 'TBC Bank / Tech',
                    catchPhrase: 'ინოვაციური ციფრული გადაწყვეტილებები'
                }
            };

            // Prepend new employee to list
            employeesList.unshift(newEmployee);

            // Re-render list
            renderEmployees(employeesList);

            // Reset form
            employeeForm.reset();

            // Show success feedback
            if (formFeedback) {
                formFeedback.classList.remove('hidden');
                setTimeout(function () {
                    formFeedback.classList.add('hidden');
                }, 4000);
            }

            // Scroll smoothly to employees list
            if (employeesContainer) {
                employeesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});

