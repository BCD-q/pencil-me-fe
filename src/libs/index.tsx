import axios from 'axios';

export const fetchTodo = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  await axios.patch(`${apiKey}language`);
};

export const fetchInspiration = async () => {
  const response = await axios.get(
    'https://dog.ceo/api/breed/hound/images/random/20',
  );
  return response.data;
};
