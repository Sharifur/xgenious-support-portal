import { cn } from "@/lib/utils";
import "../assets/css/tiptap.css";


import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { ArrowLeftToLine, Bold, Braces, Code, Eraser, GitCommitHorizontal, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Italic, List, ListIcon, ListOrdered, Pilcrow, Quote, Redo2, Strikethrough, Undo2, X } from "lucide-react";
import React from 'react';
import { Space } from "antd";

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return ( 
    <div className="flex flex-row gap-2 mb-4 border-b border-gray-500 flex-wrap" >
        <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={cn(
            "border border-gray-500 rounded-sm text-center p-2",
        editor.isActive('bold') ? 'is-active' : ''
        )}
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={cn(
            "border border-gray-500 rounded-sm text-center p-2",
        editor.isActive('italic') ? 'is-active' : ''
        )}
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('strike') ? 'is-active' : ''
      )}
      >
        <Strikethrough className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('code') ? 'is-active' : ''
      )}
      >
        <Code className="w-4 h-4" />
      </button>
      <button className="border border-gray-500 rounded-sm text-center p-2" onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <Eraser className="w-4 h-4" />
      </button>
      <button className="border border-gray-500 rounded-sm text-center p-2" onClick={() => editor.chain().focus().clearNodes().run()}>
      <X className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <Pilcrow className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('heading',{ level: 1 }) ? 'is-active' : ''
      )}
      >
        <Heading1 className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('heading',{ level: 2 }) ? 'is-active' : ''
      )}
      >
        <Heading2 className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('heading',{ level: 3 }) ? 'is-active' : ''
      )}
      >
        <Heading3 className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('heading',{ level: 4 }) ? 'is-active' : ''
      )}
      >
         <Heading4  className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('heading',{ level: 5 }) ? 'is-active' : ''
      )}
      >
        <Heading5 className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('heading',{ level: 6 }) ? 'is-active' : ''
      )}
      >
        <Heading6 className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('bulletList') ? 'is-active' : ''
      )}
      >
       <ListIcon className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('orderedList') ? 'is-active' : ''
      )}
      >
       <ListOrdered className="w-4 h-4"  />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('codeBlock') ? 'is-active' : ''
      )}
      >
        <Braces  className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('blockquote') ? 'is-active' : ''
      )}
      >
        <Quote  className="w-4 h-4"/>
      </button>
      <button className="border border-gray-500 rounded-sm text-center p-2"
      onClick={() => editor.chain().focus().setHorizontalRule().run()}>
      <GitCommitHorizontal  className="w-4 h-4" />
      </button>
      <button
      className="border border-gray-500 rounded-sm text-center p-2"
      onClick={() => editor.chain().focus().setHardBreak().run()}>
      <ArrowLeftToLine  className="w-4 h-4" />
      </button>
      <button
      className="border border-gray-500 rounded-sm text-center p-2"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <Undo2 className="w-4 h-4" />
      </button>
      <button
        className="border border-gray-500 rounded-sm text-center p-2"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <Redo2 className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={cn(
          "border border-gray-500 rounded-sm text-center p-2",
          editor.isActive('textStyle',{ color: '#958DF1' }) ? 'is-active' : ''
      )}
      >
        purple
      </button>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`

const Tiptap = () => {
  return (
    <div className="border border-gray-500">
      <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
    </div>
  )
}

export default Tiptap;