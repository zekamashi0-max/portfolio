document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const menuLinks = document.querySelectorAll('.menu-list a'); // ⚠️ リンク要素をすべて取得

  // メニューを開閉する関数（共通化して使い回す）
  const toggleMenu = (forceClose = false) => {
    let isActive;
    
    if (forceClose) {
      // 強制的に閉じる場合
      menuBtn.classList.remove('is-active');
      navMenu.classList.remove('is-active');
      isActive = false;
    } else {
      // 通常のトグル（反転）
      menuBtn.classList.toggle('is-active');
      isActive = navMenu.classList.toggle('is-active');
    }
    
    menuBtn.setAttribute('aria-expanded', isActive);
  };

  // 1. ボタンクリック時の挙動
  menuBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // 2. 【改善】メニュー内のリンクがタップされたら自動で閉じる
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(true); // 強制終了
    });
  });

  // 3. 【改善】画面幅がPCサイズ（900px超）になったらメニューの状態をリセット
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      toggleMenu(true); // 強制終了
    }
  });
});