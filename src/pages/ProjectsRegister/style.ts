import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 60px 20px;
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
    outline: none;
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    label {
      font-weight: 500;
    }

    input {
      cursor: pointer;
    }
  }

  button {
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
  }

  .save {
    width: 100%;
    background: transparent;
    border: 1px solid var(--color-primary-600);
    border-radius: 10px;
    padding: 14px;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: var(--color-primary-700);
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    form {
      padding: 25px;
      gap: 25px;
    }

    h1 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 600px) {
    padding: 30px 15px;

    form {
      padding: 20px;
      gap: 20px;
    }

    h1 {
      font-size: 1.4rem;
    }

    input,
    textarea,
    select {
      font-size: 0.95rem;
      padding: 10px;
    }

    button,
    .save {
      font-size: 1rem;
      padding: 12px;
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