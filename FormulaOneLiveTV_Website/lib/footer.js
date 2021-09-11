class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer class="foi-footer text-white">
    <div class="container">
        <div class="row footer-content">
            <div class="col-xl-6 col-lg-7 col-md-8">
                <h2 class="mb-0">Do you want to know more or just have a question? write to us.</h2>
            </div>
            <div class="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
                <a href="contact.html" class="btn btn-danger btn-lg">Contact form</a>
            </div>
        </div>
        <div class="row footer-widget-area">
            <div class="col-md-3">
                <div class="py-3">
                    <img src="assets/images/main_logo.PNG" alt="F1LTV" class="navlogo">
                </div>
                <p class="font-os font-weight-semibold mb3">Get our mobile app</p>
                <div>
                    <button class="btn btn-app-download mr-2"><img src="assets/images/ios.svg" alt="App store"></button>
                    <button class="btn btn-app-download"><img src="assets/images/android.svg" alt="play store"></button>
                </div>
            </div>
            <div class="col-md-3 mt-3 mt-md-0">
                <nav>
                <ul class="nav flex-column">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="broadcast.html" class="nav-link">Broadcast</a>
                </li>
                <li class="nav-item">
                    <a href="#!" class="nav-link">Emojies</a>
                </li>
                <li class="nav-item">
                    <a href="#!" class="nav-link">Live Chat</a>
                </li>
            </ul>
                </nav>
            </div>
            <div class="col-md-3 mt-3 mt-md-0">
                <nav>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Features</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://discord.gg/WSKZThQ4gA" class="nav-link">Discord</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Join Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-3 mt-3 mt-md-0">
                <p>All rights reserved.</p>
                <nav class="social-menu">
                    <a href="#!"><img src="assets/images/facebook.svg" alt="facebook"></a>
                    <a href="#!"><img src="assets/images/instagram.svg" alt="instagram"></a>
                    <a href="#!"><img src="assets/images/twitter.svg" alt="twitter"></a>
                    <a href="#!"><img src="assets/images/youtube.svg" alt="youtube"></a>
                </nav>
            </div>
        </div>
    </div>
</footer>`;
    }
}

customElements.define("footer-component", FooterComponent);