document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const title = document.getElementById('title');
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");

    yesButton.addEventListener('click', () => {
        noButton.style.display = 'none';
        yesButton.style.display = 'none';
        title.innerHTML = 'What should we do for the first date?';
        showModal();
    });

    noButton.addEventListener('click', () => {
        moveButtonRandomly(noButton);
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function moveButtonRandomly(button) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const newX = Math.random() * (width - button.offsetWidth);
        const newY = Math.random() * (height - button.offsetHeight);

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    }

    function showModal() {
        modal.classList.add("show");
        setTimeout(() => {
            modal.style.display = "block";
        }, 30);
    }

    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }
});
