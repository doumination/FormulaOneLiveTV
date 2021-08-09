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
                    <img src="assets/images/logo-white.svg" alt="FOI">
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
                            <a href="#!" class="nav-link">Account</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">My tasks</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Edit profile</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Activity</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-3 mt-3 mt-md-0">
                <nav>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a href="#!" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Careers <span class="badge badge-pill badge-secondary ml-3">Hiring</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Shop with us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-3 mt-3 mt-md-0">
                <p>
                    &copy; foi. 2020 <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer" class="text-reset">BootstrapDash</a>.
                </p>
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
