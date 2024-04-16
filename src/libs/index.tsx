import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchTodo = async () => {
  await axios.patch(`${apiKey}language`);
};

// 영감 불러올때 api
export const fetchInspiration = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breed/hound/images/random/20');
  } catch (error) {
    console.error(error);
  }
};
