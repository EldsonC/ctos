import { Arrow } from "../../assets/icons/arrow"
import { Header } from "../../components/header"
import { StyleHome } from "./style"

import { Man } from "../../assets/icons/man"
import { Code } from "../../assets/icons/code"
import { Lamp } from "../../assets/icons/lamp"
import { Waves } from "../../assets/icons/waves"

export function Home() {
    return (
        <>
        
            <main>
                <StyleHome>
                    <Header/>
                    <section className="section_container__home">
                        <div className="container_content__home">
                            <div>
                                <p>Desenvolva seu futuro agora, e faça uma caminhada produtiva</p>
                                <button>
                                    <span>Conheça a CTS</span>
                                    <Arrow color="#000000"/>
                                </button>
                            </div>
                            <div>
                                <Man/>
                            </div>
                        </div>
                    </section>
                    <section className="section_container__body">
                        <div className="container_content__body">
                            <div className="container_details__div">
                                <h1 className="title">Conheça o que fazemos</h1>
                                <div className="container__details">
                                    <Code/>
                                    <h2>Engenharia de Software</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Neque adipiscing est nibh et pellentesque nulla.</p>
                                    <a href="#">
                                        <span>Ver detalhes</span>
                                        <Arrow color="#339ACC"/>
                                    </a>
                                </div>
                            </div>

                            <div className="container_details__div top_margin">
                                <h1 className="width_title">Marketing para o seu negócio</h1>
                                <div className="container__details">
                                    <Lamp/>
                                    <h2>Engenharia de Software</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Neque adipiscing est nibh et pellentesque nulla.</p>
                                    <a href="#">
                                        <span>Ver detalhes</span>
                                        <Arrow color="#339ACC"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div className="talk">
                            <div className="container__talk">
                                <div className="talk_text">
                                    <span className="title">Deseja falar conosco?</span>
                                    <button>
                                        <span>Entre em contato</span>
                                        <Arrow color="#000"/>
                                    </button>
                                </div>
                            </div>
                            <Waves/>
                        </div>
                        <div className="contat">

                        </div>
                        <div className="copyright">
                            
                        </div>
                    </footer>
                </StyleHome>
            </main>
        </>
    )
}