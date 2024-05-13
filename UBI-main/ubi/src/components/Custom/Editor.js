import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";

export function Editor({ id, name, value, setQuill }) {
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],

            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],

            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link'/*, 'image', 'video'*/],
            [{ color: [] }, { background: [] }],

            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
    };
    const { quill, quillRef } = useQuill({ modules });
    const [quillValue, setQuillValue] = useState('');


    useEffect(() => {
        if (quill) {
            if (setQuill) setQuill(quill);
            value = value ? value.replaceAll("\n", "").replaceAll("\r", "") : '';
            if (value) {
                quill.pasteHTML(value);
                setQuillValue(value);
            }
        }

        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                setQuillValue(quill.root.innerHTML);
                // console.log('Text change!');
                // console.log(quill.getText()); // Get text only
                // console.log(quill.getContents()); // Get delta contents
                // console.log(quill.root.innerHTML); // Get innerHTML using quill
                // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
            });
        }
    }, [quill, value]);


    return (
        <div>
            <div>
                <div style={{ height: "90%" }} ref={quillRef} />
            </div>
            <textarea name={name} defaultValue={quillValue} className="d-none" id={id}></textarea>

            {/* <div className="ql-editor" dangerouslySetInnerHTML={{ __html: quillValue }}></div> */}
        </div>
    );
}