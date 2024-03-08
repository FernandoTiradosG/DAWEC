import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CSS/GestionReservas.css';
import ModalDatosUsuario from './ModalDatosUsuario';
import ModalPago from './ModalPago';
import ModificarModal from './ModificarModal';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const GestionReservas = () => {
  const navigate = useNavigate(); // Obtén la función navigate para la navegación programática
  // Estado inicial con las reservas del usuario por día y horarios disponibles
  const [reservasPorDia, setReservasPorDia] = useState(() => {
    // Obtener las reservas del almacenamiento local si existen, de lo contrario, devolver un objeto vacío
    const storedReservas = localStorage.getItem('reservasPorDia');
    return storedReservas ? JSON.parse(storedReservas) : {};
  }); 
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Estado para controlar la visibilidad del modal de reserva
  const [showReservaModal, setShowReservaModal] = useState(false);
  // Estado para controlar la visibilidad del modal de pago
  const [showPagoModal, setShowPagoModal] = useState(false);
  // Estado para almacenar la hora seleccionada
  const [selectedTime, setSelectedTime] = useState('');
  // Estado para la verificación del rol de administrador
  const [isAdmin, setIsAdmin] = useState(false); // Estado para controlar si el usuario es un administrador
  const [selectedReservationData, setSelectedReservationData] = useState(null);

  // Estado para controlar la visibilidad del modal de modificación de reserva
  const [showModificarReservaModal, setShowModificarReservaModal] = useState(false);
  // Estado para almacenar la reserva seleccionada para modificar
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

  useEffect(() => {
    // Guardar las reservas en el almacenamiento local cada vez que cambien
    localStorage.setItem('reservasPorDia', JSON.stringify(reservasPorDia));
  }, [reservasPorDia]);

  useEffect(() => {
    // Verificar si el usuario actual es un administrador
    const verificarAdmin = async () => {
      try {
        const user = auth.currentUser;
        // Verifica si el usuario tiene el rol de 'admin' en su perfil
        setIsAdmin(user.displayName === 'admin');
      } catch (error) {
        console.error('Error al verificar el rol de administrador:', error);
      }
    };

    verificarAdmin();
  }, []);

  // Función para realizar una nueva reserva
  const hacerReserva = (time) => {
    setSelectedTime(time);
    setShowReservaModal(true); // Mostrar el modal de reserva
  };

  // Función para manejar la confirmación de la reserva
  const handleReservaConfirmada = (nombre, correo, telefono) => {
    // Realizar la reserva aquí con los datos recopilados
    console.log('Reserva confirmada. Datos:', nombre, correo, telefono);

    // Almacenar la reserva completa (incluyendo nombre, correo, telefono, etc.) en el estado reservasPorDia
    const nuevasReservas = {
      ...reservasPorDia,
      [selectedDate.toDateString()]: [
        ...(reservasPorDia[selectedDate.toDateString()] || []),
        { 
          time: selectedTime,
          nombre: nombre, // Agrega el nombre de la reserva
          correo: correo, // Agrega el correo electrónico de la reserva
          telefono: telefono // Agrega el teléfono de la reserva
        }
      ]
    };

    setReservasPorDia(nuevasReservas); // Actualizar el estado con las nuevas reservas

    // Actualizar selectedReservationData con los nuevos datos de reserva
    setSelectedReservationData({ 
      time: selectedTime,
      nombre: nombre,
      correo: correo,
      telefono: telefono
    });
    
    setShowReservaModal(false); // Cerrar el modal de reserva
    setShowPagoModal(true); // Mostrar el modal de pago
  };

  // Función para manejar la cancelación de la reserva
  const handleCancelarReserva = () => {
    setShowReservaModal(false); // Cerrar el modal de reserva
    setSelectedTime(''); // Reiniciar el estado de la hora seleccionada
    // Si deseas realizar alguna otra acción al cancelar la reserva, puedes hacerlo aquí
    // Si la reserva fue cancelada, la hora debe volver a estar disponible
    liberarHoraSeleccionada(selectedTime);
    // Si deseas realizar alguna otra acción al cancelar la reserva, puedes hacerlo aquí
  };

  // Función para liberar la hora seleccionada al cancelar una reserva
  const liberarHoraSeleccionada = (time) => {
    if (isAdmin) {
      const nuevasReservasPorDia = {
        ...reservasPorDia,
        [selectedDate.toDateString()]: (reservasPorDia[selectedDate.toDateString()] || []).filter(reserva => reserva.time !== time)
      };
      setReservasPorDia(nuevasReservasPorDia);
    }

  };

  // Función para manejar la confirmación del pago
  const handlePagoConfirmado = () => {
    // Realizar el pago aquí con el número de tarjeta recopilado
    // Por ejemplo: enviar datos a la API de pago, procesar la transacción, etc.
    console.log('Pago confirmado. Datos:', selectedTime);
  
    // Realizar la reserva aquí con los datos recopilados
    console.log('Reserva realizada. Datos:', selectedTime);
  
    setShowPagoModal(false); // Cerrar el modal de pago
    // Si el pago es exitoso, puedes realizar alguna acción adicional aquí
  };

  // Función para manejar la cancelación del pago
  const handleCancelarPago = () => {
    setShowPagoModal(false); // Cerrar el modal de pago
    setSelectedTime('');
    liberarHoraSeleccionada(selectedTime);
    // Si deseas realizar alguna otra acción al cancelar el pago, puedes hacerlo aquí
  };

  // Verificar si la hora es válida según las restricciones
  const esHoraValida = (time) => {
    const now = new Date();
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(parseInt(time.split(':')[0]), parseInt(time.split(':')[1]));
    // Verificar si la fecha seleccionada es posterior o igual a hoy y si la hora seleccionada es válida
    return selectedDateTime >= now && selectedDateTime - now >= 5400000; // 5400000 ms = 1.5 horas
  };

  // Obtener las reservas para el día seleccionado
  const reservasParaDiaSeleccionado = reservasPorDia[selectedDate.toDateString()] || [];

  // Función para obtener los datos de reserva para una hora específica
  const obtenerDatosReserva = (reservas, hora) => {
    const reserva = reservas.find(reserva => reserva.time === hora);
    const { nombre = '', correo = '', telefono = '' } = reserva || {};
    return `${nombre} - ${correo} - ${telefono}`;
  };

  // Horarios disponibles para el día seleccionado
  const horariosDisponibles = [
    { time: '11:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.time === '11:00' && !reserva.cancelled), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '11:00') },
    { time: '13:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.time === '13:00' && !reserva.cancelled), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '13:00') },
    { time: '16:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.time === '16:00' && !reserva.cancelled), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '16:00') },
    { time: '18:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.time === '18:00' && !reserva.cancelled), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '18:00') },
    { time: '20:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.time === '20:00' && !reserva.cancelled), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '20:00') },
    { time: '21:45', available: !reservasParaDiaSeleccionado.some(reserva => reserva.time === '21:45' && !reserva.cancelled), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '21:45') },
    { time: '23:30', available: !reservasParaDiaSeleccionado.some(reserva => reserva.time === '23:30' && !reserva.cancelled), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '23:30') }
  ];
  
  const handleOpenModificar = (time) => {
    const reserva = reservasParaDiaSeleccionado.find(reserva => reserva.time === time);
    setReservaSeleccionada(reserva);
    setShowModificarReservaModal(true);
  }

  // Función para manejar la modificación de la reserva
  const handleModificarReserva = (nuevosDatos) => {
    // Verifica que haya una reserva seleccionada
    if (!reservaSeleccionada) {
      console.error('No se ha seleccionado ninguna reserva para modificar.');
      return;
    }
  
    // Obtiene la reserva actualizada
    const reservaActualizada = {
      ...reservaSeleccionada,
      nombre: nuevosDatos.nombre ? nuevosDatos.nombre : reservaSeleccionada.nombre,
      correo: nuevosDatos.email ? nuevosDatos.email : reservaSeleccionada.correo,
      telefono: nuevosDatos.telefono ? nuevosDatos.telefono : reservaSeleccionada.telefono,
      comentarios: nuevosDatos.comentarios ? nuevosDatos.comentarios : reservaSeleccionada.comentarios
    };
  
    // Realiza la actualización en el estado o donde tengas almacenadas las reservas
    const nuevasReservasPorDia = {
      ...reservasPorDia,
      [selectedDate.toDateString()]: reservasPorDia[selectedDate.toDateString()].map(reserva => {
        if (reserva.time === reservaActualizada.time) {
          return reservaActualizada;
        }
        return reserva;
      })
    };
  
    setReservasPorDia(nuevasReservasPorDia);
  
    // Cierra el modal de modificación de reserva
    setShowModificarReservaModal(false);
  
    // Mensaje de éxito o cualquier otra acción que desees realizar
    console.log('Reserva modificada correctamente:', reservaActualizada);
  };
  

  const [horasAnuladasPorDia, setHorasAnuladasPorDia] = useState(() => {
    const storedHorasAnuladas = localStorage.getItem('horasAnuladasPorDia');
    return storedHorasAnuladas ? JSON.parse(storedHorasAnuladas) : {};
  });

  const handleAnularHora = (time) => {
    const selectedDateKey = selectedDate.toDateString();
    const horasAnuladasParaFecha = horasAnuladasPorDia[selectedDateKey] || [];

    if (horasAnuladasParaFecha.includes(time)) {
      // Si la hora ya está anulada, la eliminamos
      const updatedHorasAnuladas = horasAnuladasParaFecha.filter(hora => hora !== time);
      setHorasAnuladasPorDia({ ...horasAnuladasPorDia, [selectedDateKey]: updatedHorasAnuladas });
    } else {
      // Si la hora no está anulada, la agregamos
      const updatedHorasAnuladas = [...horasAnuladasParaFecha, time];
      setHorasAnuladasPorDia({ ...horasAnuladasPorDia, [selectedDateKey]: updatedHorasAnuladas });
    }
  };

  useEffect(() => {
    // Guardar las horas anuladas en el almacenamiento local cada vez que cambien
    localStorage.setItem('horasAnuladasPorDia', JSON.stringify(horasAnuladasPorDia));
  }, [horasAnuladasPorDia]);

  const esHoraCancelada = (time) => {
    const selectedDateKey = selectedDate.toDateString();
    const horasAnuladasParaFecha = horasAnuladasPorDia[selectedDateKey] || [];
    return horasAnuladasParaFecha.includes(time);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Cerrar la sesión del usuario
      console.log('Usuario deslogueado');
      // Redirigir a la página de inicio o a donde sea apropiado después del logout
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h2>Calendario de Reservas</h2>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          minDate={new Date()} // Restringe la selección de días pasados
        />
      </div>
      <div className="time-slots">
        <h3>Horarios Disponibles para {selectedDate.toDateString()}</h3>
        <ul>
          {horariosDisponibles.map(horario => (
            <li key={horario.time}>
              <span
                className={`time-slot ${horario.available ? (esHoraValida(horario.time) && !esHoraCancelada(horario.time) ? 'available' : 'cancelled') : 'reserved'}`}
                onClick={() => {
                  if (horario.available && esHoraValida(horario.time)) {
                    hacerReserva(horario.time); // Pasa los datos de reserva al hacer la reserva
                  } else if (!horario.available) {
                    liberarHoraSeleccionada(horario.time); // Cancelar la reserva si está ocupada
                  }
                }}
              >
                {horario.time}
                {isAdmin && horario.reservationData && (

                  <>
                    <span className="reservation-info">/{horario.reservationData}</span>
                  </>
                )}
              </span>
              {isAdmin && horario.reservationData && esHoraValida(horario.time) && (
                <div>
                  <button onClick={() => handleOpenModificar(horario.time)}>Modificar</button>
                  <button onClick={() => handleAnularHora(horario.time)}>{!esHoraCancelada(horario.time) ? 'Anular Hora' : 'Restaurar Hora'}</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <button className='logout' onClick={handleLogout}>Cerrar sesión</button>
      <ModalDatosUsuario 
        show={showReservaModal} 
        handleClose={handleCancelarReserva} 
        handleConfirm={handleReservaConfirmada} 
        reservationData={selectedReservationData} 
      />
      <ModalPago show={showPagoModal} handleClose={handleCancelarPago} handleConfirm={handlePagoConfirmado} />
      <ModificarModal
        show={showModificarReservaModal}
        handleClose={() => setShowModificarReservaModal(false)}
        reservaSeleccionada={reservaSeleccionada}
        handleModificarReserva={handleModificarReserva}
      />
    </div>
  );
};

export default GestionReservas;
