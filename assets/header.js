document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.site-header');
  const headerBottom = document.querySelector('.header-bottom');
  const toggleBtn = document.querySelector('.menu-toggle');

  let lastScroll = 0;

  // Ẩn/hiện menu khi scroll
  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      headerBottom.classList.add("hidden");       // scroll xuống → ẩn
      header.classList.add("header-scrolled");
    } else {
      headerBottom.classList.remove("hidden");    // scroll lên → hiện
      header.classList.remove("header-scrolled");
    }

    lastScroll = currentScroll;
  });

  // Toggle menu + icon hamburger → X
  toggleBtn.addEventListener("click", function () {
    headerBottom.classList.toggle("open");      // mở/đóng menu
    headerBottom.classList.remove("hidden");    // bỏ hidden khi mở menu
    toggleBtn.classList.toggle("open");         // toggle class để CSS animation
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".search-input");
  const clearBtn = document.getElementById("clear-search");

  if (!input || !clearBtn) return;

  input.addEventListener("input", function () {
    clearBtn.style.display = input.value.trim() !== "" ? "block" : "none";
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    clearBtn.style.display = "none";
    input.focus();
  });
});
