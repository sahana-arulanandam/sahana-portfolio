const preview = document.getElementById('floatingPreview');
const previewImage = document.getElementById('previewImage');

const thumbs = document.querySelectorAll('.media-thumb');

thumbs.forEach((thumb) => {

    thumb.addEventListener('mouseenter', () => {

        previewImage.src = thumb.dataset.preview;

        preview.classList.add('visible');

    });

    thumb.addEventListener('mousemove', (e) => {

        const previewWidth = 440;

        let left = e.clientX + 28;
        let top = e.clientY - 180;

        /* prevent overflow right */

        if (left + previewWidth > window.innerWidth - 30) {

            left = e.clientX - previewWidth - 28;

        }

        /* prevent overflow top */

        if (top < 20) {

            top = 20;

        }

        preview.style.left = `${left}px`;
        preview.style.top = `${top}px`;

    });

    thumb.addEventListener('mouseleave', () => {

        preview.classList.remove('visible');

    });

});
