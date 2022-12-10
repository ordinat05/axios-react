import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // 🔻 Ders 15 in değişkenleri
  const [veri, setVeri] = useState("");
  const [id, setId] = useState("");
  // 🔻 Ders 16 nın değişkenleri
  const [veri2, setVeri2] = useState();
  const [tarih, setTarih] = useState();
  // 🔻 Ders 15 in React Kodları
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((res) => console.log(res.data[2].body));
      .then((res) => setVeri(res.data[id].title))
      .catch((err) => console.log(err));
  }, [veri, id]);
  // 🔻 Ders 16 nın React Kodları
  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";

    axios(URL)
      .then((res) => setVeri2(res.data[tarih]))
      .catch((err) => console.log(err));
  }, [veri2, tarih]);
  // test () =>{
  //   setVeri2 === 0
  // }
  // const bosKalmasinFonksiyonu = () => {
  //   setVeri2(() => veri.totalTests);
  // };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4 ">
            <h1 className="text-center text-white display-3">
              Türkiye Covid-19 Arama Motoru
            </h1>
            <input
              type="text"
              placeholder="GG/AA/YY"
              className="form-control mt-3"
              onChange={(e) => setTarih(e.target.value)}
            />

            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">Tarih</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={veri2 === undefined ? "bg-warning" : "bg-success"}
                >
                  <th scope="row">
                    {veri2 === undefined ? "Veri Bekleniyor" : veri2.date}
                  </th>
                  <td>
                    {veri2 === undefined ? "Veri Bekleniyor" : veri2.totalTests}
                  </td>
                  <td>
                    {veri2 === undefined
                      ? "Veri Bekleniyor"
                      : veri2.totalPatients}
                  </td>
                  <td>
                    {veri2 === undefined
                      ? "Veri Bekleniyor"
                      : veri2.totalDeaths}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <button onClick={bosKalmasinFonksiyonu}>sallamasyon</button> */}
          </div>
        </div>
      </div>
      {/* "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"; */}

      <hr></hr>
      <h1 className="text-white">{veri}</h1>
      <p>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </p>
    </div>
  );
}

export default App;
