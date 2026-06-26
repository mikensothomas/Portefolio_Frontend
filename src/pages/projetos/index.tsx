import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container, ContentWrapper, Left, Projects, Right } from "./style"
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
    const [total, setTotal] = useState<number>(0)
    

    async function getProjects() {
        const response = await api.get<Portfolio[]>("/listProjects")
        setProjects(response.data)
    }

    const getProcjectNumber = async () => {
        try {
            const response = await api.get("/countProject")
            setTotal(response.data.total)
        } catch (error) {
            console.error("Erro ao buscar a quantidade de projetos cadastrados", error)
        }
    }

    useEffect(() => {
        getProjects()
        getProcjectNumber()
    }, [])

    return (
        <Container>
            <Header />
            <ContentWrapper>
                <h1>MEUS <span>PROJETOS. {total}</span></h1>

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
                                <SwiperSlide key={project._id}>
                                    <div className="card">
                                        <img src={project.imagem_capa} alt={project.titulo} />
                                        <h2
                                            onClick={() =>
                                                navigate(`/verProjeto/${project._id}`, {
                                                    state: { projeto: project },
                                                })
                                            }
                                        >
                                            <span>{project.titulo}</span>
                                            <span>{project.categoria}</span>
                                            <span>{project.status}</span>
                                        </h2>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Projects>

                <Right className="btn-next" />
            </ContentWrapper>

            <Footer />
        </Container>
    );
}