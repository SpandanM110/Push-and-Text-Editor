import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;

    const editorStyle = {
      border: "1px solid #ccc", // Example border style
      padding: "10px",         // Example top and bottom padding
      paddingLeft: "20px",     // Example left padding
      paddingRight: "20px",    // Example right padding
      borderRadius: "5px",     // Example border radius
    };

    return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          style={editorStyle}  // Apply the inline styles here
        />
      </div>
    );
  }
}
