import Axios from 'axios';
import Config from '@/config';
import BlogResponseDto from '@/entities/dto/response/BlogResponseDto';
import BlogInfoResponseDto from '@/entities/dto/response/BlogInfoResponseDto';

const BLOG_CONTROLLER_PATH = 'blogs';

export default class BlogService {
  static get(blogId: number) {
    return Axios.get<BlogResponseDto>(`${Config.BASE_API_URL}/${BLOG_CONTROLLER_PATH}/byId`, {
      params: {
        blogId,
      },
    });
  }

  static getByName(blogName: string) {
    return Axios.get<BlogResponseDto>(`${Config.BASE_API_URL}/${BLOG_CONTROLLER_PATH}/byName`, {
      params: {
        blogName,
      },
    });
  }

  static getBlogInfo(blogId: number) {
    return Axios.get<BlogInfoResponseDto>(`${Config.BASE_API_URL}/${BLOG_CONTROLLER_PATH}/getInfo`, {
      params: {
        blogId,
      },
    });
  }
}
