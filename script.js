document.addEventListener('DOMContentLoaded', function() {
    var viewWorkBtn = document.getElementById('view-work-btn');
    
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function() {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
