'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'


import js from 'highlight.js/lib/languages/javascript'


import 'highlight.js/styles/tokyo-night-dark.css'
import { all, createLowlight } from 'lowlight'



const lowlight = createLowlight(all)

lowlight.register('js', js)
interface initialContend{
    
    content: string;
}


export const Editor_post = ( { content}:initialContend ) => {

  const editor = useEditor({
    extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        CodeBlockLowlight.configure({
        lowlight,
        })
    ],
    onUpdate: ({ editor }) => {
        const html = editor.getHTML()
      
        if(html){
            // salvar o html em algum lugar ou enviar para um servidor
            
        }
    },
    content: content,
    immediatelyRender: false,
    editorProps:{
        attributes: {
            class: "outline-none"

        }
    }
  })

  return(
    <>
      <EditorContent editor={editor} 
      className='prose prose-stone
      
      max-w-full border-none' /></>
  )
 
}
