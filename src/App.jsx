//import dos hooks do react
import { useState } from 'react';
//imports gerais
import s from './App.module.css';
import { Card } from './components/card';
//import das imagens
import cardImg1 from "/img1.jpg";
import cardImg2 from "/img2.jpg";
import cardImg3 from "/img3.jpg";
import bambam from "/bambam.jpg";

function App() {

const [nome, setNome] = useState("")
const [assunto, setAssunto] = useState("")

const enviar = () => {
   const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`

        const msg = encodeURIComponent(mensagem)
        window.open(`https://wa.me/55*********?text=${msg}`)
}

  return (
    <>
      <nav>
        <a href="#s1">Primeira</a>
        <a href="#s2">Segunda</a>
        <a href="#s3">Terceira</a>
        <a href="#s4">Quarta</a>
    </nav>
    <main>
        <section id="s1" className={s.s1}>
            <div className={s.imgSide}>
                <img src="/bambam.jpg" alt="Perfil"/>
            </div>
            <div className={s.textSide}>
                <h1>Kleber Bambam</h1>
                <h2>Lorem ipsum</h2>
            </div>
        </section>
            
        <section id="s2" className={s.s2}>
          <Card imgSrc={"/img1.jpg"} alt="Card img1" text="Lorem Ipsum" title="Card 1"> </Card>

          <Card imgSrc={"/img2.jpg"} alt="Card img2" text="Lorem Ipsum" title="Card 2"> </Card>

          <Card imgSrc={"/img3.jpg"} alt="Card img3" text="Lorem Ipsum" title="Card 3"> </Card>
        </section>

        <section id="s3" className={s.s3}>
           <div className={s.animatedText}>
            <span></span>
           </div>
        </section>

        <section id="s4" className={s.s4}>
           <h2>Contato</h2>
           <div className="formulario">

                <label htmlFor="nome">Nome</label>
                <input 
                value={nome} 
                type="text" 
                id="nome" 
                placeholder="Insira seu nome" 
                onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="assunto">Mensagem</label>

                <textarea 
                value={assunto} 
                id="assunto" 
                placeholder="Insira sua mensagem" 
                onChange={(e) => setAssunto(e.target.value)}>
                </textarea>
                
                <button className="btn" onClick={enviar}>Enviar</button>
           </div>
        </section>
    </main>
    <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.github.com" target="_blank">
           <i className="fa-brands fa-github"></i>
        </a>
    </footer>
    </>
  )
}

export default App
