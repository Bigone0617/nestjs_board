import { BoardStatus } from '../board-status.enum';

export class UpdateBoardDto {
  title?: string;
  description?: string;
  status?: BoardStatus;
}
