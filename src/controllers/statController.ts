import { prisma } from '../bootstrap';
import { Get, Route, Tags } from "tsoa";
import { getChangeCount } from '../utils';

let previousTopScoreIds: string[] = [];

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

      const currentTopScoreIds = topScores.map((stat) => stat.id.toString());

      const { changeCount, repeatedIds } = getChangeCount(previousTopScoreIds, currentTopScoreIds);

      previousTopScoreIds = currentTopScoreIds;

      return {
        totalCount,
        count: topScores.length,
        stats: topScores,
        changeCount,
        repeatedIds
      };
    } catch (error : any) {
      throw Error(error.message)
    }
  }
}