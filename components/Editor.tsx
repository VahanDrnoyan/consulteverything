import React, { Dispatch, SetStateAction } from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";
import { Maybe } from '../generated/graphql-frontend';
import { Value } from 'react-quill';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})
type Props = {
    setValue: Dispatch<SetStateAction<string>>;
    placeholder: string,
    value: Value
}
const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
  ]
const Editor: React.FC<Props> = ({setValue, placeholder, value})=> {
    return (
    <QuillNoSSRWrapper value={value} modules={modules} id="long_description"  formats={formats} placeholder={placeholder}theme="snow" onChange={setValue}/>
    )
}
export default Editor