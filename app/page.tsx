export default function Home() {
  return (
    <main className="p-10 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-gray-800">স্বাগতম! আমি রোহান পারভেজ</h1>
      <p className="mt-4 text-lg text-gray-600">
        একজন ডিজিটাল স্পেশালিস্ট। আমি ভিডিও এডিটিং, গ্রাফিক ডিজাইন এবং ডিজিটাল মার্কেটিং নিয়ে কাজ করি।
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        আমার কাজ দেখুন
      </button>
    </main>
  );
}