'use client'; // si usas interactividad (onClick, useState, etc.)
import '../styles/navbar.css';
import Image from 'next/image';
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-4">
      <div className="container">
        <Link href="/user"><div className='navbuttons'><Image src="/user-icon.png" alt="Home" width={30} height={30} /></div></Link>
        <Link href="/"><div className='navbuttons'><Image src="/house.png" alt="Home" width={30} height={30} /></div></Link>
        <Link href="/cart"><div className='navbuttons'><Image src="/shopping-cart.png" alt="Home" width={30} height={30} /></div></Link>
        <Link href="/publish"><div className='navbuttons'><Image src="/handshake.png" alt="Home" width={30} height={30} /></div></Link>
        <Link href="/"><div className='navbuttons'><Image src="/info.png" alt="Home" width={30} height={30} /></div></Link>
      </div>      
    </nav>
  );
}