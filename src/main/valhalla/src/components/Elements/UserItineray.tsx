

import { Button, DialogActions } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import type {
  ProcessedEvent,
  ViewEvent
} from "@aldabil/react-scheduler/types";
import EVENTS from "../../data/data";

interface Evento {
  event_id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  profesor: string;
}



export default function UserItineray() {


  const handleReservar = (event: ProcessedEvent) => {
    alert(
      event.event_id + " Con el profesor " + event.profesor

    );
  };


  
  const [clases, setClases] = useState<Evento[]>([]);



  useEffect(() => {
    fetch("/clases")
      .then((response) => response.json())
      .then((data) => {


        const eventos: Evento[] = data.map((clase: any) => {

          /* return {
            event_id: clase.id_clases,
            title: clase.nombre,
            start: new Date(clase.fecha_inicio),
            end: new Date(clase.fecha_final),
            description: clase.descripcion,
            profesor: clase.profesor.id,
          }; */
          return {
            event_id: 1,
            title: "aaassasas",
            start: new Date("2023/5/5 10:00"),
            end: new Date("2023/5/5 12:00"),
            description: "aaaa",
            profesor: 1,
          };
        });
        setClases(eventos);
        
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ color: "#000" }}>
      
      <Scheduler
        events={EVENTS}
        day={null}
        
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: 6,
          endHour: 20,
          step: 120,
        }}
        editable={false}
        deletable={false}
        draggable={false}
        customEditor={(scheduler) =>
          <Wrapper className="purpleBg" style={{ padding: "1rem" }}>
            <p style={{ color: "#FFFFFF", textAlign: "center", fontSize: "25px" }}>No tenemos programación para la fecha seleccionada</p>
            <DialogActions className="purpleBg">
              <Button style={{ backgroundColor: "white", color: "#7620FF" }} variant="contained" onClick={scheduler.close}>Salir</Button>
            </DialogActions>

          </Wrapper>
        }
        viewerExtraComponent={(fields, event) => {
          return (
            <div>
              <p>Description: {event.description || "Nothing..."}</p>
              <p>Profesor: {event.profesor || "Nothing..."}</p>
              <Button style={{ backgroundColor: "#1976d2", color: "white" }} variant="contained" onClick={() => handleReservar(event)}>Reservar</Button>

            </div>
          );
        }}
      /> :

    </div>
  );
}

const Wrapper = styled.div`
  @media (max-width: 600px) {
    height: 100vh !important;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;




