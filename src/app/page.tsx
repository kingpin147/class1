import Image from 'next/image'

export default function Home() {
  return (
<nav className="bg-blue-700 p-4">
<div className="container mx-auto flex justify-between items-center">
<div className="text-white font-semibold text-xl">My Website</div>
<ul className="flex space-x-4">
<li>
<a href="#" className="text-white hover:text-gray-300">Home</a>
</li>
<li>
<a href="#" className="text-white hover:text-gray-300">About</a>
</li>
<li>
<a href="#" className="text-white hover:text-gray-300">Services</a>
</li>
<li>
<a href="#" className="text-white hover:text-gray-300">Contact</a>
</li>
</ul>
</div>
</nav>
  )
}

