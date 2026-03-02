const mirarEntrades = (callback) => {
  setTimeout(() => {
    console.log("1. Tenim entrades! 🎫");
    callback("TICKET_123");
  }, 2000);
};

const buscarAllotjament = (ticketId, callback) => {
  setTimeout(() => {
    console.log(`2. Allotjament reservat per al tiquet ${ticketId} 🏠`);
    callback("AIRBNB_SANT_ADRIA");
  }, 2000);
};

const demanarVacances = (reservaId, callback) => {
  setTimeout(() => {
    console.log(`3. El "jefe" ha acceptat la reserva ${reservaId} ✅`);
    callback("VACANCES_CONFIRMADES");
  }, 2000);
};

mirarEntrades((ticketId) => {
    buscarAllotjament(ticketId, (reservaId) => {
        demanarVacances(reservaId, (confirmacio) => {
        });
    });
});