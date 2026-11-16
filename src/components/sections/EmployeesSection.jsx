import React, { useState, useEffect } from 'react';
import { UserPlus, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { EmployeeCard } from '../common/EmployeeCard';

export const EmployeesSection = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    website: '',
  });

  // Fetch Users from jsonplaceholder API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('მონაცემების ჩატვირთვა ვერ მოხერხდა');
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Form Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add Employee Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) return;

    const newEmp = {
      id: employees.length > 0 ? Math.max(...employees.map((u) => u.id)) + 1 : 1,
      name: formData.name.trim(),
      username:
        formData.username.trim() ||
        formData.name.trim().toLowerCase().replace(/\s+/g, '_'),
      email: formData.email.trim(),
      phone: formData.phone.trim() || '+995 555 000 000',
      website: formData.website.trim() || 'example.ge',
      address: {
        city: formData.city.trim() || 'თბილისი',
      },
      company: {
        name: formData.company.trim() || 'TBC Tech',
        catchPhrase: 'ინოვაციური ციფრული გადაწყვეტილებები',
      },
    };

    setEmployees((prev) => [newEmp, ...prev]);

    // Reset Form
    setFormData({
      name: '',
      username: '',
      email: '',
      phone: '',
      company: '',
      city: '',
      website: '',
    });

    // Show Success Alert
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 4000);
  };

  // Filtered Employees
  const filteredEmployees = employees.filter((emp) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const name = emp.name ? emp.name.toLowerCase() : '';
    const username = emp.username ? emp.username.toLowerCase() : '';
    const email = emp.email ? emp.email.toLowerCase() : '';
    const company =
      emp.company && typeof emp.company === 'object'
        ? emp.company.name.toLowerCase()
        : (emp.company || '').toLowerCase();
    const city =
      emp.address && typeof emp.address === 'object'
        ? emp.address.city.toLowerCase()
        : (emp.address || '').toLowerCase();

    return (
      name.includes(query) ||
      username.includes(query) ||
      email.includes(query) ||
      company.includes(query) ||
      city.includes(query)
    );
  });

  return (
    <section id="employees" className="py-16 md:py-24 border-b border-neutral-border border-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          step="04 / TEAM & EMPLOYEES"
          title="თანამშრომელთა მონაცემთა ბაზა"
          subtitle="თანამშრომლების ბარათები ჩატვირთულია jsonplaceholder API-დან რეალურ დროში. შეგიძლიათ დაამატოთ ახალი თანამშრომელი."
        />

        {/* Add Employee Form Card */}
        <div className="bg-neutral-card rounded-3xl border border-neutral-border p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-border border-opacity-60">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-neon-cyan flex-shrink-0">
                <UserPlus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  თანამშრომლის დამატების ფორმა
                </h3>
                <p className="text-xs text-neutral-textMuted mt-0.5">
                  შეავსეთ ველები ახალი თანამშრომლის ბარათის შესაქმნელად
                </p>
              </div>
            </div>

            <span className="px-3 py-1.5 rounded-lg text-xs font-mono bg-neutral-surface border border-neutral-border text-secondary self-start sm:self-auto">
              Live React Form
            </span>
          </div>

          {/* Success Alert */}
          {showSuccessAlert && (
            <div className="mb-6 p-4 rounded-xl bg-secondary/15 border border-secondary/40 text-secondary text-sm flex items-center space-x-3 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>თანამშრომელი წარმატებით დაემატა სიაში!</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  სახელი და გვარი <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="მაგ: გიორგი ბერიძე"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="gberidze"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  ელ. ფოსტის მისამართი <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="giorgi@tbc.ge"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  ტელეფონის ნომერი
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+995 599 12 34 56"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  კომპანიის დასახელება
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="TBC Tech"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  ქალაქი
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="თბილისი"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-3">
                <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  ვებსაიტი / პორტფოლიო
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="portfolio-dev.ge"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-primary text-neutral hover:bg-primary-hover shadow-neon-cyan transition duration-200"
              >
                <UserPlus className="w-5 h-5" />
                <span>თანამშრომლის დამატება</span>
              </button>
            </div>
          </form>
        </div>

        {/* Search & Counter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-neutral-border border-opacity-60">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              თანამშრომელთა სია
            </h3>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-secondary/15 border border-secondary/40 text-secondary">
              {filteredEmployees.length} თანამშრომელი
            </span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ძებნა (სახელი, ელ.ფოსტა, კომპანია)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-card border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-xs font-mono transition"
            />
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center py-16 space-y-4">
            <div className="w-12 h-12 mx-auto border-4 border-neutral-border border-t-primary rounded-full animate-spin"></div>
            <p className="text-sm font-mono text-gray-300">
              მონაცემები იტვირთება jsonplaceholder API-დან...
            </p>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="text-center py-12 text-red-400">
            <AlertCircle className="w-12 h-12 mx-auto mb-3" />
            <p className="font-semibold">მონაცემების ჩატვირთვა ვერ მოხერხდა: {error}</p>
          </div>
        )}

        {/* Employee Cards Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((emp) => (
              <EmployeeCard key={emp.id} user={emp} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default EmployeesSection;
