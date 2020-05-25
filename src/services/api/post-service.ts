import Axios from 'axios';
import Config from '@/config';
import PostResponseDto from '@/entities/dto/response/PostResponseDto';

const POST_CONTROLLER_PATH = 'posts';

export default class PostService {
  static getForBlog(blogId: number) {
    return Axios.get<PostResponseDto[]>(`${Config.BASE_API_URL}/${POST_CONTROLLER_PATH}/getPublishedForBlog`, {
      params: {
        blogId,
      },
    });
  }

  static getById(postId: number) {
    return Axios.get<PostResponseDto>(`${Config.BASE_API_URL}/${POST_CONTROLLER_PATH}/byId`, {
      params: {
        postId,
      },
    });
  }
}
