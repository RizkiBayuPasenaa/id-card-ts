import { useReducer } from "react";

type StateType = {
  nama: string;
  image: string;
  email: string;
  born: string;
  phone: string;
  position: string;
};

type ActionType = 
  | { type: 'SET_INPUT'; payload: { name: string; value: string } };
  
function reducer(state: StateType, action: ActionType): StateType {
  switch(action.type) {
    case 'SET_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}

function IdCard() {
  const initialData: StateType = {
    nama: '',
    image: '',
    email: '',
    born: '',
    phone: '',
    position: ''
  };

  const [state, dispatch] = useReducer(reducer, initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_INPUT", payload: { name, value } });
  };

  return (
    <>
      <div className="id-card-container">
        <div className="id-card-header">
          <h3>Kartu Tanda Pegawai</h3>
        </div>
        <div className="id-card-body">
          <div className="header">
            <div className="hero" style={{ backgroundImage: `url(${state.image})` }} />
          </div>
          <div className="body">
            <h4>Name : {state.nama}</h4>
            <h4>Email : {state.email}</h4>
            <h4>Born : {state.born}</h4>
            <h4>Phone : {state.phone}</h4>
          </div>  
        </div>
        <div className="id-card-footer">
          <h2>{state.position}</h2>
        </div>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Masukan nama anda" onChange={handleChange} name="nama" value={state.nama} />
        <input type="text" placeholder="Masukan email anda" onChange={handleChange} name="email" value={state.email} />
        <input type="date" onChange={handleChange} name="born" value={state.born} />
        <input type="text" placeholder="Masukan nomor telphone anda" onChange={handleChange} name="phone" value={state.phone} />
        <input type="text" placeholder="Masukan url profile anda" onChange={handleChange} name="image" value={state.image} />
        <input type="text" placeholder="Masukan posisi job desk anda" onChange={handleChange} name="position" value={state.position} />
      </div>
    </>
  );
}

export default IdCard;
