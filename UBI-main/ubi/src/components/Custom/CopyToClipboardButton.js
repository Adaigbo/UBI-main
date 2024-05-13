import React, { Fragment, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Editor } from './Editor';

const CopyToClipboardButton = ({ content, buttonText, variant, size, className, quill }) => {

  const [quillReference, setQuillReference] = useState(null);

  useEffect(() => {
    if(quillReference) {
      quillReference.clipboard.dangerouslyPasteHTML(content)
    }
  }, []);

  const copyToClipboard = () => {
    quillReference.setSelection(0, quillReference.getLength());
    document.execCommand("copy");

    // navigator.clipboard.writeText(content)
    //   .then(() => {
    //     console.log('Text copied to clipboard');
    //   })
    //   .catch((error) => {
    //     console.error('Error copying text to clipboard:', error);
    //   });
  };

  return (
    <Fragment>
      <div className='absolute-off-screen'>
        <Editor setQuill={setQuillReference} value={content}></Editor>
      </div>

      <Button variant={variant}
        type="button"
        className={className}
        size={size}
        onClick={copyToClipboard}>{buttonText}</Button>
    </Fragment>
  );
};

export default CopyToClipboardButton;