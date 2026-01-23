import { useEffect, useState } from "react"
import { api } from "../../api/getApi"
import { Container, MdDeleteOutlineMessages } from "./styles"
import type { MessagesTypes } from "../../types/types"
import { Header } from "../../components/Header"

export const MessagesList = () => {
    const [listMessages, setListMessages] = useState<MessagesTypes[]>([])

    const getListMessages = async () => {
        try {
            const messages = await api.get("/listMessages")
            setListMessages(messages.data)
        } catch (error) {
            console.error("Erro ao buscar menssagens", error)
        }
    }

    async function deleteMessages(id: string) {

        const confirmeDelete = window.confirm(
            "Tem certeza que deseja deletar essa mensagem?"
        )

        if (!confirmeDelete) return

        try {
            await api.delete(`/deleteMessage/${id}`)
            setListMessages((prev) =>
                prev.filter((msg) => msg._id !== id)
            )
        } catch (error) {
            console.error("Erro ao deletar a mensagem", error)
        }
    }

    useEffect(() => {
        getListMessages()
    }, []);

    return (
        <Container>
            <Header />
            {listMessages.length === 0 ? (
                <p>Nenhuma mensagem encontrada</p>
            ) : (
                <table className="messagesTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Mensagen</th>
                            <th>Data e Hora</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listMessages.map((msg, index) => (
                            <tr key={msg._id}>
                                <td>{index + 1}</td>
                                <td>{msg.name}</td>
                                <td>{msg.email}</td>
                                <td>{msg.telefone}</td>
                                <td>{msg.message}</td>
                                <td>
                                    {new Date(msg.createdAt).toLocaleString("pt-BR")}
                                </td>
                                <td>
                                    <MdDeleteOutlineMessages onClick={() => deleteMessages(msg._id)}
                                        title="Deletar mensagem"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Container>
    )
}