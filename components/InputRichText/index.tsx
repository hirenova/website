import { useState } from "react"
import { BaseEditor, Descendant, createEditor } from "slate"
import { Editable, ReactEditor, Slate, withReact } from "slate-react"

type CustomElement = { type: "paragraph"; children: CustomText[] }
type CustomText = { text: string }

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const InputRichText = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const [value, setValue] = useState<Descendant[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ])

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable />
    </Slate>
  )
}

export default InputRichText

// import "draft-js/dist/Draft.css";

// import { Editor, EditorProps, EditorState } from "draft-js";
// import { useState } from "react";
// import styled from "styled-components";

// const Wrapper = styled(Editor)``;

// interface InputRichTextProps extends EditorProps {}

// const InputRichText = ({ ...props }: InputRichTextProps) => {
//   return <Editor {...props} />;
// };

// export default InputRichText;
