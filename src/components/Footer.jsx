import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Mohammed Alazami {year}</p>
    </footer>
  );
}

export default Footer;
