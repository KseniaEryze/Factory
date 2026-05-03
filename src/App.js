  /*
 * Copyright (c) 2026 Ерыженкова Ксения
 * All rights reserved. (Все права защищены).
 *
 * Этот исходный код является интеллектуальной собственностью автора.
 * Любое копирование, изменение или распространение без согласия 
 * правообладателя запрещено.
 *
 * Контакты: kseniaeryzenkova2@gmail.com
 */
  import { useState } from "react";
  import { motion } from "framer-motion";
  import brain from "./img/brain.png";
  import chess_piece from "./img/chess-piece.png";
  import rocket from "./img/rocket.png";
  import briefcase from "./img/briefcase.png";
  import main from "./img/main.jpg";
  import main2 from "./img/main2.jpg";
  import main3 from "./img/main3.jpg";
  import growth from "./img/growth.png";
  import idea_bulb from "./img/idea-bulb.png";
  import puzzle_piece from "./img/puzzle-piece.png";
  import target from "./img/target.png"

  export default function LandingPage() {
    const phoneNumber = "+79991234567";
    const [name, setName] = useState("");

    return (
      <>
        <style>{`
          body {
          margin: 0;
          font-family: Inter, sans-serif;
          background: radial-gradient(circle at top, #1a1a2e, #0f0f14);
          color: white;
        }

        .container { min-height: 100vh; }

        .header {
          position: sticky;
          top: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: rgba(10,10,15,0.7);
          backdrop-filter: blur(12px);
          z-index: 100;
        }

        .logo { font-weight: 800; font-size: 22px; }

        .btn {
          background: linear-gradient(90deg, #ff7a00, #ff3d00);
          padding: 14px 24px;
          border-radius: 14px;
          color: white;
          text-decoration: none;
          transition: 0.3s;
          display: inline-block;
          margin-top: 20px;
        }

        .btn:hover {
          transform: scale(1.07);
          box-shadow: 0 0 20px rgba(255,122,0,0.6);
        }

        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 80px 40px;
        }

        .hero h1 {
          font-size: 64px;
          font-weight: 900;
          line-height: 1.1;
        }

        .hero span { color: #a855f7; }

        .hero p { color: #bbb; margin: 20px 0; font-size: 18px; }

        .hero img {
          width: 500px;
          border-radius: 20px;
          box-shadow: 0 0 80px rgba(168,85,247,0.4);
        }

        .features {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
          padding: 60px 40px;
        }

        .card {
          display: flex;
          gap: 20px;
          align-items: center;
          background: linear-gradient(145deg,#1a1a22,#111);
          padding: 20px;
          border-radius: 16px;
          transition: 0.3s;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .card:hover {
          transform: translateY(-10px) scale(1.03);
        }

        .card h3 {
          margin: 0;
          font-size: 16px;
        }

        .card p {
          margin: 0;
          font-size: 14px;
          color: #aaa;
        }

        .cardText {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          filter: drop-shadow(0 0 10px rgba(168,85,247,0.6));
        }

        .section {
          padding: 80px 40px;
        }

        .big-card {
          display: flex;
          background: linear-gradient(120deg,#1a1a2a,#0f0f14);
          border-radius: 20px;
          overflow: hidden;
        }

        .big-card img {
          width: 50%;
          object-fit: cover;
        }

        .big-card div { padding: 30px; }

        .footer {
          text-align: center;
          padding: 40px;
          color: #777;
        }

        /* BENEFITS */
        .sectionTitle {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
        }

        .benefits {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .benefitCard {
          background: linear-gradient(145deg,#1a1a2e,#111);
          padding: 20px;
          border-radius: 16px;
          text-align: center;
          transition: 0.3s;
          border: 1px solid rgba(168,85,247,0.2);
        }

        .benefitCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 25px rgba(168,85,247,0.4);
        }

        .benefitIcon {
          width: 40px;
          margin-bottom: 10px;
        }

        /* WHO */
        .who {
          display: flex;
          gap: 40px;
          align-items: center;
          background: linear-gradient(120deg,#1a1a2e,#0f0f14);
          border-radius: 20px;
          padding: 30px;
        }

        .whoText { flex: 1; }

        .whoText ul {
          list-style: none;
          padding: 0;
        }

        .whoText li {
          margin-bottom: 10px;
          position: relative;
          padding-left: 20px;
        }

        .whoText li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #a855f7;
        }

        .whoImg {
          width: 50%;
          border-radius: 16px;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .features {
            grid-template-columns: repeat(2,1fr);
          }

          .benefits {
            grid-template-columns: repeat(2,1fr);
          }

          .who {
            flex-direction: column;
          }

          .whoImg {
            width: 100%;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .hero h1 { font-size: 36px; }

          .features {
            grid-template-columns: 1fr;
          }

          .benefits {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 40px 20px;
          }
        }
        `}</style>

        <div className="container">
          {/* HEADER */}
          <header className="header">
            <div className="logo">Фабрика логики</div>
            <a className="btn" href={`tel:${phoneNumber}`}>Записаться</a>
          </header>

          {/* HERO */}
          <section className="hero">
            <div>
              <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
                Учим думать.
                <br/>
                <span>Строим будущее.</span>
              </motion.h1>

              <p>
                Курс по развитию логики и стратегического мышления через игру Factorio.
                Мы учим не играть — мы учим думать.
              </p>

              <a className="btn" href={`tel:${phoneNumber}`}>Записаться на курс</a>
            </div>

            <img src={main} />
          </section>

          {/* FEATURES */}
          <section className="features">
            <div className="card">
              <img src={brain} className="icon" />
              <div className="cardText">
                <h3>Развиваем логику</h3>
                <p>Через решение реальных задач</p>
              </div>
            </div>

            <div className="card">
              <img src={chess_piece} className="icon" />
              <div className="cardText">
                <h3>Стратегическое мышление</h3>
                <p>Учимся планировать и предвидеть</p>
              </div>
            </div>

            <div className="card">
              <img src={rocket} className="icon-rocket" />
              <div className="cardText">
                <h3>Полезные навыки</h3>
                <p>Пригодятся в любой профессии</p>
              </div>
            </div>

            <div className="card">
              <img src={briefcase} className="icon" />
              <div className="cardText">
                <h3>Не просто игра</h3>
                <p>А инструмент роста и будущего</p>
              </div>
            </div>

          </section>

          {/* ABOUT */}
          <section className="section">
            <div className="big-card">
              <div>
                <h2>Если Roblox — это просто игра,
                  <br/>то мы учим думать</h2>
                <p>
                  Factorio — это не про клики.
                  Это про анализ, стратегию и планирование.
                  Ребёнок учится принимать решения и видеть результат.
                </p>
              </div>
              <img src={main2} />
            </div>
          </section>

          {/* BENEFITS */}
          <section className="section">
            <h2 className="sectionTitle">Что получает ваш ребёнок</h2>

            <div className="benefits">
              {[
                { icon: brain, title: "Логика и анализ", text: "Учится находить решения..." },
                { icon: puzzle_piece, title: "Планирование", text: "Понимает причинно..." },
                { icon: target, title: "Стратегия", text: "Строит длинные цепочки..." },
                { icon: idea_bulb, title: "Креативность", text: "Создаёт свои схемы..." },
                { icon: growth, title: "Уверенность", text: "Видит результат..." }
              ].map((item, i) => (
                <div className="benefitCard" key={i}>
                  <img src={item.icon} className="benefitIcon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/*Для кого*/}
          <section className="section">
            <div className="who">
              
              <div className="whoText">
                <h2>Для кого этот курс?</h2>

                <ul>
                  <li>Для детей от 10 до 16 лет</li>
                  <li>Для тех, кто любит игры и технологии</li>
                  <li>Для тех, кто хочет развивать мышление</li>
                  <li>Для будущих инженеров, программистов и предпринимателей</li>
                </ul>
              </div>

              <img 
                className="whoImg"
                src={main3}
              />
              
            </div>
          </section>
          {/* CTA */}
          <section className="section" style={{textAlign:"center"}}>
            <h2>Будущее начинается с мышления</h2>
            <p>Дайте ребёнку навык, который пригодится в любой профессии</p>
            <a className="btn" href={`tel:${phoneNumber}`}>Записаться</a>
          </section>

          <footer className="footer">© 2026 Фабрика логики</footer>
        </div>
      </>
    );
  }
