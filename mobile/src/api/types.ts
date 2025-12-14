export type ApiImage = {
  id: number;
  name: string;
  width: number;
  height: number;
  url: string;
};

export type CategoryDto = {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: ApiImage;
};

export type GetCategoriesResponse = {
  data: CategoryDto[];
  meta: unknown;
};

export type QuestionDto = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};
