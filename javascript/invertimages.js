const title = document.querySelector('.title');
const originalText = title.textContent;

document.querySelector('.image-container').addEventListener('mouseenter', function() {
    title.textContent = "BACK COVER";
});

document.querySelector('.image-container').addEventListener('mouseleave', function() {
    title.textContent = originalText;
});