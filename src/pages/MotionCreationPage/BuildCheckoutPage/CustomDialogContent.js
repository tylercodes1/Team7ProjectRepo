import React, { useState, useEffect } from "react";
import { useDialog } from "react-st-modal";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import "./BuildCheckoutPage.css";

export default function CustomDialogContent(props) {
  const [completed, setCompleted] = useState(0);

  // TO BE ASYNC
  function handleApiCall() {
    for (let i = 0; i < 3; i++) {
      try {
        switch (completed) {
          case 0:
            // apicall1 await
            console.log("here1");
            break;
          case 1:
            // apicall2 await
            console.log("here2");
            break;
          case 2:
            // apicall3 await
            console.log("here3");
            break;
        }
        setCompleted(completed + 1);
      } catch (e) {
        console.log("one Api call failed");
      }
    }
  }

  useEffect(() => {
    handleApiCall();
  }, []);

  const dialog = useDialog();
  return (
    <div className="custom-dialog-content">
      {buildApiCalls(completed)}
      <button
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close("asdf");
        }}
      >
        cancel API call?
      </button>
    </div>
  );
}

function buildApiCalls(completed) {
  return (
    <div>
      {completed >= 0 && (
        <div className="api-validation">
          <UseAnimations animation={loading} /> <p>something</p>
        </div>
      )}
      {completed >= 1 && (
        <div className="api-validation">
          <UseAnimations animation={loading} /> <p>something</p>
        </div>
      )}
      {completed >= 2 && (
        <div className="api-validation">
          <UseAnimations animation={loading} /> <p>something</p>
        </div>
      )}
    </div>
  );
}
