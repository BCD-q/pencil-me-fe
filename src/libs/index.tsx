import axios from 'axios';

export const fetchTodo = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  await axios.patch(`${apiKey}language`);
};
