import axios from 'axios';

export const fetchTodo = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  await axios.patch(`${apiKey}language`);
};

export const fetchInspiration = async () => {
  try {
    const response: any = await axios.get(
      'https://dog.ceo/api/breed/hound/images/random/20',
    );

    console.log(response.data.message);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
