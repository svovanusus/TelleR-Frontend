import UserResponseDto from './UserResponseDto';

interface BlogResponseDto {
  id: number,
  title: string,
  author: UserResponseDto,
  postsCount: number,
}

export default BlogResponseDto;
