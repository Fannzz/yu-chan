
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('black');
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    document.body.style.backgroundColor = link === 'black' ? '#000' : '#bae3e8';

    // Memilih semua elemen dengan kelas .btn-nav dan mengatur warna teksnya
    const navLinks = document.querySelectorAll(".btn-nav");
    navLinks.forEach((navLink) => {
      navLink.style.color = link === 'black' ? '#bae3e8' : '#000';
    });

    // Memilih elemen .App-header dan mengatur latar belakangnya
    const appHeader = document.querySelector(".App-header");

    if (appHeader) {
      appHeader.style.backgroundColor = link === 'black' ? '#000' : '#fff';
      appHeader.style.transition = 'background-color 0.5s ease'; // Sesuaikan durasi dan jenis efek sesuai kebutuhan
      appHeader.style.backgroundColor = link === 'black' ? '#000' : '#bae3e8';
    }
    
  };

  // useEffect untuk memeriksa URL saat komponen dimuat
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === '/' ? 'black' : 'white');
    document.body.style.backgroundColor = path === '/' ? '#000' : '#bae3e8';

    const navLinks = document.querySelectorAll(".btn-nav");
    navLinks.forEach((navLink) => {
      navLink.style.color = path === '/' ? '#fff' : '#000';
    });

    const appHeader = document.querySelector(".App-header");
    if (appHeader) {
      appHeader.style.backgroundColor = path === '/' ? '#000' : '#bae3e8';
    }
  }, [location.pathname]);

  return (
    <nav>
      <Link
        className={`btn-nav ${activeLink === 'black' ? 'active' : ''}`}
        to="/"
        onClick={() => handleLinkClick('black')}
      >
        About
      </Link>
      <Link
        className={`btn-nav ${activeLink === 'white' ? 'active' : ''}`}
        to="/white"
        onClick={() => handleLinkClick('white')}
      >
        Hobies
        
      </Link>
    </nav>
  );
};

const BlackPage = () => {
  return (
    <div className="container">
      <div className="black-page">
      <img src='https://www.gadgetsiana.com/wp-content/uploads/2023/09/pp-anime-sad-boy-1-300x300.jpg' className="App-logo" alt="logo" />
        <h2>Hi, Saya Fannzz</h2>
        <p>Halo, nama saya Afand Fathur Rozi, seorang siswa di SMK Negeri 6 Jember dengan jurusan Rekayasa Perangkat Lunak (RPL). Penggemar pemrograman.</p>

            <p> Saya siap menjelajahi dunia koding. Suka berkolaborasi dalam tim dan selalu mencari peluang baru untuk tumbuh. Mari bersama-sama menjelajahi potensi dan menciptakan inovasi yang memukau!  </p>
    </div>
    </div>
  );
};

const WhitePage = () => {
  return (
    <div className="container">
      <div className="white-page">
        <h2>Hobby Saya</h2>
        <i className="fas fa-image"></i>
        <p>Saya seorang penggemar cerita, Ketika tidak asyik meretas kode, saya suka melarikan diri ke dunia imajinatif melalui halaman novel. Membaca bagi saya bukan hanya aktivitas, melainkan petualangan tanpa batas.

 Saya menemukan inspirasi di setiap garis dan bayangannya. Hobiku memberi warna pada hidup saya, membawa keindahan dan kedalaman dalam setiap halaman dan goresan. Mari berbagi cerita atau jalan-jalan melalui dunia imajinasi bersama! 📚✏️</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<BlackPage />} />
            <Route path="/white" element={<WhitePage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
