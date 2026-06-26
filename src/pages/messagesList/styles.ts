import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  padding: 10px;

  .tableWrapper {
    display: block;
    width: 100%;
    overflow-x: auto;
  }

  .mobileCards {
    display: none;
  }

  .messagesTable {
    width: 100%;
    min-width: 900px;
    border-collapse: collapse;
    margin-top: 20px;
    font-family: Arial, sans-serif;
  }

  .messagesTable th,
  .messagesTable td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 14px;
    color: #fff;
    word-break: break-word;
  }

  .messagesTable th {
    background-color: #222;
    font-weight: bold;
  }

  .messagesTable tr:nth-child(even) {
    background-color: #443f3f;
  }

  .messagesTable tr:hover {
    background-color: #2f2c2c;
  }

  .messagesTable td:last-child {
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .tableWrapper {
      display: none;
    }

    .mobileCards {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 20px;
    }

    .card {
      background: #1f1f1f;
      border: 1px solid #333;
      border-radius: 14px;
      padding: 16px;
      color: #fff;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
      transition: transform 0.2s ease;
    }

    .card:hover {
      transform: translateY(-4px);
    }

    .row {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 1.4;
      word-break: break-word;
    }

    .label {
      font-weight: 600;
      color: #00ff08;
      margin-right: 6px;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 12px;
    }
  }

  @media (max-width: 480px) {
    .card {
      padding: 14px;
    }

    .row {
      font-size: 13px;
    }
  }
`;

export const MdDeleteOutlineMessages = styled(MdDeleteOutline)`
  font-size: 25px;
  cursor: pointer;
  color: red;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.6;
    transform: scale(1.15);
  }

  &:active {
    transform: scale(0.95);
  }
`;