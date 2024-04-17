import axios from 'axios';

export const loginUser = async (userName: string, password: string) => {
  try {
    const data = {
      userName: userName,
      password: password
    };

    const response = await axios.post('http://195.49.210.226:8080/api/auth/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data; // Возвращаем данные пользователя после успешного входа

  } catch (error) {
    console.error('Ошибка при входе:', error);
    throw error; // Передаем ошибку для обработки в вызывающем коде
  }
};