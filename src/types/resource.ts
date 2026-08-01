export type ResourceType = "video" | "book" | "pdf" | "article" | "image";

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  category: string;
  url: string;
  description?: string;
  tags: string[];
  favorite?: boolean;
}
