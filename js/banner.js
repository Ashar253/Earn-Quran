 const banner = document.getElementById('banner');

    // Create Quran logo
    const quranLogo = document.createElement('img');
    quranLogo.src = 'quranlogo2.png';
    quranLogo.alt = 'Quran Logo';
    quranLogo.className = 'banner-img';

    // Create Maulana image
    const maulanaImg = document.createElement('img');
    maulanaImg.src = 'maulana2.png';
    maulanaImg.alt = 'Maulana Image';
    maulanaImg.className = 'banner-img';

    // Create Home button image
    const homeBtn = document.createElement('img');
    homeBtn.src = 'homelogo3.png';
    homeBtn.alt = 'Home';
    homeBtn.className = 'banner-img home-log-sig';
    homeBtn.onclick = () => {
      window.location.href = 'index.html';
    };

    // Append elements to the banner
    banner.appendChild(quranLogo);
    banner.appendChild(maulanaImg);
    banner.appendChild(homeBtn);