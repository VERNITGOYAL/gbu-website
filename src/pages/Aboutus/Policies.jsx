
import React, { useState } from 'react';
 
import { FileText, Download, Search, Filter, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Policies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const policies = [
    {
      title: "Academic Policy 2024",
      category: "academic",
      year: "2024",
      description: "Comprehensive guidelines for academic procedures and standards",
      icon: FileText,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Admission Policy",
      category: "admission",
      year: "2024",
      description: "Detailed admission criteria and procedures for all programs",
      icon: FileText,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Research Policy",
      category: "research",
      year: "2023",
      description: "Guidelines for research activities and intellectual property",
      icon: FileText,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Anti-Ragging Policy",
      category: "student",
      year: "2024",
      description: "Zero tolerance policy against ragging and harassment",
      icon: FileText,
      color: "from-red-400 to-red-600"
    },
    {
      title: "Fee Structure & Refund Policy",
      category: "financial",
      year: "2024",
      description: "Comprehensive fee structure and refund guidelines",
      icon: FileText,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Grievance Redressal Policy",
      category: "student",
      year: "2023",
      description: "Mechanism for addressing student and staff grievances",
      icon: FileText,
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const rtiData = [
    {
      question: "How to file an RTI application?",
      answer: "RTI applications can be filed online through the university portal or submitted physically at the registrar's office with the prescribed fee."
    },
    {
      question: "What is the fee for RTI application?",
      answer: "The fee for RTI application is ₹10 for general information and ₹2 per page for photocopies of documents."
    },
    {
      question: "Who is the Public Information Officer (PIO)?",
      answer: "The Registrar of the university serves as the Public Information Officer for RTI matters."
    },
    {
      question: "What is the time limit for RTI response?",
      answer: "The university is required to respond to RTI applications within 30 days of receipt."
    },
    {
      question: "How to appeal against RTI decisions?",
      answer: "Appeals can be filed with the First Appellate Authority within 30 days of receiving the decision or non-response."
    }
  ];

  const filteredPolicies = policies.filter(policy => {
    const matchesFilter = activeFilter === 'all' || policy.category === activeFilter;
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
      <>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-teal-900 via-blue-800 to-cyan-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3")'
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Policies, Statutes & RTI</h1>
            <p className="text-xl opacity-90">Transparency and Compliance Guidelines</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search policies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Filter Dropdown */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                  >
                    <option value="all">All Categories</option>
                    <option value="academic">Academic</option>
                    <option value="admission">Admission</option>
                    <option value="research">Research</option>
                    <option value="student">Student Affairs</option>
                    <option value="financial">Financial</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">University Policies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPolicies.map((policy, index) => (
              <div 
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${policy.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <policy.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                      {policy.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {policy.year}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{policy.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {policy.category}
                    </span>
                    <button className="flex items-center text-teal-600 hover:text-teal-800 font-semibold transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RTI Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Right to Information (RTI)</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-white text-center">
                <FileText className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">RTI Information Center</h3>
                <p className="opacity-90">Frequently Asked Questions about RTI Procedures</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4">
                  {rtiData.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                      >
                        <span className="font-semibold text-gray-800">{item.question}</span>
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {expandedFAQ === index && (
                        <div className="p-6 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
                    File RTI Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  );
};

export default Policies;
