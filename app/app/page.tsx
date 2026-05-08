'use client';

import Link from 'next/link';
import { FiLogIn, FiUserPlus, FiMapPin, FiBook, FiUsers, FiTarget } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ShiftChange</div>
          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 text-blue-600 hover:text-blue-800">Login</Link>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">The Nursing Platform You've Been Waiting For</h1>
        <p className="text-xl text-gray-600 mb-8">Find shifts, apply for jobs, track CEUs, and connect with nurses.</p>
        <Link href="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold inline-block">Get Started Free</Link>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border rounded-lg hover:shadow-lg"><FiMapPin className="text-4xl text-blue-600 mb-4" /><h3 className="text-2xl font-bold mb-2">Shift Marketplace</h3><p className="text-gray-600">Find and post shifts near you.</p></div>
            <div className="p-8 border rounded-lg hover:shadow-lg"><FiTarget className="text-4xl text-blue-600 mb-4" /><h3 className="text-2xl font-bold mb-2">Job Board</h3><p className="text-gray-600">Browse healthcare opportunities.</p></div>
            <div className="p-8 border rounded-lg hover:shadow-lg"><FiBook className="text-4xl text-blue-600 mb-4" /><h3 className="text-2xl font-bold mb-2">CEU Tracker</h3><p className="text-gray-600">Track continuing education.</p></div>
            <div className="p-8 border rounded-lg hover:shadow-lg"><FiUsers className="text-4xl text-blue-600 mb-4" /><h3 className="text-2xl font-bold mb-2">Community</h3><p className="text-gray-600">Connect with nursing peers.</p></div>
            <div className="p-8 border rounded-lg hover:shadow-lg"><FiTarget className="text-4xl text-blue-600 mb-4" /><h3 className="text-2xl font-bold mb-2">Mentoring</h3><p className="text-gray-600">Find experienced mentors.</p></div>
            <div className="p-8 border rounded-lg hover:shadow-lg"><FiBook className="text-4xl text-blue-600 mb-4" /><h3 className="text-2xl font-bold mb-2">Profiles</h3><p className="text-gray-600">Showcase your expertise.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your nursing career?</h2>
          <Link href="/signup" className="px-8 py-3 bg-white text-blue-600 rounded-lg inline-block font-semibold">Sign Up Now</Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12"><div className="text-center"><p>© 2024 ShiftChange. Built for nurses, by nurses.</p></div></footer>
    </div>
  );
}
