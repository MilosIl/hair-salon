import { Route, Routes } from "react-router-dom";

import HomeScreen from "../Screen/HomeScreen";
import MeetingScreen from "../Screen/MeetingScreen";
import TestimonialsScreen from "../Screen/TestimonialsScreen";
import TrendsScreen from "../Screen/TrendsScreen";
import FormScreen from "../Screen/FormScreen";
import LoginScreen from "../Screen/LoginScreen";
import NotFoundScreen from "../Screen/NotFoundScreen";
import About from "../Components/About";
import TestemonialForm from "../Components/TestemonialForm";

export default function RoutesScreen() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundScreen />}></Route>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/home" element={<HomeScreen />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/meetings" element={<MeetingScreen />}></Route>
      <Route path="/testimonials" element={<TestimonialsScreen />}></Route>
      <Route path="/trends" element={<TrendsScreen />}></Route>
      <Route path="/create%20appointment" element={<FormScreen />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route
        exact
        path="/create%20appointment"
        element={<FormScreen />}
      ></Route>
      <Route
        path="/testimonials/create%20testimonial"
        element={<TestemonialForm />}
      ></Route>
    </Routes>
  );
}
