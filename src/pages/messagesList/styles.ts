import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

export const Container = styled.div`
    .messagesTable {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-family: Arial, sans-serif;
    }

    .messagesTable th,
    .messagesTable td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
    }

    .messagesTable th {
        background-color: #222;
        color: #fff;
        font-weight: bold;
    }

    .messagesTable tr:nth-child(even) {
        background-color: #443f3f;
    }

    .messagesTable tr:hover {
        background-color: #2f2c2c;
    }

    .messagesTable td {
        font-size: 14px;
    }

    .messagesTable td:last-child {
        white-space: nowrap;
        font-size: 13px;
    }

    .messagesTable td:nth-child(4) {
        max-width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const MdDeleteOutlineMessages = styled(MdDeleteOutline)`
    font-size: 25px;
    cursor: pointer;
    color: red;

    &:hover {
        opacity: 0.5;
    }
    
    &:active {
        opacity: 0.9;
    }
`