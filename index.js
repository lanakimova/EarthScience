const template = document.createElement('template');
template.innerHTML = 
    `<div class='mt-auto bg-light'>
        <footer>
            <ul class='list-inline'>
                <li class="list-inline-item"><a href="#">OpenWeather</a></li>
                <li class="list-inline-item"><a href="#">Bootstrap</a></li>
            </ul>
            <p class="copyright">EarthScience © 2021</p>
        </footer>

    </div>`
document.body.appendChild(template.content);