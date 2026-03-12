# 🔥 Benvinguts al Callback Hell: "L'Organitzador de Festivals"

Anar al Cruilla o al Primavera Sound no és només comprar l'entrada. És una reacció en cadena on, si un pas falla, tot el pla se'n va a la m****.

---

## El Challenge: "Logística de Supervivència" ⛺

Heu de programar la seqüència lògica per anar al festival. Cada pas triga un temps (asíncron) i **només pot començar si l'anterior ha acabat bé**.

Les regles del drama:
1. Primer, mirem si hi ha entrades (2 segons).
1. Si n'hi ha, busquem AirBnB (2 segons).
1. Si tenim llit, demanem els dies de festa a la feina (2 segons).

```javascript
// La nostra "falsa" API de la vida real
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
```
