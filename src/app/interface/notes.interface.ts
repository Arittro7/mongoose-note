export interface INote{
  title: string,
  content: string,
  category: "personal" | "work" | "study" | "other"
  pinned: boolean,
}