<template>
      <!-- Footer Section -->
      <footer class="footer">
      <div class="container footer-container animate-fade-in">
        <div class="footer-section">
          <img src="@/assets/images/home/logo-text.png" alt="Logo" class="footer-logo" />
          <h6>
            Aegis AI empowers users to take control of their online safety with personalized, interactive tests that adapt to their responses. Featuring real-time voice interactions.
          </h6>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#"><CIcon icon="cibFacebook" size="lg" /></a>
            <a href="#"><CIcon icon="cibLinkedin" size="lg" /></a>
            <a href="#"> <CIcon icon="cibInstagram" size="lg" /></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <h6>© 2025 AegisAI. All rights reserved.</h6>
      </div>
    </footer>
</template>
<script>
export default {
  name: "CustomFooter",
};
</script>
<style>
/* Footer Styles */
.footer {
  background-color: #163354;
  color: #fff;
  padding: 40px 20px;
  text-align: left;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.footer-section {
  flex: 1 1 calc(33.333% - 20px);
}

.footer-logo {
  height: 100px;
  margin-bottom: 15px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 10px;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #285bd3;
  padding-top: 10px;
}

</style>
