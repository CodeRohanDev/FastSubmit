import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Application Form Creator - Build Online Application Forms | FastSubmit',
  description: 'Create professional application forms for free. Build job applications, college admissions, program applications, and more. Easy drag-and-drop builder with advanced features.',
  keywords: 'free application form creator, application form builder, job application form, college application form, online application form, application form maker',
  openGraph: {
    title: 'Free Application Form Creator - Build Online Application Forms',
    description: 'Create professional application forms for free. Build job applications, college admissions, program applications with file uploads and conditional logic.',
    type: 'website',
    url: 'https://fastsubmit.app/free-application-form-creator',
    images: [
      {
        url: 'https://fastsubmit.app/og-application-form-creator.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Application Form Creator - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Application Form Creator - Build Online Application Forms',
    description: 'Create professional application forms for free. File uploads, conditional logic, automated workflows.',
    images: ['https://fastsubmit.app/og-application-form-creator.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-application-form-creator'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Application Form Creator',
  description: 'Free application form creator for building job applications, college admissions, program applications, and more',
  url: 'https://fastsubmit.app/free-application-form-creator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '18742'
  },
  featureList: [
    'Job Application Forms',
    'College Application Forms',
    'File Upload Support',
    'Conditional Logic',
    'Application Tracking',
    'Automated Workflows'
  ]
}

export default function FreeApplicationFormCreatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Application Form Creator
                <span className="block text-blue-600">Build Professional Applications</span>
                <span className="block text-indigo-600">For Any Purpose</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create comprehensive application forms for jobs, colleges, programs, and services. 
                Include file uploads, conditional questions, multi-step workflows, and automated 
                application tracking. Perfect for HR departments, educational institutions, and organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/application-builder" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Create Application Form
                </Link>
                <Link 
                  href="/application-templates" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Application Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Types */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Application Forms You Can Create
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Job Application Forms",
                  description: "Create comprehensive job application forms with resume uploads and screening questions",
                  icon: "💼",
                  features: ["Resume Upload", "Cover Letter", "Screening Questions", "Reference Contacts"],
                  examples: ["Employment Applications", "Internship Applications", "Contractor Applications", "Volunteer Positions"]
                },
                {
                  type: "College Application Forms",
                  description: "Build admission application forms for educational institutions and programs",
                  icon: "🎓",
                  features: ["Academic History", "Essay Questions", "Transcript Upload", "Recommendation Letters"],
                  examples: ["University Admissions", "Graduate Programs", "Scholarship Applications", "Course Enrollment"]
                },
                {
                  type: "Program Application Forms",
                  description: "Create application forms for training programs, certifications, and courses",
                  icon: "📚",
                  features: ["Prerequisites Check", "Experience Validation", "Portfolio Upload", "Skill Assessment"],
                  examples: ["Training Programs", "Certification Courses", "Bootcamps", "Professional Development"]
                },
                {
                  type: "Service Application Forms",
                  description: "Build application forms for services, memberships, and benefits",
                  icon: "🏢",
                  features: ["Eligibility Criteria", "Document Upload", "Background Check", "Terms Agreement"],
                  examples: ["Membership Applications", "Service Requests", "Benefit Applications", "License Applications"]
                },
                {
                  type: "Grant Application Forms",
                  description: "Create funding and grant application forms with detailed project information",
                  icon: "💰",
                  features: ["Project Proposal", "Budget Planning", "Timeline", "Supporting Documents"],
                  examples: ["Research Grants", "Business Funding", "Non-profit Grants", "Startup Funding"]
                },
                {
                  type: "Vendor Application Forms",
                  description: "Build supplier and vendor application forms for business partnerships",
                  icon: "🤝",
                  features: ["Company Information", "Certifications", "References", "Capability Assessment"],
                  examples: ["Supplier Applications", "Contractor Registration", "Partner Applications", "Vendor Onboarding"]
                }
              ].map((formType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="text-4xl mb-4">{formType.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{formType.type}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{formType.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {formType.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Use Cases:</p>
                      <div className="text-xs text-gray-600">
                        {formType.examples.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Builder Interface */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Build Applications with Advanced Features
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Application Form Builder</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Application Type</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Job Application</option>
                        <option>College Application</option>
                        <option>Program Application</option>
                        <option>Service Application</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Required Sections</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Personal Information</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Education Background</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Work Experience</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Skills Assessment</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">File Uploads</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">File Upload Types</label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">Resume/CV (PDF, DOC)</span>
                          <button className="text-red-600 text-xs">Remove</button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">Cover Letter (PDF, DOC)</span>
                          <button className="text-red-600 text-xs">Remove</button>
                        </div>
                        <button className="w-full p-2 border border-dashed border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                          + Add File Upload Field
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Advanced Features</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Conditional logic</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Multi-step form</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Application tracking</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Email notifications</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                      🔄 Build Application Form
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Application Form Preview</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">Job Application</h4>
                    <p className="text-gray-600">Senior Software Developer Position</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm">2</div>
                        <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm">3</div>
                      </div>
                      <span className="text-sm text-gray-600">Step 1 of 3</span>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Personal Information</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Doe" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" className="w-full p-2 border border-gray-300 rounded" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Select experience level</option>
                        <option>0-1 years</option>
                        <option>2-3 years</option>
                        <option>4-5 years</option>
                        <option>6-10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                        <div className="text-gray-600">
                          <div className="text-2xl mb-2">📄</div>
                          <p className="text-sm">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                        Save Draft
                      </button>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Next Step →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Management Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Complete Application Management System
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "File Upload Management",
                  description: "Accept resumes, portfolios, transcripts, and other documents with secure storage.",
                  icon: "📁"
                },
                {
                  title: "Conditional Logic",
                  description: "Show/hide questions based on previous answers for personalized applications.",
                  icon: "🔀"
                },
                {
                  title: "Multi-Step Forms",
                  description: "Break long applications into manageable steps with progress tracking.",
                  icon: "📋"
                },
                {
                  title: "Application Tracking",
                  description: "Track application status from submission to final decision with workflows.",
                  icon: "📊"
                },
                {
                  title: "Automated Screening",
                  description: "Set up automatic screening based on qualifications and requirements.",
                  icon: "🎯"
                },
                {
                  title: "Email Notifications",
                  description: "Send confirmation emails, status updates, and decision notifications.",
                  icon: "📧"
                },
                {
                  title: "Collaboration Tools",
                  description: "Allow team members to review, comment, and rate applications together.",
                  icon: "👥"
                },
                {
                  title: "Analytics & Reports",
                  description: "Track application metrics, conversion rates, and applicant demographics.",
                  icon: "📈"
                },
                {
                  title: "Integration Support",
                  description: "Connect with HR systems, ATS platforms, and other business tools.",
                  icon: "🔗"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Comparison */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Choose Our Application Form Creator?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-blue-600">FastSubmit</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Google Forms</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Typeform</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">JotForm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "File Upload Support", fastsubmit: "✅", google: "✅", typeform: "💰", jotform: "✅" },
                    { feature: "Conditional Logic", fastsubmit: "✅", google: "✅", typeform: "✅", jotform: "✅" },
                    { feature: "Multi-Step Forms", fastsubmit: "✅", google: "❌", typeform: "✅", jotform: "✅" },
                    { feature: "Application Tracking", fastsubmit: "✅", google: "❌", typeform: "💰", jotform: "💰" },
                    { feature: "Team Collaboration", fastsubmit: "✅", google: "✅", typeform: "💰", jotform: "💰" },
                    { feature: "Custom Branding", fastsubmit: "✅", google: "❌", typeform: "💰", jotform: "✅" },
                    { feature: "Advanced Analytics", fastsubmit: "✅", google: "Basic", typeform: "💰", jotform: "💰" },
                    { feature: "Unlimited Forms", fastsubmit: "✅", google: "✅", typeform: "💰", jotform: "💰" },
                    { feature: "No Ads", fastsubmit: "✅", google: "✅", typeform: "💰", jotform: "💰" }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm">{row.fastsubmit}</td>
                      <td className="px-6 py-4 text-center text-sm">{row.google}</td>
                      <td className="px-6 py-4 text-center text-sm">{row.typeform}</td>
                      <td className="px-6 py-4 text-center text-sm">{row.jotform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 text-center text-sm text-gray-600">
                ✅ = Included | ❌ = Not Available | 💰 = Paid Feature | Basic = Limited Functionality
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Application Form Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  organization: "TechCorp Inc.",
                  role: "Sarah Johnson, HR Director",
                  story: "Our job application process became 70% more efficient. The conditional logic helps us screen candidates automatically, and file uploads keep everything organized.",
                  result: "70% faster hiring",
                  applications: "2,500+ applications",
                  avatar: "👩‍💼"
                },
                {
                  organization: "State University",
                  role: "Dr. Michael Chen, Admissions",
                  story: "The multi-step application form improved completion rates by 45%. Students can save progress and upload documents easily, making the process less overwhelming.",
                  result: "45% completion rate",
                  applications: "15,000+ applications",
                  avatar: "👨‍🎓"
                },
                {
                  organization: "Innovation Fund",
                  role: "Lisa Rodriguez, Program Manager",
                  story: "Grant applications are now streamlined with our custom form. Applicants can upload detailed proposals, and our team can collaborate on reviews efficiently.",
                  result: "60% time savings",
                  applications: "800+ grant applications",
                  avatar: "👩‍💻"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{story.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-900">{story.organization}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.result}
                    </div>
                    <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.applications}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Application Form Creator FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Can applicants save their progress and return later?",
                  a: "Yes! Applicants can save their progress at any point and return to complete the application later. They'll receive an email with a secure link to continue where they left off."
                },
                {
                  q: "What file types can applicants upload?",
                  a: "Support for all common file types including PDF, DOC, DOCX, JPG, PNG, and more. Set file size limits and specify allowed formats for each upload field."
                },
                {
                  q: "How does conditional logic work in application forms?",
                  a: "Show or hide questions based on previous answers. For example, only show work experience fields if someone indicates they have prior experience, making forms more relevant and shorter."
                },
                {
                  q: "Can I track application status and communicate with applicants?",
                  a: "Absolutely! Track applications through custom status workflows (received, under review, interview, decision). Send automated status updates and personalized messages to applicants."
                },
                {
                  q: "How do I collaborate with team members on application reviews?",
                  a: "Invite team members to review applications, add comments, rate candidates, and make collaborative decisions. Set permissions for different team roles and responsibilities."
                },
                {
                  q: "Can I integrate with existing HR or admissions systems?",
                  a: "Yes! Connect with popular ATS systems, HR platforms, and databases through our API and webhook integrations. Export application data in various formats for external systems."
                },
                {
                  q: "Is there a limit on the number of applications I can receive?",
                  a: "No limits! Receive unlimited applications on all plans. Our infrastructure scales automatically to handle high-volume application periods like job postings or admission deadlines."
                },
                {
                  q: "How secure is applicant data and uploaded files?",
                  a: "All data is encrypted in transit and at rest. Files are stored securely with access controls. We're GDPR compliant and follow industry best practices for data protection."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Building Professional Application Forms
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create application forms that attract quality candidates and streamline your selection process. 
              From job applications to college admissions, build forms that work for your organization.
            </p>
            <Link 
              href="/application-builder" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Create Your First Application Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}