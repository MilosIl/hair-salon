import React from "react";

import Hero from "../Components/Hero";
import TestimonialsScreen from "./TestimonialsScreen";
import About from "../Components/About";
import FormScreen from "./FormScreen";
import Faq from "../Components/Faq";

// pocetni ekran sa pregledom na studio, njihovu ponudu
// kontakt, mogucnost zakazivanja termina
// utiske zadovoljnih musterija(slike frizura, il nokti)

function HomeScreen() {
  return (
    <div>
      <Hero />
      <About />
      <FormScreen />
      <TestimonialsScreen />
      <Faq/>
    </div>
  );
}

export default HomeScreen;
