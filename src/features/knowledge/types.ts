export interface Note {
  id: string;
  resourceId: string;
  content: string;
  createdAt: string;
}

export interface Collection {
  id: string;
  name: string;
  resourceIds: string[];
}
