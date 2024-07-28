import axios from 'axios';
import { prisma } from '../bootstrap';
import { v4 as uuidv4 } from 'uuid';

export const createRandomStat = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api');
    const userData = response.data.results[0];

    await prisma.stat.create({
      data: {
        playerId: uuidv4(),
        nickname: userData.login.username,
        profileImage: userData.picture.thumbnail,
        score: Math.floor(Math.random() * 100) + 1,
      },
    });
  } catch (error) {
    console.error('Error creating stat:', error);
  }
};
