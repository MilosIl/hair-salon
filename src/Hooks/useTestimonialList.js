import { useEffect, useState } from "react";

export function UseTestimoniallList(){
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    let isCleaned = false;
    async function getTestimonials() {
      const response = await fetch(`http://localhost:5000/testimonials/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      if (!isCleaned) {
        const testimonials = await response.json();
        setTestimonials(testimonials);
      }
    }
    getTestimonials();
    return () => {
      isCleaned = true;
    };
  }, [testimonials.length]);
}