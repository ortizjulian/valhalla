import React from "react";
// Sections

import AdminItinerary from "../components/Elements/AdminItinerary";
import Sidebar from "../components/Elements/Sidebar";
export default function Admin() {
  return (
    <>
      <Sidebar></Sidebar>
      <h1>Este seria el itinerario del usuario</h1>
      <AdminItinerary />
    </>
  );
}
