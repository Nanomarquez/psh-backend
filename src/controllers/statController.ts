import { prisma } from '../bootstrap';
import { Get, Route, Tags, Response, Example } from "tsoa";
import { getChangeCount } from '../utils';

interface TopScoresResponse {
  totalCount: number;
  count: number;
  stats: Array<{
    id: string;
    score: number;
    // Otros campos que pueda tener el objeto stat
  }>;
  changeCount: number;
  repeatedIds: string[];
}

let previousTopScoreIds: string[] = [];

@Route("/api/top")
@Tags('Get Top Scores')
export default class StatController {
    /**
   * Get the highest scores
   * @returns List of high scores along with total count and changes
   **/
  @Get()
  @Response<TopScoresResponse>(200, "Success")
  @Example<TopScoresResponse>({
    totalCount: 100,
    count: 10,
    stats: [
      { id: "1", score: 95 },
      { id: "2", score: 92 },
      // Otros ejemplos de objetos stat
    ],
    changeCount: 2,
    repeatedIds: ["1", "3"]
  })
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