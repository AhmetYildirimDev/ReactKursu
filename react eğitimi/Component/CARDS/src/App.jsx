import "../node_modules/bulma/css/bulma.css";
import React, { useState } from "react";
import "./App.css";
import { Course } from "./Course";
import M3 from "./images/bmw_M3.jpg";
import M4 from "./images/bmw_m4.jpg";
import M5 from "./images/bmw_M5.jpg";
import M8 from "./images/bmw_M8.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">BMW REPERTUARI</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={M3}
                title="BMW M3 CS"
                description="BMW M3, üstün performansı ve sportif tasarımıyla tanınan kompakt bir spor sedan modelidir. Yüksek güçlü motoru, dinamik sürüş özellikleri ve lüks iç mekanıyla sürücülere heyecan verici bir sürüş deneyimi sunar. "
              />
            </div>
            <div className="column">
              <Course
                image={M4}
                title="BMW M4 CS"
                description="BMW M4, M3'ün coupe versiyonudur ve aynı performans ve sürüş dinamiği ile gelir. Agresif tasarımı, yüksek performanslı motoru ve sürüşe odaklı iç mekanıyla sportif sürüş tutkunları için ideal bir seçenektir."
              />
            </div>
            <div className="column">
              <Course
                image={M5}
                title="BMW M5 CS"
                description="BMW M5, lüks ve performansı birleştiren büyük boyutlu bir spor sedan modelidir. Güçlü motoru, hızlı ve dinamik sürüşüyle dikkat çekerken, aynı zamanda konforlu ve şık bir iç mekana sahiptir."
              />
            </div>
            <div className="column">
              <Course
                image={M8}
                title="BMW M8 CS"
                description="BMW M8, markanın en yüksek performanslı ve lüks grand tourer (GT) modelidir. Zengin iç mekanı, güçlü motor seçenekleri ve çarpıcı tasarımıyla üst düzey bir sürüş deneyimi sunar, aynı zamanda günlük kullanıma uygun pratik özellikler sunar."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
