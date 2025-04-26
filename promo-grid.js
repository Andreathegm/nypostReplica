function updateBorders() {
    const boxes = document.querySelectorAll('.promo-box');
    let boxesInCurrentRow = 0;
    let currentRowTop = null;
    let borderStyle = '1px solid black';

    boxes.forEach(box => box.style.borderRight = 'none');

    for (let i = 0; i < boxes.length; i++) {
        const currentTop = boxes[i].getBoundingClientRect().top;

        if (currentRowTop === null) {
            currentRowTop = currentTop;
            boxesInCurrentRow = 1;
        } else if (currentTop === currentRowTop) {
            boxesInCurrentRow++;
        } else {
            break;
        }
    }

    if (boxesInCurrentRow <= 1) {
        return;
    }

    currentRowTop = null;
    let elementsInCurrentRow = 0;

    for (let i = 0; i < boxes.length; i++) {
        const currentTop = boxes[i].getBoundingClientRect().top;

        if (currentRowTop === null || currentTop === currentRowTop) {
            if (currentRowTop === null) {
                currentRowTop = currentTop;
            }

            elementsInCurrentRow++;

            // Aggiungi bordo solo se non è l'ultimo elemento della riga
            if (elementsInCurrentRow < boxesInCurrentRow) {
                boxes[i].style.borderRight = borderStyle;
            }
        } else {
            // Nuova riga
            currentRowTop = currentTop;
            elementsInCurrentRow = 1;

            if (boxesInCurrentRow > 1) {
                boxes[i].style.borderRight = borderStyle;
            }
        }
    }
}

window.addEventListener('load', updateBorders);
window.addEventListener('resize', updateBorders);
