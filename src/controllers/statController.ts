import { prisma } from '../bootstrap';
import { Get, Route, Tags } from "tsoa";

@Route("/api/top")
@Tags('Get Top Scores')
export default class StatController {
  @Get()
  public async getTopScores(): Promise<any> {
    try {
      console.log('getTopScores');	

      const totalCount = await prisma.stat.count();

      const topScores = await prisma.stat.findMany({
        orderBy: {
          score: 'desc',
        },
        take: 10,
      });
      return {
        totalCount,
        count: topScores.length,
        stats: topScores
      };
    } catch (error : any) {
      throw Error(error.message)
    }
  }
}