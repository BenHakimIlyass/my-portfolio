import React, { Component } from "react";
import styled, { keyframes } from "@xstyled/styled-components";
import { Text } from "./";
export default class ReactEmbedGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "",
      content: "",
    };

    this.handleNetworkErrors = this.handleNetworkErrors.bind(this);
  }

  componentDidMount() {
    this.getGist();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gist !== this.props.gist) this.getGist();
  }

  async getGist() {
    const { gist, file } = this.props,
      id = gist.split("/")[1];

    if (!id) return this.setState({ loading: false, error: `${gist} is not valid format` });

    await this.setState({ loading: true });
    this.setupCallback(id);

    const script = document.createElement("script");
    let url = `https://gist.github.com/${gist}.json?callback=gist_callback_${id}`;
    if (file) url += `&file=${file}`;
    script.type = "text/javascript";
    script.src = url;
    script.onerror = (e) => this.handleNetworkErrors(e);
    document.head.appendChild(script);
  }

  handleNetworkErrors(e) {
    this.setState({
      loading: false,
      error: `${this.props.gist} failed to load`,
    });
  }

  setupCallback(id) {
    window[`gist_callback_${id}`] = function (gist) {
      const nextState = { loading: false, error: gist.error || null };

      if (!nextState.error) {
        nextState.title = gist.description;
        nextState.content = `${gist.div.replace(/href=/g, 'target="_blank" href=')}`;
      }

      this.setState(nextState);

      if (document.head.innerHTML.indexOf(gist.stylesheet) === -1) {
        let stylesheet = document.createElement("link");
        stylesheet.type = "text/css";
        stylesheet.rel = "stylesheet";
        stylesheet.href = gist.stylesheet;
        document.head.appendChild(stylesheet);
      }
    }.bind(this);
  }

  render() {
    if (this.state.loading) {
      return <Placeholder />;
    } else if (this.state.error) {
      return (
        <Error>
          <Text color="#fff !important" textAlign="center">
            This code block might not be available, please refresh this page and try again.
          </Text>
        </Error>
      );
    } else {
      return <div style={this.props.style} dangerouslySetInnerHTML={{ __html: this.state.content }} />;
    }
  }
}
const loadContent = keyframes`
from{
  background-color: gray;
}
to{
  background-color: selection;
}
`;
const Placeholder = styled.div`
  border-radius: 8px;
  animation: ${loadContent} 2s infinite alternate none running;
  min-height: 300px;
`;
const Error = styled.div`
  border-radius: 8px;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: error;
  min-height: 300px;
`;
