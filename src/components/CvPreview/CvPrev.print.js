import * as React from "react";
import ReactToPrint from "react-to-print";
import CvPrev from "./CvPrev";

export class PrintCv extends React.Component {
  componentRef = null;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      text: "old boring text",
    };
  }

  handleAfterPrint = () => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  };

  handleBeforePrint = () => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  };

  handleOnBeforeGetContent = () => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    this.setState({ text: "Loading new text...", isLoading: true });

    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState(
          { text: "New, Updated Text!", isLoading: false },
          resolve
        );
      }, 2000);
    });
  };

  setComponentRef = (ref) => {
    this.componentRef = ref;
  };

  reactToPrintContent = () => {
    return this.componentRef;
  };

  reactToPrintTrigger = () => {
    return <button className="print">PRINT CV</button>;
  };

  render() {
    return (
      <>
        <CvPrev ref={this.setComponentRef} text={this.state.text} />
        <ReactToPrint
          content={this.reactToPrintContent}
          documentTitle="Cv"
          onAfterPrint={this.handleAfterPrint}
          onBeforeGetContent={this.handleOnBeforeGetContent}
          onBeforePrint={this.handleBeforePrint}
          removeAfterPrint
          trigger={this.reactToPrintTrigger}
        />
      </>
    );
  }
}
