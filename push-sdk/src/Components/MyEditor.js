import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Function to upload image to Imgur
const uploadImageCallBack = (file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgur.com/3/image');
    xhr.setRequestHeader('Authorization', 'Client-ID d3c2e79933f4798'); // Replace 'XXXXX' with your actual Imgur client ID
    const data = new FormData();
    data.append('image', file);
    
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      } else {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      }
    };

    xhr.onerror = () => {
      reject(new Error('Image upload failed due to a network error.'));
    };

    xhr.send(data);
  });
};

const MyEditor = () => {
  return (
    <Editor
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
      }}
    />
  );
};

export default MyEditor;
