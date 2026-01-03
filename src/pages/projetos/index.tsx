import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container, Left, Projects, Right } from "./style"
import { api } from "../../api/getApi"
import { useEffect, useState } from "react"
import type { Portfolio } from "../../types/types"
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

export const Projetos = () => {
    const [projects, setProjects] = useState<Portfolio[]>([])
    const navigate = useNavigate();

    async function getProjects() {
        const response = await api.get<Portfolio[]>("/listProjects")
        console.log(response.data)
        setProjects(response.data)
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <Container>
            <Header />
            <h1>MEUS <span>PROJETOS.</span></h1>

            <Left className="btn-prev" />

            <Projects>
                <div className="imgBox">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".btn-next",
                            prevEl: ".btn-prev",
                        }}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            600: { slidesPerView: 2, spaceBetween: 20 },
                            900: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="card">
                                    <img
                                        src={project.imagem_capa}
                                        alt={project.titulo}
                                    />

                                    <h2 onClick={() => navigate("/verProjeto", { state: { projeto: project } })}>{project.titulo}</h2>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Projects>

            <Right className="btn-next" />

            <Footer />
        </Container>
    )
}