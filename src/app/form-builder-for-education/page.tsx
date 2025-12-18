import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, FileText, Calendar, ClipboardCheck, BookOpen } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Education - Free School & University Forms | FastSubmit',
  description: 'Free form builder for schools, colleges, and universities. Student registration, course feedback, event signups. Perfect for teachers, administrators, and students.',
  keywords: ['form builder for education', 'school form builder', 'university form builder', 'student registration form', 'course feedback form', 'education forms', 'teacher form builder', 'academic forms', 'free school forms', 'college form builder'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-education' }
}

export default function FormBuilderForEducationPage() {
  const useCases = [
    { icon: <Users className="w-5 h-5" />, title: 'Student Registration', desc: 'Enroll students with custom registration forms.' },
    { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Course Feedback', desc: 'Collect student feedback on courses and teachers.' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Event Signups', desc: 'Register students for events and activities.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Assignment Submission', desc: 'Collect homework and project submissions.' },
    { icon: <BookOpen className="w-5 h-5" />, title: 'Quiz & Tests', desc: 'Create quizzes and assessments online.' },
    { icon: <GraduationCap className="w-5 h-5" />, title: 'Applications', desc: 'Admission and scholarship applications.' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-4 sm:mb-6 bg-blue-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                <GraduationCap size={14} /><span>For Education</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">education</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Free forms for schools, colleges, and universities. Student registration, feedback surveys, 
                quizzes, and more. Perfect for educators at all levels.
              </p>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                Start Free for Education <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Trusted by educators</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-4xl mb-3">🏫</div>
                <div className="font-medium text-gray-900 mb-2">K-12 Schools</div>
                <div className="text-sm text-gray-600">Elementary to high school</div>
              </div>
              <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                <div className="text-4xl mb-3">🎓</div>
                <div className="font-medium text-gray-900 mb-2">Universities</div>
                <div className="text-sm text-gray-600">Colleges and universities</div>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="text-4xl mb-3">📚</div>
                <div className="font-medium text-gray-900 mb-2">Online Courses</div>
                <div className="text-sm text-gray-600">E-learning platforms</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Education form templates</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Free for all educators</h2>
            <p className="text-gray-300 mb-8">Unlimited forms and submissions. No budget required.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Free for Education <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
