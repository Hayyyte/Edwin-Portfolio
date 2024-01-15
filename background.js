// Select all sections
const sections = document.querySelectorAll('.container');

const options = {threshold: 0.5};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Set the background color of the body based on the section in view
            switch(entry.target.parentNode.id) {
                case 'hero':
                  document.body.style.backgroundColor = 'var(--almond)';
                  document.body.style.color = 'var(--coffee)';
                  break;
                case 'projects':
                  document.body.style.backgroundColor = 'var(--tan)';
                  document.body.style.color = 'var(--raw-umber)';
                  break;
                case 'about':
                  document.body.style.backgroundColor = 'var(--coffee)';
                  document.body.style.color = 'var(--almond)';
                  break;
                case 'contact':
                  document.body.style.backgroundColor = 'var(--raw-umber)';
                  document.body.style.color = 'var(--tan)';
                  break;
            }
        }
    })
}, options);

sections.forEach(section => {
    observer.observe(section);
})