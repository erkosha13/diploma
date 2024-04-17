import axios from 'axios';

export const registerUser = async (userName: string, password: string) => {
  try {
    const data = {
      userName: userName,
      password: password
    };

    const response = await axios.post('http://195.49.210.226:8080/api/auth/registration', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data; // Возвращаем данные, если регистрация прошла успешно

  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    throw error; // Передаем ошибку для обработки в вызывающем коде
  }
};
