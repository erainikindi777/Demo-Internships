const button = document.getElementById('interactive-button');

button.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    const newColor = currentColor === 'rgb(255, 255, 255)' ? 'rgb(0, 123, 255)' : 'rgb(255, 255, 255)';
    document.body.style.backgroundColor = newColor;
});