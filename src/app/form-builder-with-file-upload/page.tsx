import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Form Builder with File Upload - Create Forms with Document Upload | FastSubmit',
  description: 'Build forms with secure file upload functionality. Accept resumes, images, documents, and any file type. Advanced file management with drag-and-drop, progress tracking, and validation.',
  keywords: 'form builder with file upload, file upload form, document upload form, resume upload form, image upload form, secure file upload',
  openGraph: {
    title: 'Form Builder with File Upload - Create Forms with Document Upload',
    description: 'Build forms with secure file upload functionality. Accept resumes, images, documents with advanced file management features.',
    type: 'website',
    url: 'https://fastsubmit.app/form-builder-with-file-upload',
    images: [
      {
        url: 'https://fastsubmit.app/og-file-upload-form.jpg',
        width: 1200,
        height: 630,
        alt: 'Form Builder with File Upload - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form Builder with File Upload - Create Forms with Document Upload',
    description: 'Build forms with secure file upload. Drag-and-drop, progress tracking, file validation, and secure storage.',
    images: ['https://fastsubmit.app/og-file-upload-form.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/form-builder-with-file-upload'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit File Upload Form Builder',
  description: 'Advanced form builder with secure file upload functionality for documents, images, and any file type',
  url: 'https://fastsubmit.app/form-builder-with-file-upload',
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
    reviewCount: '21456'
  },
  featureList: [
    'Secure File Upload',
    'Drag and Drop Interface',
    'File Type Validation',
    'Progress Tracking',
    'Multiple File Support',
    'Cloud Storage Integration'
  ]
}

export default function FormBuilderWithFileUploadPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Form Builder with File Upload
                <span className="block text-green-600">Secure Document Collection</span>
                <span className="block text-blue-600">Advanced File Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create forms that accept any file type with our advanced file upload system. 
                Drag-and-drop interface, progress tracking, file validation, virus scanning, 
                and secure cloud storage. Perfect for job applications, document submissions, 
                and media collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/file-upload-builder" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Build File Upload Form
                </Link>
                <Link 
                  href="/file-upload-templates" 
                  className="border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  File Upload Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* File Upload Use Cases */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              File Upload Form Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  useCase: "Job Applications",
                  description: "Collect resumes, cover letters, portfolios, and references from job applicants",
                  icon: "💼",
                  fileTypes: ["Resume (PDF, DOC)", "Cover Letter", "Portfolio", "References"],
                  features: ["Multiple file uploads", "File type validation", "Automatic organization", "Applicant tracking"]
                },
                {
                  useCase: "Document Submissions",
                  description: "Accept legal documents, contracts, forms, and official paperwork",
                  icon: "📄",
                  fileTypes: ["Legal Documents", "Contracts", "Forms", "Certificates"],
                  features: ["Secure storage", "Digital signatures", "Version control", "Audit trails"]
                },
                {
                  useCase: "Media Collections",
                  description: "Gather photos, videos, audio files, and creative content from users",
                  icon: "🎨",
                  fileTypes: ["Images (JPG, PNG)", "Videos (MP4, MOV)", "Audio Files", "Design Files"],
                  features: ["Large file support", "Preview generation", "Metadata extraction", "Content moderation"]
                },
                {
                  useCase: "Student Submissions",
                  description: "Collect assignments, projects, research papers, and academic work",
                  icon: "🎓",
                  fileTypes: ["Assignments", "Research Papers", "Projects", "Presentations"],
                  features: ["Plagiarism detection", "Grade integration", "Feedback system", "Deadline management"]
                },
                {
                  useCase: "Support Tickets",
                  description: "Allow customers to upload screenshots, logs, and diagnostic files",
                  icon: "🛠️",
                  fileTypes: ["Screenshots", "Log Files", "Error Reports", "Diagnostic Data"],
                  features: ["Ticket integration", "File analysis", "Priority routing", "Response tracking"]
                },
                {
                  useCase: "Contest Entries",
                  description: "Accept contest submissions, creative entries, and competition materials",
                  icon: "🏆",
                  fileTypes: ["Contest Entries", "Creative Work", "Competition Files", "Supporting Materials"],
                  features: ["Entry validation", "Judging system", "Public galleries", "Winner selection"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.useCase}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Common File Types:</p>
                      <div className="grid grid-cols-1 gap-1">
                        {useCase.fileTypes.map((type, typeIndex) => (
                          <span key={typeIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                      <div className="text-xs text-gray-600">
                        {useCase.features.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* File Upload Builder Interface */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced File Upload Form Builder
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">File Upload Configuration</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload Field Type</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Single File Upload</option>
                        <option>Multiple File Upload</option>
                        <option>Drag & Drop Zone</option>
                        <option>Image Gallery Upload</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Allowed File Types</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Documents (PDF, DOC, DOCX)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Images (JPG, PNG, GIF)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Videos (MP4, MOV, AVI)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Audio (MP3, WAV, M4A)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Archives (ZIP, RAR, 7Z)</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">File Size Limits</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs text-gray-600">Max File Size</label>
                          <select className="w-full p-2 border border-gray-300 rounded text-sm">
                            <option>5 MB</option>
                            <option>10 MB</option>
                            <option>25 MB</option>
                            <option>50 MB</option>
                            <option>100 MB</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-gray-600">Max Files</label>
                          <select className="w-full p-2 border border-gray-300 rounded text-sm">
                            <option>1 file</option>
                            <option>5 files</option>
                            <option>10 files</option>
                            <option>Unlimited</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Security Features</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Virus scanning</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">File type validation</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Encrypted storage</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Password protection</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                      🔄 Configure File Upload
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">File Upload Preview</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">Document Submission Form</h4>
                    <p className="text-gray-600">Upload your required documents</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="John Doe" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
                      <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer bg-green-50">
                        <div className="text-green-600">
                          <div className="text-4xl mb-3">📄</div>
                          <p className="text-lg font-medium mb-2">Drag & drop your resume here</p>
                          <p className="text-sm text-gray-600 mb-3">or click to browse files</p>
                          <div className="bg-green-600 text-white px-4 py-2 rounded inline-block text-sm">
                            Choose File
                          </div>
                          <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX (max 5MB)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Files (Optional)</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                        <div className="text-gray-600">
                          <div className="text-3xl mb-2">📁</div>
                          <p className="text-sm mb-2">Upload multiple files</p>
                          <div className="bg-gray-600 text-white px-3 py-1 rounded text-xs">
                            Add Files
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Images, PDFs, Documents (max 10MB each)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium text-gray-900 mb-3">Uploaded Files</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white rounded border">
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">📄</span>
                            <div>
                              <div className="text-sm font-medium">resume.pdf</div>
                              <div className="text-xs text-gray-500">2.3 MB • Uploaded</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div className="bg-green-600 h-1 rounded-full w-full"></div>
                            </div>
                            <button className="text-red-600 text-xs hover:text-red-800">✕</button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white rounded border">
                          <div className="flex items-center">
                            <span className="text-blue-600 mr-2">🖼️</span>
                            <div>
                              <div className="text-sm font-medium">portfolio.jpg</div>
                              <div className="text-xs text-gray-500">1.8 MB • Uploading...</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div className="bg-blue-600 h-1 rounded-full w-3/4"></div>
                            </div>
                            <span className="text-xs text-gray-500">75%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors font-semibold">
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* File Upload Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced File Upload Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Drag & Drop Interface",
                  description: "Intuitive drag-and-drop file upload with visual feedback and progress indicators.",
                  icon: "🖱️"
                },
                {
                  title: "Multiple File Support",
                  description: "Upload multiple files simultaneously with batch processing and organization.",
                  icon: "📚"
                },
                {
                  title: "File Type Validation",
                  description: "Restrict file types, validate formats, and ensure only allowed files are uploaded.",
                  icon: "✅"
                },
                {
                  title: "Size Limit Control",
                  description: "Set maximum file sizes, total upload limits, and manage storage efficiently.",
                  icon: "📏"
                },
                {
                  title: "Progress Tracking",
                  description: "Real-time upload progress with speed indicators and estimated completion time.",
                  icon: "📊"
                },
                {
                  title: "Virus Scanning",
                  description: "Automatic virus and malware scanning for all uploaded files before storage.",
                  icon: "🛡️"
                },
                {
                  title: "Cloud Storage",
                  description: "Secure cloud storage with redundancy, backups, and global accessibility.",
                  icon: "☁️"
                },
                {
                  title: "File Preview",
                  description: "Generate previews for images, documents, and other supported file types.",
                  icon: "👁️"
                },
                {
                  title: "Download Management",
                  description: "Controlled file downloads with access permissions and expiration dates.",
                  icon: "⬇️"
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

        {/* File Upload Security */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Enterprise-Grade File Security
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Security Features</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "End-to-End Encryption",
                      description: "All files are encrypted during upload, storage, and download using AES-256 encryption.",
                      icon: "🔐"
                    },
                    {
                      title: "Virus & Malware Scanning",
                      description: "Real-time scanning of all uploaded files using multiple antivirus engines.",
                      icon: "🛡️"
                    },
                    {
                      title: "Access Control",
                      description: "Granular permissions, user authentication, and role-based file access.",
                      icon: "🔑"
                    },
                    {
                      title: "Audit Trails",
                      description: "Complete logging of file uploads, downloads, and access for compliance.",
                      icon: "📋"
                    },
                    {
                      title: "Data Compliance",
                      description: "GDPR, HIPAA, and SOC 2 compliant file handling and storage practices.",
                      icon: "⚖️"
                    },
                    {
                      title: "Secure Deletion",
                      description: "Permanent file deletion with cryptographic erasure when required.",
                      icon: "🗑️"
                    }
                  ].map((security, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{security.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{security.title}</h4>
                        <p className="text-gray-600">{security.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Security Dashboard</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-800">Files Scanned Today</span>
                      <span className="text-lg font-bold text-green-600">1,247</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-800">Threats Blocked</span>
                      <span className="text-lg font-bold text-blue-600">0</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-800">Storage Used</span>
                      <span className="text-lg font-bold text-purple-600">2.4 GB</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Last Security Scan:</span>
                        <span className="font-medium">2 minutes ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Compliance Status:</span>
                        <span className="font-medium text-green-600">✅ Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Backup Status:</span>
                        <span className="font-medium text-green-600">✅ Current</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              File Upload Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: "TechRecruit Pro",
                  role: "Jennifer Walsh, HR Manager",
                  story: "Our job application process handles 500+ resumes daily. The file upload system automatically organizes documents and integrates with our ATS seamlessly.",
                  result: "500+ daily uploads",
                  efficiency: "80% time savings",
                  avatar: "👩‍💼"
                },
                {
                  company: "Creative Agency",
                  role: "Marcus Chen, Creative Director",
                  story: "Client file submissions are now effortless. Large video files, design assets, and project materials upload smoothly with real-time progress tracking.",
                  result: "10GB+ file support",
                  efficiency: "90% faster uploads",
                  avatar: "👨‍🎨"
                },
                {
                  company: "Legal Partners LLP",
                  role: "Sarah Rodriguez, Partner",
                  story: "Document security is critical for us. The encrypted file upload with audit trails ensures client confidentiality and regulatory compliance.",
                  result: "100% secure uploads",
                  efficiency: "Full compliance",
                  avatar: "👩‍⚖️"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{story.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-900">{story.company}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.result}
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.efficiency}
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
              File Upload Form FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What file types can users upload through forms?",
                  a: "Support for all common file types including documents (PDF, DOC, DOCX), images (JPG, PNG, GIF), videos (MP4, MOV, AVI), audio files (MP3, WAV), archives (ZIP, RAR), and many more. You can customize allowed file types for each upload field."
                },
                {
                  q: "How large can uploaded files be?",
                  a: "File size limits are configurable per form and field. Support for files up to 100MB per file with options for larger files through chunked uploads. Total form upload limits can also be set based on your needs."
                },
                {
                  q: "Are uploaded files secure and private?",
                  a: "Yes! All files are encrypted during upload and storage using AES-256 encryption. Virus scanning, access controls, and audit trails ensure maximum security. Files are stored in secure cloud infrastructure with redundancy."
                },
                {
                  q: "Can users upload multiple files at once?",
                  a: "Absolutely! Support for multiple file uploads with drag-and-drop interface, batch processing, and individual progress tracking for each file. Users can add or remove files before submitting the form."
                },
                {
                  q: "How do I manage and organize uploaded files?",
                  a: "Files are automatically organized by form submission with metadata, timestamps, and user information. Download files individually or in bulk, create folders, and integrate with cloud storage services for easy management."
                },
                {
                  q: "Can I preview uploaded files before processing?",
                  a: "Yes! Automatic preview generation for images, documents, and other supported file types. Preview files directly in the admin dashboard without downloading, and generate thumbnails for quick identification."
                },
                {
                  q: "Is there virus scanning for uploaded files?",
                  a: "All uploaded files are automatically scanned for viruses and malware using multiple scanning engines. Infected files are quarantined and blocked from storage, with notifications sent to administrators."
                },
                {
                  q: "Can I set different upload permissions for different users?",
                  a: "Yes! Configure upload permissions based on user roles, form fields, and file types. Set different size limits, allowed file types, and access levels for different user groups or form sections."
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
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Collecting Files Securely Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Build forms with advanced file upload capabilities. Secure, fast, and user-friendly 
              file collection for any purpose. From resumes to media files, handle it all with confidence.
            </p>
            <Link 
              href="/file-upload-builder" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Build Your File Upload Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}