var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
}) 

var hiddenElements = document.querySelectorAll('.hidden')
var hiddenElements2 = document.querySelectorAll('.hidden2')
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer.observe(el))