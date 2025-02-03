  'use client'
  import React, { useEffect, useRef } from "react";
  import gsap from "gsap";

  const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }, []);

    return (
      <footer
        ref={footerRef}
        className="text-center py-4 bg-gray-900 text-gray-500 border-t border-gray-700"
      >
        <p className="text-sm">© 2024 Oscar Neira. Todos los derechos reservados.</p>
      </footer>
    );
  };

  export default Footer;
