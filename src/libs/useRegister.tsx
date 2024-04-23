import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export interface Info {
  uid: string;
  password: string;
  email: string;
  nickname: string;
}
