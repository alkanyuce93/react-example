import react from "react";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isim, setIsım] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);
  const [hataMesaji, setHataMesaji] = useState("");
  const handleChange = (event) => setIsım(event.target.value);

  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("Kullanıcı Adı en az 6 karakter olmalıdır");
    } else {
      setHataMesaji("");
      setGirisYapildi(true);
    }

    console.log("hata");
  };

  return (
    <div className="App">
      <h>React Dersleri</h>
      {girisYapildi ? (
        <React.Fragment>
          <h2>Hoşgeldiniz {isim}</h2>
          <button onClick={() => setGirisYapildi(false)}>Çıkış Yap</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            name="isim"
            placeholder="isminiz"
            value={isim}
            onChange={handleChange}
          />
          <button onClick={() => handleSubmit(isim)}>Giriş</button>
          <br />
          {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giriş Yapınız</h2>}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
