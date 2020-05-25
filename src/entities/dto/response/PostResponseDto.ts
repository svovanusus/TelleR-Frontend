import UserResponseDto from './UserResponseDto';

interface PostResponseDto {
  id: number,
  title: string,
  description: string,
  content: string,
  author: UserResponseDto,
  publishDate: Date,
  updateDate: Date,
}

export default PostResponseDto;
