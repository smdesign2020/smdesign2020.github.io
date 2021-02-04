function waitTilImageLoads() {
  var img = new Image();
  img.onload = function () {
    setTimeout(function () {
      document.getElementById("loader").classList.add('loaded');
    }, 2000);
  }
  img.onerror = console.warn;

  img.src = '../img/SM.png';
}

window.onload = function () {
  waitTilImageLoads();

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the header
  var header = document.getElementById("header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  const WORK = {
    path: 'img/work/',
    name: 'work',
    type: 'folder',
    children:
      [
        {
          path: 'img/work//A10089570_10_3.jpg',
          name: 'A10089570_10_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_11_3.jpg',
          name: 'A10089570_11_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_12_3.jpg',
          name: 'A10089570_12_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_13_3.jpg',
          name: 'A10089570_13_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_14_3.jpg',
          name: 'A10089570_14_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_15_3.jpg',
          name: 'A10089570_15_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_18_3.jpg',
          name: 'A10089570_18_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_19_3.jpg',
          name: 'A10089570_19_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_1_3.jpg',
          name: 'A10089570_1_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_20_3.jpg',
          name: 'A10089570_20_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_21_3.jpg',
          name: 'A10089570_21_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_23_3.jpg',
          name: 'A10089570_23_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_26_3.jpg',
          name: 'A10089570_26_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_27_3.jpg',
          name: 'A10089570_27_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_28_3.jpg',
          name: 'A10089570_28_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_29_3.jpg',
          name: 'A10089570_29_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_2_3.jpg',
          name: 'A10089570_2_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_3.jpg',
          name: 'A10089570_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_3_3.jpg',
          name: 'A10089570_3_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_5_3.jpg',
          name: 'A10089570_5_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_6_3.jpg',
          name: 'A10089570_6_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_7_3.jpg',
          name: 'A10089570_7_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_8_3.jpg',
          name: 'A10089570_8_3.jpg',
          type: 'file'
        },
        {
          path: 'img/work//A10089570_9_3.jpg',
          name: 'A10089570_9_3.jpg',
          type: 'file'
        }]
  };

  let html = `
      <div class="gallery-section">
        <div class="container">
          <div class='row align-center'>
            <h2>Recent Work</h2>

            <div class="fotorama"
              data-arrows="true"
              data-click="true"
              data-swipe="true"
              data-link="file"
              data-columns="0"
              data-size="large"
              data-nav="thumbs"
              data-allowfullscreen="true"
              data-transition="slide"
              data-width="1200"
              data-auto="false"
              data-max-width="100%"
              data-ratio="1.77777777778">
      `;

  WORK.children.forEach((img, i) => {
    html += `<img src="${img.path}" alt="${img.name || img.path}" />\n`;
  });

  html += `
          </div>
        </div>
      </div>
    </div>
    `;

  $('#gallery').html(html);
  $('.fotorama').fotorama();
}
