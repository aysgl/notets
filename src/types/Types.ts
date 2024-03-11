export type Tag = {
    label: string;
    value: string;
    color: string;
  };
  
  export type NoteData = {
    title: string;
    markdown: string;
    tags: Tag[];
  };
  
  export type Note = {
    id: string;
  } & NoteData;
  
  export type CreateProps = {
    aTags: Tag[];
    onClick: (noteData: NoteData) => void;
    createTag: (tag: Tag) => void;
  } & Partial<NoteData>;
  
  export type Color = {
    value: string;
    label: string;
    color: string;
    data?: Tag[];
  };
  
  export type SelectPropsTags = {
    aTags: Tag[];
    createTag: (tag: Tag) => void;
    selected: Tag[];
    setSelected: (tag: Tag[]) => void;
    onCreateOption: boolean
  };

export type MainPage = {
    aTags: Tag[];
    notes: Note[];
    createTag: (tag: Tag) => void;
}

export type DetailProps = {
  deleteNote: (id:string) => void;
}

export type EditProps = {
  aTags: Tag[];
  createTag: (tag: Tag) => void;
  updateNote: (id:string, updatedData:NoteData) => void;
}