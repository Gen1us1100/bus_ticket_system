export function initializeNavbar() {
    const list = document.querySelectorAll('.list');
    function activeLink() {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('click', activeLink));
  
    // Cleanup function to remove event listeners
    return () => {
      list.forEach((item) => item.removeEventListener('click', activeLink));
    };
  }
  