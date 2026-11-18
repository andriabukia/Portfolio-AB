import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  UserPlus, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  RotateCw,
  SlidersHorizontal
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { EmployeeCard } from '../components/common/EmployeeCard';

export const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
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

  // 1. Fetch Users from jsonplaceholder API with useEffect
  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('სერვერიდან მონაცემების მიღება ვერ მოხერხდა');
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message || 'დაფიქსირდა შეცდომა');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Search functionality implemented with useEffect (as required)
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      setFilteredEmployees(employees);
      return;
    }

    const results = employees.filter((emp) => {
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
      const phone = emp.phone ? emp.phone.toLowerCase() : '';

      return (
        name.includes(query) ||
        username.includes(query) ||
        email.includes(query) ||
        company.includes(query) ||
        city.includes(query) ||
        phone.includes(query)
      );
    });

    setFilteredEmployees(results);
  }, [searchQuery, employees]);

  // Form Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add Employee Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) return;

    const newEmp = {
      id: employees.length > 0 ? Math.max(...employees.map((u) => u.id)) + 1 : 1,
      name: formData.name.trim(),
      username:
        formData.username.trim() ||
        formData.name.trim().toLowerCase().replace(/\s+/g, '_'),
      email: formData.email.trim(),
      phone: formData.phone.trim() || '+995 555 000 000',
      website: formData.website.trim() || 'tbc.ge',
      address: {
        city: formData.city.trim() || 'თბილისი',
      },
      company: {
        name: formData.company.trim() || 'TBC Bank & Tech',
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

    setIsFormOpen(false);
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 4000);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-border pb-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-mono text-gray-300 hover:text-primary transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>მთავარ გვერდზე დაბრუნება</span>
          </Link>

          <div className="flex items-center space-x-2 text-xs font-mono text-neutral-textMuted">
            <span>გვერდი:</span>
            <span className="px-2.5 py-1 rounded bg-neutral-card border border-neutral-border text-primary font-semibold">
              /employees
            </span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center md:text-left">
          <SectionHeader
            badge="გუნდის წევრები & REST API"
            title="თანამშრომლების კატალოგი"
            description="მონაცემები დინამიურად იტვირთება JSONPlaceholder API-დან. ძებნის ფუნქციონალი რეალიზებულია useEffect()-ის გამოყენებით."
          />
        </div>

        {/* Success Alert */}
        {showSuccessAlert && (
          <div className="p-4 rounded-xl bg-secondary/10 border border-secondary text-secondary flex items-center justify-between shadow-neon-green animate-fadeIn">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-semibold">
                ახალი თანამშრომელი წარმატებით დაემატა სიაში!
              </span>
            </div>
            <button
              onClick={() => setShowSuccessAlert(false)}
              className="text-secondary/70 hover:text-secondary cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Search and Action Bar */}
        <div className="bg-neutral-card border border-neutral-border rounded-2xl p-4 sm:p-6 shadow-card-glow flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input with useEffect Integration */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ძებნა: სახელით, username-ით, ელ-ფოსტით, ქალაქით ან კომპანიით..."
              className="w-full pl-11 pr-10 py-3 bg-neutral-surface border border-neutral-border rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white"
                title="გასუფთავება"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action Buttons: Add Form Toggle & Refresh */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={fetchUsers}
              disabled={loading}
              className="px-4 py-3 bg-neutral-surface hover:bg-neutral-border border border-neutral-border text-gray-300 hover:text-white rounded-xl text-xs font-semibold flex items-center space-x-2 transition disabled:opacity-50"
              title="მონაცემების განახლება"
            >
              <RotateCw className={`w-4 h-4 ${loading ? 'animate-spin text-primary' : ''}`} />
              <span className="hidden sm:inline">განახლება</span>
            </button>

            <button
              type="button"
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary text-neutral hover:bg-primary-hover shadow-neon-cyan transition flex items-center space-x-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>{isFormOpen ? 'ფორმის დახურვა' : 'თანამშრომლის დამატება'}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Add Employee Form */}
        {isFormOpen && (
          <div className="bg-neutral-card border border-primary/40 rounded-2xl p-6 md:p-8 shadow-card-glow animate-fadeIn">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-border">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">ახალი თანამშრომლის დამატება</h3>
                  <p className="text-xs text-neutral-textMuted">შეავსეთ ველები და დაამატეთ ახალი წევრი კატალოგში</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    სახელი და გვარი <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="მაგ: გიორგი ბერიძე"
                    className="w-full px-3.5 py-2.5 bg-neutral-surface border border-neutral-border rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    მომხმარებლის სახელი (Username)
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="მაგ: giorgi_b"
                    className="w-full px-3.5 py-2.5 bg-neutral-surface border border-neutral-border rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    ელ-ფოსტა <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="giorgi@tbc.ge"
                    className="w-full px-3.5 py-2.5 bg-neutral-surface border border-neutral-border rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    ტელეფონის ნომერი
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+995 555 12 34 56"
                    className="w-full px-3.5 py-2.5 bg-neutral-surface border border-neutral-border rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    კომპანია / დეპარტამენტი
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="TBC IT Department"
                    className="w-full px-3.5 py-2.5 bg-neutral-surface border border-neutral-border rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    ქალაქი
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="თბილისი"
                    className="w-full px-3.5 py-2.5 bg-neutral-surface border border-neutral-border rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-secondary text-neutral hover:bg-secondary-hover shadow-neon-green transition"
                >
                  დამატება
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Results Counter and Filter Info */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-neutral-textMuted px-1">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            <span>
              ნაპოვნია: <strong className="text-white">{filteredEmployees.length}</strong> თანამშრომელი (სულ {employees.length}-დან)
            </span>
          </div>

          {searchQuery && (
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <span>ფილტრი: <span className="text-primary font-semibold">"{searchQuery}"</span></span>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-secondary hover:underline cursor-pointer"
              >
                გასუფთავება
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-20 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin shadow-neon-cyan"></div>
            <p className="text-sm font-mono text-gray-400">
              იტვირთება მონაცემები API-დან...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-center space-y-4">
            <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
            <h4 className="text-base font-bold text-white">მონაცემების ჩატვირთვა ვერ მოხერხდა</h4>
            <p className="text-xs text-red-300 max-w-md mx-auto">{error}</p>
            <button
              onClick={fetchUsers}
              className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition"
            >
              ხელახლა ცდა
            </button>
          </div>
        )}

        {/* Employees Cards Grid */}
        {!loading && !error && filteredEmployees.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((user) => (
              <EmployeeCard key={user.id} user={user} />
            ))}
          </div>
        )}

        {/* Empty State for Search */}
        {!loading && !error && filteredEmployees.length === 0 && (
          <div className="py-16 text-center bg-neutral-card rounded-2xl border border-neutral-border p-8 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-neutral-surface border border-neutral-border flex items-center justify-center text-gray-500">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">
              თანამშრომელი ვერ მოიძებნა
            </h4>
            <p className="text-xs text-neutral-textMuted max-w-sm mx-auto">
              საძიებო სიტყვით "{searchQuery}" ჩანაწერი არ არსებობს. სცადეთ სხვა საძიებო სიტყვა.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-neutral-surface border border-neutral-border rounded-lg text-xs text-primary hover:border-primary transition"
            >
              ძებნის გასუფთავება
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default EmployeesPage;
