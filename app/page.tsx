'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ShiftChange</div>
          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 text-blue-600">Login</Link>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded">Sign Up</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">ShiftChange</h1>
        <p className="text-xl text-gray-600 mb-8">Nursing platform for shifts, jobs, and community</p>
        <Link href="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-lg inline-block">Get Started</Link>
      </section>

      <footer className="bg-gray-800 text-white py-12 text-center">
        <p>© 2024 ShiftChange</p>
      </footer>
    </div>
  );
}
