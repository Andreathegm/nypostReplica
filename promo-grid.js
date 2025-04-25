function updateBorders() {
    const boxes = document.querySelectorAll('.promo-box');
    let lastTop = null;
    let boxesInCurrentRow = 0;
    let currentRowTop = null;
    let borderStyle = '1px solid black';

    // Inizialmente rimuovi tutti i bordi destri
    boxes.forEach(box => box.style.borderRight = 'none');

    // Primo passo: identifica quanti box ci sono per riga
    for (let i = 0; i < boxes.length; i++) {
        const currentTop = boxes[i].getBoundingClientRect().top;

        if (currentRowTop === null) {
            currentRowTop = currentTop;
            boxesInCurrentRow = 1;
        } else if (currentTop === currentRowTop) {
            boxesInCurrentRow++;
        } else {
            break; // Abbiamo trovato quanti elementi ci sono nella prima riga
        }
    }

    // Se c'è solo un elemento per riga, non mostrare bordi destri
    if (boxesInCurrentRow <= 1) {
        return;
    }

    // Altrimenti aggiungi bordi tranne all'ultimo elemento di ogni riga
    currentRowTop = null;
    let elementsInCurrentRow = 0;

    for (let i = 0; i < boxes.length; i++) {
        const currentTop = boxes[i].getBoundingClientRect().top;

        if (currentRowTop === null || currentTop === currentRowTop) {
            // Stesso livello/riga
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

            // Se c'è solo un elemento in questa nuova riga, non mostrare il bordo
            if (boxesInCurrentRow > 1) {
                boxes[i].style.borderRight = borderStyle;
            }
        }
    }
}

// Esegui al caricamento e al ridimensionamento
window.addEventListener('load', updateBorders);
window.addEventListener('resize', updateBorders);
