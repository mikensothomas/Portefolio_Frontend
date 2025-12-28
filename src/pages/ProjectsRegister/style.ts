import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 50px 20px;
  background: var(--color-gray-900);

  form {
    background: var(--color-gray-800);
    border: 1px solid var(--color-gray-700);
    border-radius: 16px;
    padding: 40px;
    width: 100%;
    max-width: 1100px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    gap: 30px;
    transition: 0.3s ease;
  }

  h1 {
    text-align: center;
    color: var(--color-primary-500);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-weight: 600;
    color: var(--color-gray-50);
    font-size: 0.95rem;
  }

  input,
  textarea,
  select {
    border: 1px solid var(--color-gray-700);
    border-radius: 10px;
    padding: 12px;
    font-size: 1rem;
    background-color: var(--color-gray-900);
    color: var(--color-gray-50);
    transition: all 0.2s ease;
    width: 100%;
    box-sizing: border-box;
  }


  input::placeholder,
  textarea::placeholder {
    color: var(--color-gray-400);
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px rgba(55, 227, 89, 0.2);
    background-color: var(--color-gray-900);
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .checkbox {
    flex-direction: row;
    gap: 10px;
    height: 15px;

    label {
      font-weight: 500;
      color: var(--color-gray-50);
    }

    input {
      cursor: pointer;
    }
  }

  button {
    align-self: center;
    width: 100%;
    background: var(--color-primary-600);
    color: var(--color-gray-50);
    border: none;
    border-radius: 10px;
    padding: 14px;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 4px 12px rgba(43, 195, 72, 0.25);
  }

  .save {
    align-self: center;
    width: 100%;
    background: transparent;
    border: 1px solid var(--color-primary-600);
    border-radius: 10px;
    padding: 14px;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 4px 12px rgba(43, 195, 72, 0.25);
  }

  button:hover {
    background: var(--color-primary-700);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(55, 227, 89, 0.4);
  }

  @media (max-width: 900px) {
    form {
      padding: 25px;
      gap: 25px;
    }

    button {
      width: 100%;
    }
  }
`;

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const ContainerSecondOne = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerSecondTwo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;