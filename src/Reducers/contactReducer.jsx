const initialState = [];

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CONTACT":
      {
        console.log(payload);
      }
      return [...state, payload];
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === payload.id ? payload : contact
      );
      state = updateState;
      return state;
    case "FETCH_CONTACTS":
      return payload;
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== payload && contact);
    default:
      return state;
  }
};

export default contactReducer;
